import React from 'react';
import { Destination, Tour, Hotel } from '../types';
import { useData } from '../context/DataContext';
import { PageMeta } from '../components/common/PageMeta';
import { TourCard } from '../components/tours/TourCard';
import { HotelCard } from '../components/hotels/HotelCard';
import { Calendar, ArrowLeft, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

interface DestinationDetailViewProps {
  destination: Destination; onBack: () => void; onSelectTour: (tour: Tour) => void; onSelectHotel: (hotel: Hotel) => void; onOpenEnquiryModal: (payload?: any) => void;
}

export const DestinationDetailView: React.FC<DestinationDetailViewProps> = ({ destination, onBack, onSelectTour, onSelectHotel, onOpenEnquiryModal }) => {
  const { tours, hotels } = useData();
  const matchingTours = tours.filter(t => t.destinations.some(d => d.toLowerCase().includes(destination.name.toLowerCase())) || t.title.toLowerCase().includes(destination.name.toLowerCase()) || t.destinations.some(d => destination.name.toLowerCase().includes(d.toLowerCase())));
  const matchingHotels = hotels.filter(h => h.location.toLowerCase().includes(destination.name.toLowerCase()) || destination.name.toLowerCase().includes(h.location.toLowerCase()) || h.country.toLowerCase() === destination.country.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
      <PageMeta title={destination.name} description={destination.description || destination.subtitle} image={destination.heroImage} canonicalPath={`/destinations/${destination.slug}`} />
      <div className="flex items-center justify-between text-xs text-[#c7d2cb]">
        <button onClick={onBack} className="min-h-11 inline-flex items-center gap-1.5 hover:text-[#e6bc65] transition-colors font-semibold"><ArrowLeft className="w-4 h-4" /><span>All destinations</span></button>
        <div className="hidden sm:flex items-center gap-2" aria-label="Breadcrumb"><span>{destination.country}</span><ChevronRight className="w-3 h-3 text-[#8f9d94]" /><span className="text-white font-medium">{destination.name}</span></div>
      </div>

      <section className="relative rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[500px] flex flex-col justify-end p-6 sm:p-12 border border-white/10 shadow-xl">
        <img src={destination.heroImage} alt={`${destination.name}, ${destination.country}`} className="absolute inset-0 w-full h-full object-cover -z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 -z-10" />
        <div className="space-y-4 max-w-3xl">
          <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-bold bg-[#8a611d] text-white">{destination.country}</span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white leading-tight">{destination.name}</h1>
          <p className="text-base sm:text-lg text-white leading-relaxed font-medium max-w-2xl">{destination.subtitle}</p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button onClick={() => onOpenEnquiryModal({ initialType: `Safari to ${destination.name}` })} className="min-h-12 px-6 rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white font-extrabold text-sm transition-all shadow-md inline-flex items-center justify-center gap-2"><Sparkles className="w-4 h-4" />Plan a {destination.name} safari</button>
            <span className="inline-flex items-center text-sm font-semibold text-white/95">Tailored dates, route and accommodation</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#ded8cb] space-y-5 shadow-sm">
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">Why visit {destination.name}?</h2>
            <p className="text-base text-[#46544b] leading-relaxed whitespace-pre-line">{destination.description}</p>
            {(destination.wildlife?.length ?? 0) > 0 && <div className="pt-4 border-t border-[#e7e1d5]"><h3 className="text-xs font-extrabold uppercase tracking-wider text-[#76541a] mb-3">Wildlife & highlights</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{destination.wildlife.map((h, i) => <div key={i} className="flex items-start gap-2 text-sm text-[#303e35]"><CheckCircle2 className="w-4 h-4 text-[#76541a] shrink-0 mt-0.5" /><span>{h}</span></div>)}</div></div>}
          </div>
        </div>
        <aside className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-3xl bg-white border border-[#ded8cb] space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#76541a]"><Calendar className="w-4 h-4" /><span>Best time to visit</span></div>
            <p className="text-base font-bold text-[#161f19]">{destination.bestTimeToVisit}</p>
            <div className="pt-3 border-t border-[#e7e1d5]"><span className="text-xs font-extrabold uppercase tracking-wider text-[#536158] block mb-2">Look out for</span><div className="flex flex-wrap gap-2">{destination.wildlife.map((w, i) => <span key={i} className="px-2.5 py-1.5 rounded-lg bg-[#faf8f2] text-xs font-semibold text-[#303e35] border border-[#d7d1c4]">{w}</span>)}</div></div>
          </div>
          <div className="p-6 rounded-3xl bg-[#152019] border border-white/10 space-y-3 shadow-sm"><h2 className="font-serif-luxury text-xl font-bold text-white">Not sure how it fits your route?</h2><p className="text-sm text-[#c7d2cb] leading-relaxed">Tell us your dates and priorities. We’ll suggest how many nights to spend here and what to combine it with.</p><button onClick={() => onOpenEnquiryModal({ initialType: `Safari to ${destination.name}` })} className="w-full min-h-11 rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white text-sm font-bold">Ask a safari expert</button></div>
        </aside>
      </div>

      <section className="space-y-6 pt-2"><div><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Safari ideas</span><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">Journeys featuring {destination.name}</h2><p className="text-sm text-[#c7d2cb] mt-1">Use these as starting points — each can be adjusted to your dates and interests.</p></div>{matchingTours.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{matchingTours.map(tour => <TourCard key={tour.id} tour={tour} onSelect={onSelectTour} onEnquire={onOpenEnquiryModal} />)}</div> : <div className="p-7 rounded-2xl bg-white border border-[#ded8cb] text-center"><p className="text-sm text-[#46544b]">We can create a custom itinerary including {destination.name}.</p><button onClick={() => onOpenEnquiryModal({ initialType: `Safari to ${destination.name}` })} className="mt-4 min-h-11 px-5 rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white text-sm font-bold">Request a custom route</button></div>}</section>

      {matchingHotels.length > 0 && <section className="space-y-6 pt-2"><div><span className="text-xs font-bold uppercase tracking-widest text-[#e6bc65]">Places to stay</span><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">Recommended lodges & camps near {destination.name}</h2></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{matchingHotels.slice(0, 4).map(hotel => <HotelCard key={hotel.id} hotel={hotel} onSelect={onSelectHotel} onEnquire={onOpenEnquiryModal} />)}</div></section>}
    </div>
  );
};
