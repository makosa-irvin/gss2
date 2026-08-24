import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/client.js';
import { companySettings } from '../db/schema.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { settingsUpdateSchema } from '../lib/validation.js';

export const settingsRouter = Router();

settingsRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    const [settings] = await db
      .select()
      .from(companySettings)
      .where(eq(companySettings.id, 'singleton'))
      .limit(1);
    if (!settings) return res.status(404).json({ error: 'Settings not configured yet.' });
    res.json(settings);
  })
);

settingsRouter.put(
  '/',
  requireAdmin,
  validateBody(settingsUpdateSchema),
  asyncHandler(async (req, res) => {
    const [updated] = await db
      .update(companySettings)
      .set({ ...req.body, updatedAt: new Date() })
      .where(eq(companySettings.id, 'singleton'))
      .returning();
    res.json(updated);
  })
);
