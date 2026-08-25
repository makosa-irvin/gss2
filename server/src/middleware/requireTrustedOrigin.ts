import type { Request, Response, NextFunction } from 'express';

const allowedOrigins = new Set(
  (process.env.CORS_ORIGINS || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
);

/**
 * Extra CSRF protection for cookie-authenticated state-changing requests.
 * Browsers attach Origin to fetch/XHR mutations; reject requests whose
 * origin is not one of the explicitly configured frontend origins.
 */
export function requireTrustedOrigin(req: Request, res: Response, next: NextFunction) {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();

  const origin = req.get('origin');
  if (!origin) {
    // Non-browser clients and same-origin legacy requests can omit Origin.
    // In production we fail closed; local/test tooling remains convenient.
    if (process.env.NODE_ENV === 'production') {
      return res.status(403).json({ error: 'Missing request origin.' });
    }
    return next();
  }

  if (!allowedOrigins.has(origin)) {
    return res.status(403).json({ error: 'Request origin is not allowed.' });
  }

  next();
}
