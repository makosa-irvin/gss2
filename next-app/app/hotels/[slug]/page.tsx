import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, Compass, MapPin, MessageCircle, ShieldCheck, Star } from 'lucide-react';
import { EnquiryButton } from '../../../components/EnquiryButton';
import { HotelShortlistButton } from '../../../components/ShortlistButton';
import { getHotelBySlug, getHotels } from '../../../lib/api';
import { siteUrl } from '../../../lib/site';

export const revalidate = 900;
export const dynamicParams = true;
export async function generateStaticParams() { return (await getHotels()).map(hotel => ({ slug: hotel.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const hotel = await getHotelBySlug(slug);
  if (!hotel) return {};
  return { title: hotel.seo?.title || hotel.name, description: hotel.seo?.description || hotel.description, alternates: { canonical: `/hotels/${hotel.slug}` }, openGraph: { title: hotel.name, description: hotel.description, url: `/hotels/${hotel.slug}`, images: [hotel.images?.[0] || '/images/catalog/picnic-lunch-in-the-wild.jpg'] } };
}

export default async function HotelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hotel = await getHotelBySlug(slug);
  if (!hotel) notFound();
  const image = hotel.images?.[0] || '/images/catalog/picnic-lunch-in-the-wild.jpg';
  const fitNotes = [hotel.isFamilyFriendly ? 'A practical option to consider for family itineraries.' : '', hotel.isHoneymoonFriendly ? 'Can suit honeymoon or celebration-focused trips.' : '', hotel.isSeniorFriendly ? 'Can suit travelers looking for a gentler pace and comfort.' : '', `Useful to compare with other stays around ${hotel.location} before finalizing the route.`].filter(Boolean);
  const url = siteUrl(`/hotels/${hotel.slug}`);
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Hotel', name: hotel.name, description: hotel.description, image: hotel.images?.map(src => siteUrl(src)), url, address: { '@type': 'PostalAddress', addressLocality: hotel.location, addressCountry: hotel.country } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl('/') }, { '@type': 'ListItem', position: 2, name: 'Hotels & stays', item: siteUrl('/hotels') }, { '@type': 'ListItem', position: 3, name: hotel.name, item: url }] },
  ];
  const savedHotel = { id: hotel.id, title: hotel.name, slug: hotel.slug, image, location: hotel.location, country: hotel.country, priceFrom: hotel.priceFromUSD, priceFromKES: hotel.priceFromKES };

  return <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="flex items-center justify-between gap-3"><Link href="/hotels" className="min-h-11 inline-flex items-center gap-1.5 text-sm text-on-shell-muted hover:text-brand-soft transition-colors font-semibold"><ArrowLeft className="w-4 h-4" /><span>Beach resorts & lodges</span></Link><HotelShortlistButton hotel={savedHotel} /></div>

    <section className="relative rounded-3xl overflow-hidden min-h-[430px] sm:min-h-[540px] flex items-end border border-white/10 shadow-xl"><Image src={image} alt={`${hotel.name} in ${hotel.location}`} fill priority className="object-cover -z-10" sizes="100vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/15 -z-10" /><div className="p-6 sm:p-10 max-w-3xl space-y-3"><div className="flex flex-wrap items-center gap-3"><span className="px-3 py-1.5 rounded-full text-xs font-bold bg-brand-strong text-white">{hotel.category}</span>{hotel.rating ? <div className="flex items-center gap-1 text-brand-soft" aria-label={`${hotel.rating} rating`}>{Array.from({ length: Math.round(hotel.rating) }).map((_, index) => <Star key={index} className="w-4 h-4 fill-current" />)}</div> : null}</div><h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">{hotel.name}</h1><div className="flex items-center gap-1.5 text-sm font-semibold text-white"><MapPin className="w-4 h-4 text-brand-soft" /><span>{hotel.location}, {hotel.country}</span></div></div></section>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="min-w-0 lg:col-span-8 space-y-6">
        <div className="p-7 sm:p-8 rounded-3xl bg-white border border-border-strong space-y-5 shadow-sm text-ink"><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-ink-strong">What the stay is like</h2><p className="text-base text-ink-muted leading-relaxed">{hotel.description}</p>{hotel.facilities?.length ? <div className="pt-4 border-t border-border"><h3 className="text-xs font-extrabold uppercase tracking-wider text-brand-deep mb-3">Facilities & stay highlights</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{hotel.facilities.map(amenity => <div key={amenity} className="flex items-start gap-2 text-sm text-ink"><Check className="w-4 h-4 text-action shrink-0 mt-0.5 stroke-[3]" /><span>{amenity}</span></div>)}</div></div> : null}</div>
        <section className="rounded-3xl border border-white/10 bg-shell p-6 sm:p-8"><div className="flex gap-3 items-start"><Compass className="w-6 h-6 text-brand-soft shrink-0 mt-1" /><div><span className="text-xs font-bold uppercase tracking-widest text-brand-soft">How this stay can fit your trip</span><h2 className="font-serif-luxury text-2xl font-bold text-white mt-1">Choose the lodge for the itinerary — not just the room.</h2></div></div><ul className="mt-5 grid sm:grid-cols-2 gap-3">{fitNotes.map(note => <li key={note} className="flex gap-2 text-sm text-on-shell-muted"><Check className="w-4 h-4 text-brand-soft shrink-0 mt-0.5" />{note}</li>)}</ul><p className="text-sm text-on-shell-subtle mt-5">Ask us to compare this property with alternatives based on dates, location, budget and the pace of your safari.</p></section>
        {hotel.images?.length > 1 ? <div><h2 className="font-serif-luxury text-2xl font-bold text-white mb-4">A closer look</h2><div className="grid grid-cols-2 gap-4">{hotel.images.slice(1, 5).map((galleryImage, index) => <div key={galleryImage} className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] relative"><Image src={galleryImage} alt={`${hotel.name} view ${index + 2}`} fill className="object-cover" /></div>)}</div></div> : null}
      </div>

      <aside className="lg:col-span-4"><div className="sticky top-28 rounded-3xl bg-white border border-border-strong ring-1 ring-black/5 p-6 sm:p-8 space-y-5 shadow-xl text-ink"><div><span className="text-xs text-ink-muted uppercase tracking-wider block font-bold">Guide rate from</span><div className="flex items-baseline gap-2 mt-1"><span className="font-serif-luxury text-3xl font-extrabold text-action">KSH {Number(hotel.priceFromKES || 0).toLocaleString()}</span><span className="text-xs text-ink-muted">/ night</span></div><span className="text-xs text-ink-muted block mt-1">International guide rate: ${hotel.priceFromUSD ?? '—'} / night</span><p className="text-sm text-ink-muted mt-3 leading-relaxed">Rates and availability vary by travel dates, room type and package. Send your dates and we’ll confirm the current option before you commit.</p></div><EnquiryButton label="Check rates & fit" hotelTitle={hotel.name} className="w-full min-h-12 rounded-xl bg-brand-strong hover:bg-brand-hover text-white font-extrabold text-sm text-center transition-all shadow-md flex items-center justify-center gap-2" /><HotelShortlistButton hotel={savedHotel} variant="sidebar" /><a href={`https://wa.me/254729000410?text=${encodeURIComponent(`Hello Good Secrets Safaris, I'd like to ask about ${hotel.name}.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Ask about ${hotel.name} on WhatsApp`} className="w-full min-h-12 rounded-xl bg-action-soft hover:bg-action-soft text-action font-bold text-sm border border-action-border flex items-center justify-center gap-2 transition-colors"><MessageCircle className="w-4 h-4 text-emerald-700" /><span>Ask on WhatsApp</span></a><div className="pt-4 border-t border-border space-y-3"><div className="flex gap-2 text-sm text-ink-muted"><ShieldCheck className="w-4 h-4 text-action shrink-0 mt-0.5" /><span>No payment required to enquire.</span></div><div className="flex gap-2 text-sm text-ink-muted"><Check className="w-4 h-4 text-action shrink-0 mt-0.5" /><span>Transfers and safari extensions can be added to your request.</span></div></div></div></aside>
    </div>
  </div>;
}
