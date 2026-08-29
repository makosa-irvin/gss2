import React from 'react';
import { ExternalLink, ShieldCheck, Star } from 'lucide-react';
import { PageMeta } from '../components/common/PageMeta';
import { featuredReviews, SAFARI_BOOKINGS_URL, sourceUrl, TRIPADVISOR_URL } from '../data/reviewStories';

export const ReviewsView: React.FC = () => (
  <div className="pb-20">
    <PageMeta title="Traveler Reviews | Good Secrets Safaris" description="Read independent traveler feedback about Good Secrets Safaris and continue to our SafariBookings and Tripadvisor profiles for every published review." canonicalPath="/reviews" />

    <header className="border-b border-[#304036] bg-[#111a14] px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl text-center space-y-5">
        <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e6bc65]">Independent traveler feedback</span>
        <h1 className="font-serif-luxury text-4xl font-bold text-white sm:text-6xl">Reviews from safari travelers</h1>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#c7d2cb] sm:text-lg">We do not ask you to take our word for it. Explore feedback published independently on SafariBookings and Tripadvisor, then follow the source to read every review in full.</p>
      </div>
    </header>

    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-8 space-y-12">
      <section className="grid gap-5 md:grid-cols-2" aria-label="Independent review platforms">
        <a href={SAFARI_BOOKINGS_URL} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-[#ded8cb] bg-white p-7 text-[#161f19] shadow-sm transition hover:border-[#8a611d]">
          <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-extrabold uppercase tracking-wider text-[#536158]">SafariBookings</p><div className="mt-2 flex items-end gap-3"><strong className="font-serif-luxury text-4xl">5.0/5</strong><span className="pb-1 text-sm text-[#536158]">23 reviews</span></div></div><ExternalLink className="h-5 w-5 text-[#765217]" /></div>
          <div className="mt-3 flex text-[#b77905]" aria-label="5 out of 5 stars">{[0,1,2,3,4].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
          <p className="mt-5 text-sm leading-relaxed text-[#4d5c52]">SafariBookings moderates operator reviews independently. Open the profile to see the complete current review list and rating breakdown.</p>
          <span className="mt-5 inline-flex font-bold text-[#765217]">Read all on SafariBookings →</span>
        </a>

        <a href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-[#ded8cb] bg-white p-7 text-[#161f19] shadow-sm transition hover:border-[#8a611d]">
          <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-extrabold uppercase tracking-wider text-[#536158]">Tripadvisor</p><div className="mt-2 flex items-end gap-3"><strong className="font-serif-luxury text-4xl">4.9/5</strong><span className="pb-1 text-sm text-[#536158]">15 reviews</span></div></div><ExternalLink className="h-5 w-5 text-[#765217]" /></div>
          <div className="mt-3 flex text-[#b77905]" aria-label="4.9 out of 5 stars">{[0,1,2,3,4].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
          <p className="mt-5 text-sm leading-relaxed text-[#4d5c52]">Tripadvisor publishes traveler feedback and performs review checks. Open our listing for the complete live collection.</p>
          <span className="mt-5 inline-flex font-bold text-[#765217]">Read all on Tripadvisor →</span>
        </a>
      </section>

      <div className="flex items-start gap-3 rounded-2xl border border-[#355548] bg-[#15261d] p-5 text-sm text-[#d7dfda]"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#e6bc65]" /><p><strong className="text-white">Why we link to the originals:</strong> ratings and review counts change as travelers publish new feedback. The external profiles are the source of truth. Ratings above were checked 29 August 2026.</p></div>

      <section className="space-y-7">
        <div><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Recent feedback</span><h2 className="mt-1 font-serif-luxury text-3xl font-bold text-white sm:text-4xl">What travelers highlight</h2><p className="mt-2 max-w-3xl text-[#c7d2cb]">Short excerpts are shown here for context. Select any review to continue to the independent platform for the full text.</p></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review, index) => <a key={`${review.platform}-${review.reviewer}-${index}`} href={sourceUrl(review.platform)} target="_blank" rel="noopener noreferrer" className="flex min-h-64 flex-col justify-between rounded-2xl border border-[#ded8cb] bg-white p-6 text-[#161f19] shadow-sm transition hover:-translate-y-0.5 hover:border-[#8a611d]">
            <div><div className="flex items-center justify-between gap-3"><span className="text-xs font-extrabold uppercase tracking-wider text-[#765217]">{review.platform}</span><ExternalLink className="h-4 w-4 text-[#536158]" /></div><div className="mt-3 flex text-[#b77905]" aria-label={`${review.rating} out of 5 stars`}>{Array.from({length: review.rating}).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><h3 className="mt-4 font-serif-luxury text-xl font-bold">{review.title}</h3><blockquote className="mt-3 text-base italic leading-relaxed text-[#46544b]">“{review.excerpt}”</blockquote>{review.destinations.length > 0 && <div className="mt-4 flex flex-wrap gap-1.5">{review.destinations.slice(0, 4).map(place => <span key={place} className="rounded-full bg-[#f4efe3] px-2.5 py-1 text-[11px] font-semibold text-[#66501f]">{place}</span>)}</div>}</div>
            <div className="mt-6 border-t border-[#e6e1d7] pt-4"><strong className="text-sm">{review.reviewer}</strong><span className="ml-2 text-xs text-[#647269]">{review.date}</span><span className="mt-2 block text-xs font-bold text-[#765217]">Read full review on {review.platform} →</span></div>
          </a>)}
        </div>
      </section>
    </main>
  </div>
);
