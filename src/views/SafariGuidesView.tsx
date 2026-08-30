import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { PageMeta } from '../components/common/PageMeta';
import { absoluteSiteUrl, SCHEMA_CONTEXT } from '../lib/site';

type Guide = {
  slug: string;
  title: string;
  description: string;
  image: string;
  intro: string;
  sections: { heading: string; body: string }[];
  related?: { label: string; to: string }[];
};

const guides: Guide[] = [
  {
    slug: 'kenya-safari-cost-guide',
    title: 'How Much Does a Kenya Safari Cost?',
    description: 'A practical guide to Kenya safari prices, what changes the cost, and how to compare quotes without comparing unlike trips.',
    image: '/images/catalog/mara-savannah.jpg',
    intro: 'Safari pricing is less like buying an airline seat and more like building a small private journey. Season, group size, park fees, vehicle days and accommodation all change the final number.',
    sections: [
      { heading: 'The biggest cost drivers', body: 'Accommodation category, travel season, the number of people sharing a private vehicle, park and conservancy fees, domestic flights and how many long-distance transfers are included usually matter more than a single advertised “from” price.' },
      { heading: 'Why two similar-looking safaris can price differently', body: 'A lodge inside a reserve can save driving time but cost more. A private conservancy can add activities and lower vehicle density. A fly-in itinerary may cost more than driving but preserve valuable safari time. Compare what the itinerary actually gives you.' },
      { heading: 'How to compare quotes fairly', body: 'Check whether park fees, airport transfers, drinks, internal flights, medical evacuation cover where offered, tips and taxes are included. Also compare room category, vehicle privacy and the exact number of nights in each destination.' }
    ],
    related: [{ label: 'Compare safari itineraries', to: '/safaris' }, { label: 'Build a trip around your budget', to: '/safari-builder' }]
  },
  {
    slug: 'kenya-safari-from-usa',
    title: 'Planning a Kenya Safari from the USA',
    description: 'A practical planning guide for US travelers considering a Kenya safari, from trip length and routing to arrival days, luggage and safari extensions.',
    image: '/images/catalog/family-safari-game-drive.jpg',
    intro: 'For travelers coming from the United States, the safari itself is only part of the planning problem. Long-haul travel, the first night in Kenya, route pacing and the journey home all affect how the trip feels.',
    sections: [
      { heading: 'Protect the first safari day', body: 'Long-haul journeys can leave travelers tired even when flight connections run smoothly. Consider whether your itinerary gives you enough recovery time before a long road transfer or an important early game drive.' },
      { heading: 'Choose trip length by experience, not park count', body: 'A shorter trip can work well when it concentrates on a few complementary areas. With more time, adding a contrasting landscape or a beach extension can be more rewarding than adding another one-night park stop.' },
      { heading: 'Plan the international journey and safari together', body: 'Arrival airport, domestic flight connections, luggage limits on smaller aircraft and the final night before departure can influence the best safari sequence. Treat these as part of the itinerary rather than details to solve afterwards.' }
    ],
    related: [{ label: 'See Kenya safari ideas', to: '/safaris?country=Kenya' }, { label: 'How safari planning works', to: '/plan-with-us' }]
  },
  {
    slug: '7-day-kenya-safari',
    title: 'How to Plan a 7-Day Kenya Safari',
    description: 'How to structure one week in Kenya without turning the safari into a race between parks, with route and pacing considerations for a seven-day trip.',
    image: '/images/catalog/elephants-in-amboseli-with-a-back-drop-of-mt-kilimanjaro.jpg',
    intro: 'Seven days is enough for a meaningful Kenya safari when the route is disciplined. The central trade-off is variety versus time spent actually watching wildlife.',
    sections: [
      { heading: 'Two or three safari areas is often enough', body: 'Each additional park creates another transfer, check-in and orientation period. A focused route can give you more useful game-drive time and a calmer rhythm than trying to collect as many destinations as possible.' },
      { heading: 'Combine contrasting landscapes', body: 'Rather than choosing similar stops, look for destinations that add something different: open plains, elephant country, northern landscapes, lakes or a conservancy experience. The best combination depends on your dates and interests.' },
      { heading: 'Road versus air changes the shape of the week', body: 'Driving can reveal more of the country and may suit some budgets, while selected flights can preserve time on a short itinerary. The right answer depends on route, comfort priorities and how much transfer time you are willing to accept.' }
    ],
    related: [{ label: 'Browse safari durations', to: '/safaris' }, { label: 'Build a 7-day safari', to: '/safari-builder' }]
  },
  {
    slug: 'best-time-for-kenya-safari',
    title: 'Best Time for a Kenya Safari: Month by Month',
    description: 'Understand Kenya safari seasons, wildlife viewing, migration timing, weather and how travel dates affect crowds and price.',
    image: '/images/catalog/elephants-in-amboseli-with-a-back-drop-of-mt-kilimanjaro.jpg',
    intro: 'There is no single best month for every traveler. The right window depends on whether your priority is migration drama, photography, lower visitor numbers, family travel or combining safari with the coast.',
    sections: [
      { heading: 'Dry-season safari travel', body: 'June through October generally offers easier wildlife viewing as animals gather around water and vegetation thins. July through October is also associated with migration activity in the Maasai Mara, which can bring higher demand.' },
      { heading: 'Green season', body: 'Periods after the rains can offer dramatic skies, lush landscapes, birdlife and fewer vehicles. Some travelers prefer this photographic look even though wildlife can be more dispersed.' },
      { heading: 'Build dates around your priorities', body: 'Amboseli, Samburu, the Mara and the coast do not all behave the same way in the same month. Start with the experience you value most, then build the route around those conditions.' }
    ],
    related: [{ label: 'Explore Kenya destinations', to: '/destinations' }, { label: 'Compare safari ideas', to: '/safaris' }]
  },
  {
    slug: 'great-migration-safari-timing',
    title: 'Great Migration Safari Timing: Kenya or Tanzania?',
    description: 'Plan a Great Migration safari around the movement of the herds rather than a single famous crossing, with Kenya and Tanzania timing considerations.',
    image: '/images/catalog/serengeti22.jpg',
    intro: 'The Great Migration is a year-round movement through the Serengeti–Mara ecosystem, not an event that happens on one guaranteed date. Where you travel should follow the phase you hope to experience.',
    sections: [
      { heading: 'Do not plan around a guaranteed river crossing', body: 'River crossings are unpredictable wildlife events. Even during the broader crossing season, timing can shift with rainfall and herd movement. Build a trip that is rewarding for wildlife viewing even if a crossing does not happen while you are there.' },
      { heading: 'Kenya and Tanzania serve different phases', body: 'The Maasai Mara is associated with the northern part of the migration cycle, while different areas of the Serengeti become important at other times of year. Your travel month should influence which side of the ecosystem anchors the route.' },
      { heading: 'Book high-demand windows with flexibility in mind', body: 'Migration-focused periods can create strong demand for well-located camps. Consider route quality, location and the overall wildlife experience rather than choosing a property only because it uses migration language in its marketing.' }
    ],
    related: [{ label: 'Explore Great Migration safaris', to: '/safaris?travelStyle=Great+Migration' }, { label: 'Kenya vs Tanzania', to: '/guides/kenya-vs-tanzania-safari' }]
  },
  {
    slug: 'kenya-vs-tanzania-safari',
    title: 'Kenya vs Tanzania Safari: Which Is Right for You?',
    description: 'Compare Kenya and Tanzania for wildlife, travel pace, migration timing, parks, costs and combined safari routes.',
    image: '/images/catalog/serengeti22.jpg',
    intro: 'Kenya and Tanzania are not interchangeable versions of the same safari. Both can deliver exceptional wildlife, but the route structure, landscapes and travel rhythm are different.',
    sections: [
      { heading: 'Choose Kenya if…', body: 'You want compact route combinations, Maasai Mara and Amboseli, easier safari-and-beach pairing with the Kenyan coast, or a trip that balances famous parks with northern destinations such as Samburu.' },
      { heading: 'Choose Tanzania if…', body: 'You want the scale of the Serengeti, Ngorongoro and the northern circuit, or your dates align with migration phases outside the Maasai Mara season.' },
      { heading: 'Or combine both', body: 'A Kenya–Tanzania journey can work very well when the trip is long enough to avoid feeling rushed. Border logistics, flight connections and the order of parks matter, so the combination should be designed as one route rather than two packages joined together.' }
    ],
    related: [{ label: 'Compare all safaris', to: '/safaris' }, { label: 'Great Migration timing', to: '/guides/great-migration-safari-timing' }]
  },
  {
    slug: 'kenya-safari-zanzibar',
    title: 'Kenya Safari and Zanzibar: How to Combine Both',
    description: 'Plan a Kenya safari and Zanzibar beach trip as one journey, with advice on sequencing, pacing, flights and how many nights to give each part.',
    image: '/images/catalog/zanzibar-beach.jpg',
    intro: 'Safari and beach work best when they feel like two deliberate chapters of one trip. The key decisions are how much energy to spend on safari, when to fly to the coast and how many nights you need to genuinely slow down.',
    sections: [
      { heading: 'Safari first usually creates a natural rhythm', body: 'Early starts and active wildlife days pair naturally with a slower beach finish. Your international flight pattern may still make another sequence more practical, so routing should come before assumptions.' },
      { heading: 'Avoid making Zanzibar a token stop', body: 'A very short beach stay can disappear into airport transfers and check-in time. Decide whether Zanzibar is mainly recovery time, a resort stay or a place you also want to explore, then allocate nights accordingly.' },
      { heading: 'Treat the flight connection as part of the itinerary', body: 'The best connection depends on where your safari ends and the available flight pattern for your dates. A well-designed route minimizes unnecessary backtracking and protects useful safari and beach time.' }
    ],
    related: [{ label: 'Explore safari + beach trips', to: '/safaris?country=Safari+%2B+Beach' }, { label: 'Build a safari + beach trip', to: '/safari-builder' }]
  },
  {
    slug: 'kenya-honeymoon-safari',
    title: 'How to Plan a Kenya Honeymoon Safari',
    description: 'Plan a Kenya honeymoon around privacy, pacing, memorable stays and wildlife rather than simply choosing the most expensive lodge.',
    image: '/images/catalog/picnic-lunch-in-the-wild.jpg',
    intro: 'A strong safari honeymoon balances wildlife with enough privacy and unstructured time to feel celebratory. Luxury is often as much about pace and thoughtful routing as room category.',
    sections: [
      { heading: 'Do not schedule every hour', body: 'A honeymoon itinerary benefits from breathing room. Consecutive dawn starts, long transfers and one-night stays can make an impressive route feel exhausting.' },
      { heading: 'Spend on the moments that matter to you', body: 'A special room, private dining opportunity, scenic flight or extra night in the right location may matter more than upgrading every property. Decide which experiences deserve the premium.' },
      { heading: 'Consider a beach finish', body: 'The Kenyan coast or Zanzibar can add a contrasting final chapter after safari. Whether it is worth adding depends on total trip length, flight routing and how much beach time you actually want.' }
    ],
    related: [{ label: 'Explore honeymoon safaris', to: '/safaris?travelStyle=Honeymoon' }, { label: 'Plan a tailor-made honeymoon', to: '/plan-with-us' }]
  },
  {
    slug: 'kenya-family-safari',
    title: 'How to Plan a Kenya Family Safari',
    description: 'A family safari planning guide covering pacing, drive times, accommodation, age considerations and how to keep wildlife days engaging.',
    image: '/images/catalog/family-safari-game-drive.jpg',
    intro: 'The best family safari is not simply an adult itinerary with children added to the passenger list. Drive times, meal flexibility, room setup and the rhythm of game drives all deserve more attention.',
    sections: [
      { heading: 'Design around realistic attention spans', body: 'Long game drives can be extraordinary for adults and tiring for younger travelers. A route with flexibility, breaks and varied activities can make the wildlife experience better for the whole family.' },
      { heading: 'Ask about room configuration early', body: 'Family rooms, adjoining rooms and age policies vary by property. Confirm the setup before becoming attached to a particular lodge, especially for families with younger children.' },
      { heading: 'Transfer time matters more with children', body: 'A route that looks efficient on a map can still involve long driving days. Fewer bases, selected flights or an extra night can sometimes improve the family experience more than adding another park.' }
    ],
    related: [{ label: 'Explore family safaris', to: '/safaris?travelStyle=Family' }, { label: 'Build a family safari', to: '/safari-builder' }]
  },
  {
    slug: 'first-time-africa-safari-guide',
    title: 'First-Time Africa Safari Guide',
    description: 'What first-time safari travelers should know about game drives, luggage, pacing, guides, safety, tipping and choosing an itinerary.',
    image: '/images/catalog/family-safari-game-drive.jpg',
    intro: 'A first safari is exciting partly because so much is unfamiliar. Knowing how the days actually work makes it much easier to judge whether an itinerary fits you.',
    sections: [
      { heading: 'Safari days start early', body: 'Wildlife activity and cooler temperatures often make early mornings valuable. Build enough downtime into longer itineraries so that every day does not become an endurance test.' },
      { heading: 'Your guide matters enormously', body: 'The vehicle and lodge matter, but the guide shapes much of the wildlife experience: where you go, how long you wait, what you notice and how the day adapts as conditions change.' },
      { heading: 'Do not overpack the route', body: 'More parks do not automatically mean a better safari. Long transfer days can consume the time you thought you were buying for wildlife. A slower route often feels more luxurious than a longer checklist.' }
    ],
    related: [{ label: 'Explore safari ideas', to: '/safaris' }, { label: 'How we plan safaris', to: '/plan-with-us' }]
  },
  {
    slug: 'safari-over-60-comfort-guide',
    title: 'Planning a Comfortable Safari Over 60',
    description: 'Practical safari planning for older travelers: drive times, accessibility, private vehicles, pacing, room choice and medical preparation.',
    image: '/images/catalog/picnic-lunch-in-the-wild.jpg',
    intro: 'Age alone does not define the right safari. Comfort usually comes down to route pacing, mobility needs, vehicle access, room location and having enough flexibility to change the day when needed.',
    sections: [
      { heading: 'Reduce unnecessary transfer fatigue', body: 'Ask how many hours are spent driving between parks, not only how many nights the trip lasts. Strategic flights or an extra night can sometimes improve the experience more than upgrading a room.' },
      { heading: 'Discuss mobility before choosing lodges', body: 'Some camps have long walks, steps, uneven paths or rooms far from central areas. Share mobility considerations early so the planner can recommend suitable room locations and properties.' },
      { heading: 'Private vehicles create flexibility', body: 'A private safari lets your group decide when to return to camp, spend longer at a sighting or shorten a game drive. That control can be particularly valuable when comfort and pacing matter.' }
    ],
    related: [{ label: 'Explore senior-friendly safaris', to: '/safaris?travelStyle=Senior+Friendly' }, { label: 'Plan with the team', to: '/plan-with-us' }]
  }
];

