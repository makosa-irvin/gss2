import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { and, gte, lt } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../db/client.js';
import { analyticsEvents } from '../db/analyticsSchema.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { requireAdmin } from '../middleware/requireAdmin.js';

export const analyticsRouter = Router();

const acceptedEvents = [
  'page_view',
  'shortlist_added',
  'shortlist_removed',
  'shortlist_cleared',
  'enquiry_opened',
  'enquiry_submitted',
  'whatsapp_clicked',
] as const;

const analyticsEventSchema = z.object({
  sessionId: z.string().min(12).max(100),
  eventName: z.enum(acceptedEvents),
  pagePath: z.string().max(1000).optional(),
  source: z.string().max(200).default('direct'),
  medium: z.string().max(100).default('(none)'),
  campaign: z.string().max(300).optional(),
  metadata: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).default({}),
});

const eventLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Analytics rate limit exceeded.' },
});

analyticsRouter.post(
  '/events',
  eventLimiter,
  validateBody(analyticsEventSchema),
  asyncHandler(async (req, res) => {
    const { sessionId, eventName, pagePath, source, medium, campaign, metadata } = req.body;
    await db.insert(analyticsEvents).values({
      sessionId,
      eventName,
      pagePath: pagePath ?? null,
      source,
      medium,
      campaign: campaign ?? null,
      metadata,
    });
    res.status(204).end();
  })
);

type EventRow = typeof analyticsEvents.$inferSelect;

function summarize(rows: EventRow[]) {
  const sessions = new Set(rows.map((row) => row.sessionId));
  const count = (eventName: string) => rows.filter((row) => row.eventName === eventName).length;

  const pageCounts = new Map<string, number>();
  const sourceCounts = new Map<string, number>();
  const campaignCounts = new Map<string, number>();

  for (const row of rows) {
    if (row.eventName === 'page_view' && row.pagePath) {
      pageCounts.set(row.pagePath, (pageCounts.get(row.pagePath) ?? 0) + 1);
    }
    const sourceLabel = `${row.source} / ${row.medium}`;
    sourceCounts.set(sourceLabel, (sourceCounts.get(sourceLabel) ?? 0) + 1);
    if (row.campaign) campaignCounts.set(row.campaign, (campaignCounts.get(row.campaign) ?? 0) + 1);
  }

  const top = (values: Map<string, number>, limit = 8) =>
    [...values.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([label, value]) => ({ label, value }));

  return {
    visitors: sessions.size,
    pageViews: count('page_view'),
    shortlistAdds: count('shortlist_added'),
    enquiryOpens: count('enquiry_opened'),
    enquirySubmits: count('enquiry_submitted'),
    whatsappClicks: count('whatsapp_clicked'),
    topPages: top(pageCounts),
    sources: top(sourceCounts),
    campaigns: top(campaignCounts),
  };
}

analyticsRouter.get(
  '/growth',
  requireAdmin,
  asyncHandler(async (req, res) => {
    const requestedDays = Number(req.query.days ?? 30);
    const days = [7, 30, 90].includes(requestedDays) ? requestedDays : 30;
    const now = new Date();
    const currentStart = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    const previousStart = new Date(currentStart.getTime() - days * 24 * 60 * 60 * 1000);

    const rows = await db
      .select()
      .from(analyticsEvents)
      .where(and(gte(analyticsEvents.createdAt, previousStart), lt(analyticsEvents.createdAt, now)));

    const current = rows.filter((row) => row.createdAt >= currentStart);
    const previous = rows.filter((row) => row.createdAt < currentStart);

    res.json({
      days,
      currentStart: currentStart.toISOString(),
      previousStart: previousStart.toISOString(),
      generatedAt: now.toISOString(),
      current: summarize(current),
      previous: summarize(previous),
    });
  })
);
