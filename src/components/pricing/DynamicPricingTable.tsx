import React, { useState } from 'react';
import { Tour } from '../../types';
import { useData } from '../../context/DataContext';
import { Calendar, DollarSign, Users, Info, ShieldCheck } from 'lucide-react';

interface DynamicPricingTableProps {
  tour: Tour;
  onSelectSeason?: (seasonId: string) => void;
}

export const DynamicPricingTable: React.FC<DynamicPricingTableProps> = ({ tour, onSelectSeason }) => {
  const { formatPrice, activeCurrency, isKenyanResidentMode } = useData();
  const [selectedSeasonId, setSelectedSeasonId] = useState<string>(
    tour.seasonalPricing[0]?.id || ''
  );

  const seasonalRates = tour.seasonalPricing || [];

  return (
    <div id="dynamic-pricing-section" className="rounded-2xl bg-white border border-[#e8e4da] p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#eeebe2]">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9e7120]">
            <Calendar className="w-4 h-4 text-[#9e7120]" />
            <span>Guaranteed Transparent Rates</span>
          </div>
          <h3 className="font-serif-luxury text-2xl font-bold text-[#161f19] mt-1">
            Seasonal Rates Per Person
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-[#f6f4ee] p-1.5 rounded-xl border border-[#e2ded2] text-xs">
          <span className="px-3 py-1 text-[#5d6d62]">Currency:</span>
          <span className="px-3 py-1 font-bold rounded-lg bg-[#b3822a] text-white">
            {activeCurrency}
          </span>
        </div>
      </div>

      {seasonalRates.length > 0 ? (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#eeebe2] text-xs font-bold text-[#5a6b5f] uppercase tracking-wider">
                <th className="py-3 px-4">Season Period</th>
                <th className="py-3 px-4 text-right">Solo Traveler</th>
                <th className="py-3 px-4 text-right">2 People Sharing (Per Person)</th>
                {isKenyanResidentMode && (
                  <th className="py-3 px-4 text-right text-[#1b4332]">Resident Rate</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eeebe2] text-sm">
              {seasonalRates.map((season) => {
                const isSelected = selectedSeasonId === season.id;
                return (
                  <tr
                    key={season.id}
                    onClick={() => {
                      setSelectedSeasonId(season.id);
                      onSelectSeason?.(season.id);
                    }}
                    className={`transition-colors cursor-pointer hover:bg-[#faf8f2] ${
                      isSelected ? 'bg-[#fdfaf2] font-semibold' : ''
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div className="font-bold text-[#161f19]">{season.name}</div>
                      {season.notes && (
                        <div className="text-xs text-[#6e7d72] mt-0.5">{season.notes}</div>
                      )}
                    </td>
                    <td className="py-4 px-4 text-right font-serif-luxury text-base text-[#39473e]">
                      {formatPrice(season.soloPrice, { forceCurrency: activeCurrency })}
                    </td>
                    <td className="py-4 px-4 text-right font-serif-luxury text-base font-bold text-[#9e7120]">
                      {formatPrice(season.sharingPrice, { forceCurrency: activeCurrency })}
                    </td>
                    {isKenyanResidentMode && (
                      <td className="py-4 px-4 text-right font-serif-luxury text-base font-bold text-[#1b4332]">
                        {season.residentPriceKES ? `KSH ${season.residentPriceKES.toLocaleString()}` : 'Inquire'}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#faf8f2] border border-[#eeebe2]">
            <span className="text-xs text-[#6e7d72] uppercase tracking-wider block">Solo Traveler Rate</span>
            <span className="text-2xl font-bold font-serif-luxury text-[#161f19] mt-1 block">
              {formatPrice(tour.soloPrice || tour.priceFrom * 1.4)}
            </span>
          </div>
          <div className="p-4 rounded-xl bg-[#faf8f2] border border-[#eeebe2]">
            <span className="text-xs text-[#6e7d72] uppercase tracking-wider block">2 People Sharing (Per Person)</span>
            <span className="text-2xl font-bold font-serif-luxury text-[#9e7120] mt-1 block">
              {formatPrice(tour.sharingPrice || tour.priceFrom)}
            </span>
          </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-[#eeebe2] flex items-start gap-2 text-xs text-[#6e7d72]">
        <Info className="w-4 h-4 text-[#9e7120] shrink-0 mt-0.5" />
        <p>
          Prices are per person in {activeCurrency} and exclude international flights unless otherwise stated.
          Custom group discounts (4+ guests) and family interconnecting room rates are calculated automatically upon enquiry.
        </p>
      </div>
    </div>
  );
};
