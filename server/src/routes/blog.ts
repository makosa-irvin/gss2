import { Router } from 'express';
import { eq, desc } from 'drizzle-orm';
import { db } from '../db/client.js';
import { blogPosts } from '../db/schema.js';
import { asyncHandler } from '../middleware/common.js';

export const blogRouter = Router();

blogRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    const rows = await db.select().from(blogPosts).orderBy(desc(blogPosts.publishedDate));
    res.json(rows);
  })
);

blogRouter.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, req.params.slug)).limit(1);
    if (!post) return res.status(404).json({ error: 'Blog post not found.' });
    res.json(post);
  })
);
