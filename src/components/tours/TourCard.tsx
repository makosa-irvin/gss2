import React from 'react';
import { Tour } from '../../types';
import { useData } from '../../context/DataContext';
import { unsplashCardImage } from '../../lib/imageUrl';
import { Clock, MapPin, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
  onSelect: (tour: Tour) => void;
  onEnquire?: (tour: Tour) => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onSelect }) => {
  const { formatPrice, isKenyanResidentMode, getWhatsAppUrl } = useData();

  const formattedPrice = formatPrice(tour.priceFrom, {
    specificKES: tour.residentPriceKES,
    isResident: isKenyanResidentMode
  });

  return (
    <article
      id={`tour-card-${tour.id}`}
      className="group relative flex flex-col rounded-2xl bg-white border border-[#ded8cc] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#b3822a] hover:shadow-xl shadow-sm focus-within:border-[#b3822a] focus-within:shadow-xl"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f4f2ec]">
        <img
          src={unsplashCardImage(
            tour.images[0] || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
            800
          )}
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
              <span className="inline-flex items-center gap-1 rounded-full bg-[#8a611d] text-white font-bold px-2.5 py-1 text-xs uppercase tracking-wider shadow-md">
                <Sparkles className="w-3 h-3" aria-hidden="true" /> Featured
              </span>
            )}
            {tour.popular && (
              <span className="inline-flex items-center rounded-full bg-[#1b4332] text-white font-semibold px-2.5 py-1 text-xs tracking-wider shadow-sm">
                Popular
              </span>
            )}
          </div>
          <span className="rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-white border border-white/30">
            {tour.country}
          </span>
        </div>

        {/* Duration Chip */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-black/75 backdrop-blur-md px-2.5 py-1 text-xs text-white border border-white/20 font-medium">
          <Clock className="w-3.5 h-3.5 text-[#e6bc65]" aria-hidden="true" />
          <span>{tour.durationLabel || `${tour.durationDays} Days`}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-5 justify-between bg-white">
        <div>
          {/* Destinations */}
          <div className="flex items-center gap-1 text-xs font-bold text-[#76541a] mb-2 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{tour.destinations.join(' · ') || tour.country}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif-luxury text-lg font-bold text-[#161f19] leading-snug line-clamp-2">
            <button
              type="button"
              onClick={() => onSelect(tour)}
              className="text-left transition-colors hover:text-[#76541a] rounded-sm"
            >
              {tour.title}
            </button>
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-sm text-[#46544b] line-clamp-2 leading-relaxed">
            {tour.shortDescription}
          </p>

          {/* Travel Styles / Features Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tour.travelStyles.filter(style => style !== tour.comfortLevel).slice(0, 3).map(style => (
              <span
                key={style}
                className="rounded-md bg-[#f4f2ec] px-2 py-0.5 text-xs font-medium text-[#38453d] border border-[#ddd7ca]"
              >
                {style}
              </span>
            ))}
            {tour.comfortLevel && (
              <span className="rounded-md bg-[#fcf8ee] px-2 py-0.5 text-xs font-semibold text-[#76541a] border border-[#dfc98f]">
                {tour.comfortLevel}
              </span>
            )}
          </div>
        </div>

        {/* Footer: Pricing & Action Buttons */}
        <div className="mt-5 pt-4 border-t border-[#e4dfd4] flex items-end justify-between gap-3">
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#58675d] font-semibold">
              {isKenyanResidentMode ? 'Resident Rate from' : 'Starting from'}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-[#161f19] font-serif-luxury">
                {formattedPrice}
              </span>
              <span className="text-xs text-[#58675d]">/ person</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppUrl({ tourTitle: tour.title })}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire on WhatsApp about ${tour.title}`}
              className="min-w-11 min-h-11 p-2 rounded-xl bg-[#eef7f2] text-[#1b4332] hover:bg-[#def0e6] border border-[#b7d8c3] transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 text-[#0b6b60]" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => onSelect(tour)}
              aria-label={`Explore ${tour.title}`}
              className="min-h-11 inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white text-sm font-bold transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
