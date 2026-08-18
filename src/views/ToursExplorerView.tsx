import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { Tour } from '../types';
import { TourCard } from '../components/tours/TourCard';
import {
  Search,
  Filter,
  X,
  SlidersHorizontal,
  Compass,
  DollarSign,
  Clock,
  MapPin,
  Sparkles,
  Users
} from 'lucide-react';

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

export const ToursExplorerView: React.FC<ToursExplorerViewProps> = ({
  initialFilters,
  onSelectTour,
  onOpenEnquiryModal
}) => {
  const { tours, destinations, formatPrice, isKenyanResidentMode, setIsKenyanResidentMode } = useData();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>(initialFilters?.country || 'all');
  const [selectedDestination, setSelectedDestination] = useState<string>(initialFilters?.destination || 'all');
  const [selectedDuration, setSelectedDuration] = useState<string>(initialFilters?.duration || 'all');
  const [selectedTravelStyle, setSelectedTravelStyle] = useState<string>(initialFilters?.travelStyle || 'all');
  const [selectedTravelerType, setSelectedTravelerType] = useState<string>(initialFilters?.travelerType || 'all');
  const [selectedComfort, setSelectedComfort] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(15000);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Dynamic filter calculation
  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      // Keyword search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = tour.title.toLowerCase().includes(q);
        const matchesDesc = tour.shortDescription.toLowerCase().includes(q) || tour.fullDescription.toLowerCase().includes(q);
        const matchesDest = tour.destinations.some(d => d.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesDest) return false;
      }

      // Country filter
      if (selectedCountry !== 'all' && tour.country !== selectedCountry) {
        if (!tour.country.toLowerCase().includes(selectedCountry.toLowerCase())) {
          return false;
        }
      }

      // Specific Destination filter
      if (selectedDestination !== 'all') {
        const destMatch = tour.destinations.some(d => d.toLowerCase().includes(selectedDestination.toLowerCase())) ||
          tour.country.toLowerCase().includes(selectedDestination.toLowerCase());
        if (!destMatch) return false;
      }

      // Duration filter
      if (selectedDuration !== 'all') {
        const days = tour.durationDays;
        if (selectedDuration === '1' && days !== 1) return false;
        if (selectedDuration === '2' && days !== 2) return false;
        if (selectedDuration === '3' && days !== 3) return false;
        if (selectedDuration === '2-3' && (days < 2 || days > 3)) return false;
        if (selectedDuration === '4-5' && (days < 4 || days > 5)) return false;
        if (selectedDuration === '4-7' && (days < 4 || days > 7)) return false;
        if (selectedDuration === '6-7' && (days < 6 || days > 7)) return false;
        if (selectedDuration === '8-10' && (days < 8 || days > 10)) return false;
        if (selectedDuration === '8-14' && (days < 8 || days > 14)) return false;
        if (selectedDuration === '10+' && days < 10) return false;
        if (selectedDuration === '15+' && days < 15) return false;
      }

      // Travel Style
      if (selectedTravelStyle !== 'all') {
        const styleMatch = tour.travelStyles.some(ts => ts.toLowerCase() === selectedTravelStyle.toLowerCase()) ||
          tour.title.toLowerCase().includes(selectedTravelStyle.toLowerCase());
        if (!styleMatch) return false;
      }

      // Traveler Type
      if (selectedTravelerType !== 'all') {
        if (tour.travelerTypes && !tour.travelerTypes.some(tt => tt.toLowerCase().includes(selectedTravelerType.toLowerCase()))) {
          return false;
        }
      }

      // Comfort Level
      if (selectedComfort !== 'all' && tour.comfortLevel !== selectedComfort) {
        return false;
      }

      // Max price
      if (tour.priceFrom > maxPrice) {
        return false;
      }

      return true;
    });
  }, [
    tours,
    searchQuery,
    selectedCountry,
    selectedDestination,
    selectedDuration,
    selectedTravelStyle,
    selectedTravelerType,
    selectedComfort,
    maxPrice
  ]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCountry('all');
    setSelectedDestination('all');
    setSelectedDuration('all');
    setSelectedTravelStyle('all');
    setSelectedTravelerType('all');
    setSelectedComfort('all');
    setMaxPrice(15000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c49a45]">
          <Compass className="w-4 h-4" />
          <span>Curated Safari Directory</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4f2eb]">
          Explore East Africa Safaris & Expeditions
        </h1>
        <p className="text-sm text-[#a3b2a7] max-w-2xl">
          Filter through our private 4x4 wildlife journeys across Kenya, Tanzania, and Zanzibar. Every tour includes guaranteed departures and transparent pricing.
        </p>
      </div>

      {/* Main Search Bar & Quick Filters */}
      <div className="p-4 rounded-2xl bg-[#141e17] border border-[#233327] flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-[#8b9e90] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by park (e.g. Amboseli, Maasai Mara, Serengeti), wildlife, or keyword..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] placeholder-[#6e8073] focus:border-[#c49a45] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1b2920] hover:bg-[#233327] text-xs font-bold text-[#f4f2eb] border border-[#2a3d31]"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#c49a45]" />
            <span>Filter Criteria</span>
            {filteredTours.length < tours.length && (
              <span className="w-2 h-2 rounded-full bg-[#c49a45]" />
            )}
          </button>

          {(searchQuery || selectedCountry !== 'all' || selectedDestination !== 'all' || selectedDuration !== 'all' || selectedTravelStyle !== 'all') && (
            <button
              onClick={resetFilters}
              className="px-3 py-2.5 rounded-xl text-xs font-semibold text-[#f87171] hover:bg-[#2c1818] transition-colors"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Filter drawer / collapsible area */}
      {mobileFilterOpen && (
        <div className="p-6 rounded-2xl bg-[#141e17] border border-[#233327] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
          {/* Country / Region */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#c49a45] block mb-1.5">
              Country / Region
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#0c120e] border border-[#233327] text-xs text-[#f4f2eb]"
            >
              <option value="all">All Regions</option>
              <option value="Kenya">Kenya</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Zanzibar">Zanzibar</option>
              <option value="Kenya + Tanzania">Kenya + Tanzania Combined</option>
              <option value="Safari + Beach">Safari + Beach</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#c49a45] block mb-1.5">
              Duration
            </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#0c120e] border border-[#233327] text-xs text-[#f4f2eb]"
            >
              <option value="all">Any Duration</option>
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="4-5">4 – 5 Days</option>
              <option value="6-7">6 – 7 Days</option>
              <option value="8-10">8 – 10 Days</option>
              <option value="10+">10+ Days</option>
            </select>
          </div>

          {/* Travel Style */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#c49a45] block mb-1.5">
              Travel Style
            </label>
            <select
              value={selectedTravelStyle}
              onChange={(e) => setSelectedTravelStyle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#0c120e] border border-[#233327] text-xs text-[#f4f2eb]"
            >
              <option value="all">All Styles</option>
              <option value="Big 5">Big 5 Safaris</option>
              <option value="Great Migration">Great Migration</option>
              <option value="Family">Family Friendly</option>
              <option value="Honeymoon">Honeymoon & Romance</option>
              <option value="Senior Friendly">Senior Friendly</option>
              <option value="Luxury">Luxury Lodges</option>
              <option value="Midrange">Midrange Value</option>
              <option value="Budget">Budget</option>
              <option value="Safari & Beach">Safari & Beach</option>
              <option value="Fly-In">Fly-In Safaris</option>
            </select>
          </div>

          {/* Max Price Slider */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#c49a45]">
                Max Budget / Person
              </label>
              <span className="text-xs font-bold text-[#f4f2eb]">
                {formatPrice(maxPrice)}
              </span>
            </div>
            <input
              type="range"
              min={250}
              max={15000}
              step={250}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#c49a45] cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-[#233327] pb-4">
        <div className="text-sm text-[#a3b2a7]">
          Showing <span className="font-bold text-[#f4f2eb]">{filteredTours.length}</span> matching safari journeys
        </div>
      </div>

      {/* Tour Grid */}
      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map(tour => (
            <TourCard
              key={tour.id}
              tour={tour}
              onSelect={onSelectTour}
              onEnquire={onOpenEnquiryModal}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl bg-[#141e17] border border-[#233327] p-12 text-center space-y-4">
          <Compass className="w-12 h-12 text-[#c49a45] mx-auto opacity-50" />
          <h3 className="font-serif-luxury text-2xl font-bold text-[#f4f2eb]">
            No exact tours match those filters
          </h3>
          <p className="text-sm text-[#a3b2a7] max-w-md mx-auto">
            We specialize in customized tailor-made routes. Let us know what you're looking for and our safari designer will create it for you.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-[#1b2920] text-[#c4d4c8] text-xs font-semibold"
            >
              Reset Filters
            </button>
            <button
              onClick={() => onOpenEnquiryModal()}
              className="px-5 py-2.5 rounded-xl bg-[#c49a45] text-black text-xs font-bold"
            >
              Request Custom Route
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
