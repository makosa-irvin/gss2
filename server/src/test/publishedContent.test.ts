import { describe, it, expect, afterAll } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';
import { createApp } from '../app.js';
import { db, pool } from '../db/client.js';
import { destinations } from '../db/schema.js';

const app = createApp();

const SEED_ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL || 'admin@goodsecretssafaris.com';
const SEED_ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD;

/**
 * Regression tests for the draft/publish feature added on
 * phase/seo-migration. None of the new admin content routes
 * (destinations/blog/testimonials) or the `published` filtering on
 * public reads had any test coverage before this file - which is very
 * likely why a real bug shipped undetected: the two hand-written
 * migrations that add the `published`/lifecycle columns were never
 * registered in migrations/meta/_journal.json, so `npm run db:migrate`
 * silently did nothing for them and every admin content write failed
 * with a Postgres 42703 (undefined_column) error. Fixed by adding the
 * missing journal entries; this suite exists so that kind of gap
 * doesn't ship silently again.
 */
describe.runIf(!!SEED_ADMIN_PASSWORD)('Draft/publish content filtering', () => {
  const createdIds: string[] = [];

  afterAll(async () => {
    for (const id of createdIds) {
      await db.delete(destinations).where(eq(destinations.id, id));
    }
    await pool.end();
  });

  async function loginAsAdmin() {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: SEED_ADMIN_EMAIL, password: SEED_ADMIN_PASSWORD });
    return res.headers['set-cookie'];
  }

  const draftPayload = {
    name: 'Regression Test Draft Destination',
    slug: 'regression-test-draft-destination',
    country: 'Kenya',
    subtitle: 'Test subtitle',
    description: 'Test description',
    heroImage: '', // drafts are allowed to be missing imagery - this is
    // exactly the field whose validation (heroImage: z.string().min(1))
    // previously rejected every draft created through the admin UI's
    // quick-create form, which always sends an empty string here.
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

  it('accepts a draft with an empty heroImage (admin quick-create UI always sends one)', async () => {
    const cookie = await loginAsAdmin();
    const res = await request(app)
      .post('/api/admin/destinations')
      .set('Cookie', cookie)
      .send(draftPayload);

    expect(res.status).toBe(201);
    createdIds.push(res.body.id);
  });

  it('excludes an unpublished destination from the public list and single-item endpoints', async () => {
    const cookie = await loginAsAdmin();
    const createRes = await request(app)
      .post('/api/admin/destinations')
      .set('Cookie', cookie)
      .send({ ...draftPayload, slug: 'regression-test-draft-2', name: 'Regression Test Draft 2' });
    createdIds.push(createRes.body.id);

    const listRes = await request(app).get('/api/destinations');
    expect(listRes.body.some((d: { id: string }) => d.id === createRes.body.id)).toBe(false);

    const singleRes = await request(app).get('/api/destinations/regression-test-draft-2');
    expect(singleRes.status).toBe(404);
  });

  it('includes the same unpublished destination in the admin list (admins see drafts)', async () => {
    const cookie = await loginAsAdmin();
    const createRes = await request(app)
      .post('/api/admin/destinations')
      .set('Cookie', cookie)
      .send({ ...draftPayload, slug: 'regression-test-draft-3', name: 'Regression Test Draft 3' });
    createdIds.push(createRes.body.id);

    const adminListRes = await request(app).get('/api/admin/destinations').set('Cookie', cookie);
    expect(adminListRes.body.some((d: { id: string }) => d.id === createRes.body.id)).toBe(true);
  });

  it('publishing a draft makes it visible on the public endpoint', async () => {
    const cookie = await loginAsAdmin();
    const createRes = await request(app)
      .post('/api/admin/destinations')
      .set('Cookie', cookie)
      .send({ ...draftPayload, slug: 'regression-test-draft-4', name: 'Regression Test Draft 4' });
    createdIds.push(createRes.body.id);

    let publicRes = await request(app).get('/api/destinations/regression-test-draft-4');
    expect(publicRes.status).toBe(404);

    await request(app)
      .put(`/api/admin/destinations/${createRes.body.id}`)
      .set('Cookie', cookie)
      .send({ published: true });

    publicRes = await request(app).get('/api/destinations/regression-test-draft-4');
    expect(publicRes.status).toBe(200);
    expect(publicRes.body.name).toBe('Regression Test Draft 4');
  });
});
