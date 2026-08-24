import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { destinations } from '../db/schema.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { destinationInputSchema, destinationUpdateSchema } from '../lib/validation.js';

export const adminDestinationsRouter = Router();
adminDestinationsRouter.use(requireAdmin);

adminDestinationsRouter.get('/', asyncHandler(async (_req, res) => {
  res.json(await db.select().from(destinations).orderBy(destinations.createdAt));
}));

adminDestinationsRouter.post('/', validateBody(destinationInputSchema), asyncHandler(async (req, res) => {
  const existing = await db.select().from(destinations).where(eq(destinations.slug, req.body.slug)).limit(1);
  if (existing.length) return res.status(409).json({ error: `A destination with slug "${req.body.slug}" already exists.` });
  const [created] = await db.insert(destinations).values(req.body).returning();
  res.status(201).json(created);
}));

adminDestinationsRouter.put('/:id', validateBody(destinationUpdateSchema), asyncHandler(async (req, res) => {
  if (req.body.slug) {
    const existing = await db.select().from(destinations).where(eq(destinations.slug, req.body.slug)).limit(1);
    if (existing.length && existing[0].id !== req.params.id) return res.status(409).json({ error: `A destination with slug "${req.body.slug}" already exists.` });
  }
  const [updated] = await db.update(destinations).set({ ...req.body, updatedAt: new Date() }).where(eq(destinations.id, req.params.id)).returning();
  if (!updated) return res.status(404).json({ error: 'Destination not found.' });
  res.json(updated);
}));

adminDestinationsRouter.delete('/:id', asyncHandler(async (req, res) => {
  const [deleted] = await db.delete(destinations).where(eq(destinations.id, req.params.id)).returning();
  if (!deleted) return res.status(404).json({ error: 'Destination not found.' });
  res.status(204).end();
}));
