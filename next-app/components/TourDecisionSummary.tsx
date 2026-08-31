import { Clock, Compass, Hotel, MapPin, Route, Users } from 'lucide-react';
import type { Tour } from '../lib/types';

export function TourDecisionSummary({ tour }: { tour: Tour }) {
  const bestFor = tour.travelerTypes?.length ? tour.travelerTypes.join(', ') : 'Travelers looking for a tailor-made safari';
  const styles = tour.travelStyles?.length ? tour.travelStyles.join(', ') : 'Tailor-made';
  const route = tour.destinations?.length ? tour.destinations.join(' → ') : tour.country;
  const startEnd = tour.startingLocation && tour.endingLocation ? `${tour.startingLocation} → ${tour.endingLocation}` : tour.startingLocation || tour.endingLocation || 'Confirm with your safari planner';
  const facts = [
    { label: 'Best for', value: bestFor, Icon: Users },
    { label: 'Safari style', value: styles, Icon: Compass },
    { label: 'Comfort', value: tour.comfortLevel, Icon: Hotel },
    { label: 'Duration', value: tour.durationLabel, Icon: Clock },
    { label: 'Route', value: route, Icon: Route },
    { label: 'Starts / ends', value: startEnd, Icon: MapPin },
  ];

  return <section aria-labelledby="decision-summary-heading" className="border-y border-border-strong bg-page text-ink">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
      <div className="max-w-3xl"><span className="text-xs font-extrabold uppercase tracking-widest text-brand-deep">At a glance</span><h2 id="decision-summary-heading" className="font-serif-luxury text-2xl sm:text-3xl font-bold text-ink-strong mt-1">Is this safari right for you?</h2><p className="text-sm text-ink-muted mt-2 leading-relaxed">Compare the practical shape of this itinerary before getting into the day-by-day detail. These facts come directly from the safari itinerary and can be tailored when you request a quote.</p></div>
      <dl className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">{facts.map(({ label, value, Icon }) => <div key={label} className="rounded-2xl border border-border-strong bg-white p-4 min-w-0"><dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-deep"><Icon className="w-4 h-4 shrink-0" aria-hidden="true" />{label}</dt><dd className="mt-2 text-sm font-semibold text-ink-strong leading-relaxed break-words">{value}</dd></div>)}</dl>
    </div>
  </section>;
}
