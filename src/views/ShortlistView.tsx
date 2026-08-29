import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Heart, Hotel as HotelIcon, MapPin, Sparkles, Trash2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { useShortlist } from '../context/ShortlistContext';
import { PageMeta } from '../components/common/PageMeta';
import { unsplashCardImage } from '../lib/imageUrl';

interface ShortlistViewProps { onOpenEnquiryModal: (payload?: any) => void; }

export const ShortlistView: React.FC<ShortlistViewProps> = ({ onOpenEnquiryModal }) => {
  const navigate = useNavigate();
  const { tours, hotels, formatPrice, isKenyanResidentMode } = useData();
  const { savedTourSlugs, savedHotelSlugs, savedCount, toggleTour, toggleHotel, clearShortlist } = useShortlist();
  const [basketTourSlugs, setBasketTourSlugs] = useState<string[]>(savedTourSlugs);
  const [basketHotelSlugs, setBasketHotelSlugs] = useState<string[]>(savedHotelSlugs);

  useEffect(() => {
    setBasketTourSlugs(current => [...current.filter(slug => savedTourSlugs.includes(slug)), ...savedTourSlugs.filter(slug => !current.includes(slug))]);
  }, [savedTourSlugs]);
  useEffect(() => {
    setBasketHotelSlugs(current => [...current.filter(slug => savedHotelSlugs.includes(slug)), ...savedHotelSlugs.filter(slug => !current.includes(slug))]);
  }, [savedHotelSlugs]);

  const savedTours = tours.filter(tour => savedTourSlugs.includes(tour.slug));
  const savedHotels = hotels.filter(hotel => savedHotelSlugs.includes(hotel.slug));
  const basketTours = savedTours.filter(tour => basketTourSlugs.includes(tour.slug));
  const basketHotels = savedHotels.filter(hotel => basketHotelSlugs.includes(hotel.slug));
  const basketCount = basketTours.length + basketHotels.length;
  const contextItems = useMemo(() => [
    ...basketTours.map(tour => `Safari: ${tour.title}`),
    ...basketHotels.map(hotel => `Stay: ${hotel.name}`)
  ], [basketTours, basketHotels]);

  const allSelected = savedCount > 0 && basketCount === savedCount;
  const selectAll = () => { setBasketTourSlugs(savedTourSlugs); setBasketHotelSlugs(savedHotelSlugs); };
  const selectNone = () => { setBasketTourSlugs([]); setBasketHotelSlugs([]); };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10">
      <PageMeta title="My Safari Shortlist" description="Keep your favourite Good Secrets Safaris itineraries and stays together while you plan your East Africa trip." canonicalPath="/shortlist" noIndex />

      <header className="max-w-3xl space-y-4">
        <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#e6bc65]"><Heart className="w-4 h-4 fill-current" />Saved trips</span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-white">Build your trip basket.</h1>
        <p className="text-base sm:text-lg text-[#c7d2cb] leading-relaxed">Keep everything you like saved, then choose only the safaris and stays you want us to compare in one enquiry. Your saved list stays unchanged.</p>
      </header>

      {savedCount === 0 ? (
        <section className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 sm:p-12 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-[#e6bc65]/10 text-[#e6bc65] flex items-center justify-center mx-auto"><Heart className="w-7 h-7" /></div>
          <div><h2 className="font-serif-luxury text-2xl font-bold text-white">Nothing saved yet</h2><p className="text-sm text-[#c7d2cb] mt-2 max-w-lg mx-auto">Tap the heart on any safari or hotel to keep it here for later.</p></div>
          <div className="flex flex-col sm:flex-row justify-center gap-3"><button onClick={() => navigate('/safaris')} className="min-h-11 rounded-xl bg-[#8a611d] hover:bg-[#704d15] px-5 text-sm font-bold text-white">Explore safaris</button><button onClick={() => navigate('/hotels')} className="min-h-11 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-5 text-sm font-bold text-white">Browse stays</button></div>
        </section>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <div><p className="text-sm text-[#d7dfda]"><strong className="text-white">{savedCount}</strong> saved · <strong className="text-[#e6bc65]">{basketCount}</strong> in this quote basket</p><p className="text-xs text-[#aebbb2] mt-1">Selecting an item for the basket does not remove it from your shortlist.</p></div>
            <div className="flex flex-wrap gap-2"><button type="button" onClick={allSelected ? selectNone : selectAll} className="min-h-10 px-4 rounded-xl border border-white/15 text-sm font-semibold text-white hover:bg-white/10">{allSelected ? 'Select none' : 'Select all'}</button><button onClick={() => { clearShortlist(); selectNone(); }} className="min-h-10 px-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d7dfda] hover:text-white"><Trash2 className="w-4 h-4" />Clear saved list</button></div>
          </div>

          {savedTours.length > 0 && <section className="space-y-5"><div><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Saved safaris</span><h2 className="font-serif-luxury text-3xl font-bold text-white mt-1">Safari ideas</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{savedTours.map(tour => { const inBasket = basketTourSlugs.includes(tour.slug); return <article key={tour.id} className={`overflow-hidden rounded-2xl bg-white border shadow-sm transition ${inBasket ? 'border-[#d2a94e] ring-2 ring-[#d2a94e]/25' : 'border-[#ded8cb]'}`}><div className="relative aspect-[16/10] overflow-hidden"><img src={unsplashCardImage(tour.images?.[0] || '', 800)} alt={tour.title} className="w-full h-full object-cover" loading="lazy"/><button type="button" onClick={() => toggleTour(tour.slug)} aria-label={`Remove ${tour.title} from saved shortlist`} className="absolute right-3 top-3 min-w-11 min-h-11 rounded-full bg-white/95 text-[#8a611d] flex items-center justify-center shadow-md"><Heart className="w-5 h-5 fill-current" /></button></div><div className="p-5 space-y-4"><button type="button" aria-pressed={inBasket} onClick={() => setBasketTourSlugs(current => inBasket ? current.filter(slug => slug !== tour.slug) : [...current, tour.slug])} className={`w-full min-h-11 rounded-xl border px-3 text-sm font-bold flex items-center justify-center gap-2 ${inBasket ? 'bg-[#1b4332] border-[#1b4332] text-white' : 'bg-[#faf8f2] border-[#d7d1c4] text-[#303e35]'}`}>{inBasket && <Check className="w-4 h-4" />}{inBasket ? 'Included in quote basket' : 'Add to quote basket'}</button><div><h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">{tour.title}</h3><p className="mt-2 flex items-center gap-1.5 text-sm text-[#536158]"><MapPin className="w-4 h-4 text-[#76541a]" />{tour.country} · {tour.durationLabel}</p></div><div className="flex items-end justify-between gap-3 border-t border-[#e6e1d7] pt-4"><div><span className="text-xs text-[#536158]">From</span><strong className="block font-serif-luxury text-xl text-[#161f19]">{formatPrice(tour.priceFrom, { specificKES: tour.residentPriceKES, isResident: isKenyanResidentMode })}</strong></div><button onClick={() => navigate(`/safaris/${tour.slug}`)} className="min-h-11 rounded-xl bg-[#1b4332] hover:bg-[#123524] px-4 text-sm font-bold text-white">View safari</button></div></div></article>; })}</div></section>}

          {savedHotels.length > 0 && <section className="space-y-5"><div><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Saved stays</span><h2 className="font-serif-luxury text-3xl font-bold text-white mt-1">Hotels & lodges</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{savedHotels.map(hotel => { const inBasket = basketHotelSlugs.includes(hotel.slug); return <article key={hotel.id} className={`overflow-hidden rounded-2xl bg-white border shadow-sm transition ${inBasket ? 'border-[#d2a94e] ring-2 ring-[#d2a94e]/25' : 'border-[#ded8cb]'}`}><div className="relative aspect-[16/10] overflow-hidden"><img src={unsplashCardImage(hotel.images?.[0] || '', 800)} alt={hotel.name} className="w-full h-full object-cover" loading="lazy"/><button type="button" onClick={() => toggleHotel(hotel.slug)} aria-label={`Remove ${hotel.name} from saved shortlist`} className="absolute right-3 top-3 min-w-11 min-h-11 rounded-full bg-white/95 text-[#8a611d] flex items-center justify-center shadow-md"><Heart className="w-5 h-5 fill-current" /></button></div><div className="p-5 space-y-4"><button type="button" aria-pressed={inBasket} onClick={() => setBasketHotelSlugs(current => inBasket ? current.filter(slug => slug !== hotel.slug) : [...current, hotel.slug])} className={`w-full min-h-11 rounded-xl border px-3 text-sm font-bold flex items-center justify-center gap-2 ${inBasket ? 'bg-[#1b4332] border-[#1b4332] text-white' : 'bg-[#faf8f2] border-[#d7d1c4] text-[#303e35]'}`}>{inBasket && <Check className="w-4 h-4" />}{inBasket ? 'Included in quote basket' : 'Add to quote basket'}</button><div><h3 className="font-serif-luxury text-xl font-bold text-[#161f19]">{hotel.name}</h3><p className="mt-2 flex items-center gap-1.5 text-sm text-[#536158]"><HotelIcon className="w-4 h-4 text-[#76541a]" />{hotel.location}</p></div><div className="flex items-end justify-between gap-3 border-t border-[#e6e1d7] pt-4"><div><span className="text-xs text-[#536158]">From</span><strong className="block font-serif-luxury text-xl text-[#161f19]">{formatPrice(hotel.priceFromUSD, { specificKES: hotel.priceFromKES, isResident: isKenyanResidentMode })}</strong></div><button onClick={() => navigate(`/hotels/${hotel.slug}`)} className="min-h-11 rounded-xl bg-[#1b4332] hover:bg-[#123524] px-4 text-sm font-bold text-white">View stay</button></div></div></article>; })}</div></section>}

          <section className="rounded-3xl border border-[#5f512f] bg-[#17231b] p-6 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"><div className="max-w-2xl"><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Your quote basket</span><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">Compare {basketCount || 'your'} selected option{basketCount === 1 ? '' : 's'} in one conversation.</h2><p className="text-sm text-[#d7dfda] mt-2 leading-relaxed">We’ll receive exactly the items you selected, so the safari team can compare routes, stays, timing and combinations without making you submit separate forms.</p></div><button disabled={basketCount === 0} onClick={() => onOpenEnquiryModal({ initialType: basketCount > 1 ? 'Compare my safari options' : 'My safari shortlist', contextItems })} className="min-h-12 shrink-0 rounded-xl bg-[#e6bc65] hover:bg-[#f0ca79] disabled:bg-[#6b6558] disabled:text-[#d4d0c7] disabled:cursor-not-allowed px-6 text-sm font-extrabold text-[#161f19] inline-flex items-center justify-center gap-2"><Sparkles className="w-4 h-4" />{basketCount ? `Request quote for ${basketCount}` : 'Choose items first'}</button></section>
        </>
      )}
    </div>
  );
};
