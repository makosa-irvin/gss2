export type Guide = {
  slug: string;
  title: string;
  description: string;
  image: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
  related: Array<{ label: string; to: string }>;
};

export const guides: Guide[] = [
  {
    slug: 'kenya-safari-cost-guide', title: 'How Much Does a Kenya Safari Cost?',
    description: 'A practical guide to Kenya safari prices, what changes the cost, and how to compare quotes without comparing unlike trips.',
    image: '/images/catalog/mara-savannah.jpg',
    intro: 'Safari pricing is less like buying an airline seat and more like building a small private journey. Season, group size, park fees, vehicle days and accommodation all change the final number.',
    sections: [
      { heading: 'The biggest cost drivers', body: 'Accommodation category, travel season, the number of people sharing a private vehicle, park and conservancy fees, domestic flights and long-distance transfers usually matter more than a single advertised “from” price.' },
      { heading: 'Why similar-looking safaris price differently', body: 'A lodge inside a reserve can save driving time but cost more. A private conservancy can add activities and reduce vehicle density. A fly-in itinerary may cost more than driving but preserve valuable safari time.' },
      { heading: 'How to compare quotes fairly', body: 'Check park fees, airport transfers, drinks, internal flights, evacuation cover where offered, tips and taxes. Also compare room category, vehicle privacy and the exact number of nights in each destination.' },
    ], related: [{ label: 'Compare safari itineraries', to: '/safaris' }, { label: 'Build around your budget', to: '/safari-builder' }],
  },
  {
    slug: 'kenya-safari-from-usa', title: 'Planning a Kenya Safari from the USA',
    description: 'A practical planning guide for US travelers considering a Kenya safari, from trip length and routing to arrival days and safari extensions.',
    image: '/images/catalog/family-safari-game-drive.jpg',
    intro: 'For travelers coming from the United States, the safari itself is only part of the planning problem. Long-haul travel, the first night in Kenya, route pacing and the journey home all affect how the trip feels.',
    sections: [
      { heading: 'Protect the first safari day', body: 'Long-haul journeys can leave travelers tired even when connections run smoothly. Give yourself enough recovery time before a long road transfer or an important early game drive.' },
      { heading: 'Choose trip length by experience, not park count', body: 'A shorter trip can work well when it concentrates on a few complementary areas. With more time, a contrasting landscape or beach extension can be more rewarding than another one-night stop.' },
      { heading: 'Plan the international journey and safari together', body: 'Arrival airport, domestic connections, luggage limits on smaller aircraft and the final night before departure can influence the best safari sequence.' },
    ], related: [{ label: 'See Kenya safari ideas', to: '/safaris?country=Kenya' }, { label: 'How planning works', to: '/plan-with-us' }],
  },
  {
    slug: '7-day-kenya-safari', title: 'How to Plan a 7-Day Kenya Safari',
    description: 'How to structure one week in Kenya without turning the safari into a race between parks.',
    image: '/images/catalog/elephants-in-amboseli-with-a-back-drop-of-mt-kilimanjaro.jpg',
    intro: 'Seven days is enough for a meaningful Kenya safari when the route is disciplined. The central trade-off is variety versus time spent actually watching wildlife.',
    sections: [
      { heading: 'Two or three safari areas is often enough', body: 'Each additional park creates another transfer, check-in and orientation period. A focused route gives you more useful game-drive time and a calmer rhythm.' },
      { heading: 'Combine contrasting landscapes', body: 'Look for destinations that add something different: open plains, elephant country, northern landscapes, lakes or a conservancy experience.' },
      { heading: 'Road versus air changes the week', body: 'Driving reveals more of the country, while selected flights can preserve time. The right answer depends on route, comfort priorities and transfer tolerance.' },
    ], related: [{ label: 'Browse safari durations', to: '/safaris' }, { label: 'Build a 7-day safari', to: '/safari-builder' }],
  },
  {
    slug: 'best-time-for-kenya-safari', title: 'Best Time for a Kenya Safari: Month by Month',
    description: 'Understand Kenya safari seasons, wildlife viewing, migration timing, weather and how travel dates affect crowds and price.',
    image: '/images/catalog/elephants-in-amboseli-with-a-back-drop-of-mt-kilimanjaro.jpg',
    intro: 'There is no single best month for every traveler. The right window depends on migration, photography, visitor numbers, family travel and whether you are combining safari with the coast.',
    sections: [
      { heading: 'Dry-season safari travel', body: 'June through October generally offers easier wildlife viewing as animals gather around water and vegetation thins. July through October is also associated with migration activity in the Maasai Mara.' },
      { heading: 'Green season', body: 'Periods after the rains can offer dramatic skies, lush landscapes, birdlife and fewer vehicles, although wildlife may be more dispersed.' },
      { heading: 'Build dates around your priorities', body: 'Amboseli, Samburu, the Mara and the coast do not all behave the same way in the same month. Start with the experience you value most.' },
    ], related: [{ label: 'Explore Kenya destinations', to: '/destinations' }, { label: 'Compare safari ideas', to: '/safaris' }],
  },
  {
    slug: 'great-migration-safari-timing', title: 'Great Migration Safari Timing: Kenya or Tanzania?',
    description: 'Plan a Great Migration safari around the movement of the herds rather than a single famous crossing.',
    image: '/images/catalog/serengeti22.jpg',
    intro: 'The Great Migration is a year-round movement through the Serengeti–Mara ecosystem, not an event that happens on one guaranteed date.',
    sections: [
      { heading: 'Do not plan around a guaranteed river crossing', body: 'River crossings are unpredictable wildlife events. Timing can shift with rainfall and herd movement even during the broader crossing season.' },
      { heading: 'Kenya and Tanzania serve different phases', body: 'The Maasai Mara is associated with the northern part of the migration cycle, while different Serengeti areas become important at other times.' },
      { heading: 'Book high-demand windows with flexibility', body: 'Migration-focused periods create strong demand for well-located camps. Prioritize route quality and the overall wildlife experience.' },
    ], related: [{ label: 'Great Migration safaris', to: '/safaris?travelStyle=Great+Migration' }, { label: 'Kenya vs Tanzania', to: '/guides/kenya-vs-tanzania-safari' }],
  },
  {
    slug: 'kenya-vs-tanzania-safari', title: 'Kenya vs Tanzania Safari: Which Is Right for You?',
    description: 'Compare Kenya and Tanzania for wildlife, travel pace, migration timing, parks and combined safari routes.',
    image: '/images/catalog/serengeti22.jpg',
    intro: 'Kenya and Tanzania are not interchangeable versions of the same safari. Both can deliver exceptional wildlife, but route structure, landscapes and travel rhythm differ.',
    sections: [
      { heading: 'Choose Kenya if…', body: 'You want compact route combinations, Maasai Mara and Amboseli, easier Kenyan-coast pairing, or famous parks balanced with northern destinations such as Samburu.' },
      { heading: 'Choose Tanzania if…', body: 'You want the scale of the Serengeti, Ngorongoro and the northern circuit, or your dates align with migration phases outside the Maasai Mara season.' },
      { heading: 'Or combine both', body: 'A Kenya–Tanzania journey works well when the trip is long enough to avoid feeling rushed. Border logistics and park order should be designed as one route.' },
    ], related: [{ label: 'Compare all safaris', to: '/safaris' }, { label: 'Migration timing', to: '/guides/great-migration-safari-timing' }],
  },
  {
    slug: 'kenya-safari-zanzibar', title: 'Kenya Safari and Zanzibar: How to Combine Both',
    description: 'Plan a Kenya safari and Zanzibar beach trip as one journey, with advice on sequencing, pacing and flights.',
    image: '/images/catalog/zanzibar-beach.jpg',
    intro: 'Safari and beach work best when they feel like two deliberate chapters of one trip. The key decisions are route, flight timing and how many nights you need to genuinely slow down.',
    sections: [
      { heading: 'Safari first often creates a natural rhythm', body: 'Early starts and active wildlife days pair naturally with a slower beach finish, although international flight patterns can change the ideal sequence.' },
      { heading: 'Avoid making Zanzibar a token stop', body: 'A very short beach stay can disappear into transfers and check-in time. Decide whether Zanzibar is recovery time, a resort stay or somewhere you also want to explore.' },
      { heading: 'Treat the flight connection as part of the itinerary', body: 'A well-designed route minimizes unnecessary backtracking and protects useful safari and beach time.' },
    ], related: [{ label: 'Safari + beach trips', to: '/safaris?country=Safari+%2B+Beach' }, { label: 'Build safari + beach', to: '/safari-builder' }],
  },
  {
    slug: 'kenya-honeymoon-safari', title: 'How to Plan a Kenya Honeymoon Safari',
    description: 'Plan a Kenya honeymoon around privacy, pacing, memorable stays and wildlife.',
    image: '/images/catalog/picnic-lunch-in-the-wild.jpg',
    intro: 'A strong safari honeymoon balances wildlife with enough privacy and unstructured time to feel celebratory. Luxury is often as much about pace as room category.',
    sections: [
      { heading: 'Do not schedule every hour', body: 'Consecutive dawn starts, long transfers and one-night stays can make an impressive route feel exhausting.' },
      { heading: 'Spend on the moments that matter', body: 'A special room, private dining opportunity, scenic flight or extra night in the right location may matter more than upgrading every property.' },
      { heading: 'Consider a beach finish', body: 'The Kenyan coast or Zanzibar can add a contrasting final chapter after safari when total trip length and routing support it.' },
    ], related: [{ label: 'Honeymoon safaris', to: '/safaris?travelStyle=Honeymoon' }, { label: 'Plan a honeymoon', to: '/plan-with-us' }],
  },
  {
    slug: 'kenya-family-safari', title: 'How to Plan a Kenya Family Safari',
    description: 'A family safari planning guide covering pacing, drive times, accommodation and age considerations.',
    image: '/images/catalog/family-safari-game-drive.jpg',
    intro: 'The best family safari is not simply an adult itinerary with children added to the passenger list. Drive times, room setup and game-drive rhythm deserve extra attention.',
    sections: [
      { heading: 'Design around realistic attention spans', body: 'A route with flexibility, breaks and varied activities can make wildlife days better for the whole family.' },
      { heading: 'Ask about room configuration early', body: 'Family rooms, adjoining rooms and age policies vary by property. Confirm the setup before becoming attached to a particular lodge.' },
      { heading: 'Transfer time matters more with children', body: 'Fewer bases, selected flights or an extra night can sometimes improve a family trip more than adding another park.' },
    ], related: [{ label: 'Family safaris', to: '/safaris?travelStyle=Family' }, { label: 'Build a family safari', to: '/safari-builder' }],
  },
  {
    slug: 'first-time-africa-safari-guide', title: 'First-Time Africa Safari Guide',
    description: 'What first-time safari travelers should know about game drives, luggage, pacing, guides and choosing an itinerary.',
    image: '/images/catalog/family-safari-game-drive.jpg',
    intro: 'A first safari is exciting partly because so much is unfamiliar. Knowing how the days work makes it easier to judge whether an itinerary fits you.',
    sections: [
      { heading: 'Safari days start early', body: 'Wildlife activity and cooler temperatures often make early mornings valuable. Build downtime into longer itineraries.' },
      { heading: 'Your guide matters enormously', body: 'The guide shapes much of the wildlife experience: where you go, how long you wait, what you notice and how the day adapts.' },
      { heading: 'Do not overpack the route', body: 'More parks do not automatically mean a better safari. Long transfers can consume the wildlife time you thought you were buying.' },
    ], related: [{ label: 'Explore safari ideas', to: '/safaris' }, { label: 'How we plan safaris', to: '/plan-with-us' }],
  },
  {
    slug: 'safari-over-60-comfort-guide', title: 'Planning a Comfortable Safari Over 60',
    description: 'Practical safari planning for older travelers: drive times, accessibility, private vehicles, pacing and room choice.',
    image: '/images/catalog/picnic-lunch-in-the-wild.jpg',
    intro: 'Age alone does not define the right safari. Comfort usually comes down to route pacing, mobility needs, vehicle access, room location and flexibility.',
    sections: [
      { heading: 'Reduce unnecessary transfer fatigue', body: 'Ask how many hours are spent driving between parks, not only how many nights the trip lasts. Strategic flights or an extra night can improve the experience.' },
      { heading: 'Discuss mobility before choosing lodges', body: 'Some camps have long walks, steps, uneven paths or rooms far from central areas. Share mobility considerations early.' },
      { heading: 'Private vehicles create flexibility', body: 'A private safari lets your group decide when to return to camp, spend longer at a sighting or shorten a drive.' },
    ], related: [{ label: 'Senior-friendly safaris', to: '/safaris?travelStyle=Senior+Friendly' }, { label: 'Plan with us', to: '/plan-with-us' }],
  },
  {
    slug: 'booking-safari-direct-local-operator', title: 'Booking a Safari Directly with a Local Operator: What to Know',
    description: 'A practical guide to booking a safari directly with a local operator, including marketplace trade-offs and what to verify before paying.',
    image: '/images/catalog/picnic-lunch-in-the-wild.jpg',
    intro: 'Booking direct should feel more personal, not more risky. The important question is whether you understand who is responsible for your trip, what is included and what happens after you enquire.',
    sections: [
      { heading: 'Use marketplaces to research. Use direct conversation to personalize.', body: 'Independent marketplaces and review platforms are useful for discovering operators and checking traveler feedback. Direct conversation can make it easier to shape dates, route, pace and accommodation. This is not a claim that direct is always cheaper or better.' },
      { heading: 'Compare the proposal, not only the headline price', body: 'Check exact accommodation, room category, transport, park fees, internal flights, transfers, meals, activities and exclusions. Online “from” prices are planning guides rather than final quotes.' },
      { heading: 'Before paying, verify the basics', body: 'Read independent reviews, confirm genuine contact details, understand payment and cancellation terms, keep itinerary and receipts, and check passport, visa, insurance and health requirements using official sources.' },
      { heading: 'Ask the uncomfortable questions', body: 'Ask about long transfer days, lodge-location trade-offs, what is private versus shared, what happens if availability changes and when a booking becomes binding.' },
    ], related: [{ label: 'Read traveler reviews', to: '/reviews' }, { label: 'See how we plan', to: '/plan-with-us' }],
  },
];

export const guideBySlug = (slug: string) => guides.find((guide) => guide.slug === slug) ?? null;
