import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const rawSecret = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '12h';

if (!rawSecret || rawSecret.length < 16) {
  throw new Error(
    'JWT_SECRET is not set or is too short. Set a long random value in server/.env - see .env.example.'
  );
}
// Reassigned to a definitely-string binding: TypeScript's narrowing of
// the `if` guard above doesn't reliably persist into the function
// bodies below (a known limitation for outer-scope `const` referenced
// from nested closures), so `jwt.sign`/`verify` would otherwise see
// `string | undefined` and fail to type-check even though this file
// can never finish loading with JWT_SECRET unset.
const JWT_SECRET: string = rawSecret;

export interface AdminTokenPayload {
  sub: string; // admin user id
  email: string;
}

export function signAdminToken(payload: AdminTokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions);
}

export function verifyAdminToken(token: string): AdminTokenPayload {
  const decoded = jwt.verify(token, JWT_SECRET);
  if (typeof decoded === 'string' || !decoded.sub || !decoded.email) {
    throw new Error('Invalid token payload.');
  }
  return { sub: decoded.sub, email: decoded.email as string };
}

export function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 12);
}

export function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

export const ADMIN_COOKIE_NAME = 'gss_admin_session';
