import type { Request, Response, NextFunction } from 'express';
import { verifyAdminToken, ADMIN_COOKIE_NAME } from '../lib/auth.js';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      admin?: { id: string; email: string };
    }
  }
}

/**
 * Protects admin-only routes. Reads the JWT from an httpOnly cookie
 * (not a header/localStorage token) so it can't be read or exfiltrated
 * by JavaScript running on the page - the standard mitigation against
 * XSS-based token theft.
 */
export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.[ADMIN_COOKIE_NAME];
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated.' });
  }

  try {
    const payload = verifyAdminToken(token);
    req.admin = { id: payload.sub, email: payload.email };
    next();
  } catch {
    return res.status(401).json({ error: 'Session expired or invalid. Please log in again.' });
  }
}
