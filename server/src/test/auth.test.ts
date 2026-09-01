import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import request from 'supertest';
import { eq } from 'drizzle-orm';
import { createApp } from '../app.js';
import { db } from '../db/client.js';
import { adminUsers } from '../db/schema.js';
import { ADMIN_COOKIE_NAME, hashPassword } from '../lib/auth.js';

const app = createApp();
const TEST_ADMIN_EMAIL = 'ci-admin-auth@example.com';
const TEST_ADMIN_PASSWORD = 'Test-only-password-42!';

/**
 * Authentication tests create their own synthetic administrator instead of
 * depending on SEED_ADMIN_PASSWORD. That keeps the suite deterministic in CI,
 * avoids sharing real credentials with contributors, and exercises the same
 * bcrypt/JWT/cookie path used in production.
 */
describe('Auth', () => {
  beforeAll(async () => {
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    await db.insert(adminUsers).values({
      email: TEST_ADMIN_EMAIL,
      passwordHash: await hashPassword(TEST_ADMIN_PASSWORD),
      name: 'CI Auth Administrator',
    });
  });

  afterAll(async () => {
    await db.delete(adminUsers).where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
  });

  it('uses the same generic error for an unknown email and a wrong password', async () => {
    const unknownUser = await request(app)
      .post('/api/auth/login')
      .send({ email: 'nobody@example.com', password: 'wrong' });

    const wrongPassword = await request(app)
      .post('/api/auth/login')
      .send({ email: TEST_ADMIN_EMAIL, password: 'definitely-wrong' });

    expect(unknownUser.status).toBe(401);
    expect(wrongPassword.status).toBe(401);
    expect(unknownUser.body.error).toBe('Invalid email or password.');
    expect(wrongPassword.body.error).toBe(unknownUser.body.error);
  });

  it('rejects a malformed login request with a 400, not a 500', async () => {
    const res = await request(app).post('/api/auth/login').send({ email: 'not-an-email' });
    expect(res.status).toBe(400);
  });

  it('rejects access to protected routes with no session cookie', async () => {
    const meRes = await request(app).get('/api/auth/me');
    const enquiriesRes = await request(app).get('/api/enquiries');

    expect(meRes.status).toBe(401);
    expect(enquiriesRes.status).toBe(401);
  });

  it('rejects a tampered admin session cookie with a clear re-login message', async () => {
    const res = await request(app)
      .get('/api/auth/me')
      .set('Cookie', `${ADMIN_COOKIE_NAME}=not-a-valid-jwt`);

    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Session expired or invalid. Please log in again.');
  });

  it('logs in, sets an httpOnly session cookie, restores /me, and logs out', async () => {
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: TEST_ADMIN_EMAIL, password: TEST_ADMIN_PASSWORD });

    expect(loginRes.status).toBe(200);
    expect(loginRes.body.email).toBe(TEST_ADMIN_EMAIL);
    expect(loginRes.body.name).toBe('CI Auth Administrator');

    const cookies = loginRes.headers['set-cookie'];
    expect(cookies).toBeDefined();
    const sessionCookie = Array.isArray(cookies) ? cookies[0] : cookies;
    expect(sessionCookie).toContain(`${ADMIN_COOKIE_NAME}=`);
    expect(sessionCookie.toLowerCase()).toContain('httponly');

    const meRes = await request(app).get('/api/auth/me').set('Cookie', sessionCookie);
    expect(meRes.status).toBe(200);
    expect(meRes.body.email).toBe(TEST_ADMIN_EMAIL);

    const [storedAdmin] = await db
      .select()
      .from(adminUsers)
      .where(eq(adminUsers.email, TEST_ADMIN_EMAIL));
    expect(storedAdmin.lastLoginAt).toBeTruthy();

    const logoutRes = await request(app).post('/api/auth/logout').set('Cookie', sessionCookie);
    expect(logoutRes.status).toBe(204);
    const clearedCookie = logoutRes.headers['set-cookie'];
    expect(clearedCookie).toBeDefined();
  });

  describe('PATCH /change-password', () => {
    const CHANGE_PW_EMAIL = 'ci-admin-change-password@example.com';
    const ORIGINAL_PASSWORD = 'Original-test-password-1!';

    async function loginAndGetCookie() {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: CHANGE_PW_EMAIL, password: ORIGINAL_PASSWORD });
      const cookies = res.headers['set-cookie'];
      return Array.isArray(cookies) ? cookies[0] : cookies;
    }

    beforeAll(async () => {
      await db.delete(adminUsers).where(eq(adminUsers.email, CHANGE_PW_EMAIL));
      await db.insert(adminUsers).values({
        email: CHANGE_PW_EMAIL,
        passwordHash: await hashPassword(ORIGINAL_PASSWORD),
        name: 'CI Change-Password Administrator',
      });
    });

    afterAll(async () => {
      await db.delete(adminUsers).where(eq(adminUsers.email, CHANGE_PW_EMAIL));
    });

    it('rejects an unauthenticated request', async () => {
      const res = await request(app)
        .patch('/api/auth/change-password')
        .send({ currentPassword: ORIGINAL_PASSWORD, newPassword: 'Some-new-password-1!' });
      expect(res.status).toBe(401);
    });

    it('rejects a request body that fails validation before touching the database', async () => {
      const cookie = await loginAndGetCookie();
      const tooShort = await request(app)
        .patch('/api/auth/change-password')
        .set('Cookie', cookie)
        .send({ currentPassword: ORIGINAL_PASSWORD, newPassword: 'short' });
      expect(tooShort.status).toBe(400);

      const sameAsCurrent = await request(app)
        .patch('/api/auth/change-password')
        .set('Cookie', cookie)
        .send({ currentPassword: ORIGINAL_PASSWORD, newPassword: ORIGINAL_PASSWORD });
      expect(sameAsCurrent.status).toBe(400);
    });

    it('rejects the wrong current password without changing the stored hash', async () => {
      const cookie = await loginAndGetCookie();
      const [before] = await db.select().from(adminUsers).where(eq(adminUsers.email, CHANGE_PW_EMAIL));

      const res = await request(app)
        .patch('/api/auth/change-password')
        .set('Cookie', cookie)
        .send({ currentPassword: 'definitely-wrong', newPassword: 'Some-new-password-1!' });

      expect(res.status).toBe(401);
      expect(res.body.error).toBe('Current password is incorrect.');

      const [after] = await db.select().from(adminUsers).where(eq(adminUsers.email, CHANGE_PW_EMAIL));
      expect(after.passwordHash).toBe(before.passwordHash);
    });

    it('changes the password when the current password is correct, and the new one works to log in', async () => {
      const cookie = await loginAndGetCookie();
      const NEW_PASSWORD = 'Brand-new-test-password-2!';

      const changeRes = await request(app)
        .patch('/api/auth/change-password')
        .set('Cookie', cookie)
        .send({ currentPassword: ORIGINAL_PASSWORD, newPassword: NEW_PASSWORD });
      expect(changeRes.status).toBe(204);

      const oldLoginRes = await request(app)
        .post('/api/auth/login')
        .send({ email: CHANGE_PW_EMAIL, password: ORIGINAL_PASSWORD });
      expect(oldLoginRes.status).toBe(401);

      const newLoginRes = await request(app)
        .post('/api/auth/login')
        .send({ email: CHANGE_PW_EMAIL, password: NEW_PASSWORD });
      expect(newLoginRes.status).toBe(200);

      // Restore the original password so this test is re-runnable / order-independent.
      const restoreCookie = newLoginRes.headers['set-cookie'];
      await request(app)
        .patch('/api/auth/change-password')
        .set('Cookie', Array.isArray(restoreCookie) ? restoreCookie[0] : restoreCookie)
        .send({ currentPassword: NEW_PASSWORD, newPassword: ORIGINAL_PASSWORD });
    });
  });
});
