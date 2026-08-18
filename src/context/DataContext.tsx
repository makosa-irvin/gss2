import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Tour,
  Destination,
  Hotel,
  Testimonial,
  BlogPost,
  CompanySettings,
  Enquiry
} from '../types';
import {
  initialCompanySettings,
  initialDestinations,
  initialTours,
  initialHotels,
  initialTestimonials,
  initialBlogPosts
} from '../data/initialData';

interface DataContextType {
  tours: Tour[];
  destinations: Destination[];
  hotels: Hotel[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
  enquiries: Enquiry[];
  settings: CompanySettings;
  activeCurrency: 'USD' | 'KES';
  setActiveCurrency: (currency: 'USD' | 'KES') => void;
  isKenyanResidentMode: boolean;
  setIsKenyanResidentMode: (val: boolean) => void;

  // CRUD Tours
  addTour: (tour: Omit<Tour, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTour: (id: string, updated: Partial<Tour>) => void;
  deleteTour: (id: string) => void;

  // CRUD Destinations
  addDestination: (destination: Omit<Destination, 'id'>) => void;
  updateDestination: (id: string, updated: Partial<Destination>) => void;
  deleteDestination: (id: string) => void;

  // CRUD Hotels
  addHotel: (hotel: Omit<Hotel, 'id'>) => void;
  updateHotel: (id: string, updated: Partial<Hotel>) => void;
  deleteHotel: (id: string) => void;

  // CRUD Enquiries
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => Enquiry;
  updateEnquiryStatus: (id: string, status: Enquiry['status'], notes?: string) => void;
  deleteEnquiry: (id: string) => void;

  // CRUD Testimonials
  addTestimonial: (test: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: string, updated: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;

  // CRUD Blog
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, updated: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;

  // Settings
  updateSettings: (newSettings: Partial<CompanySettings>) => void;
  resetToInitialData: () => void;

  // Price & Currency Helpers
  formatPrice: (amountUSD: number, options?: { specificKES?: number; forceCurrency?: 'USD' | 'KES'; isResident?: boolean }) => string;
  getWhatsAppUrl: (options?: { tourTitle?: string; hotelTitle?: string; customMessage?: string }) => string;
}

const STORAGE_KEYS = {
  TOURS: 'gss_tours_v1',
  DESTINATIONS: 'gss_destinations_v1',
  HOTELS: 'gss_hotels_v1',
  TESTIMONIALS: 'gss_testimonials_v1',
  BLOG: 'gss_blog_v1',
  ENQUIRIES: 'gss_enquiries_v1',
  SETTINGS: 'gss_settings_v1',
  CURRENCY: 'gss_currency_v1',
  RESIDENT_MODE: 'gss_resident_mode_v1'
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage or fallback to initial data
  const [tours, setTours] = useState<Tour[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TOURS);
      return saved ? JSON.parse(saved) : initialTours;
    } catch {
      return initialTours;
    }
  });

