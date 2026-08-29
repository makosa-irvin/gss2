import React from 'react';
import { Hotel } from '../../types';
import { useData } from '../../context/DataContext';
import { useShortlist } from '../../context/ShortlistContext';
import { unsplashCardImage } from '../../lib/imageUrl';
import { MapPin, Star, Check, MessageCircle, ArrowRight, Heart } from 'lucide-react';

interface HotelCardProps { hotel: Hotel; onSelect: (hotel: Hotel) => void; onEnquire?: (hotel: Hotel) => void; }

export const HotelCard: React.FC<HotelCardProps> = ({ hotel, onSelect }) => {
  const { formatPrice, isKenyanResidentMode, getWhatsAppUrl } = useData();
  const { isHotelSaved, toggleHotel } = useShortlist();
  const isSaved = isHotelSaved(hotel.slug);
  const formattedPrice = formatPrice(hotel.priceFromUSD, { specificKES: hotel.priceFromKES, isResident: isKenyanResidentMode });
  const image = hotel.images[0] || '/images/catalog/baobab-beach-resort-spa.jpg';

  return (
    <article id={`hotel-card-${hotel.id}`} className="group relative flex flex-col rounded-2xl bg-white border border-border-strong overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl focus-within:border-brand focus-within:shadow-xl shadow-sm">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-soft">
        <img src={unsplashCardImage(image, 800)} alt={hotel.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none"><div className="flex flex-wrap gap-1.5">{hotel.isKenyanResidentOffer && <span className="rounded-full bg-action text-white font-bold px-2.5 py-1 text-xs shadow-sm">Resident Rate</span>}<span className="rounded-full bg-black/70 backdrop-blur-md text-white font-semibold px-2.5 py-1 text-xs border border-white/30">{hotel.category}</span></div>{hotel.rating && <div className="flex items-center gap-1 rounded-full bg-black/75 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-yellow-400 border border-white/30"><Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" /><span>{hotel.rating}</span></div>}</div>
        <button type="button" onClick={() => toggleHotel(hotel.slug)} aria-pressed={isSaved} aria-label={isSaved ? `Remove ${hotel.name} from shortlist` : `Save ${hotel.name} to shortlist`} className={`absolute right-3 bottom-3 z-20 min-w-11 min-h-11 rounded-full border flex items-center justify-center shadow-md backdrop-blur-md transition-colors ${isSaved ? 'bg-page text-brand-strong border-white' : 'bg-black/55 text-white border-white/35 hover:bg-black/70'}`}><Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} aria-hidden="true" /></button>
      </div>

      <div className="flex flex-1 flex-col p-5 justify-between bg-white"><div><div className="flex items-center gap-1 text-xs font-bold text-brand-deep mb-1.5"><MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /><span>{hotel.location}</span></div><h3 className="font-serif-luxury text-lg font-bold text-ink-strong leading-snug"><button type="button" onClick={() => onSelect(hotel)} className="text-left transition-colors hover:text-brand-deep rounded-sm">{hotel.name}</button></h3><p className="mt-2 text-sm text-ink-muted line-clamp-2 leading-relaxed">{hotel.description}</p><div className="mt-3 flex flex-wrap gap-1.5">{hotel.isFamilyFriendly && <span className="rounded-md bg-action-soft px-2 py-0.5 text-xs font-semibold text-action border border-action-border">Family Friendly</span>}{hotel.isHoneymoonFriendly && <span className="rounded-md bg-pink-50 px-2 py-0.5 text-xs font-semibold text-pink-800 border border-pink-200">Honeymoon</span>}{hotel.isSeniorFriendly && <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-800 border border-blue-200">Senior Friendly</span>}</div>{hotel.facilities && <div className="mt-3 space-y-1.5">{hotel.facilities.slice(0, 2).map((fac, idx) => <div key={idx} className="flex items-center gap-1.5 text-xs text-ink-muted"><Check className="w-3.5 h-3.5 text-brand-deep shrink-0" aria-hidden="true" /><span className="truncate">{fac}</span></div>)}</div>}</div>
        <div className="mt-5 pt-4 border-t border-border flex items-end justify-between gap-3"><div><span className="block text-xs uppercase tracking-wider text-ink-muted font-semibold">{isKenyanResidentMode ? 'Resident rate from' : 'Guide rate from'}</span><div className="flex items-baseline gap-1"><span className="text-xl font-extrabold text-ink-strong font-serif-luxury">{formattedPrice}</span><span className="text-xs text-ink-muted">/ night</span></div></div><div className="flex items-center gap-2"><a href={getWhatsAppUrl({ hotelTitle: hotel.name })} target="_blank" rel="noopener noreferrer" aria-label={`Ask on WhatsApp about ${hotel.name}`} className="min-w-11 min-h-11 p-2 rounded-xl bg-action-soft text-action hover:bg-action-soft border border-action-border transition-colors flex items-center justify-center"><MessageCircle className="w-5 h-5 text-emerald-700" aria-hidden="true" /></a><button type="button" onClick={() => onSelect(hotel)} aria-label={`View ${hotel.name}`} className="min-h-11 inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-brand-strong hover:bg-brand-hover text-white text-sm font-bold transition-all shadow-sm"><span>View Stay</span><ArrowRight className="w-4 h-4" aria-hidden="true" /></button></div></div>
      </div>
    </article>
  );
};
