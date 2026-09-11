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
  // Images stay small (5MB cap below), but a short hero background video
  // can legitimately be tens of MB once base64-encoded - this schema-level
  // cap just needs to be at least as large as the video cap; the real
  // per-type limits are enforced after decoding, below.
  dataUrl: z.string().max(80_000_000),
});

const supportedTypes: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'video/mp4': 'mp4',
  'video/webm': 'webm',
};
const videoTypes = new Set(['video/mp4', 'video/webm']);

export const adminUploadsRouter = Router();
adminUploadsRouter.use(requireAdmin);

adminUploadsRouter.post(
  '/',
  validateBody(uploadSchema),
  asyncHandler(async (req, res) => {
    const match = /^data:(image\/(?:jpeg|png|webp|gif)|video\/(?:mp4|webm));base64,([A-Za-z0-9+/=]+)$/.exec(req.body.dataUrl);
    if (!match || !supportedTypes[match[1]]) {
      return res.status(400).json({ error: 'Only JPEG, PNG, WebP, GIF images or MP4/WebM video are supported.' });
    }

    const isVideo = videoTypes.has(match[1]);
    const bytes = Buffer.from(match[2], 'base64');
    const maxBytes = isVideo ? 40 * 1024 * 1024 : 5 * 1024 * 1024;
    if (bytes.length > maxBytes) {
      return res.status(413).json({ error: isVideo ? 'Video must be 40 MB or smaller.' : 'Image must be 5 MB or smaller.' });
    }

    const uploadDir = path.resolve(env.UPLOAD_DIR);
    await mkdir(uploadDir, { recursive: true });
    const fileName = `${Date.now()}-${createId()}.${supportedTypes[match[1]]}`;
    await writeFile(path.join(uploadDir, fileName), bytes, { flag: 'wx' });

    const base = env.PUBLIC_API_URL?.replace(/\/$/, '') || `${req.protocol}://${req.get('host')}`;
    res.status(201).json({ url: `${base}/uploads/${fileName}` });
  })
);
