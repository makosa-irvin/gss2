import React from 'react';
import { Tour } from '../../types';
import { useData } from '../../context/DataContext';
import { Clock, MapPin, Users, Sparkles, MessageCircle, ArrowRight, Check } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
  onSelect: (tour: Tour) => void;
  onEnquire?: (tour: Tour) => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onSelect, onEnquire }) => {
  const { formatPrice, activeCurrency, isKenyanResidentMode, getWhatsAppUrl } = useData();

  const formattedPrice = formatPrice(tour.priceFrom, {
    specificKES: tour.residentPriceKES,
    isResident: isKenyanResidentMode
  });

  return (
    <div
      id={`tour-card-${tour.id}`}
      className="group relative flex flex-col rounded-2xl bg-white border border-[#e8e4da] overflow-hidden transition-all duration-300 hover:border-[#b3822a] hover:shadow-xl shadow-xs"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f4f2ec]">
        <img
          src={tour.images[0] || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80'}
          alt={tour.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex flex-wrap gap-1.5">
            {tour.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#b3822a] text-white font-bold px-2.5 py-1 text-xs uppercase tracking-wider shadow-md">
                <Sparkles className="w-3 h-3" /> Featured
              </span>
            )}
            {tour.popular && (
              <span className="inline-flex items-center rounded-full bg-[#1b4332] text-white font-semibold px-2.5 py-1 text-xs tracking-wider shadow-sm">
                Popular
              </span>
            )}
          </div>
          <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-white border border-white/20">
            {tour.country}
          </span>
        </div>

        {/* Duration Chip */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-black/70 backdrop-blur-md px-2.5 py-1 text-xs text-white border border-white/10 font-medium">
          <Clock className="w-3.5 h-3.5 text-[#e6bc65]" />
          <span>{tour.durationLabel || `${tour.durationDays} Days`}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-5 justify-between bg-white">
        <div>
          {/* Destinations */}
          <div className="flex items-center gap-1 text-xs font-semibold text-[#9e7120] mb-2 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-[#9e7120]" />
            <span>{tour.destinations.join(' · ') || tour.country}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelect(tour)}
            className="font-serif-luxury text-lg font-bold text-[#161f19] leading-snug cursor-pointer transition-colors hover:text-[#9e7120] line-clamp-2"
          >
            {tour.title}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs text-[#526156] line-clamp-2 leading-relaxed">
            {tour.shortDescription}
          </p>

          {/* Travel Styles / Features Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tour.travelStyles.slice(0, 3).map(style => (
              <span
                key={style}
                className="rounded-md bg-[#f4f2ec] px-2 py-0.5 text-[11px] font-medium text-[#38453d] border border-[#e2ded2]"
              >
                {style}
              </span>
            ))}
            {tour.comfortLevel && (
              <span className="rounded-md bg-[#fcf8ee] px-2 py-0.5 text-[11px] font-semibold text-[#9e7120] border border-[#ecd9aa]">
                {tour.comfortLevel}
              </span>
            )}
          </div>
        </div>

        {/* Footer: Pricing & Action Buttons */}
        <div className="mt-5 pt-4 border-t border-[#eeebe2] flex items-end justify-between gap-3">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-[#758479] font-medium">
              {isKenyanResidentMode ? 'Resident Rate from' : 'Starting from'}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-[#161f19] font-serif-luxury">
                {formattedPrice}
              </span>
              <span className="text-[11px] text-[#758479]">/ person</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={getWhatsAppUrl({ tourTitle: tour.title })}
              target="_blank"
              rel="noopener noreferrer"
              title="Quick WhatsApp Enquiry"
              className="p-2 rounded-xl bg-[#eef7f2] text-[#1b4332] hover:bg-[#def0e6] border border-[#c3e2cf] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#128c7e]" />
            </a>

            <button
              onClick={() => onSelect(tour)}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
