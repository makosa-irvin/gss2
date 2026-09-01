import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { adminUsers } from '../db/schema.js';
import { signAdminToken, hashPassword, verifyPassword, ADMIN_COOKIE_NAME } from '../lib/auth.js';
import { sendAdminPasswordChangedNotification } from '../lib/email.js';
import { changePasswordSchema, loginSchema } from '../lib/validation.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { env } from '../config/env.js';

export const authRouter = Router();

const cookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === 'production' || env.ADMIN_COOKIE_SECURE === 'true',
  sameSite: env.ADMIN_COOKIE_SAME_SITE,
  maxAge: 12 * 60 * 60 * 1000, // 12h, should match JWT_EXPIRES_IN
  path: '/',
} as const;

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

authRouter.patch(
  '/change-password',
  requireAdmin,
  validateBody(changePasswordSchema),
  asyncHandler(async (req, res) => {
    const { currentPassword, newPassword } = req.body;

    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.id, req.admin!.id)).limit(1);
    if (!user) {
      return res.status(401).json({ error: 'Not authenticated.' });
    }

    const valid = await verifyPassword(currentPassword, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ error: 'Current password is incorrect.' });
    }

    const passwordHash = await hashPassword(newPassword);
    await db.update(adminUsers).set({ passwordHash }).where(eq(adminUsers.id, user.id));

    // Fire-and-forget, same as enquiry emails - the password change has
    // already been persisted by this point, so a failed notification
    // shouldn't turn into a failed response.
    sendAdminPasswordChangedNotification({ email: user.email, name: user.name }).catch((err) =>
      console.error(`[email] Failed to send password-change notification for ${user.email}:`, err)
    );

    res.status(204).end();
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
