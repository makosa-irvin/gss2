import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { PageMeta } from '../components/common/PageMeta';

type Guide = { slug: string; title: string; description: string; image: string; intro: string; sections: { heading: string; body: string }[]; };

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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

export const SafariGuidesView: React.FC = () => {
  const { slug } = useParams();
  const guide = slug ? guides.find(item => item.slug === slug) : undefined;

  if (slug && guide) return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-8">
      <PageMeta title={guide.title} description={guide.description} image={guide.image} canonicalPath={`/guides/${guide.slug}`} type="article" structuredData={{ '@context':'https://schema.org','@type':'Article',headline:guide.title,description:guide.description,image:`https://www.goodsecretssafaris.com${guide.image}`,author:{'@type':'Organization',name:'Good Secrets Safaris'},publisher:{'@type':'Organization',name:'Good Secrets Safaris'} }} />
      <Link to="/guides" className="min-h-11 inline-flex items-center gap-2 text-sm font-bold text-[#e6bc65] hover:text-white"><ArrowLeft className="w-4 h-4" />All safari planning guides</Link>
      <header className="space-y-5"><span className="text-xs font-extrabold uppercase tracking-widest text-[#e6bc65]">Safari planning guide</span><h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white leading-tight">{guide.title}</h1><p className="text-lg text-[#c7d2cb] leading-relaxed max-w-3xl">{guide.intro}</p></header>
      <div className="rounded-[2rem] overflow-hidden aspect-[16/8] border border-white/10"><img src={guide.image} alt="" className="w-full h-full object-cover" /></div>
      <article className="rounded-3xl bg-white border border-[#ded8cb] p-7 sm:p-10 text-[#303e35] space-y-9">{guide.sections.map(section => <section key={section.heading}><h2 className="font-serif-luxury text-3xl font-bold text-[#161f19]">{section.heading}</h2><p className="mt-3 text-base leading-relaxed">{section.body}</p></section>)}<div className="rounded-2xl bg-[#f5f2e8] border border-[#ddd6c6] p-5"><strong className="text-[#161f19]">Use this as planning guidance, not a fixed rule.</strong><p className="text-sm mt-1">Seasonal conditions, park rules, fees and availability change. A dated itinerary should confirm the details that matter for your trip.</p></div></article>
      <section className="rounded-3xl bg-[#17231b] border border-white/10 p-7 sm:p-9"><h2 className="font-serif-luxury text-3xl font-bold text-white">Ready to turn the research into a route?</h2><p className="text-sm text-[#c7d2cb] mt-2">Use the safari builder or compare itinerary ideas, then send the options you like in one quote basket.</p><div className="mt-5 flex flex-wrap gap-3"><Link to="/safari-builder" className="min-h-12 px-6 rounded-xl bg-[#e6bc65] text-[#161f19] font-extrabold text-sm inline-flex items-center">Build my safari</Link><Link to="/safaris" className="min-h-12 px-6 rounded-xl border border-white/20 text-white font-bold text-sm inline-flex items-center">Explore safari ideas</Link></div></section>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10">
      <PageMeta title="Safari Planning Guides" description="Practical East Africa safari planning guides covering costs, seasons, Kenya vs Tanzania, first-time travel and comfortable safari pacing." canonicalPath="/guides" />
      <header className="max-w-3xl space-y-4"><span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#e6bc65]"><Compass className="w-4 h-4" />Plan with confidence</span><h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white">Useful answers before you choose a safari.</h1><p className="text-lg text-[#c7d2cb]">Guides written around the questions travelers ask while comparing destinations, prices and routes.</p></header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{guides.map(guide => <Link key={guide.slug} to={`/guides/${guide.slug}`} className="group overflow-hidden rounded-2xl bg-white border border-[#ded8cb] hover:border-[#b3822a] transition"><div className="aspect-[16/10] overflow-hidden"><img src={guide.image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" /></div><div className="p-6"><div className="flex items-center gap-2 text-xs font-bold text-[#76541a]"><CheckCircle2 className="w-4 h-4" />Planning guide</div><h2 className="font-serif-luxury text-2xl font-bold text-[#161f19] mt-2">{guide.title}</h2><p className="text-sm text-[#526158] mt-2 leading-relaxed">{guide.description}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#76541a]">Read guide <ArrowRight className="w-4 h-4" /></span></div></Link>)}</div>
    </div>
  );
};
