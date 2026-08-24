/**
 * Good Secrets Safaris - database schema (Drizzle ORM / PostgreSQL).
 *
 * Design note: fields that are always read/written as a single unit and
 * never queried/filtered/indexed on their own (itinerary steps, seasonal
 * pricing tiers, SEO metadata, nested contact/social/currency settings)
 * are stored as `jsonb` columns rather than normalized into their own
 * tables, typed via Drizzle's `.$type<T>()`. This keeps the schema close
 * to the frontend's `src/types.ts` shapes and avoids a large join-table
 * sprawl for what is fundamentally document-shaped content, while
 * everything that genuinely needs real relational behavior - unique
 * slugs, filtering by country/status, admin auth, enquiry status
 * tracking - has real typed columns and constraints.
 */
import { relations } from 'drizzle-orm';
import {
  pgTable,
  text,
  boolean,
  integer,
  doublePrecision,
  timestamp,
  jsonb,
  index,
} from 'drizzle-orm/pg-core';
import { createId } from '../lib/id.js';

// Shared JSON-shaped types (mirrors src/types.ts on the frontend)
export interface SeasonalPrice {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  soloPrice: number;
  sharingPrice: number;
  residentPriceKES?: number;
  currency: 'USD' | 'KES';
  notes?: string;
}

