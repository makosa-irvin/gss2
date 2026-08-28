import React, { useState } from 'react';
import { Tour } from '../types';
import { useData } from '../context/DataContext';
import { PageMeta } from '../components/common/PageMeta';
import { ItineraryTimeline } from '../components/itinerary/ItineraryTimeline';
import { DynamicPricingTable } from '../components/pricing/DynamicPricingTable';
import { ArrowLeft, CalendarDays, Camera, Check, CircleHelp, Clock, Compass, Map, MapPin, MessageCircle, ShieldCheck, Sparkles, X } from 'lucide-react';

interface TourDetailViewProps {
  tour: Tour;
  onBack: () => void;
  onOpenEnquiryModal: (payload?: any) => void;
  onSelectDestination?: (destName: string) => void;
}

const sectionLinks = [
  { id: 'overview', label: 'Overview', Icon: Compass },
  { id: 'itinerary', label: 'Itinerary', Icon: CalendarDays },
  { id: 'route', label: 'Route', Icon: Map },
  { id: 'inclusions', label: 'Inclusions', Icon: Check },
  { id: 'gallery', label: 'Gallery', Icon: Camera },
  { id: 'pricing', label: 'Pricing', Icon: Sparkles },
  { id: 'faqs', label: 'FAQs', Icon: CircleHelp }
];

