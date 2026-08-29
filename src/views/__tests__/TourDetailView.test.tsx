import { beforeEach, describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test/test-utils';
import { makeTour } from '../../test/fixtures';
import { installMockApi } from '../../test/mockApi';
import { TourDetailView } from '../TourDetailView';

/**
 * Regression tests for the TourDetailView crash fixed on
 * fix/inital-audit: the "Included / Excluded" section used to read
 * `tour.included` / `tour.excluded`, neither of which exists on the Tour
 * type (the real fields are `includedServices`, `includedActivities`, and
 * `exclusions`). Calling `.map()` on `undefined` crashed every tour detail
 * page unconditionally.
 */
describe('TourDetailView', () => {
  const noop = () => {};

  beforeEach(() => {
    installMockApi();
  });

  it('renders without crashing for a fully-populated tour', () => {
    const tour = makeTour();
    renderWithProviders(
      <TourDetailView tour={tour} onBack={noop} onOpenEnquiryModal={noop} />
    );
    expect(screen.getByRole('heading', { name: tour.title, level: 1 })).toBeInTheDocument();
  });

  it('renders included services and activities together under "What Is Included"', () => {
    const tour = makeTour({
      includedServices: ['Park entrance fees', 'Airport transfers'],
      includedActivities: ['Game drives'],
    });
    renderWithProviders(
      <TourDetailView tour={tour} onBack={noop} onOpenEnquiryModal={noop} />
    );

    expect(screen.getByText('What Is Included')).toBeInTheDocument();
    expect(screen.getByText('Park entrance fees')).toBeInTheDocument();
    expect(screen.getByText('Airport transfers')).toBeInTheDocument();
    expect(screen.getByText('Game drives')).toBeInTheDocument();
  });

  it('renders exclusions under "What Is Excluded"', () => {
    const tour = makeTour({ exclusions: ['International flights', 'Travel insurance'] });
    renderWithProviders(
      <TourDetailView tour={tour} onBack={noop} onOpenEnquiryModal={noop} />
    );

    expect(screen.getByText('What Is Excluded')).toBeInTheDocument();
    expect(screen.getByText('International flights')).toBeInTheDocument();
    expect(screen.getByText('Travel insurance')).toBeInTheDocument();
  });

  it('does not crash and hides the section entirely when included/excluded data is empty', () => {
    const tour = makeTour({
      includedServices: [],
      includedActivities: [],
      exclusions: [],
    });

    renderWithProviders(
      <TourDetailView tour={tour} onBack={noop} onOpenEnquiryModal={noop} />
    );

    expect(screen.queryByText('What Is Included')).not.toBeInTheDocument();
    expect(screen.queryByText('What Is Excluded')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: tour.title, level: 1 })).toBeInTheDocument();
  });

  it('calls onOpenEnquiryModal with the tour when "Book This Safari" is clicked', async () => {
    const tour = makeTour();
    const onOpenEnquiryModal = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(
      <TourDetailView tour={tour} onBack={noop} onOpenEnquiryModal={onOpenEnquiryModal} />
    );

    await user.click(screen.getByRole('button', { name: /book this safari/i }));

    expect(onOpenEnquiryModal).toHaveBeenCalledWith({ selectedTour: tour });
  });
});
