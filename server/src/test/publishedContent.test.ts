import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';
import { createApp } from '../app.js';
import { db, pool } from '../db/client.js';
import { adminUsers, destinations } from '../db/schema.js';
import { hashPassword } from '../lib/auth.js';

const app = createApp();
const TEST_ADMIN_EMAIL = 'ci-content-admin@example.com';
const TEST_ADMIN_PASSWORD = 'Test-only-password-42!';

/**
 * Regression tests for draft/publish visibility. These run against a synthetic
 * administrator so CI exercises the real authenticated content-writing path
 * without depending on a shared seed password or contributor secrets.
 */
describe('Draft/publish content filtering', () => {
  const createdIds: string[] = [];
  let sessionCookie: string;

  beforeAll(async () => {
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    await db.insert(adminUsers).values({
      email: TEST_ADMIN_EMAIL,
      passwordHash: await hashPassword(TEST_ADMIN_PASSWORD),
      name: 'CI Content Administrator',
    });

    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: TEST_ADMIN_EMAIL, password: TEST_ADMIN_PASSWORD });

    expect(loginRes.status).toBe(200);
    sessionCookie = loginRes.headers['set-cookie'];
  });

  afterAll(async () => {
    for (const id of createdIds) {
      await db.delete(destinations).where(eq(destinations.id, id));
    }
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    await pool.end();
  });

  const draftPayload = {
    name: 'Regression Test Draft Destination',
    slug: 'regression-test-draft-destination',
    country: 'Kenya',
    subtitle: 'Test subtitle',
    description: 'Test description',
    heroImage: '',
    gallery: [],
    bestTimeToVisit: 'Year-round',
    wildlife: [],
    activities: [],
    recommendedDuration: '2-3 days',
    thingsToDo: [],
    whereToStay: 'TBD',
    featured: false,
    faqs: [],
    seo: { title: 'Test', description: 'Test' },
    published: false,
  };

  it('requires authentication for admin destination writes', async () => {
    const res = await request(app).post('/api/admin/destinations').send(draftPayload);
    expect(res.status).toBe(401);
  });

  it('accepts a draft with an empty heroImage', async () => {
    const res = await request(app)
      .post('/api/admin/destinations')
      .set('Cookie', sessionCookie)
      .send(draftPayload);

    expect(res.status).toBe(201);
    expect(res.body.published).toBe(false);
    createdIds.push(res.body.id);
  });

  it('excludes an unpublished destination from public list and detail endpoints', async () => {
    const createRes = await request(app)
      .post('/api/admin/destinations')
      .set('Cookie', sessionCookie)
      .send({ ...draftPayload, slug: 'regression-test-draft-2', name: 'Regression Test Draft 2' });
    expect(createRes.status).toBe(201);
    createdIds.push(createRes.body.id);

    const listRes = await request(app).get('/api/destinations');
    expect(listRes.status).toBe(200);
    expect(listRes.body.some((d: { id: string }) => d.id === createRes.body.id)).toBe(false);

    const singleRes = await request(app).get('/api/destinations/regression-test-draft-2');
    expect(singleRes.status).toBe(404);
  });

  it('includes unpublished destinations in the authenticated admin list', async () => {
    const createRes = await request(app)
      .post('/api/admin/destinations')
      .set('Cookie', sessionCookie)
      .send({ ...draftPayload, slug: 'regression-test-draft-3', name: 'Regression Test Draft 3' });
    expect(createRes.status).toBe(201);
    createdIds.push(createRes.body.id);

    const adminListRes = await request(app)
      .get('/api/admin/destinations')
      .set('Cookie', sessionCookie);

    expect(adminListRes.status).toBe(200);
    expect(adminListRes.body.some((d: { id: string }) => d.id === createRes.body.id)).toBe(true);
  });

  it('publishing a draft makes it visible publicly', async () => {
    const createRes = await request(app)
      .post('/api/admin/destinations')
      .set('Cookie', sessionCookie)
      .send({ ...draftPayload, slug: 'regression-test-draft-4', name: 'Regression Test Draft 4' });
    expect(createRes.status).toBe(201);
    createdIds.push(createRes.body.id);

    let publicRes = await request(app).get('/api/destinations/regression-test-draft-4');
    expect(publicRes.status).toBe(404);

    const publishRes = await request(app)
      .put(`/api/admin/destinations/${createRes.body.id}`)
      .set('Cookie', sessionCookie)
      .send({ published: true });

    expect(publishRes.status).toBe(200);
    expect(publishRes.body.published).toBe(true);

    publicRes = await request(app).get('/api/destinations/regression-test-draft-4');
    expect(publicRes.status).toBe(200);
    expect(publicRes.body.name).toBe('Regression Test Draft 4');
  });

  it('returns 404 when updating or deleting a missing destination', async () => {
    const updateRes = await request(app)
      .put('/api/admin/destinations/id_does_not_exist')
      .set('Cookie', sessionCookie)
      .send({ published: true });
    expect(updateRes.status).toBe(404);

    const deleteRes = await request(app)
      .delete('/api/admin/destinations/id_does_not_exist')
      .set('Cookie', sessionCookie);
    expect(deleteRes.status).toBe(404);
  });
});
