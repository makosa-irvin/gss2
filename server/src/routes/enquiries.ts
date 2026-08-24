import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { eq, desc } from 'drizzle-orm';
import { db } from '../db/client.js';
import { enquiries } from '../db/schema.js';
import { asyncHandler, validateBody } from '../middleware/common.js';
import { requireAdmin } from '../middleware/requireAdmin.js';
import { enquirySchema, updateEnquiryStatusSchema } from '../lib/validation.js';
import { sendEnquiryNotifications } from '../lib/email.js';

export const enquiriesRouter = Router();

// Public form submission - the most spam/abuse-prone endpoint in the
// API, so it gets its own tighter limit on top of the global one.
const enquiryLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many enquiries submitted. Please try again later or contact us on WhatsApp.' },
});

enquiriesRouter.post(
  '/',
  enquiryLimiter,
  validateBody(enquirySchema),
  asyncHandler(async (req, res) => {
    const [created] = await db.insert(enquiries).values(req.body).returning();

    // The enquiry is already safely persisted at this point - email
    // notification is a best-effort side effect, not something that
    // should make the customer's submission look like it failed if their
    // network hiccups or the email provider is briefly down.
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
    const rows = await db.select().from(enquiries).orderBy(desc(enquiries.createdAt));
    res.json(rows);
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
    res.json(updated);
  })
);
