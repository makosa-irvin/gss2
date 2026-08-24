import { Router } from 'express';
import { desc, eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { testimonials } from '../db/schema.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { testimonialInputSchema, testimonialUpdateSchema } from '../lib/validation.js';

export const adminTestimonialsRouter = Router();
adminTestimonialsRouter.use(requireAdmin);

adminTestimonialsRouter.get('/', asyncHandler(async (_req, res) => {
  res.json(await db.select().from(testimonials).orderBy(desc(testimonials.date)));
}));

adminTestimonialsRouter.post('/', validateBody(testimonialInputSchema), asyncHandler(async (req, res) => {
  const [created] = await db.insert(testimonials).values(req.body).returning();
  res.status(201).json(created);
}));

adminTestimonialsRouter.put('/:id', validateBody(testimonialUpdateSchema), asyncHandler(async (req, res) => {
  const [updated] = await db.update(testimonials).set(req.body).where(eq(testimonials.id, req.params.id)).returning();
  if (!updated) return res.status(404).json({ error: 'Testimonial not found.' });
  res.json(updated);
}));

adminTestimonialsRouter.delete('/:id', asyncHandler(async (req, res) => {
  const [deleted] = await db.delete(testimonials).where(eq(testimonials.id, req.params.id)).returning();
  if (!deleted) return res.status(404).json({ error: 'Testimonial not found.' });
  res.status(204).end();
}));
