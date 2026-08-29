import React from 'react';
import { Hotel } from '../types';
import { useData } from '../context/DataContext';
import { useShortlist } from '../context/ShortlistContext';
import { PageMeta } from '../components/common/PageMeta';
import { MapPin, Star, Check, Sparkles, ArrowLeft, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

interface HotelDetailViewProps { hotel: Hotel; onBack: () => void; onOpenEnquiryModal: (payload?: any) => void; }

export const HotelDetailView: React.FC<HotelDetailViewProps> = ({ hotel, onBack, onOpenEnquiryModal }) => {
  const { getWhatsAppUrl } = useData();
  const { isHotelSaved, toggleHotel } = useShortlist();
  const isSaved = isHotelSaved(hotel.slug);
  const whatsappUrl = getWhatsAppUrl({ hotelTitle: hotel.name });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
      <PageMeta title={hotel.name} description={hotel.description} image={hotel.images?.[0]} canonicalPath={`/hotels/${hotel.slug}`} />
      <div className="flex items-center justify-between gap-3">
        <button onClick={onBack} className="min-h-11 inline-flex items-center gap-1.5 text-sm text-[#c7d2cb] hover:text-[#e6bc65] transition-colors font-semibold"><ArrowLeft className="w-4 h-4" /><span>Beach resorts & lodges</span></button>
        <button type="button" onClick={() => toggleHotel(hotel.slug)} aria-pressed={isSaved} className={`min-h-11 inline-flex items-center gap-2 rounded-full px-4 text-sm font-bold border transition-colors ${isSaved ? 'bg-[#fffdf8] text-[#8a611d] border-white' : 'bg-white/5 text-white border-white/15 hover:bg-white/10'}`}><Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />{isSaved ? 'Saved' : 'Save'}</button>
      </div>

      <section className="relative rounded-3xl overflow-hidden min-h-[430px] sm:min-h-[540px] flex items-end border border-white/10 shadow-xl">
        <img src={hotel.images[0]} alt={`${hotel.name} in ${hotel.location}`} className="absolute inset-0 w-full h-full object-cover -z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/15 -z-10" />
        <div className="p-6 sm:p-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-3"><span className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#8a611d] text-white">{hotel.category}</span><div className="flex items-center gap-1 text-[#f5d675]" aria-label={`${hotel.rating ?? 5} rating`}>{[...Array(Math.round(hotel.rating ?? 5))].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div></div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">{hotel.name}</h1>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-white"><MapPin className="w-4 h-4 text-[#e6bc65]" /><span>{hotel.location}, {hotel.country}</span></div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="min-w-0 lg:col-span-8 space-y-6">
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#ded8cb] space-y-5 shadow-sm">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">What the stay is like</h2>
            <p className="text-base text-[#46544b] leading-relaxed">{hotel.description}</p>
            {(hotel.facilities?.length ?? 0) > 0 && <div className="pt-4 border-t border-[#e7e1d5]"><h3 className="text-xs font-extrabold uppercase tracking-wider text-[#76541a] mb-3">Facilities & stay highlights</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{hotel.facilities.map((am, i) => <div key={i} className="flex items-start gap-2 text-sm text-[#303e35]"><Check className="w-4 h-4 text-[#1b4332] shrink-0 mt-0.5 stroke-[3]" /><span>{am}</span></div>)}</div></div>}
          </div>

          {hotel.images.length > 1 && <div><h2 className="font-serif-luxury text-2xl font-bold text-white mb-4">A closer look</h2><div className="grid grid-cols-2 gap-4">{hotel.images.slice(1, 5).map((img, i) => <div key={i} className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]"><img src={img} alt={`${hotel.name} view ${i + 2}`} className="w-full h-full object-cover" loading="lazy" /></div>)}</div></div>}
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-3xl bg-white border border-[#ded8cb] ring-1 ring-black/5 p-6 sm:p-8 space-y-5 shadow-xl">
            <div><span className="text-xs text-[#536158] uppercase tracking-wider block font-bold">Indicative rate from</span><div className="flex items-baseline gap-2 mt-1"><span className="font-serif-luxury text-3xl font-extrabold text-[#1b4332]">KSH {(hotel.priceFromKES ?? 0).toLocaleString()}</span><span className="text-xs text-[#536158]">/ night</span></div><span className="text-xs text-[#536158] block mt-1">International guide rate: ${hotel.priceFromUSD ?? '—'} / night</span><p className="text-sm text-[#46544b] mt-3 leading-relaxed">Rates and availability vary by travel dates, room type and package. Send your dates and we’ll confirm the best current option.</p></div>

            <button onClick={() => onOpenEnquiryModal({ selectedHotel: hotel })} className="w-full min-h-12 rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white font-extrabold text-sm text-center transition-all shadow-md flex items-center justify-center gap-2"><Sparkles className="w-4 h-4" /><span>Check rates & availability</span></button>
            <button type="button" onClick={() => toggleHotel(hotel.slug)} className={`w-full min-h-12 rounded-xl font-bold text-sm border flex items-center justify-center gap-2 transition-colors ${isSaved ? 'bg-[#fff8ea] text-[#76541a] border-[#d9ba7b]' : 'bg-[#faf8f2] text-[#405046] border-[#d7d1c4] hover:border-[#b3822a]'}`}><Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />{isSaved ? 'Saved to shortlist' : 'Save to shortlist'}</button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ask about ${hotel.name} on WhatsApp`} className="w-full min-h-12 rounded-xl bg-[#eef7f2] hover:bg-[#def0e6] text-[#1b4332] font-bold text-sm border border-[#b9d8c5] flex items-center justify-center gap-2 transition-colors"><MessageCircle className="w-4 h-4 text-[#128c7e]" /><span>Ask on WhatsApp</span></a>

            <div className="pt-4 border-t border-[#e7e1d5] space-y-3"><div className="flex gap-2 text-sm text-[#405046]"><ShieldCheck className="w-4 h-4 text-[#1b4332] shrink-0 mt-0.5" /><span>No payment required to enquire.</span></div><div className="flex gap-2 text-sm text-[#405046]"><Check className="w-4 h-4 text-[#1b4332] shrink-0 mt-0.5" /><span>Transfers and trip extensions can be added to your request.</span></div></div>
          </div>
        </aside>
      </div>
    </div>
  );
};
