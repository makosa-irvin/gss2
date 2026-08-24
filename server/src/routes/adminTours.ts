import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { tours } from '../db/schema.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { tourInputSchema, tourUpdateSchema } from '../lib/validation.js';

export const adminToursRouter = Router();
adminToursRouter.use(requireAdmin);
adminToursRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    res.json(await db.select().from(tours).orderBy(tours.createdAt));
  })
);


adminToursRouter.post(
  '/',
  validateBody(tourInputSchema),
  asyncHandler(async (req, res) => {
    const existing = await db.select().from(tours).where(eq(tours.slug, req.body.slug)).limit(1);
    if (existing.length > 0) {
      return res.status(409).json({ error: `A tour with slug "${req.body.slug}" already exists.` });
    }

    const [created] = await db.insert(tours).values(req.body).returning();
    res.status(201).json(created);
  })
);

adminToursRouter.put(
  '/:id',
  validateBody(tourUpdateSchema),
  asyncHandler(async (req, res) => {
    if (req.body.slug) {
      const existing = await db.select().from(tours).where(eq(tours.slug, req.body.slug)).limit(1);
      if (existing.length > 0 && existing[0].id !== req.params.id) {
        return res.status(409).json({ error: `A tour with slug "${req.body.slug}" already exists.` });
      }
    }

    const [updated] = await db
      .update(tours)
      .set({ ...req.body, updatedAt: new Date() })
      .where(eq(tours.id, req.params.id))
      .returning();
    if (!updated) return res.status(404).json({ error: 'Tour not found.' });
    res.json(updated);
  })
);

adminToursRouter.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const [deleted] = await db.delete(tours).where(eq(tours.id, req.params.id)).returning();
    if (!deleted) return res.status(404).json({ error: 'Tour not found.' });
    res.status(204).end();
  })
);
