import { Resend } from 'resend';
import type { enquiries } from '../db/schema.js';
import { env } from '../config/env.js';

type Enquiry = typeof enquiries.$inferSelect;

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;
const FROM = env.ENQUIRY_FROM_EMAIL;
const NOTIFY_TO = env.ENQUIRY_NOTIFY_EMAIL;

/**
 * Sends the business a notification email for a new enquiry, and a
 * confirmation email to the customer who submitted it. This is the fix
 * for the single biggest gap in the old app: enquiries used to only be
 * written to the submitting visitor's own browser localStorage, so the
 * business never actually received a single lead.
 *
 * Deliberately does NOT throw if email sending fails or isn't configured
 * - the enquiry is already safely saved in the database by the time this
 * is called (see routes/enquiries.ts), so a flaky email provider should
 * never cause the customer's submission to appear to fail. Failures are
 * logged loudly instead, since a silently-failing notification is exactly
 * the kind of bug that's easy to miss until a customer complains no one
 * replied to them.
 */
export async function sendEnquiryNotifications(enquiry: Enquiry): Promise<void> {
  if (!resend || !NOTIFY_TO) {
    console.warn(
      '[email] RESEND_API_KEY or ENQUIRY_NOTIFY_EMAIL not configured - ' +
        `enquiry ${enquiry.id} was saved to the database but no notification email was sent. ` +
        'Set both in server/.env before relying on this in production.'
    );
    // Keep diagnostics useful without putting customer contact details or
    // free-text requests into CI/production logs. The enquiry ID is enough
    // to retrieve the full record through the authenticated admin workflow.
    console.info('[email] Enquiry notification context:', {
      id: enquiry.id,
      tourTitle: enquiry.tourTitle,
      hotelTitle: enquiry.hotelTitle,
    });
    return;
  }

  const subjectSuffix = enquiry.tourTitle || enquiry.hotelTitle || enquiry.preferredDestination || 'General Enquiry';

  try {
    await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO.split(',').map((s) => s.trim()),
      replyTo: enquiry.email,
      subject: `New Enquiry: ${enquiry.fullName} - ${subjectSuffix}`,
      html: renderStaffNotificationHtml(enquiry),
    });
  } catch (err) {
    console.error(`[email] Failed to send staff notification for enquiry ${enquiry.id}:`, err);
  }

  try {
    await resend.emails.send({
      from: FROM,
      to: enquiry.email,
      subject: "We've received your enquiry - Good Secrets Safaris",
      html: renderCustomerConfirmationHtml(enquiry),
    });
  } catch (err) {
    console.error(`[email] Failed to send customer confirmation for enquiry ${enquiry.id}:`, err);
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderStaffNotificationHtml(e: Enquiry): string {
  const row = (label: string, value: string | number | null | undefined) =>
    value ? `<tr><td style="padding:4px 12px 4px 0;color:#5d6e62;font-size:13px;">${label}</td><td style="padding:4px 0;font-size:13px;"><strong>${escapeHtml(String(value))}</strong></td></tr>` : '';

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#161f19;">New Enquiry Received</h2>
      <table>
        ${row('Name', e.fullName)}
        ${row('Email', e.email)}
        ${row('Phone', e.phone)}
        ${row('Country', e.country)}
        ${row('Tour', e.tourTitle)}
        ${row('Hotel', e.hotelTitle)}
        ${row('Preferred destination', e.preferredDestination)}
        ${row('Safari type', e.safariType)}
        ${row('Travel dates', e.travelDates)}
        ${row('Duration (days)', e.durationDays)}
        ${row('Travelers', `${e.adults} adults, ${e.children} children`)}
        ${row('Budget', e.budget)}
        ${row('Accommodation preference', e.accommodationPreference)}
        ${row('Heard about us via', e.hearAboutUs)}
      </table>
      <p style="color:#5d6e62;font-size:13px;"><strong>Special requests:</strong><br/>${escapeHtml(e.specialRequests || 'None')}</p>
      <p style="color:#9e7120;font-size:12px;">Enquiry ID: ${e.id} - received ${e.createdAt.toISOString()}</p>
    </div>
  `;
}

function renderCustomerConfirmationHtml(e: Enquiry): string {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#161f19;">Thank you, ${escapeHtml(e.fullName)}!</h2>
      <p style="color:#4d5c52;font-size:14px;line-height:1.6;">
        We've received your enquiry${e.tourTitle ? ` about <strong>${escapeHtml(e.tourTitle)}</strong>` : ''}${e.hotelTitle ? ` regarding <strong>${escapeHtml(e.hotelTitle)}</strong>` : ''}
        and one of our safari specialists will get back to you shortly, usually within 24 hours.
      </p>
      <p style="color:#4d5c52;font-size:14px;">If your travel dates are approaching soon, feel free to reach us directly on WhatsApp for a faster response.</p>
      <p style="color:#9e7120;font-size:12px;">Reference: ${e.id}</p>
    </div>
  `;
}
