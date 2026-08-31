'use client';

import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, Palmtree } from 'lucide-react';
import { EnquiryButton } from './EnquiryButton';
import { HotelCard } from './CatalogCards';
import type { Hotel } from '../lib/types';

const CURRENCY_KEY = 'gss_currency_v1';
const RESIDENT_KEY = 'gss_resident_mode_v1';

export function HotelExplorer({ hotels, initialResident = false }: { hotels: Hotel[]; initialResident?: boolean }) {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [resident, setResident] = useState(initialResident);

  useEffect(() => {
    const savedResident = localStorage.getItem(RESIDENT_KEY) === 'true';
    if (savedResident || initialResident) setResident(true);
    if (initialResident) {
      localStorage.setItem(RESIDENT_KEY, 'true');
      localStorage.setItem(CURRENCY_KEY, 'KES');
      window.dispatchEvent(new Event('gss-pricing-preference-changed'));
    }
  }, [initialResident]);

  const filteredHotels = useMemo(() => hotels.filter(hotel => selectedLocation === 'all' || hotel.location.toLowerCase().includes(selectedLocation.toLowerCase())), [hotels, selectedLocation]);
  const filters = [
    { label: 'All stays', value: 'all' },
    { label: 'Diani', value: 'Diani' },
    { label: 'Watamu & Malindi', value: 'Watamu' },
    { label: 'Mombasa', value: 'Mombasa' },
    { label: 'Safari lodges', value: 'Maasai Mara' },
  ];

  const toggleResident = () => {
    const next = !resident;
    setResident(next);
    localStorage.setItem(RESIDENT_KEY, String(next));
    if (next) localStorage.setItem(CURRENCY_KEY, 'KES');
    window.dispatchEvent(new Event('gss-pricing-preference-changed'));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-9">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#142019] to-[#0c120e] p-7 sm:p-10 shadow-xl">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6bc65]"><Palmtree className="w-4 h-4" /><span>Beach escapes & safari stays</span></div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">Find a stay worth building the trip around.</h1>
          <p className="text-base text-[#c7d2cb] leading-relaxed">Explore handpicked beach resorts and safari lodges, then ask us to confirm current rates, availability and the best package for your dates.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-[#e8eee9]"><span className="inline-flex gap-1.5 items-center"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Resident rates where available</span><span className="inline-flex gap-1.5 items-center"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Transfers can be arranged</span><span className="inline-flex gap-1.5 items-center"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Personal booking support</span></div>
          <div className="pt-2 flex justify-center"><button type="button" aria-pressed={resident} onClick={toggleResident} className={`min-h-11 px-5 rounded-xl text-sm font-bold transition-all ${resident ? 'bg-[#8a611d] text-white shadow-md' : 'bg-white text-[#303e35] border border-[#d7d1c4] hover:border-[#8a611d]'}`}>{resident ? 'Kenyan resident pricing is on' : 'Show Kenyan resident pricing'}</button></div>
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter stays by location">
        {filters.map(filter => <button key={filter.value} type="button" aria-pressed={selectedLocation === filter.value} onClick={() => setSelectedLocation(filter.value)} className={`min-h-11 px-4 rounded-xl text-sm font-bold transition-all ${selectedLocation === filter.value ? 'bg-[#8a611d] text-white shadow-md' : 'bg-white text-[#405046] border border-[#d7d1c4] hover:border-[#8a611d] hover:text-[#161f19]'}`}>{filter.label}</button>)}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-4">
        <p className="text-sm text-[#c7d2cb]" aria-live="polite"><span className="font-bold text-white">{filteredHotels.length}</span> {filteredHotels.length === 1 ? 'stay' : 'stays'} found</p>
        <EnquiryButton label="Ask us to recommend a stay" className="min-h-11 inline-flex items-center justify-center gap-2 px-4 rounded-xl border border-[#8a611d] text-[#e6bc65] hover:bg-[#8a611d] hover:text-white text-sm font-bold transition-colors" />
      </div>

      {filteredHotels.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{filteredHotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)}</div> : <div className="rounded-3xl bg-white border border-[#ded8cb] p-8 text-center space-y-4"><h2 className="font-serif-luxury text-2xl font-bold text-[#161f19]">No listed stay matches that area.</h2><p className="text-sm text-[#46544b] max-w-lg mx-auto">Tell us where you want to go and the kind of stay you prefer. We can suggest alternatives that fit your dates and budget.</p><EnquiryButton label="Request recommendations" className="min-h-11 px-5 rounded-xl bg-[#8a611d] hover:bg-[#704d15] text-white text-sm font-bold" /></div>}
    </div>
  );
}
