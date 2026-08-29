import { Destination } from '../types';

const LOCAL_DESTINATION_IMAGES: Array<[RegExp, string]> = [
  [/maasai|masai|mara/i, '/images/catalog/vehicle-next-to-the-great-migration.jpg'],
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

/** Prefer relevant first-party catalog photography for destination surfaces. */
export function destinationImage(destination: Pick<Destination, 'slug' | 'name' | 'heroImage'>): string {
  const key = `${destination.slug} ${destination.name}`;
  const match = LOCAL_DESTINATION_IMAGES.find(([pattern]) => pattern.test(key));
  return match?.[1] || destination.heroImage || '/images/catalog/vehicle-next-to-the-great-migration.jpg';
}

/** A known-good local fallback used when a destination image fails at runtime. */
export const DESTINATION_IMAGE_FALLBACK = '/images/catalog/vehicle-next-to-the-great-migration.jpg';
