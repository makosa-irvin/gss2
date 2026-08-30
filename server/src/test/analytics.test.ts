import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';
import { createApp } from '../app.js';
import { db, pool } from '../db/client.js';
import { analyticsEvents } from '../db/analyticsSchema.js';
import { adminUsers } from '../db/schema.js';
import { hashPassword } from '../lib/auth.js';

const app = createApp();
const TEST_ADMIN_EMAIL = 'ci-analytics-admin@example.com';
const TEST_ADMIN_PASSWORD = 'Test-only-password-42!';
const createdEventIds: string[] = [];

describe('Growth analytics API', () => {
  let sessionCookie: string;

  beforeAll(async () => {
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    await db.insert(adminUsers).values({
      email: TEST_ADMIN_EMAIL,
      passwordHash: await hashPassword(TEST_ADMIN_PASSWORD),
      name: 'CI Analytics Administrator',
    });

    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: TEST_ADMIN_EMAIL, password: TEST_ADMIN_PASSWORD });

    expect(loginRes.status).toBe(200);
    sessionCookie = loginRes.headers['set-cookie'];
  });

  afterAll(async () => {
    for (const id of createdEventIds) {
      await db.delete(analyticsEvents).where(eq(analyticsEvents.id, id));
    }
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    await pool.end();
  });

  it('rejects malformed or unsupported public analytics events', async () => {
    const tooShort = await request(app)
      .post('/api/analytics/events')
      .send({ sessionId: 'short', eventName: 'page_view' });
    expect(tooShort.status).toBe(400);

    const unsupported = await request(app)
      .post('/api/analytics/events')
      .send({ sessionId: 'session-analytics-123', eventName: 'purchase' });
    expect(unsupported.status).toBe(400);
  });

  it('stores a valid public event with safe defaults', async () => {
    const res = await request(app)
      .post('/api/analytics/events')
      .send({
        sessionId: 'session-defaults-123',
        eventName: 'shortlist_added',
        metadata: { tourId: 'tour-1', position: 2, saved: true, note: null },
      });

    expect(res.status).toBe(204);

    const rows = await db
      .select()
      .from(analyticsEvents)
      .where(eq(analyticsEvents.sessionId, 'session-defaults-123'));

    expect(rows).toHaveLength(1);
    createdEventIds.push(rows[0].id);
    expect(rows[0]).toMatchObject({
      eventName: 'shortlist_added',
      pagePath: null,
      source: 'direct',
      medium: '(none)',
      campaign: null,
      metadata: { tourId: 'tour-1', position: 2, saved: true, note: null },
    });
  });

  it('protects the growth report behind an admin session', async () => {
    const res = await request(app).get('/api/analytics/growth?days=30');
    expect(res.status).toBe(401);
  });

  it('summarizes current and previous cohorts, sources, pages and campaigns', async () => {
    const now = Date.now();
    const rows = await db.insert(analyticsEvents).values([
      {
        sessionId: 'session-current-a',
        eventName: 'page_view',
        pagePath: '/safaris',
        source: 'google',
        medium: 'organic',
        campaign: 'kenya-guide',
        metadata: {},
        createdAt: new Date(now - 2 * 24 * 60 * 60 * 1000),
      },
      {
        sessionId: 'session-current-a',
        eventName: 'page_view',
        pagePath: '/safaris',
        source: 'google',
        medium: 'organic',
        campaign: 'kenya-guide',
        metadata: {},
        createdAt: new Date(now - 1 * 24 * 60 * 60 * 1000),
      },
      {
        sessionId: 'session-current-b',
        eventName: 'enquiry_opened',
        pagePath: '/safaris/test-tour',
        source: 'tripadvisor',
        medium: 'referral',
        metadata: {},
        createdAt: new Date(now - 12 * 60 * 60 * 1000),
      },
      {
        sessionId: 'session-current-b',
        eventName: 'enquiry_submitted',
        pagePath: '/safaris/test-tour',
        source: 'tripadvisor',
        medium: 'referral',
        metadata: {},
        createdAt: new Date(now - 11 * 60 * 60 * 1000),
      },
      {
        sessionId: 'session-current-c',
        eventName: 'whatsapp_clicked',
        pagePath: '/contact',
        source: 'direct',
        medium: '(none)',
        metadata: {},
        createdAt: new Date(now - 10 * 60 * 60 * 1000),
      },
      {
        sessionId: 'session-previous-a',
        eventName: 'page_view',
        pagePath: '/destinations/amboseli',
        source: 'bing',
        medium: 'organic',
        campaign: 'previous-campaign',
        metadata: {},
        createdAt: new Date(now - 35 * 24 * 60 * 60 * 1000),
      },
      {
        sessionId: 'session-previous-a',
        eventName: 'shortlist_added',
        pagePath: '/safaris/previous-tour',
        source: 'bing',
        medium: 'organic',
        metadata: {},
        createdAt: new Date(now - 34 * 24 * 60 * 60 * 1000),
      },
    ]).returning({ id: analyticsEvents.id });
    createdEventIds.push(...rows.map((row) => row.id));

    const res = await request(app)
      .get('/api/analytics/growth?days=30')
      .set('Cookie', sessionCookie);

    expect(res.status).toBe(200);
    expect(res.body.days).toBe(30);
    expect(res.body.generatedAt).toBeTruthy();
    expect(res.body.current).toMatchObject({
      visitors: 4,
      pageViews: 2,
      shortlistAdds: 1,
      enquiryOpens: 1,
      enquirySubmits: 1,
      whatsappClicks: 1,
    });
    expect(res.body.current.topPages[0]).toEqual({ label: '/safaris', value: 2 });
    expect(res.body.current.sources).toEqual(expect.arrayContaining([
      { label: 'google / organic', value: 2 },
      { label: 'tripadvisor / referral', value: 2 },
    ]));
    expect(res.body.current.campaigns).toContainEqual({ label: 'kenya-guide', value: 2 });
    expect(res.body.previous).toMatchObject({
      visitors: 1,
      pageViews: 1,
      shortlistAdds: 1,
    });
    expect(res.body.previous.topPages).toContainEqual({ label: '/destinations/amboseli', value: 1 });
    expect(res.body.previous.campaigns).toContainEqual({ label: 'previous-campaign', value: 1 });
  });

  it('falls back to a 30-day report for an unsupported window', async () => {
    const res = await request(app)
      .get('/api/analytics/growth?days=13')
      .set('Cookie', sessionCookie);

    expect(res.status).toBe(200);
    expect(res.body.days).toBe(30);
  });
});
