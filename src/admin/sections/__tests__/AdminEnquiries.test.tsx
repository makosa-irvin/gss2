import React from 'react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { AdminEnquiries } from '../AdminEnquiries';
import type { Enquiry } from '../../../types';
import { render, screen, waitFor } from '../../../test/test-utils';

const enquiries: Enquiry[] = [
  {
    id: 'enq-new',
    fullName: 'Amina Traveler',
    email: 'amina@example.com',
    phone: '+254700000001',
    country: 'Kenya',
    travelDates: 'January 2027',
    durationDays: 7,
    numberOfTravelers: { adults: 2, children: 1 },
    tourTitle: 'Maasai Mara Explorer',
    preferredDestination: 'Maasai Mara',
    safariType: 'Private safari',
    budget: 'USD 4,000–6,000',
    accommodationPreference: 'Luxury lodge',
    specialRequests: 'Vegetarian meals.',
    hearAboutUs: 'SafariBookings',
    status: 'New',
    createdAt: '2026-08-29T09:00:00.000Z',
    notes: '',
  },
  {
    id: 'enq-quoted',
    fullName: 'Jordan Guest',
    email: 'jordan@example.com',
    phone: '+15550000002',
    country: 'United States',
    travelDates: 'Flexible',
    numberOfTravelers: { adults: 2, children: 0 },
    hotelTitle: 'Safari Lodge Test',
    preferredDestination: 'Amboseli',
    safariType: 'Safari and beach',
    budget: 'USD 8,000–10,000',
    accommodationPreference: 'Luxury',
    specialRequests: '',
    hearAboutUs: 'Tripadvisor',
    status: 'Quoted',
    createdAt: '2026-08-28T09:00:00.000Z',
    notes: 'Proposal sent.',
  },
];

function renderCrm(overrides?: Partial<React.ComponentProps<typeof AdminEnquiries>>) {
  const onUpdateStatus = vi.fn().mockResolvedValue(undefined);
  const onDelete = vi.fn().mockResolvedValue(undefined);
  const onError = vi.fn();

  render(
    <AdminEnquiries
      enquiries={enquiries}
      onUpdateStatus={onUpdateStatus}
      onDelete={onDelete}
      onError={onError}
      {...overrides}
    />
  );

  return { onUpdateStatus, onDelete, onError };
}

describe('AdminEnquiries', () => {
  it('shows a clear empty state when no enquiries exist', () => {
    renderCrm({ enquiries: [] });

    expect(screen.getByRole('heading', { name: 'Enquiries' })).toBeInTheDocument();
    expect(screen.getByText('No enquiries yet.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'All (0)' })).toBeInTheDocument();
  });

  it('searches and filters the CRM list by customer and status', async () => {
    const user = userEvent.setup();
    renderCrm();

    expect(screen.getByText('Amina Traveler')).toBeInTheDocument();
    expect(screen.getByText('Jordan Guest')).toBeInTheDocument();

    await user.type(screen.getByRole('searchbox', { name: 'Search enquiries' }), 'jordan');
    expect(screen.queryByText('Amina Traveler')).not.toBeInTheDocument();
    expect(screen.getByText('Jordan Guest')).toBeInTheDocument();

    await user.clear(screen.getByRole('searchbox', { name: 'Search enquiries' }));
    await user.click(screen.getByRole('button', { name: 'New (1)' }));
    expect(screen.getByText('Amina Traveler')).toBeInTheDocument();
    expect(screen.queryByText('Jordan Guest')).not.toBeInTheDocument();
  });

  it('opens an enquiry and sends status changes through the CRM callback', async () => {
    const user = userEvent.setup();
    const { onUpdateStatus } = renderCrm();

    await user.click(screen.getByText('Amina Traveler'));

    expect(screen.getByText('amina@example.com')).toBeInTheDocument();
    expect(screen.getByText('2 adults, 1 children')).toBeInTheDocument();
    expect(screen.getByText('Vegetarian meals.')).toBeInTheDocument();

    const statusSelect = screen.getAllByRole('combobox').find((element) =>
      Array.from((element as HTMLSelectElement).options).some((option) => option.value === 'Contacted')
    );
    expect(statusSelect).toBeDefined();

    await user.selectOptions(statusSelect as HTMLSelectElement, 'Contacted');
    await waitFor(() => {
      expect(onUpdateStatus).toHaveBeenCalledWith('enq-new', 'Contacted', '');
    });
  });

  it('saves internal notes only after the note has changed', async () => {
    const user = userEvent.setup();
    const { onUpdateStatus } = renderCrm();

    await user.click(screen.getByText('Amina Traveler'));
    const saveButton = screen.getByRole('button', { name: /save note/i });
    expect(saveButton).toBeDisabled();

    const notes = screen.getByPlaceholderText(/not visible to the customer/i);
    await user.type(notes, 'Call again on Friday.');
    expect(saveButton).toBeEnabled();

    await user.click(saveButton);
    await waitFor(() => {
      expect(onUpdateStatus).toHaveBeenCalledWith('enq-new', 'New', 'Call again on Friday.');
    });
  });

  it('asks for confirmation before deleting an enquiry', async () => {
    const user = userEvent.setup();
    const { onDelete } = renderCrm();
    const confirm = vi.spyOn(window, 'confirm');

    await user.click(screen.getByText('Amina Traveler'));

    confirm.mockReturnValueOnce(false);
    await user.click(screen.getByRole('button', { name: 'Delete enquiry' }));
    expect(onDelete).not.toHaveBeenCalled();

    confirm.mockReturnValueOnce(true);
    await user.click(screen.getByRole('button', { name: 'Delete enquiry' }));
    await waitFor(() => expect(onDelete).toHaveBeenCalledWith('enq-new'));

    confirm.mockRestore();
  });
});
