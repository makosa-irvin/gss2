import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Search, MapPin, Calendar, Compass, Users, Sparkles, Filter } from 'lucide-react';

interface SafariFinderBarProps {
  onSearch: (filters: {
    destination: string;
    duration: string;
    travelStyle: string;
    travelerType: string;
  }) => void;
  compact?: boolean;
}

export const SafariFinderBar: React.FC<SafariFinderBarProps> = ({ onSearch, compact = false }) => {
  const { destinations } = useData();
  const [destination, setDestination] = useState<string>('all');
  const [duration, setDuration] = useState<string>('all');
  const [travelStyle, setTravelStyle] = useState<string>('all');
  const [travelerType, setTravelerType] = useState<string>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      destination,
      duration,
      travelStyle,
      travelerType
    });
  };

  return (
    <form
      id="safari-finder-bar"
      onSubmit={handleSubmit}
      className={`w-full rounded-2xl bg-white/95 backdrop-blur-xl border border-[#e2ded4] shadow-2xl p-4 sm:p-5 ${
        compact ? '' : 'max-w-5xl mx-auto'
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Destination Picker */}
        <div className="flex flex-col gap-1 bg-[#fcfbf9] p-3 rounded-xl border border-[#e8e4da]">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#9e7120] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#9e7120]" />
            Where in Africa?
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="bg-transparent text-sm font-bold text-[#161f19] focus:outline-none cursor-pointer"
          >
            <option value="all">All Destinations</option>
            <optgroup label="Regions">
              <option value="Kenya">Kenya (All Parks & Coast)</option>
              <option value="Tanzania">Tanzania (Serengeti & Parks)</option>
              <option value="Zanzibar">Zanzibar Spice Island</option>
              <option value="Kenya + Tanzania">Kenya + Tanzania Combined</option>
              <option value="Safari + Beach">Bush Safari & Beach Holiday</option>
            </optgroup>
            <optgroup label="Specific Parks">
              {destinations.map(d => (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Duration Picker */}
        <div className="flex flex-col gap-1 bg-[#fcfbf9] p-3 rounded-xl border border-[#e8e4da]">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#9e7120] flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#9e7120]" />
            Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="bg-transparent text-sm font-bold text-[#161f19] focus:outline-none cursor-pointer"
          >
            <option value="all">Any Duration</option>
            <option value="1">1 Day Excursion</option>
            <option value="2-3">2 - 3 Days (Weekend / Quick)</option>
            <option value="4-7">4 - 7 Days (Classic Safari)</option>
            <option value="8-14">8 - 14 Days (Grand Expedition)</option>
            <option value="15+">15+ Days (Bespoke Extended)</option>
          </select>
        </div>

        {/* Travel Style */}
        <div className="flex flex-col gap-1 bg-[#fcfbf9] p-3 rounded-xl border border-[#e8e4da]">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#9e7120] flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#9e7120]" />
            Travel Style
          </label>
          <select
            value={travelStyle}
            onChange={(e) => setTravelStyle(e.target.value)}
            className="bg-transparent text-sm font-bold text-[#161f19] focus:outline-none cursor-pointer"
          >
            <option value="all">All Travel Styles</option>
            <option value="Big 5">Big 5 Wildlife Safari</option>
            <option value="Great Migration">Great Migration Crossings</option>
            <option value="Luxury">Luxury 5-Star Lodge & Camps</option>
            <option value="Family">Family Friendly</option>
            <option value="Honeymoon">Honeymoon & Romance</option>
            <option value="Senior Friendly">Senior Friendly & Gentle Pacing</option>
            <option value="Safari & Beach">Safari & Beach Combo</option>
            <option value="Budget">Value & Midrange Safaris</option>
          </select>
        </div>

        {/* Submit Action Button */}
        <div className="flex items-center">
          <button
            type="submit"
            id="hero-find-safari-btn"
            className="w-full h-full min-h-[52px] rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
            <span>Find My Safari</span>
          </button>
        </div>
      </div>
    </form>
  );
};
