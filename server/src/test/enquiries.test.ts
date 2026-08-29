import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';
import { createApp } from '../app.js';
import { db, pool } from '../db/client.js';
import { adminUsers, enquiries } from '../db/schema.js';
import { hashPassword } from '../lib/auth.js';

const app = createApp();
const createdIds: string[] = [];
const TEST_ADMIN_EMAIL = 'ci-crm-admin@example.com';
const TEST_ADMIN_PASSWORD = 'Test-only-password-42!';

/**
 * These tests are the regression guard for the most important backend journey:
 * a traveller submits an enquiry, it is persisted, and an authenticated staff
 * member can safely progress it through the CRM lifecycle.
 */
describe('Enquiry submission and CRM lifecycle', () => {
  let sessionCookie: string;
  let managedEnquiryId: string;

  beforeAll(async () => {
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    await db.insert(adminUsers).values({
      email: TEST_ADMIN_EMAIL,
      passwordHash: await hashPassword(TEST_ADMIN_PASSWORD),
      name: 'CI CRM Administrator',
    });

    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: TEST_ADMIN_EMAIL, password: TEST_ADMIN_PASSWORD });

    expect(loginRes.status).toBe(200);
    sessionCookie = loginRes.headers['set-cookie'];

    const [managed] = await db
      .insert(enquiries)
      .values({
        fullName: 'CRM Test Traveler',
        email: 'crm-test@example.com',
        phone: '+1 555 000 3333',
        country: 'United States',
        travelDates: 'October 2027',
        adults: 2,
        children: 0,
        preferredDestination: 'Maasai Mara',
        safariType: 'Private safari',
        budget: 'USD 5,000–7,500',
        accommodationPreference: 'Luxury lodge',
        specialRequests: 'Synthetic CRM lifecycle test enquiry.',
        hearAboutUs: 'Automated test',
      })
      .returning();

    managedEnquiryId = managed.id;
    createdIds.push(managedEnquiryId);
  });

  afterAll(async () => {
    for (const id of createdIds) {
      await db.delete(enquiries).where(eq(enquiries.id, id));
    }
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
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

  it('accepts a valid enquiry, persists it to the database, and keeps it private', async () => {
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

    const [row] = await db.select().from(enquiries).where(eq(enquiries.id, res.body.id));
    expect(row).toBeDefined();
    expect(row.fullName).toBe(payload.fullName);
    expect(row.email).toBe(payload.email);
    expect(row.status).toBe('New');
    expect(row.children).toBe(1);

    const unauthedList = await request(app).get('/api/enquiries');
    expect(unauthedList.status).toBe(401);
  });

  it('lets an authenticated admin list enquiries', async () => {
    const res = await request(app).get('/api/enquiries').set('Cookie', sessionCookie);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.some((enquiry: { id: string }) => enquiry.id === managedEnquiryId)).toBe(true);
  });

  it('refuses to update status without an admin session', async () => {
    const res = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/status`)
      .send({ status: 'Contacted' });

    expect(res.status).toBe(401);
  });

  it('rejects invalid CRM statuses before touching the database', async () => {
    const res = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/status`)
      .set('Cookie', sessionCookie)
      .send({ status: 'Won' });

    expect(res.status).toBe(400);

    const [row] = await db.select().from(enquiries).where(eq(enquiries.id, managedEnquiryId));
    expect(row.status).toBe('New');
  });

  it('progresses Contacted, Quoted and Confirmed with lifecycle timestamps', async () => {
    const contacted = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/status`)
      .set('Cookie', sessionCookie)
      .send({ status: 'Contacted', notes: 'Called and left a voicemail.' });

    expect(contacted.status).toBe(200);
    expect(contacted.body.status).toBe('Contacted');
    expect(contacted.body.notes).toBe('Called and left a voicemail.');
    expect(contacted.body.contactedAt).toBeTruthy();

    const quoted = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/status`)
      .set('Cookie', sessionCookie)
      .send({ status: 'Quoted', notes: 'Proposal sent.' });

    expect(quoted.status).toBe(200);
    expect(quoted.body.status).toBe('Quoted');
    expect(quoted.body.contactedAt).toBeTruthy();
    expect(quoted.body.quotedAt).toBeTruthy();

    const confirmed = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/status`)
      .set('Cookie', sessionCookie)
      .send({ status: 'Confirmed', notes: 'Traveller accepted the proposal.' });

    expect(confirmed.status).toBe(200);
    expect(confirmed.body.status).toBe('Confirmed');
    expect(confirmed.body.confirmedAt).toBeTruthy();
    expect(new Date(confirmed.body.updatedAt).getTime()).toBeGreaterThanOrEqual(
      new Date(confirmed.body.createdAt).getTime()
    );
  });

  it('stamps cancellation independently when a lead is cancelled', async () => {
    const res = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/status`)
      .set('Cookie', sessionCookie)
      .send({ status: 'Cancelled', notes: 'Traveller postponed indefinitely.' });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('Cancelled');
    expect(res.body.cancelledAt).toBeTruthy();
    expect(res.body.confirmedAt).toBeTruthy();
  });

  it('404s status updates for an enquiry that does not exist', async () => {
    const res = await request(app)
      .put('/api/enquiries/id_does_not_exist/status')
      .set('Cookie', sessionCookie)
      .send({ status: 'Contacted' });

    expect(res.status).toBe(404);
  });

  it('requires an admin session and validates follow-up timestamps', async () => {
    const unauthenticated = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/follow-up`)
      .send({ followUpAt: '2027-01-15T09:30:00.000Z' });
    expect(unauthenticated.status).toBe(401);

    const invalid = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/follow-up`)
      .set('Cookie', sessionCookie)
      .send({ followUpAt: 'next Friday' });
    expect(invalid.status).toBe(400);
  });

  it('schedules, reschedules, lists and clears an enquiry follow-up', async () => {
    const firstFollowUp = '2027-01-15T09:30:00.000Z';
    const scheduled = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/follow-up`)
      .set('Cookie', sessionCookie)
      .send({ followUpAt: firstFollowUp });

    expect(scheduled.status).toBe(200);
    expect(new Date(scheduled.body.followUpAt).toISOString()).toBe(firstFollowUp);

    const listWithFollowUp = await request(app)
      .get('/api/enquiries')
      .set('Cookie', sessionCookie);
    const listed = listWithFollowUp.body.find(
      (enquiry: { id: string }) => enquiry.id === managedEnquiryId
    );
    expect(new Date(listed.followUpAt).toISOString()).toBe(firstFollowUp);

    const secondFollowUp = '2027-01-20T14:00:00.000Z';
    const rescheduled = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/follow-up`)
      .set('Cookie', sessionCookie)
      .send({ followUpAt: secondFollowUp });
    expect(new Date(rescheduled.body.followUpAt).toISOString()).toBe(secondFollowUp);

    const statusUpdate = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/status`)
      .set('Cookie', sessionCookie)
      .send({ status: 'Contacted', notes: 'Follow-up remains scheduled.' });
    expect(new Date(statusUpdate.body.followUpAt).toISOString()).toBe(secondFollowUp);

    const cleared = await request(app)
      .put(`/api/enquiries/${managedEnquiryId}/follow-up`)
      .set('Cookie', sessionCookie)
      .send({ followUpAt: null });
    expect(cleared.status).toBe(200);
    expect(cleared.body.followUpAt).toBeNull();

    const listAfterClear = await request(app)
      .get('/api/enquiries')
      .set('Cookie', sessionCookie);
    expect(
      listAfterClear.body.find((enquiry: { id: string }) => enquiry.id === managedEnquiryId)
        .followUpAt
    ).toBeNull();
  });

  it('404s follow-up changes for an enquiry that does not exist', async () => {
    const res = await request(app)
      .put('/api/enquiries/id_does_not_exist/follow-up')
      .set('Cookie', sessionCookie)
      .send({ followUpAt: '2027-01-15T09:30:00.000Z' });

    expect(res.status).toBe(404);
  });

  it('refuses to delete without an admin session', async () => {
    const res = await request(app).delete(`/api/enquiries/${managedEnquiryId}`);
    expect(res.status).toBe(401);
  });

  it('deletes the managed enquiry and then returns 404 on a second delete', async () => {
    const res = await request(app)
      .delete(`/api/enquiries/${managedEnquiryId}`)
      .set('Cookie', sessionCookie);
    expect(res.status).toBe(204);

    const listRes = await request(app).get('/api/enquiries').set('Cookie', sessionCookie);
    expect(listRes.body.find((e: { id: string }) => e.id === managedEnquiryId)).toBeUndefined();

    const createdIndex = createdIds.indexOf(managedEnquiryId);
    if (createdIndex >= 0) createdIds.splice(createdIndex, 1);

    const secondDelete = await request(app)
      .delete(`/api/enquiries/${managedEnquiryId}`)
      .set('Cookie', sessionCookie);
    expect(secondDelete.status).toBe(404);
  });

  it('rate-limits excessive public enquiry submissions from the same client', async () => {
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

    const tooManyRequests = responses.filter((response) => response.status === 429);
    expect(tooManyRequests.length).toBeGreaterThan(0);
  });
});
