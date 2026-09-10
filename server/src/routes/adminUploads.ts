import { Router } from 'express';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';
import { env } from '../config/env.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { createId } from '../lib/id.js';

const uploadSchema = z.object({
  fileName: z.string().trim().min(1).max(255),
  dataUrl: z.string().max(7_500_000),
});

const supportedTypes: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
};

export const adminUploadsRouter = Router();
adminUploadsRouter.use(requireAdmin);

adminUploadsRouter.post(
  '/',
  validateBody(uploadSchema),
  asyncHandler(async (req, res) => {
    const match = /^data:(image\/(?:jpeg|png|webp|gif));base64,([A-Za-z0-9+/=]+)$/.exec(req.body.dataUrl);
    if (!match || !supportedTypes[match[1]]) {
      return res.status(400).json({ error: 'Only JPEG, PNG, WebP, and GIF images are supported.' });
    }

    const bytes = Buffer.from(match[2], 'base64');
    if (bytes.length > 5 * 1024 * 1024) {
      return res.status(413).json({ error: 'Image must be 5 MB or smaller.' });
    }

    const uploadDir = path.resolve(env.UPLOAD_DIR);
    await mkdir(uploadDir, { recursive: true });
    const fileName = `${Date.now()}-${createId()}.${supportedTypes[match[1]]}`;
    await writeFile(path.join(uploadDir, fileName), bytes, { flag: 'wx' });

    const base = env.PUBLIC_API_URL?.replace(/\/$/, '') || `${req.protocol}://${req.get('host')}`;
    res.status(201).json({ url: `${base}/uploads/${fileName}` });
  })
);
