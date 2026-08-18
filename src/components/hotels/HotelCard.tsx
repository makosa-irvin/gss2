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
      className="group relative flex flex-col rounded-2xl bg-[#141e17] border border-[#233327] overflow-hidden transition-all duration-300 hover:border-[#c49a45]/60 hover:shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c120e]">
        <img
          src={hotel.images[0] || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'}
          alt={hotel.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141e17] via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {hotel.isKenyanResidentOffer && (
              <span className="rounded-full bg-[#1b4332] text-[#86efac] font-bold px-2.5 py-1 text-xs border border-[#2d6a4f] shadow-sm">
                Resident Deal
              </span>
            )}
            <span className="rounded-full bg-[#2a3d31] text-[#e3ded2] font-semibold px-2.5 py-1 text-xs border border-[#3e5645]">
              {hotel.category}
            </span>
          </div>

          {hotel.rating && (
            <div className="flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-[#facc15] border border-white/10">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{hotel.rating}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 justify-between">
        <div>
          <div className="flex items-center gap-1 text-xs font-medium text-[#c49a45] mb-1.5">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{hotel.location}</span>
          </div>

          <h3
            onClick={() => onSelect(hotel)}
            className="font-serif-luxury text-lg font-bold text-[#f4f2eb] leading-snug cursor-pointer transition-colors hover:text-[#c49a45]"
          >
            {hotel.name}
          </h3>

          <p className="mt-2 text-xs text-[#a3b2a7] line-clamp-2 leading-relaxed">
            {hotel.description}
          </p>

          {/* Quick Badges: Family, Honeymoon, Senior */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {hotel.isFamilyFriendly && (
              <span className="rounded-md bg-[#1b2920] px-2 py-0.5 text-[10px] text-[#86efac] border border-[#2a3d31]">
                Family Friendly
              </span>
            )}
            {hotel.isHoneymoonFriendly && (
              <span className="rounded-md bg-[#2d1b28] px-2 py-0.5 text-[10px] text-[#f472b6] border border-[#4a2842]">
                Honeymoon
              </span>
            )}
            {hotel.isSeniorFriendly && (
              <span className="rounded-md bg-[#1e2738] px-2 py-0.5 text-[10px] text-[#93c5fd] border border-[#2d3a52]">
                Senior Friendly
              </span>
            )}
          </div>

          {/* Top Facilities Preview */}
          {hotel.facilities && (
            <div className="mt-3 space-y-1">
              {hotel.facilities.slice(0, 2).map((fac, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#c4d4c8]">
                  <Check className="w-3 h-3 text-[#c49a45] shrink-0" />
                  <span className="truncate">{fac}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Price & CTA */}
        <div className="mt-5 pt-4 border-t border-[#233327] flex items-end justify-between gap-3">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-[#8b9e90]">
              {isKenyanResidentMode ? 'Resident Rate from' : 'Starting from'}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-[#f4f2eb] font-serif-luxury">
                {formattedPrice}
              </span>
              <span className="text-[11px] text-[#8b9e90]">/ night</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={getWhatsAppUrl({ hotelTitle: hotel.name })}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Rates Enquiry"
              className="p-2 rounded-xl bg-[#1b2920] text-[#4ade80] hover:bg-[#233327] border border-[#2a3d31] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => onSelect(hotel)}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] text-xs font-bold transition-all shadow-md active:scale-95"
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
