import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { testimonials } from '../db/schema.js';
import { asyncHandler } from '../middleware/common.js';

export const testimonialsRouter = Router();

testimonialsRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    const rows = await db.select().from(testimonials).where(eq(testimonials.published, true)).orderBy(testimonials.createdAt);
    res.json(rows);
  })
);
