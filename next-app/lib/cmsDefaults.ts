import type { AboutContent, HomepageContent } from './types';

export const DEFAULT_HOMEPAGE: HomepageContent = {
  eyebrow: 'Private safaris · Kenya · Tanzania · Zanzibar',
  title: 'Your safari.',
  highlightedTitle: 'Our home.',
  subtitle: 'Private 4x4 journeys, experienced local guides and carefully chosen stays — shaped around your dates, pace and priorities.',
  heroImage: '/images/catalog/vehicle-next-to-the-great-migration.jpg',
  primaryCtaLabel: 'Build My Safari',
  secondaryCtaLabel: 'Explore Safari Ideas',
};

export const DEFAULT_ABOUT: AboutContent = {
  eyebrow: 'Local East Africa safari planning',
  title: 'The people planning your safari are here in East Africa.',
  intro: 'Good Secrets Safaris plans private journeys across Kenya, Tanzania and the coast with a direct relationship between you and the local team coordinating the trip.',
  storyTitle: 'You should know who is responsible for your trip.',
  storyParagraphs: [
    'A safari is a major purchase and often a once-in-a-lifetime journey. Our role is to make the planning clear enough that you understand the route, what is included, where you are staying and who to contact before you decide to proceed.',
    'The itineraries on this website are starting points. We can slow them down, add nights, change accommodation, combine countries or build around your travel style.',
  ],
  teamPhoto: '/images/catalog/team-at-nairobi-national-park.jpg',
  teamMembers: [
    { id: 'team-elsy', name: 'Elsy', role: 'Safari Planner, Nairobi office', bio: 'Elsy leads itinerary planning, matching lodges, routing and pace to each traveler and staying in touch from the first enquiry through departure.', imageUrl: '/images/catalog/elsy-safari-planner.jpg', active: true },
    { id: 'team-solomon', name: 'Solomon', role: 'Director', bio: 'Solomon leads game drives across Kenya and shares more than ten years of local guiding knowledge with every group.', imageUrl: '/images/catalog/solomon-director.jpg', active: true },
  ],
};
