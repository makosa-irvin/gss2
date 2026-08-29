import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';
import { createApp } from '../app.js';
import { db, pool } from '../db/client.js';
import { adminUsers, tours } from '../db/schema.js';
import { hashPassword } from '../lib/auth.js';

const app = createApp();
const TEST_ADMIN_EMAIL = 'ci-tour-admin@example.com';
const TEST_ADMIN_PASSWORD = 'Test-only-password-42!';

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

describe('Admin tour management', () => {
  let sessionCookie: string;
  let createdTourId: string;

  beforeAll(async () => {
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    await db.delete(tours).where(eq(tours.slug, validTourPayload.slug));

    await db.insert(adminUsers).values({
      email: TEST_ADMIN_EMAIL,
      passwordHash: await hashPassword(TEST_ADMIN_PASSWORD),
      name: 'CI Tour Administrator',
    });

    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: TEST_ADMIN_EMAIL, password: TEST_ADMIN_PASSWORD });

    expect(loginRes.status).toBe(200);
    sessionCookie = loginRes.headers['set-cookie'];
  });

  afterAll(async () => {
    if (createdTourId) {
      await db.delete(tours).where(eq(tours.id, createdTourId));
    }
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
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

  it('updates the tour and exposes the update publicly', async () => {
    const res = await request(app)
      .put(`/api/admin/tours/${createdTourId}`)
      .set('Cookie', sessionCookie)
      .send({ title: 'Automated Test Tour (Updated)' });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Automated Test Tour (Updated)');

    const publicRes = await request(app).get(`/api/tours/${validTourPayload.slug}`);
    expect(publicRes.body.title).toBe('Automated Test Tour (Updated)');
  });

  it('404s updates for a missing tour', async () => {
    const res = await request(app)
      .put('/api/admin/tours/id_does_not_exist')
      .set('Cookie', sessionCookie)
      .send({ title: 'Missing tour' });

    expect(res.status).toBe(404);
  });

  it('deletes the tour, after which it 404s on the public endpoint', async () => {
    const res = await request(app)
      .delete(`/api/admin/tours/${createdTourId}`)
      .set('Cookie', sessionCookie);
    expect(res.status).toBe(204);

    const publicRes = await request(app).get(`/api/tours/${validTourPayload.slug}`);
    expect(publicRes.status).toBe(404);

    const secondDelete = await request(app)
      .delete(`/api/admin/tours/${createdTourId}`)
      .set('Cookie', sessionCookie);
    expect(secondDelete.status).toBe(404);

    createdTourId = '';
  });
});
