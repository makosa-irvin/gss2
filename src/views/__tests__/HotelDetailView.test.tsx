import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders, settleProviderEffects } from '../../test/test-utils';
import { makeHotel } from '../../test/fixtures';
import { HotelDetailView } from '../HotelDetailView';

/**
 * Regression tests for the HotelDetailView crash fixed on
 * fix/inital-audit. The page used to read hotel.amenities, hotel.mealPlan,
 * hotel.starRating, hotel.residentPriceKES and hotel.pricePerNightUSD, none
 * of which exist on the Hotel type. In particular
 * `hotel.residentPriceKES.toLocaleString()` threw on every hotel detail
 * page load because residentPriceKES was always undefined. A follow-up fix
 * also had to guard `Array(hotel.rating)`, since ratings are decimals
 * (e.g. 4.8) and `Array()` throws on a non-integer length.
 */
describe('HotelDetailView', () => {
  const noop = () => {};

  it('renders without crashing for a fully-populated hotel', async () => {
    const hotel = makeHotel();
    renderWithProviders(
      <HotelDetailView hotel={hotel} onBack={noop} onOpenEnquiryModal={noop} />
    );
    await settleProviderEffects();
    expect(screen.getByRole('heading', { name: hotel.name })).toBeInTheDocument();
  });

  it('renders the resident price from priceFromKES, not a nonexistent residentPriceKES field', async () => {
    const hotel = makeHotel({ priceFromKES: 26945 });
    renderWithProviders(
      <HotelDetailView hotel={hotel} onBack={noop} onOpenEnquiryModal={noop} />
    );
    await settleProviderEffects();
    expect(screen.getByText(/26,945/)).toBeInTheDocument();
  });

  it('does not crash when priceFromKES is 0 or missing-like', async () => {
    const hotel = makeHotel({ priceFromKES: 0, priceFromUSD: 0 });
    renderWithProviders(
      <HotelDetailView hotel={hotel} onBack={noop} onOpenEnquiryModal={noop} />
    );
    await settleProviderEffects();
    expect(screen.getByRole('heading', { name: hotel.name })).toBeInTheDocument();
  });

  it('renders facilities under "Resort Amenities & Inclusions" and hides the section when empty', async () => {
    const withFacilities = makeHotel({ facilities: ['Infinity pool', 'Spa & wellness centre'] });
    const { unmount } = renderWithProviders(
      <HotelDetailView hotel={withFacilities} onBack={noop} onOpenEnquiryModal={noop} />
    );
    await settleProviderEffects();
    expect(screen.getByText('Infinity pool')).toBeInTheDocument();
    expect(screen.getByText('Spa & wellness centre')).toBeInTheDocument();
    unmount();

    const noFacilities = makeHotel({ facilities: [] });
    renderWithProviders(
      <HotelDetailView hotel={noFacilities} onBack={noop} onOpenEnquiryModal={noop} />
    );
    await settleProviderEffects();
    expect(screen.queryByText('Resort Amenities & Inclusions')).not.toBeInTheDocument();
  });

  it('renders a decimal star rating (e.g. 4.8) without throwing RangeError from Array()', async () => {
    const hotel = makeHotel({ rating: 4.8 });
    renderWithProviders(
      <HotelDetailView hotel={hotel} onBack={noop} onOpenEnquiryModal={noop} />
    );
    await settleProviderEffects();
    expect(screen.getByRole('heading', { name: hotel.name })).toBeInTheDocument();
  });

  it('falls back to a 5-star default when rating is missing', async () => {
    const hotel = makeHotel({ rating: undefined });
    renderWithProviders(
      <HotelDetailView hotel={hotel} onBack={noop} onOpenEnquiryModal={noop} />
    );
    await settleProviderEffects();
    expect(screen.getByRole('heading', { name: hotel.name })).toBeInTheDocument();
  });
});