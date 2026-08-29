import { Resend } from 'resend';
import type { enquiries } from '../db/schema.js';
import { env } from '../config/env.js';

type Enquiry = typeof enquiries.$inferSelect;

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;
const FROM = env.ENQUIRY_FROM_EMAIL;
const NOTIFY_TO = env.ENQUIRY_NOTIFY_EMAIL;

/**
 * Sends two best-effort messages after an enquiry is persisted:
 * 1. an internal lead notification to every address in ENQUIRY_NOTIFY_EMAIL;
 * 2. an acknowledgement to the traveller.
 *
 * ENQUIRY_NOTIFY_EMAIL accepts a comma-separated list, e.g.
 * info@goodsecretssafaris.com,admin@goodsecretssafaris.com.
 * Email delivery never determines whether an enquiry is considered saved.
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

  const recipients = NOTIFY_TO.split(',').map((value) => value.trim()).filter(Boolean);
  const subjectSuffix = enquiry.tourTitle || enquiry.hotelTitle || enquiry.preferredDestination || enquiry.safariType || 'General Enquiry';

  if (recipients.length > 0) {
    try {
      await resend.emails.send({
        from: FROM,
        to: recipients,
        replyTo: enquiry.email,
        subject: `New safari enquiry: ${enquiry.fullName} — ${subjectSuffix}`,
        html: renderStaffNotificationHtml(enquiry),
        text: renderStaffNotificationText(enquiry),
      });
    } catch (err) {
      console.error(`[email] Failed to send staff notification for enquiry ${enquiry.id}:`, err);
    }
  }

  try {
    await resend.emails.send({
      from: FROM,
      to: enquiry.email,
      replyTo: recipients[0] || undefined,
      subject: `We received your safari enquiry — ${enquiry.id}`,
      html: renderCustomerConfirmationHtml(enquiry),
      text: renderCustomerConfirmationText(enquiry),
    });
  } catch (err) {
    console.error(`[email] Failed to send customer confirmation for enquiry ${enquiry.id}:`, err);
  }
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function tripSummary(e: Enquiry): string {
  return e.tourTitle || e.hotelTitle || e.preferredDestination || e.safariType || 'Tailor-made safari enquiry';
}

function renderStaffNotificationHtml(e: Enquiry): string {
  const row = (label: string, value: string | number | null | undefined) =>
    value !== null && value !== undefined && String(value).trim()
      ? `<tr><td style="padding:5px 14px 5px 0;color:#5d6e62;font-size:13px;vertical-align:top;">${label}</td><td style="padding:5px 0;font-size:13px;color:#161f19;"><strong>${escapeHtml(String(value))}</strong></td></tr>`
      : '';

  return `<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#161f19;">
    <div style="border-bottom:3px solid #9e7120;padding-bottom:14px;margin-bottom:20px;"><div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#9e7120;font-weight:700;">Good Secrets Safaris CRM</div><h2 style="margin:6px 0 0;">New safari enquiry</h2></div>
    <table style="border-collapse:collapse;width:100%;">
      ${row('Reference', e.id)}${row('Traveller', e.fullName)}${row('Email', e.email)}${row('Phone / WhatsApp', e.phone)}${row('Country', e.country)}${row('Trip', tripSummary(e))}${row('Tour', e.tourTitle)}${row('Stay', e.hotelTitle)}${row('Preferred destination', e.preferredDestination)}${row('Travel dates', e.travelDates)}${row('Duration', e.durationDays ? `${e.durationDays} days` : '')}${row('Travellers', `${e.adults} adults${e.children ? `, ${e.children} children` : ''}`)}${row('Budget', e.budget)}${row('Accommodation', e.accommodationPreference)}${row('Lead source', e.hearAboutUs)}
    </table>
    ${e.specialRequests ? `<div style="margin-top:20px;padding:14px;background:#f7f4ec;border-radius:10px;"><strong>Trip context & special requests</strong><div style="margin-top:7px;white-space:pre-wrap;color:#4d5c52;font-size:13px;line-height:1.55;">${escapeHtml(e.specialRequests)}</div></div>` : ''}
    <p style="margin-top:20px;font-size:12px;color:#6b776f;">Open the CRM to update the lead stage and record follow-up notes.</p>
  </div>`;
}

function renderStaffNotificationText(e: Enquiry): string {
  return [`New safari enquiry`, `Reference: ${e.id}`, `Traveller: ${e.fullName}`, `Email: ${e.email}`, `Phone: ${e.phone}`, `Trip: ${tripSummary(e)}`, `Travel dates: ${e.travelDates || 'Flexible'}`, `Travellers: ${e.adults} adults${e.children ? `, ${e.children} children` : ''}`, `Budget: ${e.budget || 'Not specified'}`, e.specialRequests ? `Trip context / requests: ${e.specialRequests}` : '', '', 'Open the Good Secrets Safaris CRM to manage this lead.'].filter(Boolean).join('\n');
}

function renderCustomerConfirmationHtml(e: Enquiry): string {
  return `<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#161f19;">
    <div style="border-bottom:3px solid #9e7120;padding-bottom:14px;margin-bottom:20px;"><div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#9e7120;font-weight:700;">Good Secrets Safaris</div><h2 style="margin:6px 0 0;">We received your enquiry</h2></div>
    <p style="font-size:15px;line-height:1.65;">Hi ${escapeHtml(e.fullName)},</p>
    <p style="font-size:15px;line-height:1.65;color:#4d5c52;">Thank you for getting in touch. Your safari enquiry has reached our team and we will review the details you shared before following up with you.</p>
    <div style="margin:22px 0;padding:16px;background:#f7f4ec;border-radius:10px;"><div style="font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#9e7120;font-weight:700;">Your enquiry</div><strong style="display:block;margin-top:6px;">${escapeHtml(tripSummary(e))}</strong>${e.travelDates ? `<div style="margin-top:7px;color:#5d6e62;font-size:13px;">Travel dates: ${escapeHtml(e.travelDates)}</div>` : ''}<div style="margin-top:7px;color:#5d6e62;font-size:13px;">Reference: ${escapeHtml(e.id)}</div></div>
    <p style="font-size:14px;line-height:1.65;color:#4d5c52;">You can reply directly to this email if you need to add anything to your enquiry.</p>
    <p style="font-size:14px;line-height:1.65;">Good Secrets Safaris<br/><span style="color:#6b776f;">East Africa safari planning</span></p>
  </div>`;
}

function renderCustomerConfirmationText(e: Enquiry): string {
  return `Hi ${e.fullName},\n\nThank you for getting in touch. We have received your safari enquiry and our team will review the details you shared before following up.\n\nTrip: ${tripSummary(e)}\n${e.travelDates ? `Travel dates: ${e.travelDates}\n` : ''}Reference: ${e.id}\n\nYou can reply directly to this email if you need to add anything.\n\nGood Secrets Safaris\nEast Africa safari planning`;
}
