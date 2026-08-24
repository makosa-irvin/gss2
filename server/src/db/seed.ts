/**
 * Seeds the database from server/src/db/seedData/*.json (a one-time
 * snapshot exported from the frontend's old src/data/initialData.ts),
 * plus one initial admin user.
 *
 * Deliberately reads local JSON rather than importing the frontend's TS
 * source directly: this package should be independently runnable/
 * deployable without the frontend's source tree present (a real backend
 * service shouldn't reach across a repo boundary into a sibling app's
 * internals for its own seed data). This is a one-time migration path
 * from the old localStorage-based data layer to the real database - not
 * something meant to run repeatedly in production (it clears existing
 * rows first). Safe to re-run in dev.
 */
import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { db, pool } from './client.js';
import {
  tours,
  hotels,
  destinations,
  testimonials,
  blogPosts,
  companySettings,
  adminUsers,
} from './schema.js';
import initialToursData from './seedData/tours.json' with { type: 'json' };
import initialHotelsData from './seedData/hotels.json' with { type: 'json' };
import initialDestinationsData from './seedData/destinations.json' with { type: 'json' };
import initialTestimonialsData from './seedData/testimonials.json' with { type: 'json' };
import initialBlogPostsData from './seedData/blogPosts.json' with { type: 'json' };
import initialCompanySettingsData from './seedData/companySettings.json' with { type: 'json' };

// The JSON import gives loosely-typed data; cast through `any` at this
// single boundary rather than hand-writing a parallel type for every
// nested shape (SeasonalPrice[], ItineraryDay[], etc.) that already
// exists in server/src/db/schema.ts and would just drift out of sync.
const initialTours = initialToursData as any[];
const initialHotels = initialHotelsData as any[];
const initialDestinations = initialDestinationsData as any[];
const initialTestimonials = initialTestimonialsData as any[];
const initialBlogPosts = initialBlogPostsData as any[];
const initialCompanySettings = initialCompanySettingsData as any;

function parseDateSafe(value: string): Date {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    console.warn(`Could not parse date "${value}", using current date instead.`);
    return new Date();
  }
  return parsed;
}

