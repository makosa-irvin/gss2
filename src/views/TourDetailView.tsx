import React, { useState } from 'react';
import { Tour } from '../types';
import { useData } from '../context/DataContext';
import { PageMeta } from '../components/common/PageMeta';
import { ItineraryTimeline } from '../components/itinerary/ItineraryTimeline';
import { DynamicPricingTable } from '../components/pricing/DynamicPricingTable';
import {
  Clock,
  MapPin,
  Calendar,
  Compass,
  DollarSign,
  ShieldCheck,
  Check,
  X,
  Sparkles,
  MessageCircle,
  Share2,
  ChevronRight,
  ArrowLeft,
  Bed,
  Car,
  Camera,
  HeartHandshake,
  HelpCircle
} from 'lucide-react';

interface TourDetailViewProps {
  tour: Tour;
  onBack: () => void;
  onOpenEnquiryModal: (payload?: any) => void;
  onSelectDestination?: (destName: string) => void;
}

export const TourDetailView: React.FC<TourDetailViewProps> = ({
  tour,
  onBack,
  onOpenEnquiryModal,
  onSelectDestination
}) => {
  const { formatPrice, getWhatsAppUrl, isKenyanResidentMode } = useData();
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const whatsappUrl = getWhatsAppUrl({
    tourTitle: tour.title
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
      <PageMeta
        title={tour.title}
        description={tour.shortDescription}
        image={tour.images?.[0]}
        canonicalPath={`/safaris/${tour.slug}`}
      />
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between text-xs text-[#707f74]">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 hover:text-[#9e7120] transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Safaris</span>
        </button>

        <div className="flex items-center gap-2">
          <span>{tour.country}</span>
          <ChevronRight className="w-3 h-3 text-[#b4beb7]" />
          <span className="text-[#161f19] font-medium truncate max-w-xs">{tour.title}</span>
        </div>
      </div>

      {/* Hero Header & Title */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#faf8f2] text-[#9e7120] border border-[#ded8cb]">
            {tour.country}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#faf8f2] text-[#5d6e62] border border-[#ded8cb]">
            {tour.durationLabel}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#faf8f2] text-[#5d6e62] border border-[#ded8cb]">
            {tour.comfortLevel}
          </span>
          {tour.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#b3822a] text-white">
              Featured Safari
            </span>
          )}
        </div>

        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#161f19] leading-tight">
          {tour.title}
        </h1>

        <p className="text-base text-[#5d6e62] max-w-3xl leading-relaxed">
          {tour.shortDescription}
        </p>
      </div>

      {/* Image Gallery */}
      <div className="space-y-3">
        <div className="aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-[#faf8f2] border border-[#e8e4da] relative shadow-lg">
          <img
            src={tour.images[activeImageIdx] || tour.images[0]}
            alt={tour.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs text-white border border-white/10">
            Photo {activeImageIdx + 1} of {tour.images.length}
          </div>
        </div>

        {/* Thumbnail row */}
        {tour.images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {tour.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImageIdx === idx ? 'border-[#b3822a] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Quick Specs Highlight Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-[#e8e4da] shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-[#707f74]">
            <Clock className="w-3.5 h-3.5 text-[#9e7120]" />
            <span>Duration</span>
          </div>
          <p className="text-sm font-bold text-[#161f19]">{tour.durationLabel}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-[#707f74]">
            <Car className="w-3.5 h-3.5 text-[#9e7120]" />
            <span>Vehicle Type</span>
          </div>
          <p className="text-sm font-bold text-[#161f19]">Custom 4x4 Safari Land Cruiser</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-[#707f74]">
            <Bed className="w-3.5 h-3.5 text-[#9e7120]" />
            <span>Accommodation</span>
          </div>
          <p className="text-sm font-bold text-[#161f19]">{tour.comfortLevel} Tented Lodges</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-[#707f74]">
            <Compass className="w-3.5 h-3.5 text-[#9e7120]" />
            <span>Travel Style</span>
          </div>
          <p className="text-sm font-bold text-[#9e7120]">{tour.travelStyles.join(', ')}</p>
        </div>
      </div>

      {/* Main Content & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Itinerary, Pricing, Inclusions */}
        <div className="lg:col-span-8 space-y-12">
          {/* Detailed Overview */}
          <div className="space-y-4">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#161f19]">
              Safari Overview
            </h3>
            {/* A "Featured Wildlife" chip list used to render here from
                `tour.wildlifeHighlights`, which doesn't exist on the Tour
                type (and never did — no tour in the seed data has it), so
                the block was always inert and has been removed. Wildlife
                data lives on Destination.wildlife instead; if this section
                is wanted back, it should look up the tour's destinations
                and pull `wildlife` from each rather than reading a
                non-existent Tour field. */}
            <p className="text-sm text-[#4d5c52] leading-relaxed whitespace-pre-line font-normal">
              {tour.fullDescription}
            </p>
          </div>

          {/* Dynamic Day-by-day Itinerary */}
          <ItineraryTimeline itinerary={tour.itinerary} />

          {/* Dynamic Seasonal Pricing Table */}
          <DynamicPricingTable tour={tour} />

          {/* Included / Excluded Specs */}
          {(() => {
            // Tour data uses `includedServices` + `includedActivities` and `exclusions`
            // (there is no `included`/`excluded` field on the Tour type). Combine them
            // here and guard against any of them being missing so this section can
            // never crash the page.
            const includedItems = [
              ...(tour.includedServices ?? []),
              ...(tour.includedActivities ?? [])
            ];
            const excludedItems = tour.exclusions ?? [];

            if (includedItems.length === 0 && excludedItems.length === 0) {
              return null;
            }

            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Included */}
                {includedItems.length > 0 && (
                  <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200 space-y-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#1b4332]">
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>What Is Included</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-[#254331]">
                      {includedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#1b4332] font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Excluded */}
                {excludedItems.length > 0 && (
                  <div className="p-6 rounded-2xl bg-rose-50/40 border border-rose-200 space-y-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-rose-800">
                      <X className="w-4 h-4 stroke-[3]" />
                      <span>What Is Excluded</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-rose-900/80">
                      {excludedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-rose-700 font-bold">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })()}

          {/* FAQs / Travel Prep */}
          <div className="p-6 rounded-2xl bg-white border border-[#e8e4da] space-y-4 shadow-xs">
            <h3 className="font-serif-luxury text-xl font-bold text-[#161f19] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#9e7120]" />
              Safari Essentials & Questions
            </h3>
            <div className="space-y-3 text-xs text-[#4d5c52]">
              <div className="p-4 rounded-xl bg-[#faf8f2] border border-[#ded8cb]">
                <strong className="text-[#161f19] block mb-1 text-sm">What should I pack for this safari?</strong>
                Neutral-colored lightweight clothing (khaki, beige, olive), a warm fleece or jacket for dawn game drives, binoculars, sun protection, and personal camera equipment. Soft-sided duffel bags are recommended for 4x4 luggage spaces.
              </div>
              <div className="p-4 rounded-xl bg-[#faf8f2] border border-[#ded8cb]">
                <strong className="text-[#161f19] block mb-1 text-sm">Is this safari private or shared?</strong>
                All Good Secrets safaris are strictly private. You will have your own customized 4x4 Land Cruiser with pop-up photography roof, private driver-guide, and flexible daily game drive schedule.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Booking & Direct Quote Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 rounded-3xl bg-white border border-[#e8e4da] p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <span className="text-xs text-[#707f74] uppercase tracking-wider block font-medium">Starting Rate Per Person</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-serif-luxury text-3xl font-extrabold text-[#161f19]">
                  {formatPrice(tour.sharingPrice || tour.priceFrom)}
                </span>
                <span className="text-xs text-[#707f74]">/ 2 Sharing</span>
              </div>
              {isKenyanResidentMode && tour.residentPriceKES && (
                <span className="text-xs font-semibold text-[#1b4332] block mt-1">
                  Resident: KSH {tour.residentPriceKES.toLocaleString()}
                </span>
              )}
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => onOpenEnquiryModal({ selectedTour: tour })}
                className="w-full py-3.5 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-extrabold text-sm uppercase tracking-wider text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book This Safari</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#eef7f2] hover:bg-[#def0e6] text-[#1b4332] font-bold text-xs border border-[#c3e2cf] flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#128c7e]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#eeebe2] text-xs text-[#5d6e62]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9e7120] shrink-0" />
                <span>Complimentary AMREF Flying Doctors coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#9e7120] shrink-0" />
                <span>100% Tailor-made & Flexible dates</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#9e7120] shrink-0" />
                <span>Exclusive Private 4x4 Land Cruiser with pop-up roof</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
