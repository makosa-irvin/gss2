import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost, Destination, Hotel, Testimonial, Tour } from '../lib/types';

function safeImage(src?: string, fallback = '/images/catalog/mara-savannah.jpg') { return src || fallback; }

export function TourCard({ tour }: { tour: Tour }) {
  return <article className="catalog-card"><Link href={`/safaris/${tour.slug}`} className="card-image"><Image src={safeImage(tour.images?.[0])} alt={tour.title} fill sizes="(max-width: 720px) 100vw, 33vw" /></Link><div className="card-body"><p className="card-kicker">{tour.country} · {tour.durationLabel}</p><h3><Link href={`/safaris/${tour.slug}`}>{tour.title}</Link></h3><p>{tour.shortDescription}</p><div className="card-meta"><span>{tour.comfortLevel}</span><strong>From {tour.currency === 'KES' ? 'KES' : '$'}{Number(tour.priceFrom || 0).toLocaleString()}</strong></div></div></article>;
}

export function DestinationCard({ destination }: { destination: Destination }) {
  return <article className="catalog-card"><Link href={`/destinations/${destination.slug}`} className="card-image"><Image src={safeImage(destination.heroImage)} alt={destination.name} fill sizes="(max-width: 720px) 100vw, 33vw" /></Link><div className="card-body"><p className="card-kicker">{destination.country}</p><h3><Link href={`/destinations/${destination.slug}`}>{destination.name}</Link></h3><p>{destination.subtitle || destination.description}</p><div className="card-meta"><span>{destination.recommendedDuration}</span><Link className="text-link" href={`/destinations/${destination.slug}`}>Explore →</Link></div></div></article>;
}

export function HotelCard({ hotel }: { hotel: Hotel }) {
  return <article className="catalog-card"><Link href={`/hotels/${hotel.slug}`} className="card-image"><Image src={safeImage(hotel.images?.[0], '/images/catalog/picnic-lunch-in-the-wild.jpg')} alt={hotel.name} fill sizes="(max-width: 720px) 100vw, 33vw" /></Link><div className="card-body"><p className="card-kicker">{hotel.category} · {hotel.location}</p><h3><Link href={`/hotels/${hotel.slug}`}>{hotel.name}</Link></h3><p>{hotel.description}</p><div className="card-meta"><span>{hotel.country}</span><strong>From ${Number(hotel.priceFromUSD || 0).toLocaleString()}</strong></div></div></article>;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return <article className="catalog-card"><Link href={`/blog/${post.slug}`} className="card-image"><Image src={safeImage(post.featuredImage)} alt={post.title} fill sizes="(max-width: 720px) 100vw, 33vw" /></Link><div className="card-body"><p className="card-kicker">{post.category} · {post.readingTime}</p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><div className="card-meta"><span>{post.author?.name}</span><Link className="text-link" href={`/blog/${post.slug}`}>Read →</Link></div></div></article>;
}

export function ReviewCard({ review }: { review: Testimonial }) {
  return <article className="review-card"><div className="stars" aria-label={`${review.rating} out of 5 stars`}>{'★'.repeat(Math.max(0, Math.min(5, Math.round(review.rating))))}</div><blockquote>“{review.reviewText}”</blockquote><footer><strong>{review.reviewerName}</strong><span>{review.reviewerCountry} · {review.platform}</span></footer></article>;
}
