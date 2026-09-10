import { Router } from 'express';
import { db } from '../db/client.js';
import { testimonials } from '../db/schema.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { reviewSubmissionSchema } from '../lib/validation.js';

export const reviewsRouter = Router();

reviewsRouter.post(
  '/',
  validateBody(reviewSubmissionSchema),
  asyncHandler(async (req, res) => {
    const [created] = await db
      .insert(testimonials)
      .values({
        ...req.body,
        avatarUrl: '',
        date: new Date(),
        featured: false,
        platform: 'Direct Feedback',
        published: false,
      })
      .returning({ id: testimonials.id });

    res.status(201).json({ id: created.id, status: 'pending' });
  })
);
