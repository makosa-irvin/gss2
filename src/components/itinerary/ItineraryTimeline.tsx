import React, { useState } from 'react';
import { ItineraryDay } from '../../types';
import { ChevronDown, ChevronUp, Clock, Utensils, Bed, Compass, Car, CheckCircle2 } from 'lucide-react';

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[];
}

export const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({ itinerary }) => {
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({ 1: true, 2: true });

  const toggleDay = (dayNum: number) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayNum]: !prev[dayNum]
    }));
  };

  const expandAll = () => {
    const all: Record<number, boolean> = {};
    itinerary.forEach(d => { all[d.day] = true; });
    setExpandedDays(all);
  };

  const collapseAll = () => {
    setExpandedDays({});
  };

  if (!itinerary || itinerary.length === 0) {
    return (
      <div className="rounded-2xl bg-[#141e17] border border-[#233327] p-6 text-center text-[#8b9e90]">
        Detailed day-by-day itinerary is being customized for this safari.
      </div>
    );
  }

  return (
    <div id="itinerary-timeline-container" className="space-y-6">
      {/* Header controls */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#c49a45]">Day-by-Day Journey</span>
          <h3 className="font-serif-luxury text-2xl font-bold text-[#f4f2eb] mt-0.5">
            Your Detailed Itinerary
          </h3>
        </div>
        <div className="flex gap-2 text-xs">
          <button
            onClick={expandAll}
            className="px-3 py-1.5 rounded-lg bg-[#1b2920] hover:bg-[#233327] text-[#c4d4c8] border border-[#2a3d31] transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 rounded-lg bg-[#1b2920] hover:bg-[#233327] text-[#c4d4c8] border border-[#2a3d31] transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Timeline items */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#233327] space-y-6">
        {itinerary.map((dayItem) => {
          const isExpanded = !!expandedDays[dayItem.day];

          return (
            <div key={dayItem.day} className="relative group">
              {/* Day badge indicator on vertical line */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#c49a45] text-black font-bold text-xs shadow-lg ring-4 ring-[#0c120e]">
                {dayItem.day}
              </div>

              {/* Day Card */}
              <div
                className={`rounded-2xl bg-[#141e17] border transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'border-[#c49a45]/50 shadow-xl' : 'border-[#233327] hover:border-[#384e3e]'
                }`}
              >
                {/* Header clickable bar */}
                <div
                  onClick={() => toggleDay(dayItem.day)}
                  className="p-5 cursor-pointer flex items-center justify-between gap-4 select-none"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#c49a45] uppercase tracking-wider">
                      <span>Day {dayItem.day}</span>
                      {dayItem.subtitle && (
                        <>
                          <span className="text-[#3e5645]">·</span>
                          <span className="text-[#a3b2a7]">{dayItem.subtitle}</span>
                        </>
                      )}
                    </div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#f4f2eb] mt-1">
                      {dayItem.title}
                    </h4>
                  </div>

                  <div className="p-2 rounded-xl bg-[#1b2920] text-[#c49a45]">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-[#1e2c22] space-y-5">
                    {/* Description */}
                    <p className="text-sm text-[#c4d4c8] leading-relaxed">
                      {dayItem.description}
                    </p>

                    {/* Day metadata specs: Meals, Accommodation, Transport */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {dayItem.accommodation && (
                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0c120e] border border-[#233327]">
                          <Bed className="w-4 h-4 text-[#c49a45] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[11px] text-[#8b9e90] uppercase tracking-wider block">Accommodation</span>
                            <span className="text-xs font-semibold text-[#f4f2eb]">{dayItem.accommodation}</span>
                          </div>
                        </div>
                      )}

                      {dayItem.meals && (
                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0c120e] border border-[#233327]">
                          <Utensils className="w-4 h-4 text-[#c49a45] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[11px] text-[#8b9e90] uppercase tracking-wider block">Meals</span>
                            <span className="text-xs font-semibold text-[#f4f2eb]">{dayItem.meals}</span>
                          </div>
                        </div>
                      )}

                      {dayItem.transport && (
                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0c120e] border border-[#233327]">
                          <Car className="w-4 h-4 text-[#c49a45] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[11px] text-[#8b9e90] uppercase tracking-wider block">Transport</span>
                            <span className="text-xs font-semibold text-[#f4f2eb]">{dayItem.transport}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Day Activities */}
                    {dayItem.activities && dayItem.activities.length > 0 && (
                      <div className="pt-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#a3b2a7] block mb-2">
                          Key Day Highlights
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {dayItem.activities.map((act, actIdx) => (
                            <div key={actIdx} className="flex items-center gap-2 text-xs text-[#e0ded6]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#c49a45] shrink-0" />
                              <span>{act}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
