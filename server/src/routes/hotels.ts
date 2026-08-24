import { Router } from 'express';
import { and, eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { hotels } from '../db/schema.js';
import { asyncHandler } from '../middleware/common.js';

export const hotelsRouter = Router();

hotelsRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    const rows = await db.select().from(hotels).where(eq(hotels.published, true)).orderBy(hotels.createdAt);
    res.json(rows);
  })
);

hotelsRouter.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const [hotel] = await db.select().from(hotels).where(and(eq(hotels.slug, req.params.slug), eq(hotels.published, true))).limit(1);
    if (!hotel) return res.status(404).json({ error: 'Hotel not found.' });
    res.json(hotel);
  })
);
