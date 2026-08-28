import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { PageMeta } from '../components/common/PageMeta';
import { Tour } from '../types';
import { TourCard } from '../components/tours/TourCard';
import { Search, SlidersHorizontal, Compass, CheckCircle2, Sparkles } from 'lucide-react';

interface ToursExplorerViewProps {
  initialFilters?: {
    destination?: string;
    duration?: string;
    travelStyle?: string;
    travelerType?: string;
    country?: string;
  };
  onSelectTour: (tour: Tour) => void;
  onOpenEnquiryModal: (payload?: any) => void;
}

export const ToursExplorerView: React.FC<ToursExplorerViewProps> = ({ initialFilters, onSelectTour, onOpenEnquiryModal }) => {
  const { tours, formatPrice } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>(initialFilters?.country || 'all');
  const [selectedDestination, setSelectedDestination] = useState<string>(initialFilters?.destination || 'all');
  const [selectedDuration, setSelectedDuration] = useState<string>(initialFilters?.duration || 'all');
  const [selectedTravelStyle, setSelectedTravelStyle] = useState<string>(initialFilters?.travelStyle || 'all');
  const [selectedTravelerType, setSelectedTravelerType] = useState<string>(initialFilters?.travelerType || 'all');
  const [selectedComfort, setSelectedComfort] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(15000);
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const filteredTours = useMemo(() => tours.filter(tour => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matches = tour.title.toLowerCase().includes(q) || tour.shortDescription.toLowerCase().includes(q) || tour.fullDescription.toLowerCase().includes(q) || tour.destinations.some(d => d.toLowerCase().includes(q));
      if (!matches) return false;
    }
    if (selectedCountry !== 'all' && tour.country !== selectedCountry && !tour.country.toLowerCase().includes(selectedCountry.toLowerCase())) return false;
    if (selectedDestination !== 'all' && !tour.destinations.some(d => d.toLowerCase().includes(selectedDestination.toLowerCase())) && !tour.country.toLowerCase().includes(selectedDestination.toLowerCase())) return false;
    if (selectedDuration !== 'all') {
      const days = tour.durationDays;
      if (selectedDuration === '1' && days !== 1) return false;
      if (selectedDuration === '2' && days !== 2) return false;
      if (selectedDuration === '3' && days !== 3) return false;
      if (selectedDuration === '4-5' && (days < 4 || days > 5)) return false;
      if (selectedDuration === '6-7' && (days < 6 || days > 7)) return false;
      if (selectedDuration === '8-10' && (days < 8 || days > 10)) return false;
      if (selectedDuration === '10+' && days < 10) return false;
    }
    if (selectedTravelStyle !== 'all' && !tour.travelStyles.some(ts => ts.toLowerCase() === selectedTravelStyle.toLowerCase()) && !tour.title.toLowerCase().includes(selectedTravelStyle.toLowerCase())) return false;
    if (selectedTravelerType !== 'all' && tour.travelerTypes && !tour.travelerTypes.some(tt => tt.toLowerCase().includes(selectedTravelerType.toLowerCase()))) return false;
    if (selectedComfort !== 'all' && tour.comfortLevel !== selectedComfort) return false;
    return tour.priceFrom <= maxPrice;
  }), [tours, searchQuery, selectedCountry, selectedDestination, selectedDuration, selectedTravelStyle, selectedTravelerType, selectedComfort, maxPrice]);

  const resetFilters = () => {
    setSearchQuery(''); setSelectedCountry('all'); setSelectedDestination('all'); setSelectedDuration('all'); setSelectedTravelStyle('all'); setSelectedTravelerType('all'); setSelectedComfort('all'); setMaxPrice(15000);
  };

  const hasFilters = Boolean(searchQuery || selectedCountry !== 'all' || selectedDestination !== 'all' || selectedDuration !== 'all' || selectedTravelStyle !== 'all' || selectedTravelerType !== 'all' || selectedComfort !== 'all' || maxPrice < 15000);
  const selectClass = 'w-full min-h-11 px-3 py-2 rounded-xl bg-[#faf8f2] border border-[#d7d1c4] text-sm text-[#161f19] focus:border-[#8a611d] focus:outline-none';
  const labelClass = 'text-xs font-extrabold uppercase tracking-wider text-[#76541a] block mb-1.5';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
      <PageMeta title="Safaris & Tours" description="Browse private Kenya and Tanzania safaris and tailor-made East Africa journeys." canonicalPath="/safaris" />

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#142019] to-[#0c120e] p-6 sm:p-9 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6bc65]"><Compass className="w-4 h-4" /><span>Private East Africa Safaris</span></div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">Find a safari idea, then make it yours.</h1>
          <p className="text-base text-[#c7d2cb] leading-relaxed">Browse our starting itineraries across Kenya and Tanzania. Dates, pacing, accommodation and route can be tailored around your trip.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#e8eee9]">
            <span className="inline-flex gap-1.5 items-center"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Private 4x4</span>
            <span className="inline-flex gap-1.5 items-center"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Flexible dates</span>
            <span className="inline-flex gap-1.5 items-center"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Tailor-made route</span>
          </div>
        </div>
      </section>

      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ded8cb] shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-stretch gap-3">
          <label className="relative flex-1">
            <span className="sr-only">Search safaris</span>
            <Search className="w-4 h-4 text-[#536158] absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search Maasai Mara, Serengeti, migration..." className="w-full min-h-12 pl-10 pr-4 rounded-xl bg-[#faf8f2] border border-[#d7d1c4] text-sm text-[#161f19] placeholder-[#66766b] focus:border-[#8a611d] focus:outline-none" />
          </label>
          <button type="button" onClick={() => setFilterOpen(!filterOpen)} aria-expanded={filterOpen} className="min-h-12 inline-flex items-center justify-center gap-2 px-5 rounded-xl bg-[#f4f1e8] hover:bg-[#eae5d8] text-sm font-bold text-[#161f19] border border-[#d7d1c4]">
            <SlidersHorizontal className="w-4 h-4 text-[#76541a]" /><span>{filterOpen ? 'Hide filters' : 'More filters'}</span>{hasFilters && <span className="w-2 h-2 rounded-full bg-[#8a611d]" aria-label="Filters active" />}
          </button>
          {hasFilters && <button type="button" onClick={resetFilters} className="min-h-12 px-4 rounded-xl text-sm font-bold text-[#9f1239] hover:bg-rose-50">Clear all</button>}
        </div>

        {filterOpen && (
          <div className="pt-4 border-t border-[#ece7dc] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
            <div><label htmlFor="tour-country" className={labelClass}>Country / Region</label><select id="tour-country" value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)} className={selectClass}><option value="all">All regions</option><option value="Kenya">Kenya</option><option value="Tanzania">Tanzania</option><option value="Zanzibar">Zanzibar</option><option value="Kenya + Tanzania">Kenya + Tanzania</option><option value="Safari + Beach">Safari + Beach</option></select></div>
            <div><label htmlFor="tour-duration" className={labelClass}>Trip length</label><select id="tour-duration" value={selectedDuration} onChange={e => setSelectedDuration(e.target.value)} className={selectClass}><option value="all">Any duration</option><option value="1">1 day</option><option value="2">2 days</option><option value="3">3 days</option><option value="4-5">4–5 days</option><option value="6-7">6–7 days</option><option value="8-10">8–10 days</option><option value="10+">10+ days</option></select></div>
            <div><label htmlFor="tour-style" className={labelClass}>Travel style</label><select id="tour-style" value={selectedTravelStyle} onChange={e => setSelectedTravelStyle(e.target.value)} className={selectClass}><option value="all">All styles</option><option value="Big 5">Big 5</option><option value="Great Migration">Great Migration</option><option value="Family">Family</option><option value="Honeymoon">Honeymoon</option><option value="Senior Friendly">Senior friendly</option><option value="Luxury">Luxury</option><option value="Midrange">Midrange</option><option value="Budget">Value</option><option value="Safari & Beach">Safari & Beach</option><option value="Fly-In">Fly-in</option></select></div>
            <div><div className="flex items-center justify-between mb-1.5"><label htmlFor="tour-budget" className="text-xs font-extrabold uppercase tracking-wider text-[#76541a]">Maximum guide price</label><span className="text-xs font-bold text-[#161f19]">{formatPrice(maxPrice)}</span></div><input id="tour-budget" type="range" min={250} max={15000} step={250} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className="w-full min-h-11 accent-[#8a611d] cursor-pointer" /><p className="text-xs text-[#536158]">Use this as a guide; final pricing depends on dates and accommodation.</p></div>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-4">
        <div className="text-sm text-[#c7d2cb]" aria-live="polite"><span className="font-bold text-white">{filteredTours.length}</span> safari {filteredTours.length === 1 ? 'idea' : 'ideas'} found</div>
        <button type="button" onClick={() => onOpenEnquiryModal()} className="inline-flex min-h-11 items-center justify-center gap-2 px-4 rounded-xl border border-[#8a611d] text-[#e6bc65] hover:bg-[#8a611d] hover:text-white text-sm font-bold transition-colors"><Sparkles className="w-4 h-4" />Can’t decide? Ask a safari expert</button>
      </div>

      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{filteredTours.map(tour => <TourCard key={tour.id} tour={tour} onSelect={onSelectTour} onEnquire={onOpenEnquiryModal} />)}</div>
      ) : (
        <div className="rounded-3xl bg-white border border-[#ded8cb] p-8 sm:p-12 text-center space-y-4 shadow-sm">
          <Compass className="w-12 h-12 text-[#76541a] mx-auto" /><h2 className="font-serif-luxury text-2xl font-bold text-[#161f19]">No exact match — that’s okay.</h2>
          <p className="text-sm text-[#46544b] max-w-lg mx-auto leading-relaxed">Our listed safaris are starting points, not fixed packages. Clear the filters or tell us what you want and we can shape a route around you.</p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3"><button onClick={resetFilters} className="min-h-11 px-5 rounded-xl bg-[#f4f1e8] text-[#303e35] text-sm font-semibold hover:bg-[#eae5d8]">Reset filters</button><button onClick={() => onOpenEnquiryModal()} className="min-h-11 px-5 rounded-xl bg-[#8a611d] text-white text-sm font-bold hover:bg-[#704d15]">Request a custom safari</button></div>
        </div>
      )}
    </div>
  );
};
