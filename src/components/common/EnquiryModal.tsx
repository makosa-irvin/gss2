import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Tour, Hotel } from '../../types';
import { X, Send, CheckCircle2, ShieldCheck, MessageCircle, Calendar, Users, DollarSign } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTour?: Tour | null;
  selectedHotel?: Hotel | null;
  initialType?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedTour,
  selectedHotel,
  initialType
}) => {
  const { addEnquiry, settings, getWhatsAppUrl } = useData();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [travelDates, setTravelDates] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [budget, setBudget] = useState('$3,000 - $6,000 / person');
  const [accommodationPreference, setAccommodationPreference] = useState('Luxury Lodges & Camps');
  const [specialRequests, setSpecialRequests] = useState('');
  const [hearAboutUs, setHearAboutUs] = useState('Google Search');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry({
      fullName,
      email,
      phone,
      country,
      travelDates: travelDates || 'Flexible in 2026',
      durationDays: selectedTour?.durationDays || 5,
      numberOfTravelers: { adults: Number(adults), children: Number(children) },
      tourId: selectedTour?.id,
      tourTitle: selectedTour?.title,
      hotelId: selectedHotel?.id,
      hotelTitle: selectedHotel?.name,
      preferredDestination: selectedTour?.destinations.join(', ') || selectedHotel?.location || 'Kenya & Tanzania',
      safariType: selectedTour?.title || selectedHotel?.name || initialType || 'Custom Safari',
      budget,
      accommodationPreference,
      specialRequests,
      hearAboutUs
    });
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#141e17] border border-[#233327] shadow-2xl p-6 sm:p-8 my-8 text-left">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#0c120e] hover:bg-[#1b2920] text-[#a3b2a7] transition-colors border border-[#233327]"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c49a45]">
                {selectedTour ? 'Direct Booking & Availability Request' : selectedHotel ? 'Resort Package Enquiry' : 'Plan Your Africa'}
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f4f2eb] mt-1">
                {selectedTour?.title || selectedHotel?.name || "Let's Craft Your Bespoke Journey"}
              </h3>
              <p className="text-xs text-[#a3b2a7] mt-1.5">
                Tell us your preferences. Our local Kenya & Tanzania travel specialists will reply with availability and a transparent quotation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 555 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Country of Residence</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United Kingdom / Kenya"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Estimated Travel Dates</label>
                  <input
                    type="text"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    placeholder="e.g. Aug 15 - 25, 2026"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Adults</label>
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Children (under 12)</label>
                  <input
                    type="number"
                    min={0}
                    max={15}
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Target Budget Range</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  >
                    <option value="Under $1,500 / person">Under $1,500 / person</option>
                    <option value="$1,500 - $3,000 / person">$1,500 - $3,000 / person</option>
                    <option value="$3,000 - $6,000 / person">$3,000 - $6,000 / person</option>
                    <option value="$6,000 - $10,000+ / person">$6,000 - $10,000+ / person</option>
                    <option value="Kenyan Resident Standard Rates">Kenyan Resident Standard Rates (KES)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Accommodation Tier</label>
                  <select
                    value={accommodationPreference}
                    onChange={(e) => setAccommodationPreference(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  >
                    <option value="Luxury Lodges & Camps">Luxury 5-Star Lodges & Tented Camps</option>
                    <option value="Comfortable Midrange Lodges">Comfortable Midrange Lodges</option>
                    <option value="Ultra-Luxury & Private Conservancies">Ultra-Luxury & Fly-In Estates</option>
                    <option value="Beach Resort All-Inclusive">Beach Resort All-Inclusive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Special Requests & Dietary Notes</label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Honeymoon setup, hot air balloon request, wheelchair accessibility, dietary preferences..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={getWhatsAppUrl({ tourTitle: selectedTour?.title, hotelTitle: selectedHotel?.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1b2920] hover:bg-[#233327] text-[#4ade80] text-xs font-bold border border-[#2a3d31]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-extrabold text-sm transition-all shadow-lg active:scale-95"
                >
                  <span>Request My Safari Plan</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#1b4332] text-[#86efac] flex items-center justify-center mx-auto ring-8 ring-[#1b4332]/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-3xl font-bold text-[#f4f2eb]">
              Thank you. Your safari journey starts here.
            </h3>
            <p className="text-sm text-[#c4d4c8] max-w-md mx-auto">
              We have received your enquiry for{' '}
              <strong className="text-[#c49a45]">{selectedTour?.title || selectedHotel?.name || 'your custom safari'}</strong>.
              Our dedicated safari specialist will email you the detailed itinerary and price breakdown shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-[#c49a45] text-black font-bold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
