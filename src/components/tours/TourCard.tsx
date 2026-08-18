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
      className="group relative flex flex-col rounded-2xl bg-[#141e17] border border-[#233327] overflow-hidden transition-all duration-300 hover:border-[#c49a45]/60 hover:shadow-2xl hover:shadow-[#c49a45]/10"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c120e]">
        <img
          src={tour.images[0] || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80'}
          alt={tour.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141e17] via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex flex-wrap gap-1.5">
            {tour.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#c49a45] text-black font-bold px-2.5 py-1 text-xs uppercase tracking-wider shadow-md">
                <Sparkles className="w-3 h-3" /> Featured
              </span>
            )}
            {tour.popular && (
              <span className="inline-flex items-center rounded-full bg-[#2a3d31] text-[#e3ded2] font-semibold px-2.5 py-1 text-xs tracking-wider border border-[#3e5645]">
                Popular
              </span>
            )}
          </div>
          <span className="rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-white/90 border border-white/10">
            {tour.country}
          </span>
        </div>

        {/* Duration Chip */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-[#0c120e]/85 backdrop-blur-md px-2.5 py-1 text-xs text-[#e8e4d9] border border-[#233327]">
          <Clock className="w-3.5 h-3.5 text-[#c49a45]" />
          <span>{tour.durationLabel || `${tour.durationDays} Days`}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-5 justify-between">
        <div>
          {/* Destinations */}
          <div className="flex items-center gap-1 text-xs font-medium text-[#c49a45] mb-2 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{tour.destinations.join(' · ') || tour.country}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelect(tour)}
            className="font-serif-luxury text-lg font-bold text-[#f4f2eb] leading-snug cursor-pointer transition-colors hover:text-[#c49a45] line-clamp-2"
          >
            {tour.title}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs text-[#a3b2a7] line-clamp-2 leading-relaxed">
            {tour.shortDescription}
          </p>

          {/* Travel Styles / Features Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tour.travelStyles.slice(0, 3).map(style => (
              <span
                key={style}
                className="rounded-md bg-[#1b2920] px-2 py-0.5 text-[11px] text-[#cfdacd] border border-[#2a3d31]"
              >
                {style}
              </span>
            ))}
            {tour.comfortLevel && (
              <span className="rounded-md bg-[#222e1e] px-2 py-0.5 text-[11px] text-[#d6b772] border border-[#443818]">
                {tour.comfortLevel}
              </span>
            )}
          </div>
        </div>

        {/* Footer: Pricing & Action Buttons */}
        <div className="mt-5 pt-4 border-t border-[#233327] flex items-end justify-between gap-3">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-[#8b9e90]">
              {isKenyanResidentMode ? 'Resident Rate from' : 'Starting from'}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-[#f4f2eb] font-serif-luxury">
                {formattedPrice}
              </span>
              <span className="text-[11px] text-[#8b9e90]">/ person</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={getWhatsAppUrl({ tourTitle: tour.title })}
              target="_blank"
              rel="noopener noreferrer"
              title="Quick WhatsApp Enquiry"
              className="p-2 rounded-xl bg-[#1b2920] text-[#4ade80] hover:bg-[#233327] border border-[#2a3d31] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => onSelect(tour)}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] text-xs font-bold transition-all shadow-md active:scale-95"
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
