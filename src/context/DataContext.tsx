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

  // Enquiries
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => Promise<{ id: string }>;
  updateEnquiryStatus: (id: string, status: Enquiry['status'], notes?: string) => Promise<void>;

  // Settings (admin-authenticated on the backend)
  updateSettings: (newSettings: Partial<CompanySettings>) => Promise<void>;

  // Price & Currency Helpers
  formatPrice: (amountUSD: number, options?: { specificKES?: number; forceCurrency?: 'USD' | 'KES'; isResident?: boolean }) => string;
  getWhatsAppUrl: (options?: { tourTitle?: string; hotelTitle?: string; customMessage?: string }) => string;
}

// destinations/testimonials/blogPosts CRUD and resetToInitialData used to
// live on this context, but nothing in the app ever called them (no
// admin UI exists for managing destinations, testimonials, or blog
// posts) and the backend has no routes for them either - see server/
// README.md's route table. Removed rather than carried forward as
// interface surface that looks like it works but doesn't persist
// anywhere real. Same for deleteEnquiry (unused) and resetToInitialData
// (a "wipe the production database back to seed data" button has no
// sane place in a live admin panel).

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

  // Initial catalog fetch. Runs once on mount; admin mutations below
  // update local state directly from the server's response rather than
  // re-fetching everything, so this isn't re-triggered on every edit.
  useEffect(() => {
    let cancelled = false;

    async function loadCatalog() {
      try {
        const [toursData, hotelsData, destinationsData, blogData, testimonialsData, settingsData] =
          await Promise.all([
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
  }, []);

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
