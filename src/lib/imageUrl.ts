/**
 * The catalog stores one image URL per tour/hotel/destination (see
 * src/data/initialData.ts), sized for full-bleed use on that item's own
 * detail page (typically 1400-2000px wide). Grid cards (TourCard,
 * HotelCard, DestinationCard) render that same URL at ~378px CSS width,
 * which meant every homepage visitor downloaded full detail-page-sized
 * images for what's visually a thumbnail - Lighthouse's image-delivery
 * insight measured ~323KB of waste from exactly this on the homepage
 * alone.
 *
 * Unsplash source URLs support resizing via query params (`w`, `q`), so
 * rather than storing a second "thumbnail" URL per item, request a
 * smaller render of the same image at the point of use. Non-Unsplash
 * URLs (e.g. a future admin-uploaded image from another host) are
 * returned unchanged.
 */
export function unsplashCardImage(url: string, width: number, quality = 75): string {
  if (!url || !url.includes('images.unsplash.com')) return url;
  try {
    const parsed = new URL(url);
    parsed.searchParams.set('w', String(width));
    parsed.searchParams.set('q', String(quality));
    return parsed.toString();
  } catch {
    return url;
  }
}
