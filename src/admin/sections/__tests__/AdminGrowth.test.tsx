import React from 'react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '../../../test/test-utils';
import { AdminGrowth } from '../AdminGrowth';
import type { Enquiry } from '../../../types';

const NOW = new Date('2026-08-30T12:00:00.000Z').getTime();

const growthResponse = {
  days: 30,
  currentStart: '2026-07-31T12:00:00.000Z',
  previousStart: '2026-07-01T12:00:00.000Z',
  generatedAt: '2026-08-30T12:00:00.000Z',
  current: {
    visitors: 10,
    pageViews: 32,
    shortlistAdds: 4,
    enquiryOpens: 5,
    enquirySubmits: 3,
    whatsappClicks: 2,
    topPages: [{ label: '/safaris', value: 12 }],
    sources: [{ label: 'google / organic', value: 7 }],
    campaigns: [{ label: 'usa-fall', value: 3 }],
  },
  previous: {
    visitors: 5,
    pageViews: 20,
    shortlistAdds: 2,
    enquiryOpens: 3,
    enquirySubmits: 2,
    whatsappClicks: 1,
    topPages: [],
    sources: [],
    campaigns: [],
  },
};

const enquiries: Enquiry[] = [
  {
    id: 'enq-google',
    fullName: 'Amina Traveler',
    email: 'amina@example.com',
    phone: '+254700000001',
    country: 'Kenya',
    travelDates: 'January 2027',
    numberOfTravelers: { adults: 2, children: 0 },
    tourTitle: 'Maasai Mara Explorer',
    preferredDestination: 'Maasai Mara',
    safariType: 'Private safari',
    budget: 'USD 4,000–6,000',
    accommodationPreference: 'Luxury lodge',
    specialRequests: '',
    hearAboutUs: '',
    marketingAttribution: {
      source: 'google',
      medium: 'organic',
      landingPage: '/safaris',
      firstTouchAt: '2026-08-20T09:00:00.000Z',
    },
    status: 'Confirmed',
    createdAt: '2026-08-20T09:00:00.000Z',
  },
  {
    id: 'enq-safaribookings',
    fullName: 'Jordan Guest',
    email: 'jordan@example.com',
    phone: '+15550000002',
    country: 'United States',
    travelDates: 'Flexible',
    numberOfTravelers: { adults: 2, children: 0 },
    preferredDestination: 'Amboseli',
    safariType: 'Safari and beach',
    budget: 'USD 8,000–10,000',
    accommodationPreference: 'Luxury',
    specialRequests: '',
    hearAboutUs: 'SafariBookings',
    marketingAttribution: {
      source: 'safaribookings',
      medium: 'referral',
      landingPage: '/safaris',
      firstTouchAt: '2026-08-25T09:00:00.000Z',
    },
    status: 'Quoted',
    createdAt: '2026-08-25T09:00:00.000Z',
  },
  {
    id: 'enq-previous',
    fullName: 'Previous Lead',
    email: 'previous@example.com',
    phone: '+15550000003',
    country: 'United States',
    travelDates: 'Flexible',
    numberOfTravelers: { adults: 1, children: 0 },
    preferredDestination: 'Kenya',
    safariType: 'Private safari',
    budget: 'Not sure yet',
    accommodationPreference: 'Midrange',
    specialRequests: '',
    hearAboutUs: 'Referral',
    status: 'Contacted',
    createdAt: '2026-07-15T09:00:00.000Z',
  },
];

function installGrowthFetch(response = growthResponse, ok = true) {
  const fetchMock = vi.fn().mockResolvedValue({
    ok,
    status: ok ? 200 : 500,
    json: async () => ok ? response : { error: 'Analytics unavailable' },
  } as Response);
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

describe('AdminGrowth', () => {
  beforeEach(() => {
    vi.spyOn(Date, 'now').mockReturnValue(NOW);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders visitor, CRM funnel and ranked growth metrics', async () => {
    installGrowthFetch();
    render(<AdminGrowth enquiries={enquiries} />);

    expect(screen.getByText('Loading growth metrics…')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('10')).toBeInTheDocument());

    expect(screen.getByText('Website growth')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('Maasai Mara Explorer')).toBeInTheDocument();
    expect(screen.getByText('/safaris')).toBeInTheDocument();
    expect(screen.getByText('usa-fall')).toBeInTheDocument();
    expect(screen.getByText('google / organic')).toBeInTheDocument();
  });

  it('reloads analytics when the date window changes', async () => {
    const fetchMock = installGrowthFetch();
    const user = userEvent.setup();
    render(<AdminGrowth enquiries={enquiries} />);

    await waitFor(() => expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:4000/api/analytics/growth?days=30',
      expect.objectContaining({ method: 'GET', credentials: 'include' }),
    ));

    await user.click(screen.getByRole('button', { name: '7 days' }));
    await waitFor(() => expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:4000/api/analytics/growth?days=7',
      expect.objectContaining({ method: 'GET', credentials: 'include' }),
    ));
    expect(screen.getByText('7-day cohort')).toBeInTheDocument();
  });

  it('keeps CRM metrics available when visitor analytics fail', async () => {
    installGrowthFetch(growthResponse, false);
    render(<AdminGrowth enquiries={enquiries} />);

    expect(await screen.findByText(/Could not load visitor analytics/i)).toBeInTheDocument();
    expect(screen.getByText('Website-led share')).toBeInTheDocument();
    expect(screen.getByText('Maasai Mara Explorer')).toBeInTheDocument();
    expect(screen.getByText('No consented page-view data in this period yet.')).toBeInTheDocument();
  });
});
