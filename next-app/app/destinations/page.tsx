import type { Metadata } from 'next';
import { DestinationCard } from '../../components/CatalogCards';
import { getDestinations } from '../../lib/api';

export const revalidate = 900;
export const metadata: Metadata = { title: 'Safari Destinations', description: 'Explore safari destinations across Kenya, Tanzania and Zanzibar, with practical guidance on wildlife, timing and route fit.', alternates: { canonical: '/destinations' } };

export default async function DestinationsPage() {
  const destinations = await getDestinations();
  return <>
    <header className="page-hero"><div className="container"><p className="eyebrow">Choose the landscape, not just the name</p><h1>Safari destinations</h1><p>Compare wildlife, route position, recommended stay length and the experiences each place adds to a private East Africa itinerary.</p></div></header>
    <section className="section"><div className="container">{destinations.length ? <div className="grid-3">{destinations.map((destination) => <DestinationCard key={destination.id} destination={destination} />)}</div> : <div className="empty-state">Destination content is temporarily unavailable from the safari catalog.</div>}</div></section>
  </>;
}