export interface HotelSeasonalPrice {
  seasonName: string;
  dates: string;
  priceKES: number;
  priceUSD: number;
  sharingPriceUSD?: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  subtitle: string;
  description: string;
  accommodation: string;
  meals: string;
  transport: string;
  activities: string[];
  image?: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

// --- Tours ---
export const tours = pgTable(
  'tours',
  {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    shortDescription: text('short_description').notNull(),
    fullDescription: text('full_description').notNull(),

    country: text('country').notNull(),
    destinations: text('destinations').array().notNull().default([]),
    durationDays: integer('duration_days').notNull(),
    durationLabel: text('duration_label').notNull(),
    startingLocation: text('starting_location').notNull(),
    endingLocation: text('ending_location').notNull(),

    categories: text('categories').array().notNull().default([]),
    travelStyles: text('travel_styles').array().notNull().default([]),
    comfortLevel: text('comfort_level').notNull(),
    travelerTypes: text('traveler_types').array().notNull().default([]),

    featured: boolean('featured').notNull().default(false),
    popular: boolean('popular').notNull().default(false),
    recommended: boolean('recommended').notNull().default(false),

    priceFrom: doublePrecision('price_from').notNull(),
    currency: text('currency').notNull(),
    soloPrice: doublePrecision('solo_price').notNull(),
    sharingPrice: doublePrecision('sharing_price').notNull(),
    residentPriceKES: doublePrecision('resident_price_kes'),
    seasonalPricing: jsonb('seasonal_pricing').$type<SeasonalPrice[]>().notNull().default([]),

    images: text('images').array().notNull().default([]),
    videoUrl: text('video_url'),

    itinerary: jsonb('itinerary').$type<ItineraryDay[]>().notNull().default([]),

    accommodationSummary: text('accommodation_summary').notNull(),
    mealsSummary: text('meals_summary').notNull(),
    includedActivities: text('included_activities').array().notNull().default([]),
    includedServices: text('included_services').array().notNull().default([]),
    exclusions: text('exclusions').array().notNull().default([]),
    importantInformation: text('important_information').array().notNull().default([]),
    childrenPolicy: text('children_policy').notNull(),
    startingDates: text('starting_dates').notNull(),
    bookingAvailability: text('booking_availability').notNull().default('Available'),

    isKenyanResidentPackage: boolean('is_kenyan_resident_package').notNull().default(false),
    viewsCount: integer('views_count').notNull().default(0),

    seo: jsonb('seo').$type<SeoMeta>().notNull(),

    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (table) => [
    index('tours_country_idx').on(table.country),
    index('tours_featured_idx').on(table.featured),
    index('tours_popular_idx').on(table.popular),
  ]
);

// --- Destinations ---
export const destinations = pgTable(
  'destinations',
  {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    country: text('country').notNull(),
    subtitle: text('subtitle').notNull(),
    description: text('description').notNull(),

    heroImage: text('hero_image').notNull(),
    gallery: text('gallery').array().notNull().default([]),

    bestTimeToVisit: text('best_time_to_visit').notNull(),
    wildlife: text('wildlife').array().notNull().default([]),
    activities: text('activities').array().notNull().default([]),
    recommendedDuration: text('recommended_duration').notNull(),
    thingsToDo: text('things_to_do').array().notNull().default([]),
    whereToStay: text('where_to_stay').notNull(),

    featured: boolean('featured').notNull().default(false),
    mapLocation: jsonb('map_location').$type<{ lat: number; lng: number; zoom: number }>(),

    faqs: jsonb('faqs').$type<Faq[]>().notNull().default([]),
    seo: jsonb('seo').$type<SeoMeta>().notNull(),

    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (table) => [index('destinations_country_idx').on(table.country)]
);

// --- Hotels ---
export const hotels = pgTable(
  'hotels',
  {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    location: text('location').notNull(),
    country: text('country').notNull(),
    description: text('description').notNull(),
    category: text('category').notNull(),

    images: text('images').array().notNull().default([]),

    priceFromUSD: doublePrecision('price_from_usd').notNull(),
    priceFromKES: doublePrecision('price_from_kes').notNull(),
    soloPriceUSD: doublePrecision('solo_price_usd').notNull(),
    sharingPriceUSD: doublePrecision('sharing_price_usd').notNull(),
    seasonalPricing: jsonb('seasonal_pricing').$type<HotelSeasonalPrice[]>().notNull().default([]),

    facilities: text('facilities').array().notNull().default([]),
    roomTypes: text('room_types').array().notNull().default([]),
    inclusions: text('inclusions').array().notNull().default([]),
    exclusions: text('exclusions').array().notNull().default([]),

    isFamilyFriendly: boolean('is_family_friendly').notNull().default(false),
    isHoneymoonFriendly: boolean('is_honeymoon_friendly').notNull().default(false),
    isSeniorFriendly: boolean('is_senior_friendly').notNull().default(false),
    isKenyanResidentOffer: boolean('is_kenyan_resident_offer').notNull().default(false),

    bookingLink: text('booking_link'),
    rating: doublePrecision('rating'),

    seo: jsonb('seo').$type<SeoMeta>().notNull(),

    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (table) => [index('hotels_country_idx').on(table.country)]
);

// --- Blog posts ---
export const blogPosts = pgTable('blog_posts', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),

  featuredImage: text('featured_image').notNull(),
  author: jsonb('author').$type<BlogAuthor>().notNull(),

  publishedDate: timestamp('published_date').notNull(),
  category: text('category').notNull(),
  readingTime: text('reading_time').notNull(),

  relatedDestinations: text('related_destinations').array().notNull().default([]),
  relatedTours: text('related_tours').array().notNull().default([]),
  tags: text('tags').array().notNull().default([]),

  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// --- Testimonials ---
export const testimonials = pgTable('testimonials', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  reviewerName: text('reviewer_name').notNull(),
  reviewerCountry: text('reviewer_country').notNull(),
  avatarUrl: text('avatar_url').notNull(),
  rating: doublePrecision('rating').notNull(),
  tourTaken: text('tour_taken').notNull(),
  reviewText: text('review_text').notNull(),
  date: timestamp('date').notNull(),
  featured: boolean('featured').notNull().default(false),
  platform: text('platform').notNull(),

  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// --- Enquiries ---
// This table fixes the biggest gap in the old app: rows here are real,
// shared, persisted, and trigger a real email (see src/lib/email.ts) -
// not just a write to the submitting visitor's own browser localStorage.
export const enquiries = pgTable(
  'enquiries',
  {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    fullName: text('full_name').notNull(),
    email: text('email').notNull(),
    phone: text('phone').notNull(),
    country: text('country').notNull(),

    travelDates: text('travel_dates').notNull(),
    durationDays: integer('duration_days'),
    adults: integer('adults').notNull(),
    children: integer('children').notNull(),

    tourId: text('tour_id').references(() => tours.id, { onDelete: 'set null' }),
    tourTitle: text('tour_title'),

    hotelId: text('hotel_id').references(() => hotels.id, { onDelete: 'set null' }),
    hotelTitle: text('hotel_title'),

    preferredDestination: text('preferred_destination').notNull(),
    safariType: text('safari_type').notNull(),
    budget: text('budget').notNull(),
    accommodationPreference: text('accommodation_preference').notNull(),
    specialRequests: text('special_requests').notNull(),
    hearAboutUs: text('hear_about_us').notNull(),

    status: text('status').notNull().default('New'), // New | Contacted | Quoted | Confirmed | Cancelled
    notes: text('notes'),

    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
    contactedAt: timestamp('contacted_at'),
    quotedAt: timestamp('quoted_at'),
    confirmedAt: timestamp('confirmed_at'),
    cancelledAt: timestamp('cancelled_at'),
  },
  (table) => [
    index('enquiries_status_idx').on(table.status),
    index('enquiries_created_at_idx').on(table.createdAt),
  ]
);

export const enquiriesRelations = relations(enquiries, ({ one }) => ({
  tour: one(tours, { fields: [enquiries.tourId], references: [tours.id] }),
  hotel: one(hotels, { fields: [enquiries.hotelId], references: [hotels.id] }),
}));

// --- Admin users ---
// Real admin authentication - replaces the old client-side-only password
// gate. Passwords are always bcrypt-hashed; the plaintext never touches
// the database or the JS bundle.
export const adminUsers = pgTable('admin_users', {
  id: text('id').primaryKey().$defaultFn(() => createId()),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  lastLoginAt: timestamp('last_login_at'),
});

// --- Company settings (singleton row, id is always "singleton") ---
export const companySettings = pgTable('company_settings', {
  id: text('id').primaryKey().default('singleton'),
  companyName: text('company_name').notNull(),
  tagline: text('tagline').notNull(),
  description: text('description').notNull(),
  logoUrl: text('logo_url').notNull(),

  contact: jsonb('contact').$type<{
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
    businessHours: string;
  }>().notNull(),
  social: jsonb('social').$type<{
    instagram: string;
    facebook: string;
    tiktok: string;
    youtube: string;
    linkedin: string;
  }>().notNull(),
  currency: jsonb('currency').$type<{ primary: 'USD' | 'KES'; exchangeRateUsdToKes: number }>().notNull(),
  booking: jsonb('booking').$type<{
    defaultEnquiryMessage: string;
    bookingEmail: string;
    whatsappNumber: string;
    whatsappDefaultMessage: string;
  }>().notNull(),
  seo: jsonb('seo').$type<{ defaultTitle: string; defaultDescription: string; defaultOgImage: string }>().notNull(),

  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
