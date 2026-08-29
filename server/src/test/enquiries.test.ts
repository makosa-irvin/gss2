import { describe, it, expect, afterAll } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';
import { createApp } from '../app.js';
import { db, pool } from '../db/client.js';
import { enquiries } from '../db/schema.js';

const app = createApp();
const createdIds: string[] = [];
const SEED_ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL || 'admin@goodsecretssafaris.com';
const SEED_ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD;

/**
 * These tests are the regression guard for the single most important fix
 * in this backend: previously, submitted enquiries only ever reached the
 * submitting visitor's own browser localStorage - never the business.
 * Asserting the row actually lands in the database (not just that the
 * HTTP response looks right) is the point.
 */
describe('Enquiry submission', () => {
  afterAll(async () => {
    for (const id of createdIds) {
      await db.delete(enquiries).where(eq(enquiries.id, id));
    }
    await pool.end();
  });

  it('rejects an enquiry missing required fields with 400', async () => {
    const res = await request(app).post('/api/enquiries').send({ fullName: 'Missing Stuff' });
    expect(res.status).toBe(400);
    expect(res.body.details.fieldErrors).toBeDefined();
  });

  it('rejects an invalid email address', async () => {
    const res = await request(app)
      .post('/api/enquiries')
      .send({ fullName: 'Bad Email', email: 'not-an-email', phone: '+123', country: 'Kenya', adults: 1 });
    expect(res.status).toBe(400);
    expect(res.body.details.fieldErrors.email).toBeDefined();
  });

  it('accepts a valid enquiry, persists it to the database, and is not visible without admin auth', async () => {
    const payload = {
      fullName: 'Automated Test Traveler',
      email: 'automated-test@example.com',
      phone: '+1 555 000 1111',
      country: 'United States',
      adults: 2,
      children: 1,
      tourTitle: 'Test Suite Safari',
      travelDates: 'March 2027',
      specialRequests: 'This row is created by an automated test and cleaned up after.',
    };

    const res = await request(app).post('/api/enquiries').send(payload);
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    createdIds.push(res.body.id);

    // The real assertion: query the database directly, independent of
    // the HTTP layer, to prove the row actually exists and is correct -
    // not just that the API claimed success.
    const [row] = await db.select().from(enquiries).where(eq(enquiries.id, res.body.id));
    expect(row).toBeDefined();
    expect(row.fullName).toBe(payload.fullName);
    expect(row.email).toBe(payload.email);
    expect(row.status).toBe('New');

    // And it must not be readable without admin auth - enquiries contain
    // customer PII (name, email, phone, travel plans).
    const unauthedList = await request(app).get('/api/enquiries');
    expect(unauthedList.status).toBe(401);
  });

  it('rate-limits excessive enquiry submissions from the same client', async () => {
    const basePayload = {
      fullName: 'Rate Limit Test',
      email: 'ratelimit-test@example.com',
      phone: '+1 555 000 2222',
      country: 'Testland',
      adults: 1,
      children: 0,
    };

    const responses = [];
    for (let i = 0; i < 12; i++) {
      const res = await request(app).post('/api/enquiries').send(basePayload);
      responses.push(res);
      if (res.status === 201) createdIds.push(res.body.id);
    }

    const tooManyRequests = responses.filter((r) => r.status === 429);
    expect(tooManyRequests.length).toBeGreaterThan(0);
  });
});

describe.runIf(!!SEED_ADMIN_PASSWORD)('Admin enquiry management', () => {
  let sessionCookie: string;
  let enquiryId: string;

  it('logs in and creates a test enquiry to manage', async () => {
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: SEED_ADMIN_EMAIL, password: SEED_ADMIN_PASSWORD });
    sessionCookie = loginRes.headers['set-cookie'];
    expect(loginRes.status).toBe(200);

    const createRes = await request(app).post('/api/enquiries').send({
      fullName: 'CRM Test Traveler',
      email: 'crm-test@example.com',
      phone: '+1 555 000 3333',
      country: 'United States',
      adults: 2,
      children: 0,
    });
    enquiryId = createRes.body.id;
    createdIds.push(enquiryId);
  });

  it('refuses to update status without an admin session', async () => {
    const res = await request(app).put(`/api/enquiries/${enquiryId}/status`).send({ status: 'Contacted' });
    expect(res.status).toBe(401);
  });

  it('updates status and notes, stamping the corresponding lifecycle timestamp', async () => {
    const res = await request(app)
      .put(`/api/enquiries/${enquiryId}/status`)
      .set('Cookie', sessionCookie)
      .send({ status: 'Contacted', notes: 'Called and left a voicemail.' });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('Contacted');
    expect(res.body.notes).toBe('Called and left a voicemail.');
    expect(res.body.contactedAt).toBeTruthy();
  });

  it('refuses to delete without an admin session', async () => {
    const res = await request(app).delete(`/api/enquiries/${enquiryId}`);
    expect(res.status).toBe(401);
  });

  it('deletes the enquiry, after which it no longer appears in the admin list', async () => {
    const res = await request(app).delete(`/api/enquiries/${enquiryId}`).set('Cookie', sessionCookie);
    expect(res.status).toBe(204);

    const listRes = await request(app).get('/api/enquiries').set('Cookie', sessionCookie);
    expect(listRes.body.find((e: { id: string }) => e.id === enquiryId)).toBeUndefined();

    createdIds.splice(createdIds.indexOf(enquiryId), 1); // already deleted, don't try again in afterAll
  });

  it('404s deleting an enquiry that does not exist', async () => {
    const res = await request(app).delete(`/api/enquiries/${enquiryId}`).set('Cookie', sessionCookie);
    expect(res.status).toBe(404);
  });
});
