import { afterEach, describe, expect, it, vi } from 'vitest';
import type { enquiries } from '../db/schema.js';

type Enquiry = typeof enquiries.$inferSelect;

// `email.ts` reads `env` and constructs its Resend client once, at module
// load time (`const resend = env.RESEND_API_KEY ? new Resend(...) : null`).
// The existing email.test.ts only ever exercises the "unconfigured" branch,
// because the shared `env` singleton never has RESEND_API_KEY set in CI.
// To reach the actual send/render code - the reason this file dropped
// backend coverage below the pinned thresholds - each test here mocks
// '../config/env.js' and 'resend', then re-imports '../lib/email.js' fresh
// via vi.resetModules() so the module is rebuilt against that test's env.
const sendMock = vi.fn();

vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(function MockResend() {
    return { emails: { send: sendMock } };
  }),
}));

async function loadEmailModule(envOverrides: Record<string, string | undefined>) {
  vi.resetModules();
  vi.doMock('../config/env.js', async () => {
    const actual = await vi.importActual<typeof import('../config/env.js')>('../config/env.js');
    return { ...actual, env: { ...actual.env, ...envOverrides } };
  });
  return import('../lib/email.js');
}

function buildEnquiry(overrides: Partial<Enquiry> = {}): Enquiry {
  return {
    id: 'enquiry-notify-test',
    fullName: 'Amara Test Traveler',
    email: 'amara@example.test',
    phone: '+254700111222',
    country: 'Kenya',
    travelDates: '2027-05-10',
    durationDays: 8,
    adults: 2,
    children: 2,
    tourId: null,
    tourTitle: 'Serengeti Migration Safari',
    hotelId: null,
    hotelTitle: null,
    preferredDestination: 'Serengeti',
    safariType: 'Luxury',
    budget: 'USD 8,000-10,000',
    accommodationPreference: 'Luxury lodge',
    specialRequests: 'Vegetarian meals & a private guide, please.',
    hearAboutUs: 'Referral',
    status: 'New',
    notes: null,
    createdAt: new Date('2027-01-01T10:00:00.000Z'),
    updatedAt: new Date('2027-01-01T10:00:00.000Z'),
    contactedAt: null,
    quotedAt: null,
    confirmedAt: null,
    cancelledAt: null,
    ...overrides,
  };
}

afterEach(() => {
  sendMock.mockReset();
  vi.restoreAllMocks();
  vi.doUnmock('../config/env.js');
});

