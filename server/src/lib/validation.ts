import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const marketingAttributionSchema = z.object({
  source: z.string().trim().min(1).max(200),
  medium: z.string().trim().min(1).max(100),
  campaign: z.string().trim().max(300).optional().nullable(),
  term: z.string().trim().max(300).optional().nullable(),
  content: z.string().trim().max(300).optional().nullable(),
  referrer: z.string().trim().max(2000).optional().nullable(),
  landingPage: z.string().trim().min(1).max(2000),
  firstTouchAt: z.string().datetime(),
});

export const enquirySchema = z.object({
  fullName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(3).max(50),
  country: z.string().trim().min(1).max(100),
  travelDates: z.string().trim().max(200).default(''),
  durationDays: z.number().int().positive().optional().nullable(),
  adults: z.number().int().min(1).max(50),
  children: z.number().int().min(0).max(50).default(0),
  tourId: z.string().max(100).optional().nullable(),
  tourTitle: z.string().max(300).optional().nullable(),
  hotelId: z.string().max(100).optional().nullable(),
  hotelTitle: z.string().max(300).optional().nullable(),
  preferredDestination: z.string().trim().max(200).default(''),
  safariType: z.string().trim().max(200).default(''),
  budget: z.string().trim().max(200).default(''),
  accommodationPreference: z.string().trim().max(200).default(''),
  specialRequests: z.string().trim().max(2000).default(''),
  hearAboutUs: z.string().trim().max(200).default(''),
  marketingAttribution: marketingAttributionSchema.optional().nullable(),
});

export const updateEnquiryStatusSchema = z.object({
  status: z.enum(['New', 'Contacted', 'Quoted', 'Confirmed', 'Cancelled']),
  notes: z.string().max(2000).optional(),
});

const seasonalPriceSchema = z.object({
  id: z.string(),
  name: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  soloPrice: z.number(),
  sharingPrice: z.number(),
  residentPriceKES: z.number().optional(),
  currency: z.enum(['USD', 'KES']),
  notes: z.string().optional(),
});

const itineraryDaySchema = z.object({
  day: z.number().int().positive(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  accommodation: z.string(),
  meals: z.string(),
  transport: z.string(),
  activities: z.array(z.string()),
  image: z.string().optional(),
});

const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()).optional(),
});

export const tourInputSchema = z.object({
  title: z.string().trim().min(1).max(300),
  slug: z
    .string()
    .trim()
    .min(1)
    .max(300)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase, alphanumeric, and hyphen-separated.'),
  shortDescription: z.string().trim().min(1).max(1000),
  fullDescription: z.string().trim().min(1).max(10000),
  country: z.string().min(1),
  destinations: z.array(z.string()).default([]),
  durationDays: z.number().int().positive(),
  durationLabel: z.string().min(1),
  startingLocation: z.string().min(1),
  endingLocation: z.string().min(1),
  categories: z.array(z.string()).default([]),
  travelStyles: z.array(z.string()).default([]),
  comfortLevel: z.string().min(1),
  travelerTypes: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  popular: z.boolean().default(false),
  recommended: z.boolean().default(false),
  priceFrom: z.number().nonnegative(),
  currency: z.enum(['USD', 'KES']),
  soloPrice: z.number().nonnegative(),
  sharingPrice: z.number().nonnegative(),
  residentPriceKES: z.number().nonnegative().optional().nullable(),
  seasonalPricing: z.array(seasonalPriceSchema).default([]),
  images: z.array(z.string()).default([]),
  videoUrl: z.string().optional().nullable(),
  itinerary: z.array(itineraryDaySchema).default([]),
  accommodationSummary: z.string().min(1),
  mealsSummary: z.string().min(1),
  includedActivities: z.array(z.string()).default([]),
  includedServices: z.array(z.string()).default([]),
  exclusions: z.array(z.string()).default([]),
  importantInformation: z.array(z.string()).default([]),
  childrenPolicy: z.string().min(1),
  startingDates: z.string().min(1),
  bookingAvailability: z.enum(['Available', 'Limited Seats', 'On Request']).default('Available'),
  isKenyanResidentPackage: z.boolean().default(false),
  seo: seoSchema,
  published: z.boolean().default(true),
});

export const tourUpdateSchema = tourInputSchema.partial();

const hotelSeasonalPriceSchema = z.object({
  seasonName: z.string(),
  dates: z.string(),
  priceKES: z.number(),
  priceUSD: z.number(),
  sharingPriceUSD: z.number().optional(),
});

