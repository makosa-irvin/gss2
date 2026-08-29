import React from 'react';
import { Hotel } from '../../types';
import { useData } from '../../context/DataContext';
import { useShortlist } from '../../context/ShortlistContext';
import { unsplashCardImage } from '../../lib/imageUrl';
import { MapPin, Star, Check, MessageCircle, ArrowRight, Heart } from 'lucide-react';

interface HotelCardProps {
  hotel: Hotel;
  onSelect: (hotel: Hotel) => void;
  onEnquire?: (hotel: Hotel) => void;
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel, onSelect }) => {
  const { formatPrice, isKenyanResidentMode, getWhatsAppUrl } = useData();
  const { isHotelSaved, toggleHotel } = useShortlist();
  const isSaved = isHotelSaved(hotel.slug);

  const formattedPrice = formatPrice(hotel.priceFromUSD, {
    specificKES: hotel.priceFromKES,
    isResident: isKenyanResidentMode
  });

  return (
    <article
      id={`hotel-card-${hotel.id}`}
      className="group relative flex flex-col rounded-2xl bg-white border border-[#ded8cc] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#b3822a] hover:shadow-xl focus-within:border-[#b3822a] focus-within:shadow-xl shadow-sm"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f4f2ec]">
        <img
          src={unsplashCardImage(
            hotel.images[0] || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
            800
          )}
          alt={hotel.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex flex-wrap gap-1.5">
            {hotel.isKenyanResidentOffer && (
              <span className="rounded-full bg-[#1b4332] text-white font-bold px-2.5 py-1 text-xs shadow-sm">Resident Deal</span>
            )}
            <span className="rounded-full bg-black/70 backdrop-blur-md text-white font-semibold px-2.5 py-1 text-xs border border-white/30">{hotel.category}</span>
          </div>

          {hotel.rating && (
            <div className="flex items-center gap-1 rounded-full bg-black/75 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-[#facc15] border border-white/30">
              <Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
              <span>{hotel.rating}</span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggleHotel(hotel.slug)}
          aria-pressed={isSaved}
          aria-label={isSaved ? `Remove ${hotel.name} from shortlist` : `Save ${hotel.name} to shortlist`}
          className={`absolute right-3 bottom-3 z-20 min-w-11 min-h-11 rounded-full border flex items-center justify-center shadow-md backdrop-blur-md transition-colors ${isSaved ? 'bg-[#fffdf8] text-[#8a611d] border-white' : 'bg-black/55 text-white border-white/35 hover:bg-black/70'}`}
        >
          <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5 justify-between bg-white">
        <div>
          <div className="flex items-center gap-1 text-xs font-bold text-[#76541a] mb-1.5"><MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /><span>{hotel.location}</span></div>

          <h3 className="font-serif-luxury text-lg font-bold text-[#161f19] leading-snug">
            <button type="button" onClick={() => onSelect(hotel)} className="text-left transition-colors hover:text-[#76541a] rounded-sm">{hotel.name}</button>
          </h3>

          <p className="mt-2 text-sm text-[#46544b] line-clamp-2 leading-relaxed">{hotel.description}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {hotel.isFamilyFriendly && <span className="rounded-md bg-[#eef7f2] px-2 py-0.5 text-xs font-semibold text-[#1b4332] border border-[#cbe4d4]">Family Friendly</span>}
            {hotel.isHoneymoonFriendly && <span className="rounded-md bg-[#fdf2f8] px-2 py-0.5 text-xs font-semibold text-[#9d174d] border border-[#f3bdd8]">Honeymoon</span>}
            {hotel.isSeniorFriendly && <span className="rounded-md bg-[#eff6ff] px-2 py-0.5 text-xs font-semibold text-[#1e40af] border border-[#bfdbfe]">Senior Friendly</span>}
          </div>

          {hotel.facilities && (
            <div className="mt-3 space-y-1.5">
              {hotel.facilities.slice(0, 2).map((fac, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-[#425046]"><Check className="w-3.5 h-3.5 text-[#76541a] shrink-0" aria-hidden="true" /><span className="truncate">{fac}</span></div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-[#e4dfd4] flex items-end justify-between gap-3">
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#58675d] font-semibold">{isKenyanResidentMode ? 'Resident Rate from' : 'Starting from'}</span>
            <div className="flex items-baseline gap-1"><span className="text-xl font-extrabold text-[#161f19] font-serif-luxury">{formattedPrice}</span><span className="text-xs text-[#58675d]">/ night</span></div>
          </div>

          <div className="flex items-center gap-2">
            <a href={getWhatsAppUrl({ hotelTitle: hotel.name })} target="_blank" rel="noopener noreferrer" aria-label={`Enquire on WhatsApp about ${hotel.name}`} className="min-w-11 min-h-11 p-2 rounded-xl bg-[#eef7f2] text-[#1b4332] hover:bg-[#def0e6] border border-[#b7d8c3] transition-colors flex items-center justify-center"><MessageCircle className="w-5 h-5 text-[#0b6b60]" aria-hidden="true" /></a>
            <button type="button" onClick={() => onSelect(hotel)} aria-label={`View ${hotel.name}`} className="min-h-11 inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white text-sm font-bold transition-all shadow-sm hover:shadow-md active:scale-95"><span>View Deal</span><ArrowRight className="w-4 h-4" aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </article>
  );
};
