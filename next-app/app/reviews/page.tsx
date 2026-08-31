import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewCard } from '../../components/CatalogCards';
import { EnquiryButton } from '../../components/EnquiryButton';
import { getTestimonials } from '../../lib/api';

export const revalidate = 900;
export const metadata: Metadata = { title: 'Safari Reviews', description: 'Read traveler feedback about Good Secrets Safaris and use independent review platforms alongside direct planning conversations.', alternates: { canonical: '/reviews' } };

export default async function ReviewsPage() {
  const reviews = await getTestimonials();
  return <>
    <header className="page-hero"><div className="container"><p className="eyebrow">Traveler evidence</p><h1>Independent feedback should be part of the decision.</h1><p>Read published traveler experiences here, and use the linked independent platforms as the source of truth for their current ratings and review counts.</p></div></header>
    <section className="section"><div className="container">{reviews.length ? <div className="grid-3">{reviews.map((review) => <ReviewCard key={review.id} review={review} />)}</div> : <div className="empty-state">Traveler reviews are temporarily unavailable from the catalog API. You can still verify Good Secrets Safaris on SafariBookings and Tripadvisor.</div>}<div className="hero-actions"><a className="button dark" href="https://www.safaribookings.com" target="_blank" rel="noreferrer">SafariBookings</a><a className="button secondary" href="https://www.tripadvisor.com" target="_blank" rel="noreferrer">Tripadvisor</a></div></div></section>
    <section className="section dark-section"><div className="container"><div className="section-header"><div><p className="eyebrow">Make your own comparison</p><h2>Reviews help verify the operator. The proposal still has to fit you.</h2><p>Compare itinerary detail, route pacing, inclusions and booking terms as carefully as the star rating.</p></div><div><EnquiryButton label="Discuss my safari" /><Link className="button secondary" href="/guides/booking-safari-direct-local-operator">Buyer guide</Link></div></div></div></section>
  </>;
}
