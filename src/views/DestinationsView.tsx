import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Destination } from '../types';
import { PageMeta } from '../components/common/PageMeta';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { MapPin, CheckCircle2 } from 'lucide-react';

interface DestinationsViewProps { onSelectDestination: (dest: Destination) => void; }

export const DestinationsView: React.FC<DestinationsViewProps> = ({ onSelectDestination }) => {
  const { destinations } = useData();
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const filteredDestinations = destinations.filter(d => selectedCountry === 'all' || d.country.toLowerCase() === selectedCountry.toLowerCase());

  const filters = [
    { label: 'All destinations', value: 'all' },
    { label: 'Kenya', value: 'Kenya' },
    { label: 'Tanzania', value: 'Tanzania' },
    { label: 'Zanzibar & Coast', value: 'Zanzibar' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-9">
      <PageMeta title="Destinations" description="Explore Maasai Mara, Serengeti, Zanzibar and other East Africa safari destinations." canonicalPath="/destinations" />
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#142019] to-[#0c120e] p-7 sm:p-10 text-center shadow-xl">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6bc65]"><MapPin className="w-4 h-4" /><span>Where to go</span></div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">Choose the landscapes that shape your safari.</h1>
          <p className="text-base text-[#c7d2cb] leading-relaxed">From Kenya’s wildlife-rich conservancies to Tanzania’s vast plains and the Indian Ocean coast, discover what makes each place worth adding to your route.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-[#e8eee9]"><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Wildlife guidance</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Best travel seasons</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Matching safari ideas</span></div>
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter destinations by country">
        {filters.map(filter => <button key={filter.value} type="button" aria-pressed={selectedCountry === filter.value} onClick={() => setSelectedCountry(filter.value)} className={`min-h-11 px-5 rounded-xl text-sm font-bold transition-all ${selectedCountry === filter.value ? 'bg-[#8a611d] text-white shadow-md' : 'bg-white text-[#405046] border border-[#d7d1c4] hover:border-[#8a611d] hover:text-[#161f19]'}`}>{filter.label}</button>)}
      </div>

      <p className="text-sm text-[#c7d2cb] text-center" aria-live="polite">Showing <span className="font-bold text-white">{filteredDestinations.length}</span> destinations</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{filteredDestinations.map(dest => <DestinationCard key={dest.id} destination={dest} onSelect={onSelectDestination} />)}</div>
    </div>
  );
};
