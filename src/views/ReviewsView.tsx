import React from 'react';
import { ExternalLink, ShieldCheck, Star } from 'lucide-react';
import { PageMeta } from '../components/common/PageMeta';
import { featuredReviews, SAFARI_BOOKINGS_URL, sourceUrl, TRIPADVISOR_URL } from '../data/reviewStories';

export const ReviewsView: React.FC = () => (
  <div className="pb-20">
    <PageMeta title="Traveler Reviews | Good Secrets Safaris" description="Read independent traveler feedback about Good Secrets Safaris and continue to our SafariBookings and Tripadvisor profiles for every published review." canonicalPath="/reviews" />

    <header className="border-b border-action bg-ink-strong px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl text-center space-y-5">
        <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-soft">Independent traveler feedback</span>
        <h1 className="font-serif-luxury text-4xl font-bold text-white sm:text-6xl">Reviews from safari travelers</h1>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-on-shell-muted sm:text-lg">We do not ask you to take our word for it. Explore feedback published independently on SafariBookings and Tripadvisor, then follow the source to read every review in full.</p>
      </div>
    </header>

    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-8 space-y-12">
      <section className="grid gap-5 md:grid-cols-2" aria-label="Independent review platforms">
        <a href={SAFARI_BOOKINGS_URL} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-border-strong bg-white p-7 text-ink-strong shadow-sm transition hover:border-brand-strong">
          <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-extrabold uppercase tracking-wider text-ink-muted">SafariBookings</p><div className="mt-2 flex items-end gap-3"><strong className="font-serif-luxury text-4xl">5.0/5</strong><span className="pb-1 text-sm text-ink-muted">Independent profile</span></div></div><ExternalLink className="h-5 w-5 text-brand-deep" /></div>
          <div className="mt-3 flex text-amber-600" aria-label="5 out of 5 stars">{[0,1,2,3,4].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
          <p className="mt-5 text-sm leading-relaxed text-ink-muted">SafariBookings moderates operator reviews independently. Open the profile to see the complete current review list and rating breakdown.</p>
          <span className="mt-5 inline-flex font-bold text-brand-deep">Read all on SafariBookings →</span>
        </a>

        <a href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-border-strong bg-white p-7 text-ink-strong shadow-sm transition hover:border-brand-strong">
          <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-extrabold uppercase tracking-wider text-ink-muted">Tripadvisor</p><div className="mt-2 flex items-end gap-3"><strong className="font-serif-luxury text-4xl">4.9/5</strong><span className="pb-1 text-sm text-ink-muted">Independent profile</span></div></div><ExternalLink className="h-5 w-5 text-brand-deep" /></div>
          <div className="mt-3 flex text-amber-600" aria-label="4.9 out of 5 stars">{[0,1,2,3,4].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
          <p className="mt-5 text-sm leading-relaxed text-ink-muted">Tripadvisor publishes traveler feedback and performs review checks. Open our listing for the complete live collection.</p>
          <span className="mt-5 inline-flex font-bold text-brand-deep">Read all on Tripadvisor →</span>
        </a>
      </section>

      <div className="flex items-start gap-3 rounded-2xl border border-action bg-shell p-5 text-sm text-on-shell-muted"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-soft" /><p><strong className="text-white">Why we link to the originals:</strong> ratings and review counts change as travelers publish new feedback. The external profiles are always the source of truth for the latest rating, review count and complete review text.</p></div>

      <section className="space-y-7">
        <div><span className="text-xs font-bold uppercase tracking-widest text-brand-soft">Recent feedback</span><h2 className="mt-1 font-serif-luxury text-3xl font-bold text-white sm:text-4xl">What travelers highlight</h2><p className="mt-2 max-w-3xl text-on-shell-muted">Short excerpts are shown here for context. Select any review to continue to the independent platform for the full text.</p></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review, index) => <a key={`${review.platform}-${review.reviewer}-${index}`} href={sourceUrl(review.platform)} target="_blank" rel="noopener noreferrer" className="flex min-h-64 flex-col justify-between rounded-2xl border border-border-strong bg-white p-6 text-ink-strong shadow-sm transition hover:-translate-y-0.5 hover:border-brand-strong">
            <div><div className="flex items-center justify-between gap-3"><span className="text-xs font-extrabold uppercase tracking-wider text-brand-deep">{review.platform}</span><ExternalLink className="h-4 w-4 text-ink-muted" /></div><div className="mt-3 flex text-amber-600" aria-label={`${review.rating} out of 5 stars`}>{Array.from({length: review.rating}).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><h3 className="mt-4 font-serif-luxury text-xl font-bold">{review.title}</h3><blockquote className="mt-3 text-base italic leading-relaxed text-ink-muted">“{review.excerpt}”</blockquote>{review.destinations.length > 0 && <div className="mt-4 flex flex-wrap gap-1.5">{review.destinations.slice(0, 4).map(place => <span key={place} className="rounded-full bg-surface-soft px-2.5 py-1 text-[11px] font-semibold text-brand-deep">{place}</span>)}</div>}</div>
            <div className="mt-6 border-t border-border pt-4"><strong className="text-sm">{review.reviewer}</strong><span className="ml-2 text-xs text-ink-subtle">{review.date}</span><span className="mt-2 block text-xs font-bold text-brand-deep">Read full review on {review.platform} →</span></div>
          </a>)}
        </div>
      </section>
    </main>
  </div>
);
