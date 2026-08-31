import type { Metadata } from 'next';
import Link from 'next/link';
import { HotelCard } from '../../components/CatalogCards';
import { getHotels } from '../../lib/api';

export const revalidate = 900;
export const metadata: Metadata = { title: 'Safari Lodges, Camps & Beach Hotels', description: 'Explore safari lodges, tented camps, boutique hotels and beach stays across Kenya, Tanzania and Zanzibar.', alternates: { canonical: '/hotels' } };

export default async function HotelsPage({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){
  const params=await searchParams;const resident=params.resident==='true';const hotels=await getHotels();const visible=resident?hotels.filter((hotel)=>hotel.isKenyanResidentOffer):hotels;
  return <><header className="page-hero"><div className="container"><p className="eyebrow">Places that shape the safari</p><h1>Lodges, camps and beach stays</h1><p>Accommodation is more than room category. Location, transfer time and access to wildlife areas can materially change an itinerary.</p></div></header><section className="section"><div className="container"><div className="section-header"><div><h2>{resident?'Kenyan resident offers':'Published places to stay'}</h2><p>Starting prices are guides. Your final proposal should confirm dates, room category, inclusions and availability.</p></div><div>{resident?<Link className="button secondary" href="/hotels">Show all stays</Link>:<Link className="button secondary" href="/hotels?resident=true">Resident offers</Link>}</div></div>{visible.length?<div className="grid-3">{visible.map((hotel)=><HotelCard key={hotel.id} hotel={hotel}/>)}</div>:<div className="empty-state">No published accommodation currently matches this view.</div>}</div></section></>;
}
