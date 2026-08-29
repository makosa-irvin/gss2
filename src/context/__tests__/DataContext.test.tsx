import React, { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataProvider, useData } from '../DataContext';
import type { Enquiry } from '../../types';
import { installMockApi } from '../../test/mockApi';

const enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'> = {
  fullName: 'Amina Test Traveler',
  email: 'amina@example.test',
  phone: '+254700000001',
  country: 'Kenya',
  travelDates: '2027-02-10',
  durationDays: 7,
  numberOfTravelers: {
    adults: 2,
    children: 1,
  },
  tourId: 'tour-test-1',
  tourTitle: 'Test Safari',
  preferredDestination: 'Masai Mara',
  safariType: 'Luxury',
  budget: 'USD 5,000-7,500',
  accommodationPreference: 'Luxury lodge',
  specialRequests: 'Vegetarian meals',
  hearAboutUs: 'Referral',
};

function EnquiryProbe() {
  const { addEnquiry, isLoading } = useData();
  const [createdId, setCreatedId] = useState('');

  return (
    <>
      <span>{isLoading ? 'loading' : 'ready'}</span>
      <button
        type="button"
        onClick={async () => {
          const created = await addEnquiry(enquiry);
          setCreatedId(created.id);
        }}
      >
        Submit enquiry
      </button>
      {createdId && <span>{createdId}</span>}
    </>
  );
}

describe('DataContext enquiry API mapping', () => {
  it('flattens traveler counts to the backend contract before posting an enquiry', async () => {
    const fetchMock = installMockApi({
      enquiryCreate: { status: 201, body: { id: 'enquiry-created-42' } },
    });
    const user = userEvent.setup();

    render(
      <DataProvider>
        <EnquiryProbe />
      </DataProvider>
    );

    await screen.findByText('ready');
    await user.click(screen.getByRole('button', { name: 'Submit enquiry' }));
    expect(await screen.findByText('enquiry-created-42')).toBeInTheDocument();

    const enquiryCall = fetchMock.mock.calls.find(([input, init]) =>
      String(input).endsWith('/api/enquiries') && init?.method === 'POST'
    );

    expect(enquiryCall).toBeTruthy();
    const [, requestInit] = enquiryCall!;
    const body = JSON.parse(String(requestInit?.body));

    expect(body).toMatchObject({
      fullName: enquiry.fullName,
      email: enquiry.email,
      adults: 2,
      children: 1,
      tourId: enquiry.tourId,
      preferredDestination: enquiry.preferredDestination,
    });
    expect(body).not.toHaveProperty('numberOfTravelers');
    expect(requestInit?.credentials).toBe('include');
    expect(requestInit?.headers).toMatchObject({ 'Content-Type': 'application/json' });
  });
});
