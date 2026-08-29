import { afterEach, describe, expect, it, vi } from 'vitest';
import type { enquiries } from '../db/schema.js';
import { sendEnquiryNotifications } from '../lib/email.js';

type Enquiry = typeof enquiries.$inferSelect;

const enquiry: Enquiry = {
  id: 'enquiry-email-test-1',
  fullName: 'Private Test Traveler',
  email: 'private-traveler@example.test',
  phone: '+254700123456',
  country: 'Kenya',
  travelDates: '2027-03-10',
  durationDays: 6,
  adults: 2,
  children: 1,
  tourId: null,
  tourTitle: 'Private Test Safari',
  hotelId: null,
  hotelTitle: null,
  preferredDestination: 'Masai Mara',
  safariType: 'Luxury',
  budget: 'USD 5,000-7,500',
  accommodationPreference: 'Luxury lodge',
  specialRequests: 'Private medical/dietary request that must not reach logs',
  hearAboutUs: 'Referral',
  status: 'New',
  notes: null,
  createdAt: new Date('2027-01-01T10:00:00.000Z'),
  updatedAt: new Date('2027-01-01T10:00:00.000Z'),
  contactedAt: null,
  quotedAt: null,
  confirmedAt: null,
  cancelledAt: null,
};

afterEach(() => {
  vi.restoreAllMocks();
});

describe('enquiry notification logging', () => {
  it('keeps the saved enquiry successful when email is unconfigured without logging customer contact details', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const info = vi.spyOn(console, 'info').mockImplementation(() => undefined);

    await expect(sendEnquiryNotifications(enquiry)).resolves.toBeUndefined();

    expect(warn).toHaveBeenCalledTimes(1);
    expect(String(warn.mock.calls[0]?.[0])).toContain(enquiry.id);

    expect(info).toHaveBeenCalledTimes(1);
    const loggedArguments = JSON.stringify(info.mock.calls);

    expect(loggedArguments).toContain(enquiry.id);
    expect(loggedArguments).toContain(enquiry.tourTitle!);
    expect(loggedArguments).not.toContain(enquiry.fullName);
    expect(loggedArguments).not.toContain(enquiry.email);
    expect(loggedArguments).not.toContain(enquiry.phone);
    expect(loggedArguments).not.toContain(enquiry.specialRequests);
  });
});
