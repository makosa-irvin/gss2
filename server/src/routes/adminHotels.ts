import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { hotels } from '../db/schema.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { hotelInputSchema, hotelUpdateSchema } from '../lib/validation.js';

export const adminHotelsRouter = Router();
adminHotelsRouter.use(requireAdmin);
adminHotelsRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    res.json(await db.select().from(hotels).orderBy(hotels.createdAt));
  })
);


adminHotelsRouter.post(
  '/',
  validateBody(hotelInputSchema),
  asyncHandler(async (req, res) => {
    const existing = await db.select().from(hotels).where(eq(hotels.slug, req.body.slug)).limit(1);
    if (existing.length > 0) {
      return res.status(409).json({ error: `A hotel with slug "${req.body.slug}" already exists.` });
    }

    const [created] = await db.insert(hotels).values(req.body).returning();
    res.status(201).json(created);
  })
);

adminHotelsRouter.put(
  '/:id',
  validateBody(hotelUpdateSchema),
  asyncHandler(async (req, res) => {
    if (req.body.slug) {
      const existing = await db.select().from(hotels).where(eq(hotels.slug, req.body.slug)).limit(1);
      if (existing.length > 0 && existing[0].id !== req.params.id) {
        return res.status(409).json({ error: `A hotel with slug "${req.body.slug}" already exists.` });
      }
    }

    const [updated] = await db
      .update(hotels)
      .set({ ...req.body, updatedAt: new Date() })
      .where(eq(hotels.id, req.params.id))
      .returning();
    if (!updated) return res.status(404).json({ error: 'Hotel not found.' });
    res.json(updated);
  })
);

adminHotelsRouter.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const [deleted] = await db.delete(hotels).where(eq(hotels.id, req.params.id)).returning();
    if (!deleted) return res.status(404).json({ error: 'Hotel not found.' });
    res.status(204).end();
  })
);
