import type { BlogPost, CompanySettings, Destination, Hotel, Testimonial, Tour } from './types';

const API_URL = (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || process.env.VITE_API_URL || 'http://localhost:4000').replace(/\/$/, '');
const REVALIDATE_SECONDS = Number(process.env.CATALOG_REVALIDATE_SECONDS || 900);

async function publicGet<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) return fallback;
    return (await response.json()) as T;
  } catch {
    // Builds and previews must remain deployable even when the external API
    // is temporarily unavailable. Runtime ISR will repopulate when it returns.
    return fallback;
  }
}

export const getTours = () => publicGet<Tour[]>('/api/tours', []);
export const getDestinations = () => publicGet<Destination[]>('/api/destinations', []);
export const getHotels = () => publicGet<Hotel[]>('/api/hotels', []);
export const getBlogPosts = () => publicGet<BlogPost[]>('/api/blog', []);
export const getTestimonials = () => publicGet<Testimonial[]>('/api/testimonials', []);
export const getSettings = () => publicGet<CompanySettings | null>('/api/settings', null);

export async function getTourBySlug(slug: string) {
  return (await getTours()).find((item) => item.slug === slug) ?? null;
}
export async function getDestinationBySlug(slug: string) {
  return (await getDestinations()).find((item) => item.slug === slug) ?? null;
}
export async function getHotelBySlug(slug: string) {
  return (await getHotels()).find((item) => item.slug === slug) ?? null;
}
export async function getBlogPostBySlug(slug: string) {
  return (await getBlogPosts()).find((item) => item.slug === slug) ?? null;
}

export const apiOrigin = API_URL;
