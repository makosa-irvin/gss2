import { Router } from 'express';
import { desc, eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { blogPosts } from '../db/schema.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { blogPostInputSchema, blogPostUpdateSchema } from '../lib/validation.js';

export const adminBlogRouter = Router();
adminBlogRouter.use(requireAdmin);

adminBlogRouter.get('/', asyncHandler(async (_req, res) => {
  res.json(await db.select().from(blogPosts).orderBy(desc(blogPosts.publishedDate)));
}));

adminBlogRouter.post('/', validateBody(blogPostInputSchema), asyncHandler(async (req, res) => {
  const existing = await db.select().from(blogPosts).where(eq(blogPosts.slug, req.body.slug)).limit(1);
  if (existing.length) return res.status(409).json({ error: `A blog post with slug "${req.body.slug}" already exists.` });
  const [created] = await db.insert(blogPosts).values(req.body).returning();
  res.status(201).json(created);
}));

adminBlogRouter.put('/:id', validateBody(blogPostUpdateSchema), asyncHandler(async (req, res) => {
  if (req.body.slug) {
    const existing = await db.select().from(blogPosts).where(eq(blogPosts.slug, req.body.slug)).limit(1);
    if (existing.length && existing[0].id !== req.params.id) return res.status(409).json({ error: `A blog post with slug "${req.body.slug}" already exists.` });
  }
  const [updated] = await db.update(blogPosts).set({ ...req.body, updatedAt: new Date() }).where(eq(blogPosts.id, req.params.id)).returning();
  if (!updated) return res.status(404).json({ error: 'Blog post not found.' });
  res.json(updated);
}));

adminBlogRouter.delete('/:id', asyncHandler(async (req, res) => {
  const [deleted] = await db.delete(blogPosts).where(eq(blogPosts.id, req.params.id)).returning();
  if (!deleted) return res.status(404).json({ error: 'Blog post not found.' });
  res.status(204).end();
}));
