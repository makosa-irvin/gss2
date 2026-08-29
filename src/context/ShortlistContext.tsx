import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface ShortlistState {
  tours: string[];
  hotels: string[];
}

interface ShortlistContextValue {
  savedTourSlugs: string[];
  savedHotelSlugs: string[];
  savedCount: number;
  isTourSaved: (slug: string) => boolean;
  isHotelSaved: (slug: string) => boolean;
  toggleTour: (slug: string) => void;
  toggleHotel: (slug: string) => void;
  clearShortlist: () => void;
}

const STORAGE_KEY = 'gss-safari-shortlist-v1';
const EMPTY_STATE: ShortlistState = { tours: [], hotels: [] };

const ShortlistContext = createContext<ShortlistContextValue | undefined>(undefined);

function loadShortlist(): ShortlistState {
  if (typeof window === 'undefined') return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    const parsed = JSON.parse(raw) as Partial<ShortlistState>;
    return {
      tours: Array.from(new Set(Array.isArray(parsed.tours) ? parsed.tours.filter(item => typeof item === 'string') : [])),
      hotels: Array.from(new Set(Array.isArray(parsed.hotels) ? parsed.hotels.filter(item => typeof item === 'string') : []))
    };
  } catch {
    return EMPTY_STATE;
  }
}

export const ShortlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [shortlist, setShortlist] = useState<ShortlistState>(loadShortlist);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(shortlist));
    } catch {
      // Saving a shortlist is a progressive enhancement; browsing still works if storage is unavailable.
    }
  }, [shortlist]);

  const value = useMemo<ShortlistContextValue>(() => ({
    savedTourSlugs: shortlist.tours,
    savedHotelSlugs: shortlist.hotels,
    savedCount: shortlist.tours.length + shortlist.hotels.length,
    isTourSaved: slug => shortlist.tours.includes(slug),
    isHotelSaved: slug => shortlist.hotels.includes(slug),
    toggleTour: slug => setShortlist(current => ({
      ...current,
      tours: current.tours.includes(slug) ? current.tours.filter(item => item !== slug) : [...current.tours, slug]
    })),
    toggleHotel: slug => setShortlist(current => ({
      ...current,
      hotels: current.hotels.includes(slug) ? current.hotels.filter(item => item !== slug) : [...current.hotels, slug]
    })),
    clearShortlist: () => setShortlist(EMPTY_STATE)
  }), [shortlist]);

  return <ShortlistContext.Provider value={value}>{children}</ShortlistContext.Provider>;
};

export function useShortlist() {
  const context = useContext(ShortlistContext);
  if (!context) throw new Error('useShortlist must be used within ShortlistProvider');
  return context;
}
