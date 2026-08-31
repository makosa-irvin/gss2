import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EnquiryButton } from '../../../components/EnquiryButton';
import { getDestinationBySlug, getDestinations, getTours } from '../../../lib/api';
import { siteUrl } from '../../../lib/site';

export const revalidate = 900;
export const dynamicParams = true;
export async function generateStaticParams() { return (await getDestinations()).map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = await getDestinationBySlug(slug); if (!item) return {}; return { title: item.seo?.title || item.name, description: item.seo?.description || item.description, alternates: { canonical: `/destinations/${item.slug}` }, openGraph: { title: item.name, description: item.description, url: `/destinations/${item.slug}`, images: [item.heroImage] } }; }

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const destination = await getDestinationBySlug(slug); if (!destination) notFound();
  const tours = (await getTours()).filter((tour) => tour.destinations?.some((name) => name.toLowerCase().includes(destination.name.toLowerCase().split(' ')[0])) || tour.country.includes(destination.country)).slice(0, 3);
  const url = siteUrl(`/destinations/${destination.slug}`);
  const schema = [{ '@context': 'https://schema.org', '@type': 'TouristDestination', name: destination.name, description: destination.description, image: siteUrl(destination.heroImage), url }, { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type':'ListItem', position:1, name:'Home', item:siteUrl('/') },{ '@type':'ListItem', position:2, name:'Destinations', item:siteUrl('/destinations') },{ '@type':'ListItem', position:3, name:destination.name, item:url }] }];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <section className="detail-hero"><div className="container detail-grid"><div className="detail-copy"><p className="eyebrow">{destination.country} safari destination</p><h1>{destination.name}</h1><p>{destination.subtitle}</p><div className="chips"><span className="chip">{destination.recommendedDuration}</span><span className="chip">Best time: {destination.bestTimeToVisit}</span></div><div className="hero-actions"><EnquiryButton label={`Plan a ${destination.name} safari`} destination={destination.name} /><Link className="button secondary" href={`/safaris?destination=${encodeURIComponent(destination.name)}`}>See safari ideas</Link></div></div><div className="detail-media"><Image src={destination.heroImage || '/images/catalog/mara-savannah.jpg'} alt={destination.name} fill priority sizes="(max-width: 1050px) 100vw, 50vw" /></div></div></section>
    <section className="section"><div className="container content-layout"><div className="prose-card"><section><h2>Why visit {destination.name}?</h2><p>{destination.description}</p></section><section><h2>Wildlife</h2><div className="chips">{destination.wildlife?.map((item) => <span key={item} className="chip" style={{color:'var(--ink-muted)',borderColor:'var(--border-strong)'}}>{item}</span>)}</div></section><section><h2>Things to do</h2><ul className="list-clean">{[...(destination.activities || []), ...(destination.thingsToDo || [])].map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Where to stay</h2><p>{destination.whereToStay}</p></section>{destination.faqs?.length ? <section><h2>Questions travelers ask</h2>{destination.faqs.map((faq) => <div key={faq.question} style={{marginTop:18}}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section> : null}</div><aside className="sticky-card"><h3>Practical fit</h3><p><strong>Recommended stay</strong><br/>{destination.recommendedDuration}</p><p><strong>Best time</strong><br/>{destination.bestTimeToVisit}</p><EnquiryButton label="Ask about this destination" destination={destination.name}/></aside></div></section>
    {tours.length ? <section className="section compact"><div className="container"><div className="section-header"><div><p className="eyebrow">Continue planning</p><h2>Safari ideas that can fit this route</h2></div><Link className="text-link" href="/safaris">All safaris →</Link></div><div className="grid-3">{tours.map((tour)=><article className="prose-card" key={tour.id}><p className="eyebrow">{tour.durationLabel}</p><h3><Link href={`/safaris/${tour.slug}`}>{tour.title}</Link></h3><p>{tour.shortDescription}</p></article>)}</div></div></section> : null}
  </>;
}
