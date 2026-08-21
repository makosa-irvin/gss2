import type { Tour, Hotel, Destination, Testimonial } from '../types';

/**
 * Factory functions for building minimal-but-valid Tour/Hotel/Destination
 * fixtures for tests.
 *
 * Why factories instead of hand-written literals per test: these three
 * interfaces are exactly what the fix/inital-audit branch was patching
 * around (views were reading fields - `tour.included`, `hotel.amenities`,
 * `destination.highlights` - that don't exist on these types). Building
 * fixtures through a typed factory means TypeScript itself will fail the
 * build if a required field is missing or renamed, which is the same class
 * of drift that caused the original bugs. A test fixture that silently
 * compiles with `any` would not catch that.
 *
 * Each factory returns a complete, valid object; pass `overrides` to change
 * or omit specific fields for a given test (e.g. an empty `facilities`
 * array to test the "no amenities" guard).
 */

export function makeTour(overrides: Partial<Tour> = {}): Tour {
  return {
    id: 'tour-1',
    title: 'Test Safari Tour',
    slug: 'test-safari-tour',
    shortDescription: 'A short test description.',
    fullDescription: 'A longer full test description of the tour.',
    country: 'Kenya',
    destinations: ['Maasai Mara National Reserve'],
    durationDays: 3,
    durationLabel: '3 Days / 2 Nights',
    startingLocation: 'Nairobi, Kenya',
    endingLocation: 'Nairobi, Kenya',
    categories: ['Big 5 Safari'],
    travelStyles: ['Big 5'],
    comfortLevel: 'Midrange',
    travelerTypes: ['Couples'],
    featured: false,
    popular: false,
    recommended: false,
    priceFrom: 900,
    currency: 'USD',
    soloPrice: 1100,
    sharingPrice: 900,
    seasonalPricing: [],
    images: ['https://example.com/image.jpg'],
    itinerary: [],
    accommodationSummary: 'Midrange tented camps',
    mealsSummary: 'All meals included',
    includedActivities: ['Game drives'],
    includedServices: ['Park fees'],
    exclusions: ['International flights'],
    importantInformation: [],
    childrenPolicy: 'Children of all ages welcome.',
    startingDates: 'Daily Departures (Year-Round)',
    bookingAvailability: 'Available',
    seo: {
      title: 'Test Safari Tour',
      description: 'SEO description',
    },
    createdAt: '2025-01-01T00:00:00.000Z',
    updatedAt: '2025-01-01T00:00:00.000Z',
    ...overrides,
  };
}

export function makeHotel(overrides: Partial<Hotel> = {}): Hotel {
  return {
    id: 'hotel-1',
    name: 'Test Beach Resort',
    slug: 'test-beach-resort',
    location: 'Diani Beach',
    country: 'Kenya',
    description: 'A lovely test resort by the sea.',
    category: 'Beach Resort & Spa',
    images: ['https://example.com/hotel.jpg'],
    priceFromUSD: 150,
    priceFromKES: 19500,
    soloPriceUSD: 180,
    sharingPriceUSD: 150,
    seasonalPricing: [],
    facilities: ['Swimming pool', 'Spa'],
    roomTypes: ['Standard Room'],
    inclusions: ['Breakfast'],
    exclusions: ['Airport transfer'],
    isFamilyFriendly: true,
    isHoneymoonFriendly: false,
    isSeniorFriendly: true,
    isKenyanResidentOffer: true,
    rating: 4.8,
    seo: {
      title: 'Test Beach Resort',
      description: 'SEO description',
    },
    ...overrides,
  };
}

export function makeDestination(overrides: Partial<Destination> = {}): Destination {
  return {
    id: 'dest-1',
    name: 'Maasai Mara National Reserve',
    slug: 'maasai-mara-national-reserve',
    country: 'Kenya',
    subtitle: 'The Crown Jewel of African Wildlife',
    description: 'A famous test destination.',
    heroImage: 'https://example.com/mara.jpg',
    gallery: ['https://example.com/mara-1.jpg'],
    bestTimeToVisit: 'July to October',
    wildlife: ['Lions', 'Cheetahs', 'Leopards'],
    activities: ['Game drives', 'Hot air balloon safaris'],
    recommendedDuration: '3 to 5 Days',
    whereToStay: 'Luxury tented camps',
    featured: true,
    faqs: [],
    seo: {
      title: 'Maasai Mara National Reserve',
      description: 'SEO description',
    },
    ...overrides,
  };
}

export function makeTestimonial(overrides: Partial<Testimonial> = {}): Testimonial {
  return {
    id: 'testimonial-1',
    reviewerName: 'Test Reviewer',
    reviewerCountry: 'United Kingdom',
    avatarUrl: 'https://example.com/avatar.jpg',
    rating: 5,
    tourTaken: 'Test Safari Tour',
    reviewText: 'An unforgettable experience from start to finish.',
    date: '2025-01-01',
    featured: true,
    platform: 'TripAdvisor',
    ...overrides,
  };
}
