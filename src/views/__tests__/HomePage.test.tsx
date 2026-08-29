import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import { installMockApi } from '../../test/mockApi';
import { HomePage } from '../HomePage';

/**
 * The homepage no longer renders arbitrary testimonial records from the
 * catalog. Trust content is deliberately source-backed through
 * VerifiedReviewsSection, so these tests protect that current customer
 * contract instead of keeping the old dynamic-rating implementation alive.
 */
describe('HomePage verified review trust section', () => {
  const noop = () => {};
  const homePageProps = {
    onNavigate: noop,
    onSelectTour: noop,
    onSelectDestination: noop,
    onSelectHotel: noop,
    onOpenEnquiryModal: noop,
  };

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the independent-review trust section without depending on testimonial API data', async () => {
    installMockApi({ testimonials: [] });

    renderWithProviders(<HomePage {...homePageProps} />);

    expect(await screen.findByRole('heading', { name: 'See what travelers say beyond our website' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Read Good Secrets Safaris reviews on SafariBookings' })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: 'Read Good Secrets Safaris reviews on Tripadvisor' })).toHaveAttribute('target', '_blank');
  });

  it('makes review freshness and third-party provenance explicit', async () => {
    installMockApi({ testimonials: [] });

    renderWithProviders(<HomePage {...homePageProps} />);

    expect(await screen.findByText(/ratings checked 29 august 2026/i)).toBeInTheDocument();
    expect(screen.getByText(/review counts can change as new feedback is posted/i)).toBeInTheDocument();
    expect(screen.getByText(/link directly to third-party review profiles/i)).toBeInTheDocument();
  });
});
