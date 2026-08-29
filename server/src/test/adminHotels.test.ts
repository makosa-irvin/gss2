import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';
import { createApp } from '../app.js';
import { db, pool } from '../db/client.js';
import { adminUsers, hotels } from '../db/schema.js';
import { hashPassword } from '../lib/auth.js';

const app = createApp();
const TEST_ADMIN_EMAIL = 'ci-hotels-admin@example.com';
const TEST_ADMIN_PASSWORD = 'Test-only-password-42!';

const basePayload = {
  name: 'CI Regression Lodge',
  slug: 'ci-regression-lodge',
  location: 'Masai Mara',
  country: 'Kenya',
  description: 'Synthetic hotel used only by automated integration tests.',
  category: 'Luxury Safari Lodge',
  images: [],
  priceFromUSD: 450,
  priceFromKES: 58500,
  soloPriceUSD: 600,
  sharingPriceUSD: 450,
  seasonalPricing: [],
  facilities: ['Wi-Fi'],
  roomTypes: ['Suite'],
  inclusions: ['Full board'],
  exclusions: ['Flights'],
  isFamilyFriendly: true,
  isHoneymoonFriendly: true,
  isSeniorFriendly: true,
  isKenyanResidentOffer: false,
  bookingLink: null,
  rating: 4.8,
  seo: {
    title: 'CI Regression Lodge',
    description: 'Synthetic hotel record for integration testing.',
  },
  published: false,
};

describe('Authenticated hotel content lifecycle', () => {
  const createdIds: string[] = [];
  let sessionCookie: string;

  beforeAll(async () => {
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    await db.delete(hotels).where(eq(hotels.slug, basePayload.slug));
    await db.delete(hotels).where(eq(hotels.slug, 'ci-regression-lodge-duplicate'));

    await db.insert(adminUsers).values({
      email: TEST_ADMIN_EMAIL,
      passwordHash: await hashPassword(TEST_ADMIN_PASSWORD),
      name: 'CI Hotels Administrator',
    });

    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: TEST_ADMIN_EMAIL, password: TEST_ADMIN_PASSWORD });

    expect(loginRes.status).toBe(200);
    sessionCookie = loginRes.headers['set-cookie'];
  });

  afterAll(async () => {
    for (const id of createdIds) {
      await db.delete(hotels).where(eq(hotels.id, id));
    }
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    await pool.end();
  });

  it('rejects unauthenticated hotel writes', async () => {
    const res = await request(app).post('/api/admin/hotels').send(basePayload);
    expect(res.status).toBe(401);
  });

  it('validates required hotel fields before writing', async () => {
    const res = await request(app)
      .post('/api/admin/hotels')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: 'Invalid Slug', priceFromUSD: -1 });

    expect(res.status).toBe(400);
  });

  it('creates a draft that remains private but appears in the admin list', async () => {
    const createRes = await request(app)
      .post('/api/admin/hotels')
      .set('Cookie', sessionCookie)
      .send(basePayload);

    expect(createRes.status).toBe(201);
    expect(createRes.body.published).toBe(false);
    createdIds.push(createRes.body.id);

    const publicListRes = await request(app).get('/api/hotels');
    expect(publicListRes.status).toBe(200);
    expect(publicListRes.body.some((hotel: { id: string }) => hotel.id === createRes.body.id)).toBe(false);

    const publicDetailRes = await request(app).get(`/api/hotels/${basePayload.slug}`);
    expect(publicDetailRes.status).toBe(404);

    const adminListRes = await request(app)
      .get('/api/admin/hotels')
      .set('Cookie', sessionCookie);
    expect(adminListRes.status).toBe(200);
    expect(adminListRes.body.some((hotel: { id: string }) => hotel.id === createRes.body.id)).toBe(true);
  });

  it('rejects duplicate slugs on create', async () => {
    const firstRes = await request(app)
      .post('/api/admin/hotels')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: 'ci-regression-lodge-duplicate', name: 'CI Duplicate Source' });
    expect(firstRes.status).toBe(201);
    createdIds.push(firstRes.body.id);

    const duplicateRes = await request(app)
      .post('/api/admin/hotels')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: 'ci-regression-lodge-duplicate', name: 'CI Duplicate Attempt' });

    expect(duplicateRes.status).toBe(409);
  });

  it('publishes and updates a draft through the authenticated route', async () => {
    const createRes = await request(app)
      .post('/api/admin/hotels')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: 'ci-regression-lodge-publish', name: 'CI Publish Lodge' });
    expect(createRes.status).toBe(201);
    createdIds.push(createRes.body.id);

    const updateRes = await request(app)
      .put(`/api/admin/hotels/${createRes.body.id}`)
      .set('Cookie', sessionCookie)
      .send({ published: true, rating: 4.9 });

    expect(updateRes.status).toBe(200);
    expect(updateRes.body.published).toBe(true);
    expect(updateRes.body.rating).toBe(4.9);

    const publicDetailRes = await request(app).get('/api/hotels/ci-regression-lodge-publish');
    expect(publicDetailRes.status).toBe(200);
    expect(publicDetailRes.body.id).toBe(createRes.body.id);
  });

  it('rejects an update that would collide with another hotel slug', async () => {
    const sourceRes = await request(app)
      .post('/api/admin/hotels')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: 'ci-regression-lodge-source', name: 'CI Source Lodge' });
    expect(sourceRes.status).toBe(201);
    createdIds.push(sourceRes.body.id);

    const targetRes = await request(app)
      .post('/api/admin/hotels')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: 'ci-regression-lodge-target', name: 'CI Target Lodge' });
    expect(targetRes.status).toBe(201);
    createdIds.push(targetRes.body.id);

    const collisionRes = await request(app)
      .put(`/api/admin/hotels/${targetRes.body.id}`)
      .set('Cookie', sessionCookie)
      .send({ slug: 'ci-regression-lodge-source' });

    expect(collisionRes.status).toBe(409);
  });

  it('returns 404 for missing hotel updates/deletes and deletes an existing hotel', async () => {
    const missingUpdate = await request(app)
      .put('/api/admin/hotels/id_missing_hotel')
      .set('Cookie', sessionCookie)
      .send({ published: true });
    expect(missingUpdate.status).toBe(404);

    const missingDelete = await request(app)
      .delete('/api/admin/hotels/id_missing_hotel')
      .set('Cookie', sessionCookie);
    expect(missingDelete.status).toBe(404);

    const createRes = await request(app)
      .post('/api/admin/hotels')
      .set('Cookie', sessionCookie)
      .send({ ...basePayload, slug: 'ci-regression-lodge-delete', name: 'CI Delete Lodge' });
    expect(createRes.status).toBe(201);

    const deleteRes = await request(app)
      .delete(`/api/admin/hotels/${createRes.body.id}`)
      .set('Cookie', sessionCookie);
    expect(deleteRes.status).toBe(204);

    const deletedRow = await db.select().from(hotels).where(eq(hotels.id, createRes.body.id));
    expect(deletedRow).toHaveLength(0);
  });
});
