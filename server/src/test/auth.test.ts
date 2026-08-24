import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../app.js';

const app = createApp();

const SEED_ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL || 'admin@goodsecretssafaris.com';
const SEED_ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD;

describe('Auth', () => {
  it('rejects login with a wrong password without revealing whether the email exists', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'nobody@example.com', password: 'wrong' });

    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Invalid email or password.');
  });

  it('rejects a malformed login request with a 400, not a 500', async () => {
    const res = await request(app).post('/api/auth/login').send({ email: 'not-an-email' });
    expect(res.status).toBe(400);
  });

  it('rejects access to protected routes with no session cookie', async () => {
    const res = await request(app).get('/api/auth/me');
    expect(res.status).toBe(401);
  });

  it('rejects access to admin CRUD with no session cookie', async () => {
    const res = await request(app).get('/api/enquiries');
    expect(res.status).toBe(401);
  });

  // Only runs if a real seed admin password is available in the test
  // environment (server/.env) - keeps this suite runnable without
  // requiring every contributor to know the seeded password.
  it.runIf(!!SEED_ADMIN_PASSWORD)(
    'logs in with correct credentials, sets a session cookie, and /me reflects it',
    async () => {
      const loginRes = await request(app)
        .post('/api/auth/login')
        .send({ email: SEED_ADMIN_EMAIL, password: SEED_ADMIN_PASSWORD });

      expect(loginRes.status).toBe(200);
      expect(loginRes.body.email).toBe(SEED_ADMIN_EMAIL);

      const cookie = loginRes.headers['set-cookie'];
      expect(cookie).toBeDefined();

      const meRes = await request(app).get('/api/auth/me').set('Cookie', cookie);
      expect(meRes.status).toBe(200);
      expect(meRes.body.email).toBe(SEED_ADMIN_EMAIL);

      const logoutRes = await request(app).post('/api/auth/logout').set('Cookie', cookie);
      expect(logoutRes.status).toBe(204);
    }
  );
});
