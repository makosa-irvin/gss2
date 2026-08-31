import type { Destination, Tour } from '../types';

export interface GuideRecommendation {
  slug: string;
  title: string;
  reason: string;
}

const GUIDE_LIBRARY: Record<string, Omit<GuideRecommendation, 'slug'>> = {
  'kenya-safari-cost-guide': {
    title: 'How Much Does a Kenya Safari Cost?',
    reason: 'Compare the main factors that change safari pricing and quote value.',
  },
  'kenya-safari-from-usa': {
    title: 'Planning a Kenya Safari from the USA',
    reason: 'Plan long-haul arrival, trip length, luggage and route pacing together.',
  },
  '7-day-kenya-safari': {
    title: 'How to Plan a 7-Day Kenya Safari',
    reason: 'See how to balance variety, transfers and wildlife time in one week.',
  },
  'best-time-for-kenya-safari': {
    title: 'Best Time for a Kenya Safari',
    reason: 'Match travel timing to wildlife priorities, weather, demand and route.',
  },
  'great-migration-safari-timing': {
    title: 'Great Migration Safari Timing',
    reason: 'Understand how migration phases affect whether Kenya or Tanzania fits your dates.',
  },
  'kenya-vs-tanzania-safari': {
    title: 'Kenya vs Tanzania Safari',
    reason: 'Compare route structure, landscapes and migration timing before choosing a country.',
  },
  'kenya-safari-zanzibar': {
    title: 'Kenya Safari and Zanzibar',
    reason: 'Plan safari and beach as one route without wasting useful travel days.',
  },
  'kenya-honeymoon-safari': {
    title: 'How to Plan a Kenya Honeymoon Safari',
    reason: 'Balance wildlife, privacy, memorable stays and a relaxed honeymoon pace.',
  },
  'kenya-family-safari': {
    title: 'How to Plan a Kenya Family Safari',
    reason: 'Think through drive times, room setup and safari pacing for families.',
  },
  'first-time-africa-safari-guide': {
    title: 'First-Time Africa Safari Guide',
    reason: 'Understand game-drive rhythm, route pacing and what to expect on safari.',
  },
  'safari-over-60-comfort-guide': {
    title: 'Planning a Comfortable Safari Over 60',
    reason: 'Compare transfer time, mobility considerations and itinerary flexibility.',
  },
};

function guide(slug: string): GuideRecommendation {
  return { slug, ...GUIDE_LIBRARY[slug] };
}

function uniqueRecommendations(slugs: string[], limit = 3): GuideRecommendation[] {
  return [...new Set(slugs)].filter(slug => GUIDE_LIBRARY[slug]).slice(0, limit).map(guide);
}

export function getTourGuideRecommendations(tour: Tour): GuideRecommendation[] {
  const styles = new Set(tour.travelStyles ?? []);
  const travelers = new Set(tour.travelerTypes ?? []);
  const slugs: string[] = [];

  if (styles.has('Great Migration')) slugs.push('great-migration-safari-timing');
  if (styles.has('Honeymoon') || travelers.has('Honeymooners')) slugs.push('kenya-honeymoon-safari');
  if (styles.has('Family') || travelers.has('Families')) slugs.push('kenya-family-safari');
  if (styles.has('Senior Friendly') || travelers.has('Seniors')) slugs.push('safari-over-60-comfort-guide');
  if (styles.has('Safari & Beach') || tour.country === 'Safari + Beach' || tour.country === 'Zanzibar') slugs.push('kenya-safari-zanzibar');
  if (tour.country === 'Kenya + Tanzania' || tour.country === 'Tanzania') slugs.push('kenya-vs-tanzania-safari');
  if (tour.country === 'Kenya' && tour.durationDays >= 6 && tour.durationDays <= 8) slugs.push('7-day-kenya-safari');
  if (tour.country === 'Kenya' || tour.country === 'Kenya + Tanzania' || tour.country === 'Safari + Beach') slugs.push('best-time-for-kenya-safari');

  slugs.push('kenya-safari-cost-guide', 'first-time-africa-safari-guide');
  return uniqueRecommendations(slugs);
}

export function getDestinationGuideRecommendations(destination: Destination): GuideRecommendation[] {
  const name = destination.name.toLowerCase();
  const slugs: string[] = [];

  if (name.includes('mara') || name.includes('serengeti')) slugs.push('great-migration-safari-timing');
  if (destination.country === 'Tanzania') slugs.push('kenya-vs-tanzania-safari');
  if (destination.country === 'Zanzibar') slugs.push('kenya-safari-zanzibar');
  if (destination.country === 'Kenya') slugs.push('best-time-for-kenya-safari');

  slugs.push('kenya-safari-cost-guide', 'first-time-africa-safari-guide');
  return uniqueRecommendations(slugs);
}
