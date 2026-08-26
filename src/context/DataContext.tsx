import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  Tour,
  Destination,
  Hotel,
  Testimonial,
  BlogPost,
  CompanySettings,
  Enquiry
} from '../types';
import { initialCompanySettings } from '../data/initialData';
import { api, ApiError } from '../services/api';

export interface AdminUser {
  id: string;
  email: string;
  name: string;
}

interface DataContextType {
  tours: Tour[];
  destinations: Destination[];
  hotels: Hotel[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
  enquiries: Enquiry[];
  settings: CompanySettings;

  // True while the initial catalog fetch (tours/hotels/destinations/
  // blog/testimonials/settings) is in flight. App.tsx gates rendering
  // the rest of the app on this, so individual views can keep assuming
  // `tours`/`hotels`/etc. are always populated arrays, same as they did
  // when this context read from localStorage synchronously.
  isLoading: boolean;
  loadError: string | null;

  activeCurrency: 'USD' | 'KES';
  setActiveCurrency: (currency: 'USD' | 'KES') => void;
  isKenyanResidentMode: boolean;
  setIsKenyanResidentMode: (val: boolean) => void;

  // Admin authentication
  currentAdmin: AdminUser | null;
  authLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;

  // CRUD Tours (admin-authenticated on the backend)
  addTour: (tour: Omit<Tour, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateTour: (id: string, updated: Partial<Tour>) => Promise<void>;
  deleteTour: (id: string) => Promise<void>;

  // CRUD Hotels (admin-authenticated on the backend)
  addHotel: (hotel: Omit<Hotel, 'id'>) => Promise<void>;
  updateHotel: (id: string, updated: Partial<Hotel>) => Promise<void>;
  deleteHotel: (id: string) => Promise<void>;

  // CMS content
  addDestination: (destination: Omit<Destination, 'id'>) => Promise<void>;
  updateDestination: (id: string, updated: Partial<Destination>) => Promise<void>;
  deleteDestination: (id: string) => Promise<void>;
  addBlogPost: (post: Omit<BlogPost, 'id'>) => Promise<void>;
  updateBlogPost: (id: string, updated: Partial<BlogPost>) => Promise<void>;
  deleteBlogPost: (id: string) => Promise<void>;
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => Promise<void>;
  updateTestimonial: (id: string, updated: Partial<Testimonial>) => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;

  // Enquiries
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => Promise<{ id: string }>;
  updateEnquiryStatus: (id: string, status: Enquiry['status'], notes?: string) => Promise<void>;

  // Settings (admin-authenticated on the backend)
  updateSettings: (newSettings: Partial<CompanySettings>) => Promise<void>;

  // Price & Currency Helpers
  formatPrice: (amountUSD: number, options?: { specificKES?: number; forceCurrency?: 'USD' | 'KES'; isResident?: boolean }) => string;
  getWhatsAppUrl: (options?: { tourTitle?: string; hotelTitle?: string; customMessage?: string }) => string;
}

// Public visitors receive only published content; authenticated admins
// load the complete catalog, including drafts, from the admin endpoints.

const STORAGE_KEYS = {
  CURRENCY: 'gss_currency_v1',
  RESIDENT_MODE: 'gss_resident_mode_v1'
};

const DataContext = createContext<DataContextType | undefined>(undefined);

// Backend Enquiry rows are flat (adults/children as separate columns -
// see server/src/db/schema.ts), while the frontend's Enquiry type nests
// them as numberOfTravelers: {adults, children} (see src/types.ts). This
// is the one place that translates between the two shapes, so
// SafariBuilderWizard and EnquiryModal - the only two callers of
// addEnquiry - never needed to change.
function toApiEnquiryPayload(enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) {
  const { numberOfTravelers, ...rest } = enquiry;
  return {
    ...rest,
    adults: numberOfTravelers.adults,
    children: numberOfTravelers.children,
  };
}

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [settings, setSettings] = useState<CompanySettings>(initialCompanySettings);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [currentAdmin, setCurrentAdmin] = useState<AdminUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [activeCurrency, setActiveCurrencyState] = useState<'USD' | 'KES'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CURRENCY);
      return saved === 'KES' || saved === 'USD' ? saved : 'USD';
    } catch {
      return 'USD';
    }
  });

  const [isKenyanResidentMode, setIsKenyanResidentModeState] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.RESIDENT_MODE) === 'true';
    } catch {
      return false;
    }
  });

  // Loads the catalog (tours/hotels/destinations/blog/testimonials) plus
  // settings, and re-runs whenever the admin session state changes so an
  // admin sees drafts and a logged-out visitor only sees published
  // content. Deliberately waits for the auth check (authLoading) to
  // resolve before fetching anything, rather than firing an unconditional
  // public-catalog fetch on mount alongside a separate admin-catalog
  // fetch once login resolves: two independent effects racing to call
  // setTours/setHotels/etc meant whichever fetch happened to resolve
  // last would silently win, so an already-logged-in admin refreshing
  // the page could occasionally end up seeing only published content
  // (their own drafts missing) if the public fetch happened to resolve
  // after the admin one. Waiting for authLoading first means only one
  // fetch (the correct one) ever runs per auth state.
  useEffect(() => {
    if (authLoading) return;
    let cancelled = false;

    async function loadCatalog() {
      try {
        const [toursData, hotelsData, destinationsData, blogData, testimonialsData, settingsData] =
          currentAdmin
            ? await Promise.all([
                api.get<Tour[]>('/api/admin/tours'),
                api.get<Hotel[]>('/api/admin/hotels'),
                api.get<Destination[]>('/api/admin/destinations'),
                api.get<BlogPost[]>('/api/admin/blog'),
                api.get<Testimonial[]>('/api/admin/testimonials'),
                api.get<CompanySettings>('/api/settings'),
              ])
            : await Promise.all([
                api.get<Tour[]>('/api/tours'),
                api.get<Hotel[]>('/api/hotels'),
                api.get<Destination[]>('/api/destinations'),
                api.get<BlogPost[]>('/api/blog'),
                api.get<Testimonial[]>('/api/testimonials'),
                api.get<CompanySettings>('/api/settings'),
              ]);

        if (cancelled) return;
        setTours(toursData);
        setHotels(hotelsData);
        setDestinations(destinationsData);
        setBlogPosts(blogData);
        setTestimonials(testimonialsData);
        setSettings(settingsData);
        setLoadError(null);
      } catch (err) {
        if (cancelled) return;
        const message =
          err instanceof ApiError
            ? err.message
            : 'Could not load site content. Please check your connection and try refreshing.';
        setLoadError(message);
        console.error('Failed to load catalog data:', err);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadCatalog();
    return () => {
      cancelled = true;
    };
  }, [authLoading, currentAdmin]);

  // Restores the admin session on page load/refresh by asking the
  // backend whether the httpOnly cookie (if any) is still valid - the
  // frontend has no way to read that cookie itself, by design.
  useEffect(() => {
    let cancelled = false;

    api
      .get<AdminUser>('/api/auth/me')
      .then((user) => {
        if (!cancelled) setCurrentAdmin(user);
      })
      .catch(() => {
        if (!cancelled) setCurrentAdmin(null);
      })
      .finally(() => {
        if (!cancelled) setAuthLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Enquiries are only readable by an authenticated admin (see
  // server/src/routes/enquiries.ts), so only fetch them once we know
  // there's a logged-in admin - not on every page load for every visitor.
  useEffect(() => {
    if (!currentAdmin) {
      setEnquiries([]);
      return;
    }
    let cancelled = false;
    api
      .get<Enquiry[]>('/api/enquiries')
      .then((data) => {
        if (!cancelled) setEnquiries(data);
      })
      .catch((err) => console.error('Failed to load enquiries:', err));
    return () => {
      cancelled = true;
    };
  }, [currentAdmin]);

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

  const login = useCallback(async (email: string, password: string) => {
    const user = await api.post<AdminUser>('/api/auth/login', { email, password });
    setCurrentAdmin(user);
  }, []);

  const logout = useCallback(async () => {
    await api.post('/api/auth/logout');
    // Setting currentAdmin to null re-triggers the consolidated catalog
    // effect above, which re-fetches from the public (published-only)
    // endpoints on its own - no need to duplicate that fetch here.
    setCurrentAdmin(null);
  }, []);

  // TOUR OPERATIONS
  const addTour = async (newTourData: Omit<Tour, 'id' | 'createdAt' | 'updatedAt'>) => {
    const created = await api.post<Tour>('/api/admin/tours', newTourData);
    setTours(prev => [created, ...prev]);
  };

  const updateTour = async (id: string, updated: Partial<Tour>) => {
    const saved = await api.put<Tour>(`/api/admin/tours/${id}`, updated);
    setTours(prev => prev.map(t => (t.id === id ? saved : t)));
  };

  const deleteTour = async (id: string) => {
    await api.delete(`/api/admin/tours/${id}`);
    setTours(prev => prev.filter(t => t.id !== id));
  };

  // HOTEL OPERATIONS
  const addHotel = async (hotelData: Omit<Hotel, 'id'>) => {
    const created = await api.post<Hotel>('/api/admin/hotels', hotelData);
    setHotels(prev => [created, ...prev]);
  };

  const updateHotel = async (id: string, updated: Partial<Hotel>) => {
    const saved = await api.put<Hotel>(`/api/admin/hotels/${id}`, updated);
    setHotels(prev => prev.map(h => (h.id === id ? saved : h)));
  };

  const deleteHotel = async (id: string) => {
    await api.delete(`/api/admin/hotels/${id}`);
    setHotels(prev => prev.filter(h => h.id !== id));
  };

  // DESTINATION OPERATIONS
  const addDestination = async (data: Omit<Destination, 'id'>) => {
    const created = await api.post<Destination>('/api/admin/destinations', data);
    setDestinations(prev => [created, ...prev]);
  };
  const updateDestination = async (id: string, updated: Partial<Destination>) => {
    const saved = await api.put<Destination>(`/api/admin/destinations/${id}`, updated);
    setDestinations(prev => prev.map(item => item.id === id ? saved : item));
  };
  const deleteDestination = async (id: string) => {
    await api.delete(`/api/admin/destinations/${id}`);
    setDestinations(prev => prev.filter(item => item.id !== id));
  };

  // BLOG OPERATIONS
  const addBlogPost = async (data: Omit<BlogPost, 'id'>) => {
    const created = await api.post<BlogPost>('/api/admin/blog', data);
    setBlogPosts(prev => [created, ...prev]);
  };
  const updateBlogPost = async (id: string, updated: Partial<BlogPost>) => {
    const saved = await api.put<BlogPost>(`/api/admin/blog/${id}`, updated);
    setBlogPosts(prev => prev.map(item => item.id === id ? saved : item));
  };
  const deleteBlogPost = async (id: string) => {
    await api.delete(`/api/admin/blog/${id}`);
    setBlogPosts(prev => prev.filter(item => item.id !== id));
  };

  // TESTIMONIAL OPERATIONS
  const addTestimonial = async (data: Omit<Testimonial, 'id'>) => {
    const created = await api.post<Testimonial>('/api/admin/testimonials', data);
    setTestimonials(prev => [created, ...prev]);
  };
  const updateTestimonial = async (id: string, updated: Partial<Testimonial>) => {
    const saved = await api.put<Testimonial>(`/api/admin/testimonials/${id}`, updated);
    setTestimonials(prev => prev.map(item => item.id === id ? saved : item));
  };
  const deleteTestimonial = async (id: string) => {
    await api.delete(`/api/admin/testimonials/${id}`);
    setTestimonials(prev => prev.filter(item => item.id !== id));
  };

  // ENQUIRY OPERATIONS
  const addEnquiry = async (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => {
    return api.post<{ id: string }>('/api/enquiries', toApiEnquiryPayload(enquiryData));
  };

  const updateEnquiryStatus = async (id: string, status: Enquiry['status'], notes?: string) => {
    const saved = await api.put<Enquiry>(`/api/enquiries/${id}/status`, { status, notes });
    setEnquiries(prev => prev.map(e => (e.id === id ? saved : e)));
  };

  // SETTINGS
  const updateSettings = async (newSettings: Partial<CompanySettings>) => {
    const saved = await api.put<CompanySettings>('/api/settings', newSettings);
    setSettings(saved);
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
        isLoading,
        loadError,
        activeCurrency,
        setActiveCurrency,
        isKenyanResidentMode,
        setIsKenyanResidentMode,
        currentAdmin,
        authLoading,
        login,
        logout,
        addTour,
        updateTour,
        deleteTour,
        addHotel,
        updateHotel,
        deleteHotel,
        addDestination,
        updateDestination,
        deleteDestination,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        addEnquiry,
        updateEnquiryStatus,
        updateSettings,
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
