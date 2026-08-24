import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

import { authRouter } from './routes/auth.js';
import { toursRouter } from './routes/tours.js';
import { hotelsRouter } from './routes/hotels.js';
import { destinationsRouter } from './routes/destinations.js';
import { blogRouter } from './routes/blog.js';
import { testimonialsRouter } from './routes/testimonials.js';
import { settingsRouter } from './routes/settings.js';
import { enquiriesRouter } from './routes/enquiries.js';
import { adminToursRouter } from './routes/adminTours.js';
import { adminHotelsRouter } from './routes/adminHotels.js';
import { adminDestinationsRouter } from './routes/adminDestinations.js';
import { adminBlogRouter } from './routes/adminBlog.js';
import { adminTestimonialsRouter } from './routes/adminTestimonials.js';
import { errorHandler } from './middleware/common.js';
import { requireTrustedOrigin } from './middleware/requireTrustedOrigin.js';

const allowedOrigins = (process.env.CORS_ORIGINS || 'http://localhost:3000')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

export function createApp() {
  const app = express();

  // Behind a reverse proxy (Railway, Render, Fly, etc.) in production, so
  // rate-limiting and req.ip need the real client IP from X-Forwarded-For
  // rather than the proxy's own address.
  app.set('trust proxy', 1);

  app.use(helmet());
  app.use(
    cors({
      origin: allowedOrigins,
      credentials: true, // required so the admin session cookie is sent/received cross-origin
    })
  );
  app.use(express.json({ limit: '1mb' }));
  app.use(cookieParser());
  app.use('/api/auth/logout', requireTrustedOrigin);
  app.use('/api/enquiries/:id/status', requireTrustedOrigin);
  app.use('/api/admin', requireTrustedOrigin);

  // Global rate limit as a baseline against abuse; routes.ts adds a
  // tighter limit specifically on the public enquiry-submission endpoint
  // and login attempts below, since those are the highest-value targets.
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 300,
      standardHeaders: true,
      legacyHeaders: false,
    })
  );

  const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many login attempts. Please wait before trying again.' },
  });

  app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

  app.use('/api/auth/login', loginLimiter);
  app.use('/api/auth', authRouter);
  app.use('/api/tours', toursRouter);
  app.use('/api/hotels', hotelsRouter);
  app.use('/api/destinations', destinationsRouter);
  app.use('/api/blog', blogRouter);
  app.use('/api/testimonials', testimonialsRouter);
  app.use('/api/settings', settingsRouter);
  app.use('/api/enquiries', enquiriesRouter);
  app.use('/api/admin/tours', adminToursRouter);
  app.use('/api/admin/hotels', adminHotelsRouter);
  app.use('/api/admin/destinations', adminDestinationsRouter);
  app.use('/api/admin/blog', adminBlogRouter);
  app.use('/api/admin/testimonials', adminTestimonialsRouter);

  app.use((req, res) => {
    res.status(404).json({ error: `Not found: ${req.method} ${req.path}` });
  });

  app.use(errorHandler);

  return app;
}
