import React, { useState } from 'react';
import { ItineraryDay } from '../../types';
import { ChevronDown, ChevronUp, Utensils, Bed, Car, CheckCircle2 } from 'lucide-react';

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[];
}

export const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({ itinerary }) => {
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({ 1: true, 2: true });

  const toggleDay = (dayNum: number) => setExpandedDays(prev => ({ ...prev, [dayNum]: !prev[dayNum] }));
  const expandAll = () => {
    const all: Record<number, boolean> = {};
    itinerary.forEach(d => { all[d.day] = true; });
    setExpandedDays(all);
  };
  const collapseAll = () => setExpandedDays({});

  if (!itinerary || itinerary.length === 0) {
    return <div className="rounded-2xl bg-white border border-[#ded8cb] p-6 text-center text-sm text-[#46544b]">A detailed day-by-day itinerary can be customized for this safari.</div>;
  }

  return (
    <section id="itinerary-timeline-container" aria-labelledby="itinerary-heading" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#e6bc65]">Day-by-day journey</span>
          <h2 id="itinerary-heading" className="font-serif-luxury text-2xl font-bold text-white mt-1">Your detailed itinerary</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={expandAll} className="min-h-11 px-4 rounded-lg bg-[#f6f4ee] hover:bg-[#ede9dc] text-[#303e35] border border-[#d7d1c4] font-semibold text-sm transition-colors">Expand all</button>
          <button type="button" onClick={collapseAll} className="min-h-11 px-4 rounded-lg bg-[#f6f4ee] hover:bg-[#ede9dc] text-[#303e35] border border-[#d7d1c4] font-semibold text-sm transition-colors">Collapse all</button>
        </div>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#dcd7ca] space-y-6">
        {itinerary.map(dayItem => {
          const isExpanded = !!expandedDays[dayItem.day];
          const contentId = `itinerary-day-${dayItem.day}`;
          return (
            <article key={dayItem.day} className="relative group">
              <div aria-hidden="true" className="absolute -left-[35px] sm:-left-[43px] top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#8a611d] text-white font-bold text-xs shadow-md ring-4 ring-[#fcfbf9]">{dayItem.day}</div>
              <div className={`rounded-2xl bg-white border transition-all overflow-hidden ${isExpanded ? 'border-[#8a611d] shadow-md' : 'border-[#ded8cb] hover:border-[#8a611d]'}`}>
                <button type="button" onClick={() => toggleDay(dayItem.day)} aria-expanded={isExpanded} aria-controls={contentId} className="w-full min-h-16 p-5 text-left flex items-center justify-between gap-4 select-none">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#76541a] uppercase tracking-wider"><span>Day {dayItem.day}</span>{dayItem.subtitle && <><span aria-hidden="true" className="text-[#a9a093]">·</span><span className="text-[#66766b]">{dayItem.subtitle}</span></>}</div>
                    <h3 className="font-serif-luxury text-lg font-bold text-[#161f19] mt-1">{dayItem.title}</h3>
                  </div>
                  <span aria-hidden="true" className="w-10 h-10 shrink-0 inline-flex items-center justify-center rounded-xl bg-[#faf8f2] text-[#76541a] border border-[#e3ddcf]">{isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</span>
                </button>

                {isExpanded && (
                  <div id={contentId} className="px-5 pb-6 pt-4 border-t border-[#e8e3d8] space-y-5">
                    <p className="text-base text-[#46544b] leading-relaxed">{dayItem.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {dayItem.accommodation && <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#faf8f2] border border-[#e3ddcf]"><Bed className="w-4 h-4 text-[#76541a] shrink-0 mt-0.5" aria-hidden="true" /><div><span className="text-xs text-[#66766b] uppercase tracking-wider block font-semibold">Accommodation</span><span className="text-sm font-bold text-[#161f19]">{dayItem.accommodation}</span></div></div>}
                      {dayItem.meals && <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#faf8f2] border border-[#e3ddcf]"><Utensils className="w-4 h-4 text-[#76541a] shrink-0 mt-0.5" aria-hidden="true" /><div><span className="text-xs text-[#66766b] uppercase tracking-wider block font-semibold">Meals</span><span className="text-sm font-bold text-[#161f19]">{dayItem.meals}</span></div></div>}
                      {dayItem.transport && <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#faf8f2] border border-[#e3ddcf]"><Car className="w-4 h-4 text-[#76541a] shrink-0 mt-0.5" aria-hidden="true" /><div><span className="text-xs text-[#66766b] uppercase tracking-wider block font-semibold">Transport</span><span className="text-sm font-bold text-[#161f19]">{dayItem.transport}</span></div></div>}
                    </div>
                    {dayItem.activities && dayItem.activities.length > 0 && <div><span className="text-sm font-bold text-[#303e35] block mb-2">Key day highlights</span><div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">{dayItem.activities.map((act, actIdx) => <div key={actIdx} className="flex items-start gap-2 text-sm text-[#303e35]"><CheckCircle2 className="w-4 h-4 text-[#76541a] shrink-0 mt-0.5" aria-hidden="true" /><span>{act}</span></div>)}</div></div>}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
