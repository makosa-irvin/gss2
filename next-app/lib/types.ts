export type SeoFields = { title?: string; description?: string; keywords?: string[] };
export interface SeasonalPrice { id:string; name:string; startDate:string; endDate:string; soloPrice:number; sharingPrice:number; residentPriceKES?:number; currency:'USD'|'KES'; notes?:string }

export interface Tour {
  id: string; title: string; slug: string; shortDescription: string; fullDescription: string;
  country: string; destinations: string[]; durationDays: number; durationLabel: string;
  startingLocation: string; endingLocation: string; categories: string[]; travelStyles: string[];
  comfortLevel: string; travelerTypes: string[]; featured: boolean; popular: boolean; recommended: boolean;
  priceFrom: number; currency: 'USD' | 'KES'; soloPrice?: number; sharingPrice?: number; residentPriceKES?: number;
  seasonalPricing?: SeasonalPrice[];
  images: string[]; itinerary: Array<{ day: number; title: string; subtitle?: string; description: string; accommodation?: string; meals?: string; transport?: string; activities?: string[]; image?: string }>;
  accommodationSummary?: string; mealsSummary?: string; includedActivities?: string[]; includedServices?: string[];
  exclusions?: string[]; importantInformation?: string[]; childrenPolicy?: string; startingDates?: string;
  bookingAvailability?: string; isKenyanResidentPackage?: boolean; seo?: SeoFields; published?: boolean;
}

export interface Destination {
  id: string; name: string; slug: string; country: string; subtitle: string; description: string;
  heroImage: string; gallery: string[]; bestTimeToVisit: string; wildlife: string[]; activities: string[];
  recommendedDuration: string; thingsToDo?: string[]; featured: boolean;
  faqs?: Array<{ question: string; answer: string }>; seo?: SeoFields; published?: boolean;
}

export interface Hotel {
  id: string; name: string; slug: string; location: string; country: string; description: string;
  category: string; images: string[]; priceFromUSD: number; priceFromKES?: number; facilities: string[];
  roomTypes: string[]; inclusions: string[]; exclusions: string[]; isFamilyFriendly?: boolean;
  isHoneymoonFriendly?: boolean; isSeniorFriendly?: boolean; isKenyanResidentOffer?: boolean;
  rating?: number; seo?: SeoFields; published?: boolean;
}

export interface Testimonial {
  id: string; reviewerName: string; reviewerCountry: string; avatarUrl?: string; rating: number;
  tourTaken: string; reviewText: string; date: string; featured: boolean; platform: string; published?: boolean;
}

export interface BlogPost {
  id: string; title: string; slug: string; excerpt: string; content: string; featuredImage: string;
  author: { name: string; role?: string; avatar?: string }; publishedDate: string; category: string;
  readingTime: string; relatedDestinations?: string[]; relatedTours?: string[]; tags?: string[]; published?: boolean;
}

export interface TeamMember {
  id: string; name: string; role: string; bio: string; imageUrl: string; active: boolean;
}

export interface HomepageContent {
  eyebrow: string; title: string; highlightedTitle: string; subtitle: string; heroImage: string; heroVideo?: string;
  primaryCtaLabel: string; secondaryCtaLabel: string;
  personalPlanning?: { eyebrow: string; title: string; body: string; steps: { number: string; label: string }[]; images?: string[] };
  tours?: { eyebrow: string; title: string; subtitle: string };
  styleFinder?: { eyebrow: string; title: string; subtitle: string };
  destinations?: { eyebrow: string; title: string; subtitle: string };
  whyUs?: { eyebrow: string; title: string; items: { title: string; description: string }[]; image?: string };
  beachStays?: { badge: string; title: string; subtitle: string };
  safariBuilder?: { eyebrow: string; title: string; subtitle: string };
  guides?: { eyebrow: string; title: string; subtitle: string };
  finalCta?: { eyebrow: string; title: string; subtitle: string };
}

export interface AboutContent {
  eyebrow: string; title: string; intro: string; storyTitle: string; storyParagraphs: string[];
  teamPhoto: string; teamMembers: TeamMember[];
}

export interface CompanySettings {
  companyName: string; tagline: string; description: string; logoUrl?: string;
  contact: { email: string; phone: string; whatsapp: string; address: string; businessHours?: string };
  social?: Record<string, string>;
  currency?: { exchangeRateUsdToKes?: number };
  booking?: { bookingEmail?: string; whatsappNumber?: string; whatsappDefaultMessage?: string };
  seo?: { defaultTitle?: string; defaultDescription?: string; defaultOgImage?: string };
  homepage?: HomepageContent;
  about?: AboutContent;
}

export interface Enquiry {
  id: string; fullName: string; email: string; phone?: string; country?: string; travelDates?: string;
  numberOfTravelers?: { adults: number; children: number }; tourTitle?: string; hotelTitle?: string;
  preferredDestination?: string; safariType?: string; budget?: string; accommodationPreference?: string;
  specialRequests?: string; hearAboutUs?: string; status: 'New' | 'Contacted' | 'Quoted' | 'Confirmed' | 'Cancelled';
  createdAt: string; notes?: string;
}
