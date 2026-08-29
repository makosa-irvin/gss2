import React from 'react';
import { ExternalLink, ShieldCheck, Star } from 'lucide-react';

type ReviewPlatform = {
  name: string;
  rating: string;
  count: string;
  href: string;
  note?: string;
};

const platforms: ReviewPlatform[] = [
  {
    name: 'SafariBookings',
    rating: '5.0/5',
    count: '23 reviews',
    href: 'https://www.safaribookings.com/p7127'
  },
  {
    name: 'Tripadvisor',
    rating: '4.9/5',
    count: '16 reviews',
    href: 'https://www.tripadvisor.com/Attraction_Review-g294207-d25284334-Reviews-Good_Secrets_Safaris-Nairobi.html'
  },
  {
    name: 'Google',
    rating: '5.0/5',
    count: '2 ratings',
    href: 'https://www.holidify.com/travel-agent-details/good-secrets-safaris-80764',
    note: 'Google rating displayed by Holidify'
  }
];

const reviewHighlights = [
  {
    quote: 'Everything was organised seamlessly by Elsy, who remained in contact throughout our trip.',
    reviewer: 'Jordan Pope',
    context: 'UK · honeymoon safari',
    platform: 'SafariBookings',
    href: 'https://www.safaribookings.com/p7127'
  },
  {
    quote: 'What stood out most was how safe and cared for we felt the entire time.',
    reviewer: 'Sondra M',
    context: 'USA · 9-day Kenya safari',
    platform: 'Tripadvisor',
    href: 'https://www.tripadvisor.com/Attraction_Review-g294207-d25284334-Reviews-Good_Secrets_Safaris-Nairobi.html'
  }
];

export const VerifiedReviewsSection: React.FC = () => (
  <section className="cv-auto max-w-7xl mx-auto px-4 sm:px-8" aria-labelledby="verified-reviews-heading">
    <div className="overflow-hidden rounded-3xl border border-[#ded8cb] bg-white shadow-md">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b lg:border-b-0 lg:border-r border-[#e6e1d7] bg-[#faf8f2] p-7 sm:p-9">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b6d8c3] bg-[#eef7f2] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1b4332]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" /> Independent review platforms
          </div>
          <h2 id="verified-reviews-heading" className="mt-4 font-serif-luxury text-3xl font-bold text-[#161f19]">
            See what travelers say beyond our website
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-[#4d5c52]">
            These ratings link directly to third-party review profiles so you can read the original feedback before enquiring.
          </p>
          <p className="mt-4 text-xs text-[#6c786f]">Ratings checked 29 August 2026. Review counts can change as new feedback is posted.</p>
        </div>

        <div className="p-7 sm:p-9 space-y-6">
          <div className="grid sm:grid-cols-3 gap-3">
            {platforms.map(platform => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-[#ded8cb] bg-white p-4 transition hover:border-[#8a611d] hover:bg-[#fffdf8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a611d]"
                aria-label={`Read Good Secrets Safaris reviews on ${platform.name}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-[#161f19]">{platform.name}</span>
                  <ExternalLink className="h-4 w-4 text-[#765217] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <strong className="font-serif-luxury text-2xl text-[#161f19]">{platform.rating}</strong>
                  <span className="flex text-[#b77905]" aria-hidden="true">
                    {[...Array(5)].map((_, index) => <Star key={index} className="h-3.5 w-3.5 fill-current" />)}
                  </span>
                </div>
                <span className="mt-1 block text-xs font-semibold text-[#536158]">{platform.count}</span>
                {platform.note && <span className="mt-1 block text-[11px] leading-snug text-[#778178]">{platform.note}</span>}
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {reviewHighlights.map(review => (
              <article key={`${review.platform}-${review.reviewer}`} className="rounded-2xl border border-[#e6e1d7] bg-[#faf8f2] p-5">
                <div className="flex text-[#b77905]" aria-label="5 star review">
                  {[...Array(5)].map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-3 text-base italic leading-relaxed text-[#34443a]">“{review.quote}”</blockquote>
                <div className="mt-4 flex items-end justify-between gap-3 border-t border-[#e6e1d7] pt-3">
                  <div>
                    <strong className="block text-sm text-[#161f19]">{review.reviewer}</strong>
                    <span className="text-xs text-[#647168]">{review.context}</span>
                  </div>
                  <a href={review.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-xs font-bold text-[#765217] hover:text-[#5b3e10]">
                    {review.platform}<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