export const hotelInputSchema = z.object({
  name: z.string().trim().min(1).max(300),
  slug: z
    .string()
    .trim()
    .min(1)
    .max(300)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase, alphanumeric, and hyphen-separated.'),
  location: z.string().min(1),
  country: z.string().min(1),
  description: z.string().min(1).max(5000),
  category: z.string().min(1),
  images: z.array(z.string()).default([]),
  priceFromUSD: z.number().nonnegative(),
  priceFromKES: z.number().nonnegative(),
  soloPriceUSD: z.number().nonnegative(),
  sharingPriceUSD: z.number().nonnegative(),
  seasonalPricing: z.array(hotelSeasonalPriceSchema).default([]),
  facilities: z.array(z.string()).default([]),
  roomTypes: z.array(z.string()).default([]),
  inclusions: z.array(z.string()).default([]),
  exclusions: z.array(z.string()).default([]),
  isFamilyFriendly: z.boolean().default(false),
  isHoneymoonFriendly: z.boolean().default(false),
  isSeniorFriendly: z.boolean().default(false),
  isKenyanResidentOffer: z.boolean().default(false),
  bookingLink: z.string().optional().nullable(),
  rating: z.number().min(0).max(5).optional().nullable(),
  seo: seoSchema,
  published: z.boolean().default(true),
});

export const hotelUpdateSchema = hotelInputSchema.partial();

const faqSchema = z.object({ question: z.string().min(1), answer: z.string().min(1) });

export const destinationInputSchema = z.object({
  name: z.string().trim().min(1).max(300),
  slug: z.string().trim().min(1).max(300).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  country: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1).max(10000),
  heroImage: z.string(),
  gallery: z.array(z.string()).default([]),
  bestTimeToVisit: z.string().min(1),
  wildlife: z.array(z.string()).default([]),
  activities: z.array(z.string()).default([]),
  recommendedDuration: z.string().min(1),
  thingsToDo: z.array(z.string()).default([]),
  whereToStay: z.string().min(1),
  featured: z.boolean().default(false),
  mapLocation: z.object({ lat: z.number(), lng: z.number(), zoom: z.number() }).optional().nullable(),
  faqs: z.array(faqSchema).default([]),
  seo: seoSchema,
  published: z.boolean().default(true),
});
export const destinationUpdateSchema = destinationInputSchema.partial();

export const blogPostInputSchema = z.object({
  title: z.string().trim().min(1).max(300),
  slug: z.string().trim().min(1).max(300).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  excerpt: z.string().min(1).max(2000),
  content: z.string().min(1),
  featuredImage: z.string(),
  author: z.object({ name: z.string().min(1), role: z.string().min(1), avatar: z.string() }),
  publishedDate: z.coerce.date(),
  category: z.string().min(1),
  readingTime: z.string().min(1),
  relatedDestinations: z.array(z.string()).default([]),
  relatedTours: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(true),
});
export const blogPostUpdateSchema = blogPostInputSchema.partial();

export const testimonialInputSchema = z.object({
  reviewerName: z.string().trim().min(1).max(200),
  reviewerCountry: z.string().trim().min(1).max(100),
  avatarUrl: z.string(),
  rating: z.number().min(1).max(5),
  tourTaken: z.string().max(300),
  reviewText: z.string().min(1).max(5000),
  date: z.coerce.date(),
  featured: z.boolean().default(false),
  platform: z.enum(['TripAdvisor', 'Google Reviews', 'Direct Feedback', 'SafariBookings']),
  published: z.boolean().default(true),
});
export const testimonialUpdateSchema = testimonialInputSchema.partial();

export const settingsUpdateSchema = z.object({
  companyName: z.string().min(1).optional(),
  tagline: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  logoUrl: z.string().min(1).optional(),
  contact: z
    .object({
      email: z.string().email(),
      phone: z.string(),
      whatsapp: z.string(),
      address: z.string(),
      businessHours: z.string(),
    })
    .optional(),
  social: z
    .object({
      instagram: z.string(),
      facebook: z.string(),
      tiktok: z.string(),
      youtube: z.string(),
      linkedin: z.string(),
    })
    .optional(),
  currency: z
    .object({ primary: z.enum(['USD', 'KES']), exchangeRateUsdToKes: z.number().positive() })
    .optional(),
  booking: z
    .object({
      defaultEnquiryMessage: z.string(),
      bookingEmail: z.string().email(),
      whatsappNumber: z.string(),
      whatsappDefaultMessage: z.string(),
    })
    .optional(),
  seo: z
    .object({
      defaultTitle: z.string(),
      defaultDescription: z.string(),
      defaultOgImage: z.string(),
    })
    .optional(),
});
