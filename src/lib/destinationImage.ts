import { Destination } from '../types';

const LOCAL_DESTINATION_IMAGES: Array<[RegExp, string]> = [
  [/maasai|masai|mara/i, '/images/catalog/mara-savannah.jpg'],
  [/amboseli/i, '/images/catalog/elephants-in-amboseli-with-a-back-drop-of-mt-kilimanjaro.jpg'],
  [/samburu/i, '/images/catalog/samburu-culture.jpg'],
  [/serengeti/i, '/images/catalog/serengeti22.jpg'],
  [/ngorongoro/i, '/images/catalog/ngorongoro-crater-tanzania.jpg'],
  [/tarangire/i, '/images/catalog/baobab-tarangire.jpg'],
  [/nakuru/i, '/images/catalog/lake-nakuru-rhino.jpg'],
  [/naivasha/i, '/images/catalog/lake-naivasha.jpg'],
  [/nairobi/i, '/images/catalog/nairobi-national-park-zebras.jpg'],
  [/diani/i, '/images/catalog/swahili-beach.jpg'],
  [/watamu/i, '/images/catalog/hemingways-watamu-1.jpg'],
  [/mombasa/i, '/images/catalog/beach-front-hotel-in-mombas.jpg'],
  [/zanzibar/i, 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Beach-Zanzibar.jpg']
];

/**
 * Prefer the site's own catalog photography for destination surfaces. The
 * backend still owns editorial destination data; this layer simply ensures
 * cards/heroes don't fall back to unrelated or missing remote images.
 *
 * The Zanzibar fallback is a public-domain Wikimedia Commons photograph by
 * Matthias Krämer because the current catalog contains no clearly Zanzibar-
 * specific local image. It can be replaced with first-party photography later.
 */
export function destinationImage(destination: Pick<Destination, 'slug' | 'name' | 'heroImage'>): string {
  const key = `${destination.slug} ${destination.name}`;
  const match = LOCAL_DESTINATION_IMAGES.find(([pattern]) => pattern.test(key));
  return match?.[1] || destination.heroImage || '/images/catalog/mara-savannah.jpg';
}