describe('enquiry notification sending (Resend configured)', () => {
  it('emails every configured staff recipient and the traveller, rendering trip details', async () => {
    sendMock.mockResolvedValue({ data: { id: 'mock-message-id' }, error: null });
    const { sendEnquiryNotifications } = await loadEmailModule({
      RESEND_API_KEY: 'test-resend-key',
      ENQUIRY_NOTIFY_EMAIL: ' staff-a@example.test , staff-b@example.test ',
      ENQUIRY_FROM_EMAIL: 'Good Secrets Safaris <notifications@example.test>',
    });

    const enquiry = buildEnquiry();
    await expect(sendEnquiryNotifications(enquiry)).resolves.toBeUndefined();

    expect(sendMock).toHaveBeenCalledTimes(2);

    const [staffCall, customerCall] = sendMock.mock.calls.map(([args]) => args);

    expect(staffCall.to).toEqual(['staff-a@example.test', 'staff-b@example.test']);
    expect(staffCall.replyTo).toBe(enquiry.email);
    expect(staffCall.subject).toContain(enquiry.fullName);
    expect(staffCall.subject).toContain(enquiry.tourTitle);
    expect(staffCall.html).toContain(enquiry.fullName);
    expect(staffCall.html).toContain('Vegetarian meals &amp; a private guide');
    expect(staffCall.text).toContain(`Reference: ${enquiry.id}`);
    expect(staffCall.text).toContain('Travellers: 2 adults, 2 children');

    expect(customerCall.to).toBe(enquiry.email);
    expect(customerCall.replyTo).toBe('staff-a@example.test');
    expect(customerCall.subject).toContain(enquiry.id);
    expect(customerCall.html).toContain('We received your enquiry');
    expect(customerCall.html).toContain(enquiry.tourTitle);
    expect(customerCall.text).toContain(`Travel dates: ${enquiry.travelDates}`);
  });

  it('falls back to general labels and omits empty sections when trip details are minimal', async () => {
    sendMock.mockResolvedValue({ data: { id: 'mock-message-id' }, error: null });
    const { sendEnquiryNotifications } = await loadEmailModule({
      RESEND_API_KEY: 'test-resend-key',
      ENQUIRY_NOTIFY_EMAIL: 'staff-a@example.test',
      ENQUIRY_FROM_EMAIL: 'Good Secrets Safaris <notifications@example.test>',
    });

    const enquiry = buildEnquiry({
      tourTitle: null,
      hotelTitle: null,
      preferredDestination: null,
      safariType: null,
      budget: null,
      accommodationPreference: null,
      hearAboutUs: null,
      specialRequests: null,
      travelDates: null,
      durationDays: null,
      children: 0,
    });

    await sendEnquiryNotifications(enquiry);

    const [staffCall, customerCall] = sendMock.mock.calls.map(([args]) => args);

    expect(staffCall.subject).toContain('General Enquiry');
    expect(staffCall.html).not.toContain('special requests');
    expect(staffCall.text).toContain('Travel dates: Flexible');
    expect(staffCall.text).toContain('Travellers: 2 adults');
    expect(staffCall.text).not.toContain('adults,');

    expect(customerCall.html).toContain('Tailor-made safari enquiry');
    expect(customerCall.text).not.toContain('Travel dates:');
  });

  it('skips the staff email but still notifies the traveller when no valid recipients remain', async () => {
    sendMock.mockResolvedValue({ data: { id: 'mock-message-id' }, error: null });
    const { sendEnquiryNotifications } = await loadEmailModule({
      RESEND_API_KEY: 'test-resend-key',
      ENQUIRY_NOTIFY_EMAIL: ' , , ',
      ENQUIRY_FROM_EMAIL: 'Good Secrets Safaris <notifications@example.test>',
    });

    await sendEnquiryNotifications(buildEnquiry());

    expect(sendMock).toHaveBeenCalledTimes(1);
    const [customerCall] = sendMock.mock.calls[0]!;
    expect(customerCall.replyTo).toBeUndefined();
  });

  it('logs a staff-notification failure but still attempts the traveller confirmation', async () => {
    sendMock
      .mockRejectedValueOnce(new Error('resend staff send failed'))
      .mockResolvedValueOnce({ data: { id: 'mock-message-id' }, error: null });
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const { sendEnquiryNotifications } = await loadEmailModule({
      RESEND_API_KEY: 'test-resend-key',
      ENQUIRY_NOTIFY_EMAIL: 'staff-a@example.test',
      ENQUIRY_FROM_EMAIL: 'Good Secrets Safaris <notifications@example.test>',
    });

    const enquiry = buildEnquiry();
    await expect(sendEnquiryNotifications(enquiry)).resolves.toBeUndefined();

    expect(sendMock).toHaveBeenCalledTimes(2);
    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(String(errorSpy.mock.calls[0]?.[0])).toContain(enquiry.id);
    expect(String(errorSpy.mock.calls[0]?.[0])).toContain('staff notification');
  });

  it('logs a traveller-confirmation failure after a successful staff notification', async () => {
    sendMock
      .mockResolvedValueOnce({ data: { id: 'mock-message-id' }, error: null })
      .mockRejectedValueOnce(new Error('resend customer send failed'));
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const { sendEnquiryNotifications } = await loadEmailModule({
      RESEND_API_KEY: 'test-resend-key',
      ENQUIRY_NOTIFY_EMAIL: 'staff-a@example.test',
      ENQUIRY_FROM_EMAIL: 'Good Secrets Safaris <notifications@example.test>',
    });

    const enquiry = buildEnquiry();
    await expect(sendEnquiryNotifications(enquiry)).resolves.toBeUndefined();

    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(String(errorSpy.mock.calls[0]?.[0])).toContain(enquiry.id);
    expect(String(errorSpy.mock.calls[0]?.[0])).toContain('customer confirmation');
  });
});
