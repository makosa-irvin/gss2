import { Router } from 'express';
import { db } from '../db/client.js';
import { testimonials } from '../db/schema.js';
import { asyncHandler } from '../middleware/common.js';

export const testimonialsRouter = Router();

testimonialsRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    const rows = await db.select().from(testimonials).orderBy(testimonials.createdAt);
    res.json(rows);
  })
);
