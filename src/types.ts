export type Country = 'Kenya' | 'Tanzania' | 'Zanzibar' | 'Kenya + Tanzania' | 'Safari + Beach';

export type TravelStyle = 
  | 'Big 5'
  | 'Great Migration'
  | 'Family'
  | 'Honeymoon'
  | 'Senior Friendly'
  | 'Luxury'
  | 'Budget'
  | 'Midrange'
  | 'Safari & Beach'
  | 'Fly-In'
  | 'Photography'
  | 'Cultural Encounters';

export type ComfortLevel = 'Budget' | 'Midrange' | 'Luxury' | 'Ultra Luxury';

export type TravelerType = 'Solo' | 'Couples' | 'Families' | 'Seniors' | 'Groups' | 'Honeymooners' | 'Photographers' | 'Adventure Seekers';

export interface SeasonalPrice {
  id: string;
  name: string; // e.g. "Jan - Jun (Green Season)", "Jul - Oct (Migration Peak)", "Nov 1 - Dec 20", "Dec 21 - Jan 3 (Festive)"
  startDate: string; // MM-DD or description
  endDate: string;
  soloPrice: number;
  sharingPrice: number;
  residentPriceKES?: number;
  currency: 'USD' | 'KES';
  notes?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  subtitle: string;
  description: string;
  accommodation: string;
  meals: string; // e.g. "Breakfast, Lunch, Dinner"
  transport: string; // e.g. "4x4 Land Cruiser with pop-up roof"
  activities: string[];
  image?: string;
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  country: Country;
  destinations: string[]; // destination names or IDs
  durationDays: number;
  durationLabel: string; // e.g. "3 Days / 2 Nights"
  startingLocation: string;
  endingLocation: string;
  categories: string[];
  travelStyles: TravelStyle[];
  comfortLevel: ComfortLevel;
  travelerTypes: TravelerType[];
  featured: boolean;
  popular: boolean;
  recommended: boolean;
  priceFrom: number; // Base starting price
  currency: 'USD' | 'KES';
  soloPrice: number;
  sharingPrice: number;
  residentPriceKES?: number;
  seasonalPricing: SeasonalPrice[];
  images: string[];
  videoUrl?: string;
  itinerary: ItineraryDay[];
  accommodationSummary: string;
  mealsSummary: string;
  includedActivities: string[];
  includedServices: string[];
  exclusions: string[];
  importantInformation: string[];
  childrenPolicy: string;
  startingDates: string; // e.g. "Daily Departures (Year-Round)"
  bookingAvailability: 'Available' | 'Limited Seats' | 'On Request';
  isKenyanResidentPackage?: boolean;
  viewsCount?: number;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  country: 'Kenya' | 'Tanzania' | 'Zanzibar';
  subtitle: string;
  description: string;
  heroImage: string;
  gallery: string[];
  bestTimeToVisit: string;
  wildlife: string[];
  activities: string[];
  recommendedDuration: string;
  thingsToDo?: string[];
  whereToStay: string;
  featured: boolean;
  mapLocation?: {
    lat: number;
    lng: number;
    zoom: number;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  seo: {
    title: string;
    description: string;
  };
}

export interface Hotel {
  id: string;
  name: string;
  slug: string;
  location: string;
  country: 'Kenya' | 'Tanzania' | 'Zanzibar';
  description: string;
  category: 'Luxury Safari Lodge' | 'Tented Camp' | 'Beach Resort & Spa' | 'Boutique Hotel' | 'Eco Lodge';
  images: string[];
  priceFromUSD: number;
  priceFromKES: number;
  soloPriceUSD: number;
  sharingPriceUSD: number;
  seasonalPricing: Array<{
    seasonName: string;
    dates: string;
    priceKES: number;
    priceUSD: number;
    sharingPriceUSD?: number;
  }>;
  facilities: string[];
  roomTypes: string[];
  inclusions: string[];
  exclusions: string[];
  isFamilyFriendly: boolean;
  isHoneymoonFriendly: boolean;
  isSeniorFriendly: boolean;
  isKenyanResidentOffer: boolean;
  bookingLink?: string;
  rating?: number;
  seo: {
    title: string;
    description: string;
  };
}

export interface Enquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  travelDates: string;
  durationDays?: number;
  numberOfTravelers: {
    adults: number;
    children: number;
  };
  tourId?: string;
  tourTitle?: string;
  hotelId?: string;
  hotelTitle?: string;
  preferredDestination: string;
  safariType: string;
  budget: string;
  accommodationPreference: string;
  specialRequests: string;
  hearAboutUs: string;
  status: 'New' | 'Contacted' | 'Quoted' | 'Confirmed' | 'Cancelled';
  createdAt: string;
  notes?: string;
}

export interface Testimonial {
  id: string;
  reviewerName: string;
  reviewerCountry: string;
  avatarUrl: string;
  rating: number; // e.g. 5
  tourTaken: string;
  reviewText: string;
  date: string;
  featured: boolean;
  platform: 'TripAdvisor' | 'Google Reviews' | 'Direct Feedback' | 'SafariBookings';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  category: string;
  readingTime: string;
  relatedDestinations: string[];
  relatedTours: string[];
  tags: string[];
}

export interface CompanySettings {
  companyName: string;
  tagline: string;
  description: string;
  logoUrl: string;
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
    businessHours: string;
  };
  social: {
    instagram: string;
    facebook: string;
    tiktok: string;
    youtube: string;
    linkedin: string;
  };
  currency: {
    primary: 'USD' | 'KES';
    exchangeRateUsdToKes: number; // e.g. 130
  };
  booking: {
    defaultEnquiryMessage: string;
    bookingEmail: string;
    whatsappNumber: string;
    whatsappDefaultMessage: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    defaultOgImage: string;
  };
}

export interface SearchFilterState {
  destination: string;
  duration: string; // 'all' | '1' | '2' | '3' | '4-5' | '6-7' | '8-10' | '10+'
  travelStyle: string;
  travelerType: string;
  comfortLevel: string;
  country: string;
  maxPrice: number;
  searchQuery: string;
  residentOnly: boolean;
}
