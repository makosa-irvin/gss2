import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Hotel as HotelIcon, MapPin, Sparkles, Trash2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { useShortlist } from '../context/ShortlistContext';
import { PageMeta } from '../components/common/PageMeta';
import { unsplashCardImage } from '../lib/imageUrl';

interface ShortlistViewProps {
  onOpenEnquiryModal: (payload?: any) => void;
}

export const ShortlistView: React.FC<ShortlistViewProps> = ({ onOpenEnquiryModal }) => {
  const navigate = useNavigate();
  const { tours, hotels, formatPrice, isKenyanResidentMode } = useData();
  const { savedTourSlugs, savedHotelSlugs, savedCount, toggleTour, toggleHotel, clearShortlist } = useShortlist();

  const savedTours = tours.filter(tour => savedTourSlugs.includes(tour.slug));
  const savedHotels = hotels.filter(hotel => savedHotelSlugs.includes(hotel.slug));
  const shortlistSummary = [
    savedTours.length ? `Safaris:\n${savedTours.map(tour => `• ${tour.title}`).join('\n')}` : '',
    savedHotels.length ? `Hotels / stays:\n${savedHotels.map(hotel => `• ${hotel.name}`).join('\n')}` : ''
  ].filter(Boolean).join('\n\n');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10">
      <PageMeta title="My Safari Shortlist" description="Keep your favourite Good Secrets Safaris itineraries and stays together while you plan your East Africa trip." canonicalPath="/shortlist" />

      <header className="max-w-3xl space-y-4">
        <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#e6bc65]"><Heart className="w-4 h-4 fill-current" />Saved trips</span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-white">Your safari shortlist</h1>
        <p className="text-base sm:text-lg text-[#c7d2cb] leading-relaxed">Save safari ideas and places to stay while you compare. Your shortlist stays in this browser and does not require an account.</p>
      </header>

      {savedCount === 0 ? (
        <section className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 sm:p-12 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-[#e6bc65]/10 text-[#e6bc65] flex items-center justify-center mx-auto"><Heart className="w-7 h-7" /></div>
          <div><h2 className="font-serif-luxury text-2xl font-bold text-white">Nothing saved yet</h2><p className="text-sm text-[#c7d2cb] mt-2 max-w-lg mx-auto">Tap the heart on any safari or hotel to keep it here for later.</p></div>
          <div className="flex flex-col sm:flex-row justify-center gap-3"><button onClick={() => navigate('/safaris')} className="min-h-11 rounded-xl bg-[#8a611d] hover:bg-[#704d15] px-5 text-sm font-bold text-white">Explore safaris</button><button onClick={() => navigate('/hotels')} className="min-h-11 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-5 text-sm font-bold text-white">Browse stays</button></div>
        </section>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"><p className="text-sm text-[#d7dfda]"><strong className="text-white">{savedCount}</strong> {savedCount === 1 ? 'item' : 'items'} saved on this device.</p><button onClick={clearShortlist} className="min-h-10 inline-flex items-center gap-2 text-sm font-semibold text-[#d7dfda] hover:text-white self-start sm:self-auto"><Trash2 className="w-4 h-4" />Clear shortlist</button></div>

          {savedTours.length > 0 && <section className="space-y-5"><div><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Saved safaris</span><h2 className="font-serif-luxury text-3xl font-bold text-white mt-1">Safari ideas</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{savedTours.map(tour => <article key={tour.id} className="overflow-hidden rounded-2xl bg-white border border-[#ded8cb] shadow-sm"><div className="relative aspect-[16/10] overflow-hidden"><img src={unsplashCardImage(tour.images?.[0] || '', 800)} alt={tour.title} className="w-full h-full object-cover" loading="lazy"/><button type="button" onClick={() => toggleTour(tour.slug)} aria-label={`Remove ${tour.title} from shortlist`} className="absolute right-3 top-3 min-w-11 min-h-11 rounded-full bg-white/95 text-[#8a611d] flex items-center justify-center shadow-md"><Heart className="w-5 h-5 fill-current" /></button></div><div className="p-5 space-y-4"><div><h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">{tour.title}</h3><p className="mt-2 flex items-center gap-1.5 text-sm text-[#536158]"><MapPin className="w-4 h-4 text-[#76541a]" />{tour.country} · {tour.durationLabel}</p></div><div className="flex items-end justify-between gap-3 border-t border-[#e6e1d7] pt-4"><div><span className="text-xs text-[#536158]">From</span><strong className="block font-serif-luxury text-xl text-[#161f19]">{formatPrice(tour.priceFrom, { specificKES: tour.residentPriceKES, isResident: isKenyanResidentMode })}</strong></div><button onClick={() => navigate(`/safaris/${tour.slug}`)} className="min-h-11 rounded-xl bg-[#1b4332] hover:bg-[#123524] px-4 text-sm font-bold text-white">View safari</button></div></div></article>)}</div></section>}

          {savedHotels.length > 0 && <section className="space-y-5"><div><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Saved stays</span><h2 className="font-serif-luxury text-3xl font-bold text-white mt-1">Hotels & lodges</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{savedHotels.map(hotel => <article key={hotel.id} className="overflow-hidden rounded-2xl bg-white border border-[#ded8cb] shadow-sm"><div className="relative aspect-[16/10] overflow-hidden"><img src={unsplashCardImage(hotel.images?.[0] || '', 800)} alt={hotel.name} className="w-full h-full object-cover" loading="lazy"/><button type="button" onClick={() => toggleHotel(hotel.slug)} aria-label={`Remove ${hotel.name} from shortlist`} className="absolute right-3 top-3 min-w-11 min-h-11 rounded-full bg-white/95 text-[#8a611d] flex items-center justify-center shadow-md"><Heart className="w-5 h-5 fill-current" /></button></div><div className="p-5 space-y-4"><div><h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">{hotel.name}</h3><p className="mt-2 flex items-center gap-1.5 text-sm text-[#536158]"><HotelIcon className="w-4 h-4 text-[#76541a]" />{hotel.location}</p></div><div className="flex items-end justify-between gap-3 border-t border-[#e6e1d7] pt-4"><div><span className="text-xs text-[#536158]">From</span><strong className="block font-serif-luxury text-xl text-[#161f19]">{formatPrice(hotel.priceFromUSD, { specificKES: hotel.priceFromKES, isResident: isKenyanResidentMode })}</strong></div><button onClick={() => navigate(`/hotels/${hotel.slug}`)} className="min-h-11 rounded-xl bg-[#1b4332] hover:bg-[#123524] px-4 text-sm font-bold text-white">View stay</button></div></div></article>)}</div></section>}

          <section className="rounded-3xl border border-[#5f512f] bg-[#17231b] p-6 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"><div className="max-w-2xl"><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Ready to compare options?</span><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">Ask us to build a trip around your shortlist</h2><p className="text-sm text-[#d7dfda] mt-2 leading-relaxed">We’ll receive the saved safari and hotel names with your enquiry so our team can compare routes, availability and combinations.</p></div><button onClick={() => onOpenEnquiryModal({ initialType: 'Safari shortlist', initialSpecialRequests: `I am interested in the following saved options:\n\n${shortlistSummary}` })} className="min-h-12 shrink-0 rounded-xl bg-[#e6bc65] hover:bg-[#f0ca79] px-6 text-sm font-extrabold text-[#161f19] inline-flex items-center justify-center gap-2"><Sparkles className="w-4 h-4" />Request a shortlist quote</button></section>
        </>
      )}
    </div>
  );
};
