import { describe, expect, it } from 'vitest';
import { parseEnv } from '../config/env.js';

const validBase = {
  NODE_ENV: 'test',
  DATABASE_URL: 'postgresql://postgres:postgres@localhost:5432/gss_test',
  JWT_SECRET: 'this-is-a-long-test-secret',
};

describe('server environment validation', () => {
  it('applies safe development defaults for optional configuration', () => {
    const env = parseEnv(validBase);

    expect(env.PORT).toBe(4000);
    expect(env.CORS_ORIGINS).toBe('http://localhost:3000');
    expect(env.JWT_EXPIRES_IN).toBe('12h');
    expect(env.ADMIN_COOKIE_SAME_SITE).toBe('lax');
  });

  it('coerces a valid port from environment text', () => {
    const env = parseEnv({ ...validBase, PORT: '8080' });
    expect(env.PORT).toBe(8080);
  });

  it('rejects a missing database URL without exposing unrelated values', () => {
    expect(() => parseEnv({ NODE_ENV: 'test', JWT_SECRET: validBase.JWT_SECRET })).toThrow(
      /DATABASE_URL/
    );
  });

  it('rejects a short JWT secret', () => {
    expect(() =>
      parseEnv({ ...validBase, JWT_SECRET: 'too-short' })
    ).toThrow(/JWT_SECRET/);
  });

  it('rejects invalid ports', () => {
    expect(() => parseEnv({ ...validBase, PORT: '70000' })).toThrow(/PORT/);
  });

  it('rejects insecure SameSite=None cookies in production', () => {
    expect(() =>
      parseEnv({
        ...validBase,
        NODE_ENV: 'production',
        ADMIN_COOKIE_SAME_SITE: 'none',
        ADMIN_COOKIE_SECURE: 'false',
      })
    ).toThrow(/requires secure cookies/);
  });

  it('accepts SameSite=None when production cookies remain secure', () => {
    const env = parseEnv({
      ...validBase,
      NODE_ENV: 'production',
      ADMIN_COOKIE_SAME_SITE: 'none',
      ADMIN_COOKIE_SECURE: 'true',
    });

    expect(env.ADMIN_COOKIE_SAME_SITE).toBe('none');
  });
});
