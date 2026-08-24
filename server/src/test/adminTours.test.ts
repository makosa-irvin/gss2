import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';
import { createApp } from '../app.js';
import { db, pool } from '../db/client.js';
import { tours } from '../db/schema.js';

const app = createApp();

const SEED_ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL || 'admin@goodsecretssafaris.com';
const SEED_ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD;

const validTourPayload = {
  title: 'Automated Test Tour',
  slug: 'automated-test-tour-do-not-keep',
  shortDescription: 'Created by an automated test.',
  fullDescription: 'This tour is created and deleted by the backend test suite.',
  country: 'Kenya',
  destinations: ['Nairobi'],
  durationDays: 1,
  durationLabel: '1 Day',
  startingLocation: 'Nairobi',
  endingLocation: 'Nairobi',
  comfortLevel: 'Midrange',
  priceFrom: 100,
  currency: 'USD',
  soloPrice: 120,
  sharingPrice: 100,
  accommodationSummary: 'N/A',
  mealsSummary: 'N/A',
  childrenPolicy: 'N/A',
  startingDates: 'N/A',
  seo: { title: 'Automated Test Tour', description: 'Test' },
};

describe.runIf(!!SEED_ADMIN_PASSWORD)('Admin tour management', () => {
  let sessionCookie: string;
  let createdTourId: string;

  beforeAll(async () => {
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: SEED_ADMIN_EMAIL, password: SEED_ADMIN_PASSWORD });
    sessionCookie = loginRes.headers['set-cookie'];
  });

  afterAll(async () => {
    if (createdTourId) {
      await db.delete(tours).where(eq(tours.id, createdTourId));
    }
    await pool.end();
  });

  it('refuses to create a tour without an admin session', async () => {
    const res = await request(app).post('/api/admin/tours').send(validTourPayload);
    expect(res.status).toBe(401);
  });

  it('refuses to create a tour with invalid data even when authenticated', async () => {
    const res = await request(app)
      .post('/api/admin/tours')
      .set('Cookie', sessionCookie)
      .send({ title: 'Missing everything else' });
    expect(res.status).toBe(400);
  });

  it('creates a tour, and it is immediately visible on the public read endpoint', async () => {
    const createRes = await request(app)
      .post('/api/admin/tours')
      .set('Cookie', sessionCookie)
      .send(validTourPayload);

    expect(createRes.status).toBe(201);
    expect(createRes.body.slug).toBe(validTourPayload.slug);
    createdTourId = createRes.body.id;

    // This is the exact gap the whole backend exists to fix: prove an
    // admin-created record is visible through the *public*, unauthenticated
    // endpoint - i.e. to every visitor, not just the admin's own browser.
    const publicRes = await request(app).get(`/api/tours/${validTourPayload.slug}`);
    expect(publicRes.status).toBe(200);
    expect(publicRes.body.title).toBe(validTourPayload.title);
  });

  it('rejects creating a second tour with the same slug', async () => {
    const res = await request(app)
      .post('/api/admin/tours')
      .set('Cookie', sessionCookie)
      .send(validTourPayload);
    expect(res.status).toBe(409);
  });

  it('updates the tour', async () => {
    const res = await request(app)
      .put(`/api/admin/tours/${createdTourId}`)
      .set('Cookie', sessionCookie)
      .send({ title: 'Automated Test Tour (Updated)' });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Automated Test Tour (Updated)');

    const publicRes = await request(app).get(`/api/tours/${validTourPayload.slug}`);
    expect(publicRes.body.title).toBe('Automated Test Tour (Updated)');
  });

  it('deletes the tour, after which it 404s on the public endpoint', async () => {
    const res = await request(app)
      .delete(`/api/admin/tours/${createdTourId}`)
      .set('Cookie', sessionCookie);
    expect(res.status).toBe(204);

    const publicRes = await request(app).get(`/api/tours/${validTourPayload.slug}`);
    expect(publicRes.status).toBe(404);

    createdTourId = ''; // already deleted, don't try again in afterAll
  });
});
