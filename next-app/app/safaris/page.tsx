import type { Metadata } from 'next';
import Link from 'next/link';
import { TourCard } from '../../components/CatalogCards';
import { getTours } from '../../lib/api';

export const revalidate = 900;
export const metadata: Metadata = { title: 'Private Safari Tours', description: 'Explore private Kenya, Tanzania and Zanzibar safari ideas by destination, travel style, duration and comfort level.', alternates: { canonical: '/safaris' } };

export default async function SafarisPage({ searchParams }: { searchParams: Promise<Record<string,string|string[]|undefined>> }) {
  const params = await searchParams; const tours = await getTours();
  const one = (key:string) => typeof params[key] === 'string' ? params[key] as string : '';
  const country=one('country'), destination=one('destination'), style=one('travelStyle'), traveler=one('travelerType'), duration=one('duration');
  const filtered = tours.filter((tour) => (!country || tour.country===country) && (!destination || tour.destinations?.some((item)=>item.toLowerCase().includes(destination.toLowerCase()))) && (!style || tour.travelStyles?.includes(style)) && (!traveler || tour.travelerTypes?.includes(traveler)) && (!duration || tour.durationLabel?.toLowerCase().includes(duration.toLowerCase())));
  const active = [country,destination,style,traveler,duration].filter(Boolean);
  return <>
    <header className="page-hero"><div className="container"><p className="eyebrow">Private journeys · flexible starting points</p><h1>Safari ideas to shape around you.</h1><p>Use these itineraries to understand route, pace and price range. A final proposal can adjust dates, accommodation and sequence around your group.</p></div></header>
    <section className="section compact"><div className="container"><div className="section-header"><div><p className="eyebrow">Explore the catalog</p><h2>{active.length ? `Filtered safari ideas` : 'All safari ideas'}</h2><p>{filtered.length} published {filtered.length===1?'itinerary':'itineraries'}{active.length ? ` matching ${active.join(' · ')}` : ''}.</p></div>{active.length ? <Link className="button secondary" href="/safaris">Clear filters</Link> : null}</div>{filtered.length ? <div className="grid-3">{filtered.map((tour)=><TourCard key={tour.id} tour={tour}/>)}</div> : <div className="empty-state">No published safari currently matches this combination. <Link className="text-link" href="/safaris">See all safari ideas</Link>.</div>}</div></section>
  </>;
}
