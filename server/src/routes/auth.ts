import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { adminUsers } from '../db/schema.js';
import { signAdminToken, verifyPassword, ADMIN_COOKIE_NAME } from '../lib/auth.js';
import { loginSchema } from '../lib/validation.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { requireAdmin } from '../middleware/requireAdmin.js';

export const authRouter = Router();

const isProduction = process.env.NODE_ENV === 'production';

// Cookie options shared between setting and clearing the session cookie.
// sameSite: 'lax' is the right default for a same-site (or subdomain)
// deployment; if the frontend and API end up on genuinely different
// top-level domains, this needs to become 'none' + secure: true, which
// requires HTTPS on both sides.
const configuredSameSite = process.env.ADMIN_COOKIE_SAME_SITE?.toLowerCase();
const sameSite = configuredSameSite === 'none' ? 'none' : configuredSameSite === 'strict' ? 'strict' : 'lax';

if (isProduction && sameSite === 'none' && process.env.ADMIN_COOKIE_SECURE === 'false') {
  throw new Error('ADMIN_COOKIE_SAME_SITE=none requires secure cookies in production.');
}

const cookieOptions = {
  httpOnly: true,
  secure: isProduction || process.env.ADMIN_COOKIE_SECURE === 'true',
  sameSite: sameSite as 'lax' | 'strict' | 'none',
  maxAge: 12 * 60 * 60 * 1000, // 12h, should match JWT_EXPIRES_IN
  path: '/',
};

authRouter.post(
  '/login',
  validateBody(loginSchema),
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);

    // Deliberately identical error for "no such user" and "wrong
    // password" - distinguishing them lets an attacker enumerate valid
    // admin email addresses.
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const token = signAdminToken({ sub: user.id, email: user.email });
    res.cookie(ADMIN_COOKIE_NAME, token, cookieOptions);

    await db.update(adminUsers).set({ lastLoginAt: new Date() }).where(eq(adminUsers.id, user.id));

    res.json({ id: user.id, email: user.email, name: user.name });
  })
);

authRouter.post('/logout', (req, res) => {
  res.clearCookie(ADMIN_COOKIE_NAME, { ...cookieOptions, maxAge: undefined });
  res.status(204).end();
});

authRouter.get(
  '/me',
  requireAdmin,
  asyncHandler(async (req, res) => {
    const [user] = await db
      .select({ id: adminUsers.id, email: adminUsers.email, name: adminUsers.name })
      .from(adminUsers)
      .where(eq(adminUsers.id, req.admin!.id))
      .limit(1);

    if (!user) return res.status(401).json({ error: 'Not authenticated.' });
    res.json(user);
  })
);
