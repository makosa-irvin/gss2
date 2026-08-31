import type { Metadata } from 'next';
import Link from 'next/link';
import { EnquiryButton } from '../../components/EnquiryButton';

export const metadata: Metadata = { title: 'Plan Your Safari With Us', description: 'See how Good Secrets Safaris turns dates, interests and comfort priorities into a private Kenya, Tanzania or Zanzibar itinerary.', alternates: { canonical: '/plan-with-us' } };

const steps = [
  ['1', 'Tell us the shape of the trip', 'Share your dates, group size, rough budget, wildlife priorities and whether you want safari only or safari plus beach.'],
  ['2', 'We design the route', 'We balance drive time, park sequence, lodge location, season and the experiences you care about rather than simply adding more stops.'],
  ['3', 'You refine the proposal', 'Ask questions, compare trade-offs and adjust pace or accommodation before deciding whether the itinerary fits.'],
  ['4', 'Confirm when you are ready', 'A booking only becomes binding after the final proposal and booking conditions are accepted, required payment is received, and confirmation is issued in writing.'],
] as const;

export default function PlanWithUsPage() {
  return <>
    <header className="page-hero"><div className="container"><p className="eyebrow">Human planning, digital convenience</p><h1>From “we want to go on safari” to a route that actually fits.</h1><p>A good itinerary is a sequence of decisions: where to spend time, what to skip, when to fly, when to drive, and which lodge location supports the wildlife experience you want.</p><div className="hero-actions"><EnquiryButton label="Start planning" /><Link className="button secondary" href="/safaris">Explore safari ideas</Link></div></div></header>
    <section className="section"><div className="container"><div className="section-header"><div><p className="eyebrow">Four simple stages</p><h2>What happens after you enquire</h2><p>No checkout pressure. The first goal is to understand the trip before you commit to it.</p></div></div><div className="grid-2">{steps.map(([number,title,body]) => <article className="prose-card" key={number}><p className="eyebrow">Step {number}</p><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section dark-section"><div className="container grid-2"><div><p className="eyebrow">Useful before the first call</p><h2>You do not need every answer.</h2><p className="lede">Approximate dates, traveler count and a sense of comfort level are enough to start. We can explain the consequences of the decisions you have not made yet.</p></div><div className="prose-card"><h3>Good questions to bring</h3><ul className="list-clean"><li>How much driving does this route involve?</li><li>Which parts of the trip are private versus shared?</li><li>What exactly is included in the quoted price?</li><li>What changes if a preferred lodge is unavailable?</li><li>Which nights or experiences are worth upgrading?</li></ul></div></div></section>
  </>;
}
