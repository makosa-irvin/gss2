import React from 'react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../components/common/PageMeta';
import { SCHEMA_CONTEXT } from '../lib/site';
import { ArrowRight, CheckCircle2, Compass, MessageCircle, ShieldCheck, Users, WalletCards } from 'lucide-react';

interface PlanningWithUsViewProps { onOpenEnquiryModal: (payload?: any) => void; }

const steps = [
  ['1', 'Tell us what matters', 'Dates, group size, pace, wildlife priorities, comfort level and anything that would make the trip feel right for you.'],
  ['2', 'Shape the route together', 'We suggest a practical sequence of parks and stays, then adjust the balance of driving, game viewing and downtime.'],
  ['3', 'Review the details', 'You see the proposed itinerary, accommodation, inclusions, exclusions and guide price before deciding whether to continue.'],
  ['4', 'Refine before committing', 'Questions and changes are part of the process. The goal is a route you understand, not pressure to confirm quickly.'],
  ['5', 'Travel with local support', 'Once a trip is confirmed, the same East Africa-based team remains within reach for practical support during the journey.']
] as const;

export const PlanningWithUsView: React.FC<PlanningWithUsViewProps> = ({ onOpenEnquiryModal }) => (
  <div className="pb-20">
    <PageMeta
      title="How We Plan Your Safari"
      description="See how Good Secrets Safaris turns your dates, interests and travel style into a private Kenya, Tanzania or Zanzibar itinerary with clear local planning and support."
      canonicalPath="/plan-with-us"
      structuredData={{
        '@context': SCHEMA_CONTEXT,
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Does requesting a safari plan create a booking?', acceptedAnswer: { '@type': 'Answer', text: 'No. An enquiry is a planning request. No payment is taken and no booking is confirmed simply by submitting the form.' } },
          { '@type': 'Question', name: 'Can the safari itinerary be changed?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dates, route, pacing, accommodation and experiences can be adjusted around your priorities and availability.' } },
          { '@type': 'Question', name: 'What should I review before confirming a safari?', acceptedAnswer: { '@type': 'Answer', text: 'Review the itinerary, accommodation, inclusions, exclusions, pricing, payment schedule and cancellation terms before confirming.' } }
        ]
      }}
    />

    <header className="relative overflow-hidden border-b border-white/10">
      <img src="/images/catalog/picnic-lunch-in-the-wild.jpg" alt="Private safari picnic in East Africa" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-shell/95 via-shell/80 to-black/45" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28">
        <div className="max-w-3xl space-y-5"><span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-soft"><Compass className="w-4 h-4" />How we plan your safari</span><h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white leading-[1.06]">A good safari starts with a good conversation.</h1><p className="text-base sm:text-xl text-white/90 leading-relaxed">You do not need to arrive with the perfect itinerary. Bring the dates, people and priorities you know. We help turn those into a route that makes sense on the ground.</p><button onClick={() => onOpenEnquiryModal({ initialType: 'Safari planning consultation' })} className="min-h-12 px-7 rounded-xl bg-brand-soft hover:bg-brand-soft text-ink-strong font-extrabold text-sm shadow-lg">Start planning with us</button></div>
      </div>
    </header>

    <main className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-20 space-y-20">
      <section className="grid lg:grid-cols-12 gap-10 items-start"><div className="lg:col-span-5 space-y-4"><span className="text-xs font-bold uppercase tracking-widest text-brand-soft">What the process feels like</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">Personal enough to adapt. Clear enough to trust.</h2><p className="text-base text-on-shell-muted leading-relaxed">Safari planning involves trade-offs: more time in one park means less time somewhere else; a fly-in route can save hours but changes the budget; the most famous lodge is not always the best fit for your group. We make those choices visible so you can decide with context.</p><Link to="/reviews" className="inline-flex items-center gap-2 min-h-11 text-brand-soft font-bold text-sm hover:text-white">Read independent traveler feedback <ArrowRight className="w-4 h-4" /></Link></div><div className="lg:col-span-7 rounded-3xl bg-white border border-border-strong p-6 sm:p-8 text-ink-strong"><div className="grid sm:grid-cols-2 gap-5">{[['Private itinerary','Adjust nights, route and pace around your group.'],['Local conversation','Email, phone and WhatsApp keep planning practical and direct.'],['Clear proposal','Review what is included, excluded and still flexible.'],['Support on the ground','Know who to contact once the journey begins.']].map(([title,desc]) => <div key={title} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" /><div><h3 className="font-bold">{title}</h3><p className="text-sm text-ink-muted mt-1">{desc}</p></div></div>)}</div></div></section>

      <section className="space-y-8"><div className="max-w-3xl"><span className="text-xs font-bold uppercase tracking-widest text-brand-soft">From idea to itinerary</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mt-2">Five simple stages, with room to change your mind.</h2></div><div className="grid md:grid-cols-5 gap-4">{steps.map(([number,title,copy]) => <article key={number} className="rounded-3xl border border-white/10 bg-white/5 p-5"><span className="font-serif-luxury text-2xl text-brand-soft">{number}</span><h3 className="font-serif-luxury text-xl font-bold text-white mt-3">{title}</h3><p className="text-sm text-on-shell-muted mt-2 leading-relaxed">{copy}</p></article>)}</div></section>

      <section className="rounded-[2rem] bg-page border border-border-strong p-7 sm:p-10 lg:p-12 text-ink-strong"><div className="max-w-3xl"><span className="text-xs font-extrabold uppercase tracking-widest text-brand-deep">Before any high-value trip</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold mt-2">Know what you are agreeing to.</h2><p className="text-base text-ink-muted mt-3">Whichever company or travel advisor you choose, a safari should come with enough detail for you to understand the plan before money changes hands.</p></div><div className="grid md:grid-cols-2 gap-x-8 gap-y-5 mt-8">{['Read independent traveler reviews from sources you trust.','Confirm the company contact details you are using are genuine.','Review the route, accommodation and transport arrangements.','Understand what the quoted price includes and excludes.','Read the payment schedule and cancellation terms.','Ask who to contact if plans change while you are in East Africa.','Check passport, visa, insurance and health requirements using official sources.','Keep copies of your confirmed itinerary, receipts and emergency contacts.'].map(item => <div key={item} className="flex gap-3"><ShieldCheck className="w-5 h-5 text-brand-deep shrink-0 mt-0.5" /><span className="text-sm leading-relaxed">{item}</span></div>)}</div></section>

      <section className="grid md:grid-cols-3 gap-5"><article className="rounded-3xl border border-white/10 bg-white/5 p-7"><Users className="w-7 h-7 text-brand-soft" /><h3 className="font-serif-luxury text-xl font-bold text-white mt-4">Private or shared?</h3><p className="text-sm text-on-shell-muted mt-2 leading-relaxed">Private safaris give your group more control over pace, game-drive timing and daily decisions. Shared departures can suit travelers who prefer fixed schedules and shared costs.</p></article><article className="rounded-3xl border border-white/10 bg-white/5 p-7"><WalletCards className="w-7 h-7 text-brand-soft" /><h3 className="font-serif-luxury text-xl font-bold text-white mt-4">Budget with context</h3><p className="text-sm text-on-shell-muted mt-2 leading-relaxed">Season, park fees, accommodation and group size can change the same route significantly. Online prices are useful starting points, not a substitute for a dated proposal.</p></article><article className="rounded-3xl border border-white/10 bg-white/5 p-7"><MessageCircle className="w-7 h-7 text-brand-soft" /><h3 className="font-serif-luxury text-xl font-bold text-white mt-4">Ask the awkward questions</h3><p className="text-sm text-on-shell-muted mt-2 leading-relaxed">Long drive days, room categories, park-fee changes, child arrangements and accessibility are all worth discussing before the trip rather than discovering later.</p></article></section>

      <section className="rounded-[2rem] overflow-hidden grid lg:grid-cols-2 border border-white/10 bg-shell"><div className="min-h-80"><img src="/images/catalog/family-safari-game-drive.jpg" alt="Travelers on a private safari game drive" loading="lazy" className="w-full h-full object-cover" /></div><div className="p-8 sm:p-10 flex flex-col justify-center"><span className="text-xs font-bold uppercase tracking-widest text-brand-soft">Ready when you are</span><h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white mt-2">Start with the part you already know.</h2><p className="text-base text-on-shell-muted mt-4 leading-relaxed">A destination, a month, a shortlist, a honeymoon, a family trip — any of those is enough to begin. We can help fill in the rest.</p><div className="mt-6 flex flex-col sm:flex-row gap-3"><button onClick={() => onOpenEnquiryModal({ initialType: 'Safari planning consultation' })} className="min-h-12 px-6 rounded-xl bg-brand-soft hover:bg-brand-soft text-ink-strong font-extrabold text-sm">Start planning</button><Link to="/safari-builder" className="min-h-12 px-6 rounded-xl border border-white/20 text-white font-bold text-sm inline-flex items-center justify-center">Use the safari builder</Link></div></div></section>
    </main>
  </div>
);
