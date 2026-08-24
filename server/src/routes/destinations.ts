import { Router } from 'express';
import { and, eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { destinations } from '../db/schema.js';
import { asyncHandler } from '../middleware/common.js';

export const destinationsRouter = Router();

destinationsRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    const rows = await db.select().from(destinations).where(eq(destinations.published, true)).orderBy(destinations.createdAt);
    res.json(rows);
  })
);

destinationsRouter.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const [destination] = await db
      .select()
      .from(destinations)
      .where(and(eq(destinations.slug, req.params.slug), eq(destinations.published, true)))
      .limit(1);
    if (!destination) return res.status(404).json({ error: 'Destination not found.' });
    res.json(destination);
  })
);
