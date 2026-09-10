import { Star } from 'lucide-react';
import { ReviewSubmissionForm } from '../../components/ReviewSubmissionForm';
import { getTestimonials } from '../../lib/api';

export default async function ReviewsLayout({ children }: { children: React.ReactNode }) {
  const reviews = (await getTestimonials()).filter(review => review.platform === 'Direct Feedback');
  return <>
    {children}
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-8">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <div><span className="text-xs font-bold uppercase tracking-widest text-brand-soft">Published customer feedback</span><h2 className="mt-2 font-serif-luxury text-3xl font-bold text-white">Reviews approved by our team</h2></div>
          {reviews.length ? reviews.slice(0, 8).map(review => <article key={review.id} className="rounded-2xl border border-border-strong bg-white p-6 text-ink-strong shadow-sm"><div className="flex text-amber-600">{Array.from({ length: Math.round(review.rating) }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div><blockquote className="mt-3 text-sm leading-relaxed text-ink-muted">“{review.reviewText}”</blockquote><div className="mt-4 border-t border-border pt-3"><strong className="text-sm">{review.reviewerName}</strong><span className="ml-2 text-xs text-ink-subtle">{review.reviewerCountry} · {review.tourTaken}</span></div></article>) : <p className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-on-shell-muted">Customer-submitted reviews will appear here after admin approval.</p>}
        </div>
        <div className="rounded-3xl border border-border-strong bg-white p-6 shadow-sm sm:p-8 lg:sticky lg:top-32"><ReviewSubmissionForm /></div>
      </div>
    </section>
  </>;
}
