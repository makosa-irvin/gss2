import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import { makeTestimonial } from '../../test/fixtures';
import { installMockApi } from '../../test/mockApi';
import { HomePage } from '../HomePage';

/**
 * Regression test for the homepage testimonials crash fixed on
 * fix/inital-audit: `[...Array(test.rating)]` throws a RangeError when
 * `rating` isn't a non-negative integer. The seed data only ever used
 * whole-number ratings, so this never showed up locally, but any
 * decimal rating (e.g. 4.8, the same value already used for hotel
 * ratings elsewhere in the app) would have taken down the whole
 * homepage. The fix wraps it in `Math.round(test.rating ?? 5)`.
 *
 * DataContext now fetches testimonials from the real API (see
 * src/context/DataContext.tsx) rather than reading localStorage
 * synchronously, so injecting a decimal-rating testimonial means mocking
 * the GET /api/testimonials response rather than pre-seeding
 * localStorage - and assertions need findBy* (async) since the data
 * arrives after the initial render, not before it.
 */
describe('HomePage testimonials', () => {
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

  it('renders a decimal testimonial rating without throwing', async () => {
    const testimonial = makeTestimonial({ rating: 4.8, reviewText: 'A magical Kenyan honeymoon.' });
    installMockApi({ testimonials: [testimonial] });

    renderWithProviders(<HomePage {...homePageProps} />);

    expect(await screen.findByText('"A magical Kenyan honeymoon."')).toBeInTheDocument();
  });

  it('renders a missing/undefined rating without throwing, defaulting sensibly', async () => {
    const testimonial = makeTestimonial({ rating: undefined as unknown as number, reviewText: 'No rating supplied.' });
    installMockApi({ testimonials: [testimonial] });

    renderWithProviders(<HomePage {...homePageProps} />);

    expect(await screen.findByText('"No rating supplied."')).toBeInTheDocument();
  });
});
