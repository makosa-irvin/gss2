import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { hotels } from '../db/schema.js';
import { asyncHandler } from '../middleware/common.js';

export const hotelsRouter = Router();

hotelsRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    const rows = await db.select().from(hotels).orderBy(hotels.createdAt);
    res.json(rows);
  })
);

hotelsRouter.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const [hotel] = await db.select().from(hotels).where(eq(hotels.slug, req.params.slug)).limit(1);
    if (!hotel) return res.status(404).json({ error: 'Hotel not found.' });
    res.json(hotel);
  })
);
