import React from 'react';
import { Tour } from '../../types';
import { useData } from '../../context/DataContext';
import { unsplashCardImage } from '../../lib/imageUrl';
import { ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
  onSelect: (tour: Tour) => void;
  onEnquire?: (tour: Tour) => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onSelect }) => {
  const { formatPrice, isKenyanResidentMode } = useData();
  const formattedPrice = formatPrice(tour.priceFrom, {
    specificKES: tour.residentPriceKES,
    isResident: isKenyanResidentMode
  });

  return (
    <article id={`tour-card-${tour.id}`} className="group relative min-h-[470px] sm:min-h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c120e] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-within:ring-2 focus-within:ring-[#e6bc65]">
      <img
        src={unsplashCardImage(tour.images[0] || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80', 800)}
        alt={tour.title}
        referrerPolicy="no-referrer"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07100a] via-[#07100a]/45 to-black/5" />

      {(tour.featured || tour.popular) && (
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#1b4332]/95 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-[#e6bc65]" aria-hidden="true" />
          {tour.popular ? 'Popular Choice' : 'Featured Safari'}
        </span>
      )}

      <button type="button" onClick={() => onSelect(tour)} aria-label={`View ${tour.title}`} className="absolute inset-0 z-10 rounded-2xl" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">
        <h3 className="font-serif-luxury text-2xl sm:text-[1.75rem] font-bold leading-tight text-white max-w-[90%]">{tour.title}</h3>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/95">
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-[#e6bc65]" aria-hidden="true" />{tour.durationLabel || `${tour.durationDays} Days`}</span>
          <span aria-hidden="true" className="h-4 w-px bg-white/35" />
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-[#e6bc65]" aria-hidden="true" />{tour.country}</span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/15 pt-4">
          <div><span className="block text-sm font-medium text-[#e6bc65]">{isKenyanResidentMode ? 'Resident rate from' : 'From'}</span><strong className="mt-0.5 block font-serif-luxury text-2xl font-extrabold text-[#e6bc65]">{formattedPrice}</strong></div>
          <span className="min-h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#b77b12] px-4 text-sm font-bold text-white shadow-md">View Details<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
        </div>
      </div>
    </article>
  );
};