export const TourDetailView: React.FC<TourDetailViewProps> = ({ tour, onBack, onOpenEnquiryModal }) => {
  const { formatPrice, getWhatsAppUrl, isKenyanResidentMode } = useData();
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const price = formatPrice(tour.sharingPrice || tour.priceFrom);
  const whatsappUrl = getWhatsAppUrl({ tourTitle: tour.title });
  const includedItems = [...(tour.includedServices ?? []), ...(tour.includedActivities ?? [])];
  const excludedItems = tour.exclusions ?? [];
  const routeStops = tour.destinations?.length ? tour.destinations : [tour.country];

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="pb-28 lg:pb-12">
      <PageMeta title={tour.title} description={tour.shortDescription} image={tour.images?.[0]} canonicalPath={`/safaris/${tour.slug}`} />

      <section className="relative min-h-[520px] sm:min-h-[600px] overflow-hidden bg-[#0c120e]">
        <img src={tour.images?.[0]} alt={`${tour.title} safari`} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07100a]/95 via-[#07100a]/35 to-black/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-10 min-h-[520px] sm:min-h-[600px] flex flex-col justify-between">
          <button type="button" onClick={onBack} className="self-start min-h-11 inline-flex items-center gap-2 rounded-full bg-black/45 px-4 text-sm font-semibold text-white backdrop-blur-sm border border-white/20 hover:bg-black/60"><ArrowLeft className="w-4 h-4" />All safaris</button>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 max-w-3xl">
              {(tour.featured || tour.popular) && <span className="inline-flex rounded-full bg-[#9e7120] px-3 py-1.5 text-xs font-bold text-white shadow-sm mb-4">{tour.popular ? 'Popular safari' : 'Featured safari'}</span>}
              <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white leading-[1.05]">{tour.title}</h1>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-white/95">
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#e6bc65]" />{tour.country}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#e6bc65]" />{tour.durationLabel}</span>
                <span className="inline-flex items-center gap-1.5"><Compass className="w-4 h-4 text-[#e6bc65]" />{tour.comfortLevel}</span>
              </div>
            </div>

            <aside className="hidden lg:block lg:col-span-4 rounded-3xl bg-white p-6 shadow-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#66766b]">Indicative rate from</span>
              <div className="font-serif-luxury text-4xl font-extrabold text-[#161f19] mt-1">{price}</div>
              <p className="text-sm text-[#536158] mt-1">Per person sharing</p>
              <button type="button" onClick={() => onOpenEnquiryModal({ selectedTour: tour })} className="mt-5 min-h-12 w-full rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white text-sm font-extrabold">Get My Quote</button>
              <p className="mt-2 text-center text-xs font-medium text-[#66766b]">No payment required to enquire.</p>
            </aside>
          </div>
        </div>
      </section>

      <nav aria-label="Tour sections" className="sticky top-0 z-30 bg-[#fffdf8]/95 backdrop-blur-md border-b border-[#ddd7ca] shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-8 flex overflow-x-auto scrollbar-hide">
          {sectionLinks.map(({ id, label, Icon }) => <button type="button" key={id} onClick={() => goTo(id)} className="shrink-0 min-h-16 px-3 sm:px-5 inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-[#405046] hover:text-[#76541a] border-b-2 border-transparent hover:border-[#b3822a]"><Icon className="w-5 h-5" aria-hidden="true" />{label}</button>)}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-14">
        <section id="overview" className="scroll-mt-24 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div><span className="text-xs font-bold uppercase tracking-wider text-[#e6bc65]">The experience</span><h2 className="font-serif-luxury text-3xl font-bold text-white mt-1">Safari overview</h2></div>
            <p className="text-base text-[#c7d2cb] leading-relaxed whitespace-pre-line">{tour.fullDescription || tour.shortDescription}</p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><Clock className="w-5 h-5 text-[#e6bc65] mb-2" /><span className="text-xs text-[#aebbb2] block">Duration</span><strong className="text-sm text-white">{tour.durationLabel}</strong></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><Compass className="w-5 h-5 text-[#e6bc65] mb-2" /><span className="text-xs text-[#aebbb2] block">Travel style</span><strong className="text-sm text-white">{tour.travelStyles?.[0] || 'Tailor-made'}</strong></div>
            </div>
          </div>

          <div id="gallery" className="scroll-mt-24 lg:col-span-7 space-y-3">
            <div className="aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden relative bg-[#f4f2ec] border border-white/10">
              <img src={tour.images?.[activeImageIdx] || tour.images?.[0]} alt={`${tour.title} gallery image ${activeImageIdx + 1}`} className="w-full h-full object-cover" />
              <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white">{activeImageIdx + 1} / {tour.images?.length || 1}</span>
            </div>
            {tour.images?.length > 1 && <div className="flex gap-2 overflow-x-auto pb-1">{tour.images.map((img, idx) => <button type="button" key={img + idx} onClick={() => setActiveImageIdx(idx)} aria-pressed={activeImageIdx === idx} aria-label={`View photo ${idx + 1}`} className={`shrink-0 w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden border-2 ${activeImageIdx === idx ? 'border-[#e6bc65]' : 'border-transparent opacity-75'}`}><img src={img} alt="" className="w-full h-full object-cover" /></button>)}</div>}
          </div>
        </section>

        <section id="itinerary" className="scroll-mt-24"><ItineraryTimeline itinerary={tour.itinerary} /></section>

        <section id="route" className="scroll-mt-24 rounded-3xl bg-[#f5f0e4] border border-[#ded8cb] p-5 sm:p-8">
          <div className="max-w-3xl"><span className="text-xs font-bold uppercase tracking-wider text-[#76541a]">Your route</span><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19] mt-1">Follow the journey</h2><p className="text-sm text-[#536158] mt-2">A lightweight route view keeps this page fast. The detailed itinerary above explains each travel day.</p></div>
          <div className="mt-7 flex items-start overflow-x-auto pb-2" aria-label="Safari route stops">{routeStops.map((stop, idx) => <React.Fragment key={`${stop}-${idx}`}><div className="shrink-0 min-w-32 max-w-44 text-center"><div className="mx-auto w-10 h-10 rounded-full bg-[#1b4332] text-white flex items-center justify-center font-bold text-sm">{idx + 1}</div><strong className="mt-2 block text-sm text-[#1b2b20]">{stop}</strong></div>{idx < routeStops.length - 1 && <div aria-hidden="true" className="mt-5 w-16 sm:w-28 shrink-0 border-t-2 border-dashed border-[#b3822a]" />}</React.Fragment>)}</div>
        </section>

        <section id="inclusions" className="scroll-mt-24 grid sm:grid-cols-2 gap-5">
          {includedItems.length > 0 && <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 sm:p-6"><h2 className="font-serif-luxury text-xl font-bold text-[#163524]">Included in your safari</h2><ul className="mt-4 space-y-2.5">{includedItems.map((item, idx) => <li key={idx} className="flex gap-2 text-sm text-[#254331]"><Check className="w-4 h-4 mt-0.5 shrink-0" /><span>{item}</span></li>)}</ul></div>}
          {excludedItems.length > 0 && <div className="rounded-2xl bg-rose-50 border border-rose-200 p-5 sm:p-6"><h2 className="font-serif-luxury text-xl font-bold text-rose-900">Not included</h2><ul className="mt-4 space-y-2.5">{excludedItems.map((item, idx) => <li key={idx} className="flex gap-2 text-sm text-rose-900"><X className="w-4 h-4 mt-0.5 shrink-0" /><span>{item}</span></li>)}</ul></div>}
        </section>

        <section id="pricing" className="scroll-mt-24"><DynamicPricingTable tour={tour} /></section>

        <section id="faqs" className="scroll-mt-24 rounded-2xl bg-white border border-[#ded8cb] p-5 sm:p-7">
          <h2 className="font-serif-luxury text-2xl font-bold text-[#161f19]">Safari essentials</h2>
          <div className="mt-5 grid md:grid-cols-2 gap-3 text-sm text-[#405046]"><div className="rounded-xl bg-[#faf8f2] border border-[#e3ddcf] p-4"><strong className="block text-[#161f19] mb-1">What should I pack?</strong>Light neutral clothing, a warm layer for dawn drives, sun protection, binoculars and a soft-sided travel bag are practical starting points.</div><div className="rounded-xl bg-[#faf8f2] border border-[#e3ddcf] p-4"><strong className="block text-[#161f19] mb-1">Can this itinerary change?</strong>Yes. This safari is a starting point and can be adapted around your dates, pace, interests and accommodation preferences.</div></div>
        </section>

        <section className="hidden lg:grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-[#c7d2cb]"><span className="flex gap-2"><ShieldCheck className="w-5 h-5 text-[#e6bc65] shrink-0" />No payment required to enquire</span><span className="flex gap-2"><Sparkles className="w-5 h-5 text-[#e6bc65] shrink-0" />Tailor-made around your preferences</span><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-white"><MessageCircle className="w-5 h-5 text-[#e6bc65] shrink-0" />Ask about this safari on WhatsApp</a></section>
      </main>

      <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 border-t border-[#d7d1c4] bg-[#fffdf8]/98 backdrop-blur-xl px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.16)]">
        <div className="max-w-lg mx-auto flex items-center gap-4">
          <div className="min-w-0 flex-1"><span className="block text-xs font-semibold text-[#76541a]">From</span><strong className="font-serif-luxury text-2xl leading-none text-[#161f19]">{price}</strong><span className="block text-[11px] text-[#536158] mt-1">Per person sharing</span></div>
          <button type="button" onClick={() => onOpenEnquiryModal({ selectedTour: tour })} className="min-h-12 min-w-[150px] rounded-xl bg-[#1b4332] hover:bg-[#123524] px-5 text-sm font-extrabold text-white">Get Quote</button>
        </div>
        {isKenyanResidentMode && tour.residentPriceKES && <p className="max-w-lg mx-auto mt-1 text-xs font-semibold text-[#1b4332]">Resident rate: KSH {tour.residentPriceKES.toLocaleString()}</p>}
      </div>
    </div>
  );
};
