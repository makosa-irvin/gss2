import { Router } from 'express';
import { and, eq, sql } from 'drizzle-orm';
import { db } from '../db/client.js';
import { tours } from '../db/schema.js';
import { asyncHandler } from '../middleware/common.js';

export const toursRouter = Router();

toursRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    const rows = await db.select().from(tours).where(eq(tours.published, true)).orderBy(tours.createdAt);
    res.json(rows);
  })
);

toursRouter.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const [tour] = await db.select().from(tours).where(and(eq(tours.slug, req.params.slug), eq(tours.published, true))).limit(1);
    if (!tour) return res.status(404).json({ error: 'Tour not found.' });

    // Fire-and-forget view counter - not awaited, and never lets a
    // counting failure affect the response the visitor actually gets.
    db.update(tours)
      .set({ viewsCount: sql`${tours.viewsCount} + 1` })
      .where(eq(tours.id, tour.id))
      .catch((err) => console.error('Failed to increment tour view count:', err));

    res.json(tour);
  })
);