  const [destinations, setDestinations] = useState<Destination[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.DESTINATIONS);
      return saved ? JSON.parse(saved) : initialDestinations;
    } catch {
      return initialDestinations;
    }
  });

  const [hotels, setHotels] = useState<Hotel[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HOTELS);
      return saved ? JSON.parse(saved) : initialHotels;
    } catch {
      return initialHotels;
    }
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
      return saved ? JSON.parse(saved) : initialTestimonials;
    } catch {
      return initialTestimonials;
    }
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BLOG);
      return saved ? JSON.parse(saved) : initialBlogPosts;
    } catch {
      return initialBlogPosts;
    }
  });

  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
      if (saved) return JSON.parse(saved);
      // Demo enquiry
      return [
        {
          id: "enq-101",
          fullName: "Alexander Hamilton",
          email: "alex.hamilton@example.com",
          phone: "+1 415 555 0192",
          country: "United States",
          travelDates: "October 2026",
          durationDays: 14,
          numberOfTravelers: { adults: 2, children: 0 },
          tourId: "tour-14-day-ultimate-kenya-tanzania",
          tourTitle: "14-Day Ultimate Kenya & Tanzania Safari Experience",
          preferredDestination: "Kenya + Tanzania",
          safariType: "Luxury Private Safari",
          budget: "$10,000 - $20,000",
          accommodationPreference: "5-Star Tented Camps",
          specialRequests: "Celebrating 10th wedding anniversary. Would love private bush dinners.",
          hearAboutUs: "Google Search",
          status: "New",
          createdAt: new Date().toISOString()
        }
      ];
    } catch {
      return [];
    }
  });

  const [settings, setSettings] = useState<CompanySettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : initialCompanySettings;
    } catch {
      return initialCompanySettings;
    }
  });

  const [activeCurrency, setActiveCurrencyState] = useState<'USD' | 'KES'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CURRENCY);
      return (saved === 'KES' || saved === 'USD') ? saved : settings.currency.primary || 'USD';
    } catch {
      return 'USD';
    }
  });

  const [isKenyanResidentMode, setIsKenyanResidentModeState] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RESIDENT_MODE);
      return saved === 'true';
    } catch {
      return false;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TOURS, JSON.stringify(tours));
  }, [tours]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(destinations));
  }, [destinations]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HOTELS, JSON.stringify(hotels));
  }, [hotels]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BLOG, JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  const setActiveCurrency = (curr: 'USD' | 'KES') => {
    setActiveCurrencyState(curr);
    localStorage.setItem(STORAGE_KEYS.CURRENCY, curr);
  };

  const setIsKenyanResidentMode = (val: boolean) => {
    setIsKenyanResidentModeState(val);
    localStorage.setItem(STORAGE_KEYS.RESIDENT_MODE, String(val));
    if (val) {
      setActiveCurrency('KES');
    }
  };

  // TOUR OPERATIONS
  const addTour = (newTourData: Omit<Tour, 'id' | 'createdAt' | 'updatedAt'>) => {
    const id = `tour-${Date.now()}`;
    const slug = newTourData.slug || newTourData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const fullTour: Tour = {
      ...newTourData,
      id,
      slug,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setTours(prev => [fullTour, ...prev]);
  };

  const updateTour = (id: string, updated: Partial<Tour>) => {
    setTours(prev => prev.map(t => (t.id === id ? { ...t, ...updated, updatedAt: new Date().toISOString() } : t)));
  };

  const deleteTour = (id: string) => {
    setTours(prev => prev.filter(t => t.id !== id));
  };

  // DESTINATION OPERATIONS
  const addDestination = (destData: Omit<Destination, 'id'>) => {
    const id = `dest-${Date.now()}`;
    const slug = destData.slug || destData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newDest: Destination = {
      ...destData,
      id,
      slug
    };
    setDestinations(prev => [...prev, newDest]);
  };

  const updateDestination = (id: string, updated: Partial<Destination>) => {
    setDestinations(prev => prev.map(d => (d.id === id ? { ...d, ...updated } : d)));
  };

  const deleteDestination = (id: string) => {
    setDestinations(prev => prev.filter(d => d.id !== id));
  };

  // HOTEL OPERATIONS
  const addHotel = (hotelData: Omit<Hotel, 'id'>) => {
    const id = `hotel-${Date.now()}`;
    const slug = hotelData.slug || hotelData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newHotel: Hotel = {
      ...hotelData,
      id,
      slug
    };
    setHotels(prev => [...prev, newHotel]);
  };

  const updateHotel = (id: string, updated: Partial<Hotel>) => {
    setHotels(prev => prev.map(h => (h.id === id ? { ...h, ...updated } : h)));
  };

  const deleteHotel = (id: string) => {
    setHotels(prev => prev.filter(h => h.id !== id));
  };

  // ENQUIRY OPERATIONS
  const addEnquiry = (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>): Enquiry => {
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: `enq-${Date.now()}`,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
    return newEnquiry;
  };

  const updateEnquiryStatus = (id: string, status: Enquiry['status'], notes?: string) => {
    setEnquiries(prev => prev.map(e => (e.id === id ? { ...e, status, notes: notes !== undefined ? notes : e.notes } : e)));
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
  };

  // TESTIMONIAL OPERATIONS
  const addTestimonial = (testData: Omit<Testimonial, 'id'>) => {
    const newTest: Testimonial = { ...testData, id: `rev-${Date.now()}` };
    setTestimonials(prev => [newTest, ...prev]);
  };

  const updateTestimonial = (id: string, updated: Partial<Testimonial>) => {
    setTestimonials(prev => prev.map(t => (t.id === id ? { ...t, ...updated } : t)));
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  // BLOG OPERATIONS
  const addBlogPost = (postData: Omit<BlogPost, 'id'>) => {
    const slug = postData.slug || postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newPost: BlogPost = { ...postData, id: `blog-${Date.now()}`, slug };
    setBlogPosts(prev => [newPost, ...prev]);
  };

  const updateBlogPost = (id: string, updated: Partial<BlogPost>) => {
    setBlogPosts(prev => prev.map(b => (b.id === id ? { ...b, ...updated } : b)));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(b => b.id !== id));
  };

  // SETTINGS
  const updateSettings = (newSettings: Partial<CompanySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const resetToInitialData = () => {
    setTours(initialTours);
    setDestinations(initialDestinations);
    setHotels(initialHotels);
    setTestimonials(initialTestimonials);
    setBlogPosts(initialBlogPosts);
    setSettings(initialCompanySettings);
    localStorage.removeItem(STORAGE_KEYS.TOURS);
    localStorage.removeItem(STORAGE_KEYS.DESTINATIONS);
    localStorage.removeItem(STORAGE_KEYS.HOTELS);
    localStorage.removeItem(STORAGE_KEYS.TESTIMONIALS);
    localStorage.removeItem(STORAGE_KEYS.BLOG);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
  };

  // PRICE FORMATTING
  const formatPrice = (
    amountUSD: number,
    options?: { specificKES?: number; forceCurrency?: 'USD' | 'KES'; isResident?: boolean }
  ): string => {
    const targetCurrency = options?.forceCurrency || activeCurrency;
    const rate = settings.currency.exchangeRateUsdToKes || 130;

    if (targetCurrency === 'KES') {
      if (options?.specificKES && options.specificKES > 0) {
        return `KSH ${options.specificKES.toLocaleString()}`;
      }
      const kes = Math.round(amountUSD * rate);
      return `KSH ${kes.toLocaleString()}`;
    }

    return `$${amountUSD.toLocaleString()}`;
  };

  // WHATSAPP URL GENERATOR
  const getWhatsAppUrl = (options?: { tourTitle?: string; hotelTitle?: string; customMessage?: string }) => {
    const cleanNumber = (settings.booking.whatsappNumber || '+254700000000').replace(/[^0-9]/g, '');
    let text = options?.customMessage;

    if (!text) {
      if (options?.tourTitle) {
        text = `Hi Good Secrets Safaris, I'm interested in the ${options.tourTitle}. Please send me more information and availability.`;
      } else if (options?.hotelTitle) {
        text = `Hi Good Secrets Safaris, I'm interested in booking ${options.hotelTitle}. Please share the current seasonal rates and availability.`;
      } else {
        text = settings.booking.whatsappDefaultMessage || "Hello Good Secrets Safaris, I'd like to enquire about a safari.";
      }
    }

    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <DataContext.Provider
      value={{
        tours,
        destinations,
        hotels,
        testimonials,
        blogPosts,
        enquiries,
        settings,
        activeCurrency,
        setActiveCurrency,
        isKenyanResidentMode,
        setIsKenyanResidentMode,
        addTour,
        updateTour,
        deleteTour,
        addDestination,
        updateDestination,
        deleteDestination,
        addHotel,
        updateHotel,
        deleteHotel,
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        updateSettings,
        resetToInitialData,
        formatPrice,
        getWhatsAppUrl
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
