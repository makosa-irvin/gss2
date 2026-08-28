import React from 'react';
import { Tour, TravelerType } from '../../types';
import { useData } from '../../context/DataContext';
import { unsplashCardImage } from '../../lib/imageUrl';
import { Clock, MapPin, Heart, UserRound, Users, Accessibility, ArrowRight, Sparkles } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
  onSelect: (tour: Tour) => void;
  onEnquire?: (tour: Tour) => void;
}

const travelerLabel = (travelerTypes: TravelerType[]) => {
  const preferred = travelerTypes.find(type => ['Families', 'Couples', 'Solo', 'Seniors'].includes(type));

  switch (preferred) {
    case 'Families':
      return { label: 'Ideal for Families', Icon: Users };
    case 'Couples':
      return { label: 'Ideal for Couples', Icon: Heart };
    case 'Solo':
      return { label: 'Ideal for Solo Travelers', Icon: UserRound };
    case 'Seniors':
      return { label: 'Ideal for Seniors', Icon: Accessibility };
    default:
      return { label: 'Tailor-made Safari', Icon: Sparkles };
  }
};

export const TourCard: React.FC<TourCardProps> = ({ tour, onSelect }) => {
  const { formatPrice, isKenyanResidentMode } = useData();
  const { label: idealForLabel, Icon: TravelerIcon } = travelerLabel(tour.travelerTypes || []);

  const formattedPrice = formatPrice(tour.priceFrom, {
    specificKES: tour.residentPriceKES,
    isResident: isKenyanResidentMode
  });

  return (
    <article
      id={`tour-card-${tour.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#ded8cc] bg-[#fbf8f1] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b3822a] hover:shadow-xl focus-within:border-[#b3822a] focus-within:shadow-xl"
    >
      <button
        type="button"
        onClick={() => onSelect(tour)}
        aria-label={`View ${tour.title}`}
        className="relative block aspect-[16/11] w-full overflow-hidden bg-[#f4f2ec] text-left"
      >
        <img
          src={unsplashCardImage(
            tour.images[0] || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
            800
          )}
          alt={tour.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

        {(tour.featured || tour.popular) && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#1b4332]/95 px-2.5 py-1 text-xs font-bold text-white shadow-md backdrop-blur-sm">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {tour.popular ? 'Popular Choice' : 'Featured Safari'}
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col bg-[#fbf8f1] p-5">
        <h3 className="font-serif-luxury text-xl font-bold leading-snug text-[#161f19] sm:text-[1.35rem]">
          <button
            type="button"
            onClick={() => onSelect(tour)}
            className="rounded-sm text-left transition-colors hover:text-[#76541a]"
          >
            {tour.title}
          </button>
        </h3>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-[#3f4d44]">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-[#76541a]" aria-hidden="true" />
            {tour.durationLabel || `${tour.durationDays} Days`}
          </span>
          <span className="hidden h-4 w-px bg-[#d7d1c4] sm:block" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-[#76541a]" aria-hidden="true" />
            {tour.country}
          </span>
          <span className="hidden h-4 w-px bg-[#d7d1c4] sm:block" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#76541a]">
            <TravelerIcon className="h-4 w-4" aria-hidden="true" />
            {idealForLabel}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#ddd7ca] pt-5">
          <div>
            <span className="block text-sm font-medium text-[#66766b]">
              {isKenyanResidentMode ? 'Resident rate from' : 'From'}
            </span>
            <div className="mt-0.5 flex items-baseline gap-1">
              <span className="font-serif-luxury text-2xl font-extrabold text-[#9b6814]">
                {formattedPrice}
              </span>
              <span className="text-xs text-[#66766b]">/ person</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelect(tour)}
            aria-label={`View details for ${tour.title}`}
            className="min-h-12 shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1b4332] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#123524] hover:shadow-md active:scale-[0.98]"
          >
            <span>View Details</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};
