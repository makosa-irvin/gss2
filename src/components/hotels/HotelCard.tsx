import React from 'react';
import { Hotel } from '../../types';
import { useData } from '../../context/DataContext';
import { MapPin, Star, Heart, Check, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface HotelCardProps {
  hotel: Hotel;
  onSelect: (hotel: Hotel) => void;
  onEnquire?: (hotel: Hotel) => void;
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel, onSelect, onEnquire }) => {
  const { formatPrice, activeCurrency, isKenyanResidentMode, getWhatsAppUrl } = useData();

  const formattedPrice = formatPrice(hotel.priceFromUSD, {
    specificKES: hotel.priceFromKES,
    isResident: isKenyanResidentMode
  });

  return (
    <div
      id={`hotel-card-${hotel.id}`}
      className="group relative flex flex-col rounded-2xl bg-white border border-[#e8e4da] overflow-hidden transition-all duration-300 hover:border-[#b3822a] hover:shadow-xl shadow-xs"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f4f2ec]">
        <img
          src={hotel.images[0] || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'}
          alt={hotel.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {hotel.isKenyanResidentOffer && (
              <span className="rounded-full bg-[#1b4332] text-white font-bold px-2.5 py-1 text-xs shadow-sm">
                Resident Deal
              </span>
            )}
            <span className="rounded-full bg-black/60 backdrop-blur-md text-white font-medium px-2.5 py-1 text-xs border border-white/20">
              {hotel.category}
            </span>
          </div>

          {hotel.rating && (
            <div className="flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-[#facc15] border border-white/20">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{hotel.rating}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 justify-between bg-white">
        <div>
          <div className="flex items-center gap-1 text-xs font-semibold text-[#9e7120] mb-1.5">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{hotel.location}</span>
          </div>

          <h3
            onClick={() => onSelect(hotel)}
            className="font-serif-luxury text-lg font-bold text-[#161f19] leading-snug cursor-pointer transition-colors hover:text-[#9e7120]"
          >
            {hotel.name}
          </h3>

          <p className="mt-2 text-xs text-[#526156] line-clamp-2 leading-relaxed">
            {hotel.description}
          </p>

          {/* Quick Badges: Family, Honeymoon, Senior */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {hotel.isFamilyFriendly && (
              <span className="rounded-md bg-[#eef7f2] px-2 py-0.5 text-[10px] font-semibold text-[#1b4332] border border-[#cbe4d4]">
                Family Friendly
              </span>
            )}
            {hotel.isHoneymoonFriendly && (
              <span className="rounded-md bg-[#fdf2f8] px-2 py-0.5 text-[10px] font-semibold text-[#be185d] border border-[#fbcfe8]">
                Honeymoon
              </span>
            )}
            {hotel.isSeniorFriendly && (
              <span className="rounded-md bg-[#eff6ff] px-2 py-0.5 text-[10px] font-semibold text-[#1d4ed8] border border-[#bfdbfe]">
                Senior Friendly
              </span>
            )}
          </div>

          {/* Top Facilities Preview */}
          {hotel.facilities && (
            <div className="mt-3 space-y-1">
              {hotel.facilities.slice(0, 2).map((fac, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#425046]">
                  <Check className="w-3 h-3 text-[#9e7120] shrink-0" />
                  <span className="truncate">{fac}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Price & CTA */}
        <div className="mt-5 pt-4 border-t border-[#eeebe2] flex items-end justify-between gap-3">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-[#758479] font-medium">
              {isKenyanResidentMode ? 'Resident Rate from' : 'Starting from'}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-[#161f19] font-serif-luxury">
                {formattedPrice}
              </span>
              <span className="text-[11px] text-[#758479]">/ night</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={getWhatsAppUrl({ hotelTitle: hotel.name })}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Rates Enquiry"
              className="p-2 rounded-xl bg-[#eef7f2] text-[#1b4332] hover:bg-[#def0e6] border border-[#c3e2cf] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#128c7e]" />
            </a>

            <button
              onClick={() => onSelect(hotel)}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <span>View Deal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