async function main() {
  console.log('Clearing existing rows...');
  await db.delete(tours);
  await db.delete(hotels);
  await db.delete(destinations);
  await db.delete(testimonials);
  await db.delete(blogPosts);
  await db.delete(companySettings);

  console.log(`Seeding ${initialTours.length} tours...`);
  for (const t of initialTours) {
    await db.insert(tours).values({
      id: t.id,
      title: t.title,
      slug: t.slug,
      shortDescription: t.shortDescription,
      fullDescription: t.fullDescription,
      country: t.country,
      destinations: t.destinations,
      durationDays: t.durationDays,
      durationLabel: t.durationLabel,
      startingLocation: t.startingLocation,
      endingLocation: t.endingLocation,
      categories: t.categories,
      travelStyles: t.travelStyles,
      comfortLevel: t.comfortLevel,
      travelerTypes: t.travelerTypes,
      featured: t.featured,
      popular: t.popular,
      recommended: t.recommended,
      priceFrom: t.priceFrom,
      currency: t.currency,
      soloPrice: t.soloPrice,
      sharingPrice: t.sharingPrice,
      residentPriceKES: t.residentPriceKES,
      seasonalPricing: t.seasonalPricing,
      images: t.images,
      videoUrl: t.videoUrl,
      itinerary: t.itinerary,
      accommodationSummary: t.accommodationSummary,
      mealsSummary: t.mealsSummary,
      includedActivities: t.includedActivities,
      includedServices: t.includedServices,
      exclusions: t.exclusions,
      importantInformation: t.importantInformation,
      childrenPolicy: t.childrenPolicy,
      startingDates: t.startingDates,
      bookingAvailability: t.bookingAvailability,
      isKenyanResidentPackage: t.isKenyanResidentPackage ?? false,
      viewsCount: t.viewsCount ?? 0,
      seo: t.seo,
    });
  }

  console.log(`Seeding ${initialHotels.length} hotels...`);
  for (const h of initialHotels) {
    await db.insert(hotels).values({
      id: h.id,
      name: h.name,
      slug: h.slug,
      location: h.location,
      country: h.country,
      description: h.description,
      category: h.category,
      images: h.images,
      priceFromUSD: h.priceFromUSD,
      priceFromKES: h.priceFromKES,
      soloPriceUSD: h.soloPriceUSD,
      sharingPriceUSD: h.sharingPriceUSD,
      seasonalPricing: h.seasonalPricing,
      facilities: h.facilities,
      roomTypes: h.roomTypes,
      inclusions: h.inclusions,
      exclusions: h.exclusions,
      isFamilyFriendly: h.isFamilyFriendly,
      isHoneymoonFriendly: h.isHoneymoonFriendly,
      isSeniorFriendly: h.isSeniorFriendly,
      isKenyanResidentOffer: h.isKenyanResidentOffer,
      bookingLink: h.bookingLink,
      rating: h.rating,
      seo: h.seo,
    });
  }

  console.log(`Seeding ${initialDestinations.length} destinations...`);
  for (const d of initialDestinations) {
    await db.insert(destinations).values({
      id: d.id,
      name: d.name,
      slug: d.slug,
      country: d.country,
      subtitle: d.subtitle,
      description: d.description,
      heroImage: d.heroImage,
      gallery: d.gallery,
      bestTimeToVisit: d.bestTimeToVisit,
      wildlife: d.wildlife,
      activities: d.activities,
      recommendedDuration: d.recommendedDuration,
      thingsToDo: d.thingsToDo ?? [],
      whereToStay: d.whereToStay,
      featured: d.featured,
      mapLocation: d.mapLocation,
      faqs: d.faqs,
      seo: d.seo,
    });
  }

  console.log(`Seeding ${initialTestimonials.length} testimonials...`);
  for (const t of initialTestimonials) {
    await db.insert(testimonials).values({
      id: t.id,
      reviewerName: t.reviewerName,
      reviewerCountry: t.reviewerCountry,
      avatarUrl: t.avatarUrl,
      rating: t.rating,
      tourTaken: t.tourTaken,
      reviewText: t.reviewText,
      date: parseDateSafe(t.date),
      featured: t.featured,
      platform: t.platform,
    });
  }

  console.log(`Seeding ${initialBlogPosts.length} blog posts...`);
  for (const p of initialBlogPosts) {
    await db.insert(blogPosts).values({
      id: p.id,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      content: p.content,
      featuredImage: p.featuredImage,
      author: p.author,
      publishedDate: parseDateSafe(p.publishedDate),
      category: p.category,
      readingTime: p.readingTime,
      relatedDestinations: p.relatedDestinations,
      relatedTours: p.relatedTours,
      tags: p.tags,
    });
  }

  console.log('Seeding company settings...');
  await db.insert(companySettings).values({
    id: 'singleton',
    companyName: initialCompanySettings.companyName,
    tagline: initialCompanySettings.tagline,
    description: initialCompanySettings.description,
    logoUrl: initialCompanySettings.logoUrl,
    contact: initialCompanySettings.contact,
    social: initialCompanySettings.social,
    currency: initialCompanySettings.currency,
    booking: initialCompanySettings.booking,
    seo: initialCompanySettings.seo,
  });

  // Seed one admin user if none exist yet, from env vars, so a fresh
  // deployment always has a working login rather than none at all.
  const existingAdmins = await db.select().from(adminUsers).limit(1);
  if (existingAdmins.length === 0) {
    const email = process.env.SEED_ADMIN_EMAIL || 'admin@goodsecretssafaris.com';
    const password = process.env.SEED_ADMIN_PASSWORD;
    if (!password) {
      console.warn(
        'SEED_ADMIN_PASSWORD not set - skipping admin user creation. ' +
          'Set it in server/.env and re-run `npm run seed` to create the first admin login.'
      );
    } else {
      const passwordHash = await bcrypt.hash(password, 12);
      await db.insert(adminUsers).values({
        email,
        passwordHash,
        name: process.env.SEED_ADMIN_NAME || 'Admin',
      });
      console.log(`Created admin user: ${email}`);
    }
  } else {
    console.log('Admin user(s) already exist, skipping.');
  }

  console.log('Seed complete.');
  await pool.end();
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
