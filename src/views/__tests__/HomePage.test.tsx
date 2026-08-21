import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import { makeTestimonial } from '../../test/fixtures';
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
 * DataProvider seeds its state from localStorage before falling back to
 * src/data/initialData.ts, so pre-seeding 'gss_testimonials_v1' here lets
 * us inject a decimal-rating testimonial without needing to mock the
 * context.
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

  it('renders a decimal testimonial rating without throwing', () => {
    const testimonial = makeTestimonial({ rating: 4.8, reviewText: 'A magical Kenyan honeymoon.' });
    window.localStorage.setItem('gss_testimonials_v1', JSON.stringify([testimonial]));

    expect(() => renderWithProviders(<HomePage {...homePageProps} />)).not.toThrow();
    expect(screen.getByText('"A magical Kenyan honeymoon."')).toBeInTheDocument();
  });

  it('renders a missing/undefined rating without throwing, defaulting sensibly', () => {
    const testimonial = makeTestimonial({ rating: undefined as unknown as number, reviewText: 'No rating supplied.' });
    window.localStorage.setItem('gss_testimonials_v1', JSON.stringify([testimonial]));

    expect(() => renderWithProviders(<HomePage {...homePageProps} />)).not.toThrow();
    expect(screen.getByText('"No rating supplied."')).toBeInTheDocument();
  });
});