export const SafariGuidesView: React.FC = () => {
  const { slug } = useParams();
  const guide = slug ? guides.find(item => item.slug === slug) : undefined;

  if (slug && guide) return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-8">
      <PageMeta title={guide.title} description={guide.description} image={guide.image} canonicalPath={`/guides/${guide.slug}`} type="article" structuredData={{ '@context':SCHEMA_CONTEXT,'@type':'Article',headline:guide.title,description:guide.description,image:absoluteSiteUrl(guide.image),author:{'@type':'Organization',name:'Good Secrets Safaris'},publisher:{'@type':'Organization',name:'Good Secrets Safaris'},mainEntityOfPage:absoluteSiteUrl(`/guides/${guide.slug}`) }} />
      <Link to="/guides" className="min-h-11 inline-flex items-center gap-2 text-sm font-bold text-brand-soft hover:text-white"><ArrowLeft className="w-4 h-4" />All safari planning guides</Link>
      <header className="space-y-5"><span className="text-xs font-extrabold uppercase tracking-widest text-brand-soft">Safari planning guide</span><h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white leading-tight">{guide.title}</h1><p className="text-lg text-on-shell-muted leading-relaxed max-w-3xl">{guide.intro}</p></header>
      <div className="rounded-[2rem] overflow-hidden aspect-[16/8] border border-white/10"><img src={guide.image} alt="" className="w-full h-full object-cover" /></div>
      <article className="rounded-3xl bg-white border border-border-strong p-7 sm:p-10 text-ink space-y-9">{guide.sections.map(section => <section key={section.heading}><h2 className="font-serif-luxury text-3xl font-bold text-ink-strong">{section.heading}</h2><p className="mt-3 text-base leading-relaxed">{section.body}</p></section>)}<div className="rounded-2xl bg-surface-soft border border-border-strong p-5"><strong className="text-ink-strong">Use this as planning guidance, not a fixed rule.</strong><p className="text-sm mt-1">Seasonal conditions, park rules, fees, flight schedules and availability change. A dated itinerary should confirm the details that matter for your trip.</p></div></article>
      {guide.related && <nav aria-label="Related safari planning" className="grid sm:grid-cols-2 gap-3">{guide.related.map(item => <Link key={item.to} to={item.to} className="min-h-14 rounded-2xl border border-white/10 bg-white/5 px-5 inline-flex items-center justify-between gap-3 text-sm font-bold text-white hover:border-brand-strong hover:bg-white/[0.07]">{item.label}<ArrowRight className="w-4 h-4 text-brand-soft" /></Link>)}</nav>}
      <section className="rounded-3xl bg-shell border border-white/10 p-7 sm:p-9"><h2 className="font-serif-luxury text-3xl font-bold text-white">Ready to turn the research into a route?</h2><p className="text-sm text-on-shell-muted mt-2">Use the safari builder or compare itinerary ideas, then send the options you like in one quote basket.</p><div className="mt-5 flex flex-wrap gap-3"><Link to="/safari-builder" className="min-h-12 px-6 rounded-xl bg-brand-soft text-ink-strong font-extrabold text-sm inline-flex items-center">Build my safari</Link><Link to="/safaris" className="min-h-12 px-6 rounded-xl border border-white/20 text-white font-bold text-sm inline-flex items-center">Explore safari ideas</Link></div></section>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10">
      <PageMeta title="Safari Planning Guides" description="Practical East Africa safari planning guides covering costs, seasons, Kenya and Tanzania, family and honeymoon travel, migration timing and safari-beach combinations." canonicalPath="/guides" />
      <header className="max-w-3xl space-y-4"><span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-soft"><Compass className="w-4 h-4" />Plan with confidence</span><h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white">Useful answers before you choose a safari.</h1><p className="text-lg text-on-shell-muted">Guides written around the questions travelers ask while comparing destinations, prices and routes.</p></header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{guides.map(guide => <Link key={guide.slug} to={`/guides/${guide.slug}`} className="group overflow-hidden rounded-2xl bg-white border border-border-strong hover:border-brand transition"><div className="aspect-[16/10] overflow-hidden"><img src={guide.image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" /></div><div className="p-6"><div className="flex items-center gap-2 text-xs font-bold text-brand-deep"><CheckCircle2 className="w-4 h-4" />Planning guide</div><h2 className="font-serif-luxury text-2xl font-bold text-ink-strong mt-2">{guide.title}</h2><p className="text-sm text-ink-muted mt-2 leading-relaxed">{guide.description}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-deep">Read guide <ArrowRight className="w-4 h-4" /></span></div></Link>)}</div>
    </div>
  );
};
