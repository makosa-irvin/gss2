import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { eq, desc } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../db/client.js';
import { enquiries } from '../db/schema.js';
import { enquiryAttribution, enquiryFollowUps } from '../db/crmSchema.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { enquirySchema, updateEnquiryStatusSchema } from '../lib/validation.js';
import { sendEnquiryNotifications } from '../lib/email.js';

export const enquiriesRouter = Router();

const enquiryLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many enquiries submitted. Please try again later or contact us on WhatsApp.' },
});

const followUpSchema = z.object({
  followUpAt: z.string().datetime().nullable(),
});

enquiriesRouter.post(
  '/',
  enquiryLimiter,
  validateBody(enquirySchema),
  asyncHandler(async (req, res) => {
    const { marketingAttribution, ...enquiryValues } = req.body;
    const created = await db.transaction(async (tx) => {
      const [row] = await tx.insert(enquiries).values(enquiryValues).returning();
      if (marketingAttribution) {
        await tx.insert(enquiryAttribution).values({
          enquiryId: row.id,
          source: marketingAttribution.source,
          medium: marketingAttribution.medium,
          campaign: marketingAttribution.campaign ?? null,
          term: marketingAttribution.term ?? null,
          content: marketingAttribution.content ?? null,
          referrer: marketingAttribution.referrer ?? null,
          landingPage: marketingAttribution.landingPage,
          firstTouchAt: new Date(marketingAttribution.firstTouchAt),
        });
      }
      return row;
    });
    sendEnquiryNotifications(created).catch((err) =>
      console.error(`Unexpected error sending notifications for enquiry ${created.id}:`, err)
    );
    res.status(201).json({ id: created.id });
  })
);

// Everything below is admin-only: viewing and managing submitted leads.
enquiriesRouter.get(
  '/',
  requireAdmin,
  asyncHandler(async (_req, res) => {
    const rows = await db
      .select({ enquiry: enquiries, followUpAt: enquiryFollowUps.followUpAt, attribution: enquiryAttribution })
      .from(enquiries)
      .leftJoin(enquiryFollowUps, eq(enquiries.id, enquiryFollowUps.enquiryId))
      .leftJoin(enquiryAttribution, eq(enquiries.id, enquiryAttribution.enquiryId))
      .orderBy(desc(enquiries.createdAt));
    res.json(rows.map(({ enquiry, followUpAt, attribution }) => ({
      ...enquiry,
      hearAboutUs: attribution
        ? `${attribution.source} / ${attribution.medium}${attribution.campaign ? ` · ${attribution.campaign}` : ''}`
        : enquiry.hearAboutUs,
      followUpAt,
      marketingAttribution: attribution ? {
        source: attribution.source,
        medium: attribution.medium,
        campaign: attribution.campaign,
        term: attribution.term,
        content: attribution.content,
        referrer: attribution.referrer,
        landingPage: attribution.landingPage,
        firstTouchAt: attribution.firstTouchAt.toISOString(),
      } : null,
    })));
  })
);

enquiriesRouter.put(
  '/:id/status',
  requireAdmin,
  validateBody(updateEnquiryStatusSchema),
  asyncHandler(async (req, res) => {
    const now = new Date();
    const lifecycleTimestamp =
      req.body.status === 'Contacted' ? { contactedAt: now } :
      req.body.status === 'Quoted' ? { quotedAt: now } :
      req.body.status === 'Confirmed' ? { confirmedAt: now } :
      req.body.status === 'Cancelled' ? { cancelledAt: now } : {};

    const [updated] = await db
      .update(enquiries)
      .set({ ...req.body, ...lifecycleTimestamp, updatedAt: now })
      .where(eq(enquiries.id, req.params.id))
      .returning();
    if (!updated) return res.status(404).json({ error: 'Enquiry not found.' });
    const [followUp] = await db.select().from(enquiryFollowUps).where(eq(enquiryFollowUps.enquiryId, req.params.id));
    res.json({ ...updated, followUpAt: followUp?.followUpAt ?? null });
  })
);

enquiriesRouter.put(
  '/:id/follow-up',
  requireAdmin,
  validateBody(followUpSchema),
  asyncHandler(async (req, res) => {
    const [existing] = await db.select({ id: enquiries.id }).from(enquiries).where(eq(enquiries.id, req.params.id));
    if (!existing) return res.status(404).json({ error: 'Enquiry not found.' });

    if (req.body.followUpAt === null) {
      await db.delete(enquiryFollowUps).where(eq(enquiryFollowUps.enquiryId, req.params.id));
      return res.json({ followUpAt: null });
    }

    const followUpAt = new Date(req.body.followUpAt);
    const [saved] = await db
      .insert(enquiryFollowUps)
      .values({ enquiryId: req.params.id, followUpAt })
      .onConflictDoUpdate({
        target: enquiryFollowUps.enquiryId,
        set: { followUpAt, updatedAt: new Date() },
      })
      .returning();
    res.json({ followUpAt: saved.followUpAt });
  })
);

enquiriesRouter.delete(
  '/:id',
  requireAdmin,
  asyncHandler(async (req, res) => {
    const [deleted] = await db.delete(enquiries).where(eq(enquiries.id, req.params.id)).returning();
    if (!deleted) return res.status(404).json({ error: 'Enquiry not found.' });
    res.status(204).end();
  })
);
