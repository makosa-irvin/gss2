import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Hotel } from '../types';
import { PageMeta } from '../components/common/PageMeta';
import { HotelCard } from '../components/hotels/HotelCard';
import { Palmtree, MapPin, Sparkles, Check, DollarSign } from 'lucide-react';

interface HotelsExplorerViewProps {
  onSelectHotel: (hotel: Hotel) => void;
  onOpenEnquiryModal: (payload?: any) => void;
  initialResidentOnly?: boolean;
}

export const HotelsExplorerView: React.FC<HotelsExplorerViewProps> = ({
  onSelectHotel,
  onOpenEnquiryModal,
  initialResidentOnly = false
}) => {
  const { hotels, isKenyanResidentMode, setIsKenyanResidentMode } = useData();
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const filteredHotels = hotels.filter(h => {
    if (selectedLocation !== 'all' && !h.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      <PageMeta title="Beach Resorts & Lodges" description="Browse beach resorts and lodges in Kenya, including Kenyan resident rates." canonicalPath="/hotels" />
      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#eef7f2] px-4 py-1 text-xs font-bold text-[#1b4332] border border-[#c3e2cf]">
          <Palmtree className="w-4 h-4 text-[#128c7e]" />
          <span>Kenyan Resident Holidays & Coastal Escapes</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
          Escape Without Leaving Kenya
        </h1>
        <p className="text-sm text-[#5d6e62] leading-relaxed font-normal">
          Exclusive all-inclusive beach resort packages in Diani, Watamu, and Mombasa with special KES resident pricing, direct airport/SGR transfers, and seamless concierge booking.
        </p>

        {/* Resident mode reminder badge */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => setIsKenyanResidentMode(!isKenyanResidentMode)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
              isKenyanResidentMode
                ? 'bg-[#1b4332] text-white shadow-md'
                : 'bg-white text-[#5d6e62] border border-[#e8e4da] hover:border-[#b3822a]'
            }`}
          >
            <span>{isKenyanResidentMode ? '✓ Kenyan Resident Rates Active' : 'Switch to Kenyan Resident (KES) Pricing'}</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { label: 'All Resorts & Lodges', value: 'all' },
          { label: 'Diani Beach', value: 'Diani' },
          { label: 'Watamu & Malindi', value: 'Watamu' },
          { label: 'Mombasa North Coast', value: 'Mombasa' },
          { label: 'Safari Lodges', value: 'Maasai Mara' }
        ].map(filter => (
          <button
            key={filter.value}
            onClick={() => setSelectedLocation(filter.value)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedLocation === filter.value
                ? 'bg-[#b3822a] text-white shadow-md'
                : 'bg-white text-[#5d6e62] border border-[#e8e4da] hover:border-[#b3822a] hover:text-[#161f19]'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredHotels.map(hotel => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onSelect={onSelectHotel}
            onEnquire={onOpenEnquiryModal}
          />
        ))}
      </div>
    </div>
  );
};
