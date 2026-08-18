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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#e8e4da] shadow-2xl p-6 sm:p-8 my-8 text-left">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#f4f1e8] hover:bg-[#eae5d8] text-[#5a6a5f] transition-colors border border-[#ded8cb]"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9e7120]">
                {selectedTour ? 'Direct Booking & Availability Request' : selectedHotel ? 'Resort Package Enquiry' : 'Plan Your Africa'}
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19] mt-1">
                {selectedTour?.title || selectedHotel?.name || "Let's Craft Your Bespoke Journey"}
              </h3>
              <p className="text-xs text-[#5d6e62] mt-1.5 font-normal">
                Tell us your preferences. Our local Kenya & Tanzania travel specialists will reply with availability and a transparent quotation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-[#303e35] block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#303e35] block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#303e35] block mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 555 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#303e35] block mb-1">Country of Residence</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United Kingdom / Kenya"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-[#303e35] block mb-1">Estimated Travel Dates</label>
                  <input
                    type="text"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    placeholder="e.g. Aug 15 - 25, 2026"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#303e35] block mb-1">Adults</label>
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#303e35] block mb-1">Children (under 12)</label>
                  <input
                    type="number"
                    min={0}
                    max={15}
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-[#303e35] block mb-1">Target Budget Range</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none"
                  >
                    <option value="Under $1,500 / person">Under $1,500 / person</option>
                    <option value="$1,500 - $3,000 / person">$1,500 - $3,000 / person</option>
                    <option value="$3,000 - $6,000 / person">$3,000 - $6,000 / person</option>
                    <option value="$6,000 - $10,000+ / person">$6,000 - $10,000+ / person</option>
                    <option value="Kenyan Resident Standard Rates">Kenyan Resident Standard Rates (KES)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#303e35] block mb-1">Accommodation Tier</label>
                  <select
                    value={accommodationPreference}
                    onChange={(e) => setAccommodationPreference(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none"
                  >
                    <option value="Luxury Lodges & Camps">Luxury 5-Star Lodges & Tented Camps</option>
                    <option value="Comfortable Midrange Lodges">Comfortable Midrange Lodges</option>
                    <option value="Ultra-Luxury & Private Conservancies">Ultra-Luxury & Fly-In Estates</option>
                    <option value="Beach Resort All-Inclusive">Beach Resort All-Inclusive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#303e35] block mb-1">Special Requests & Dietary Notes</label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Honeymoon setup, hot air balloon request, wheelchair accessibility, dietary preferences..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-sm text-[#161f19] focus:border-[#b3822a] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={getWhatsAppUrl({ tourTitle: selectedTour?.title, hotelTitle: selectedHotel?.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#eef7f2] hover:bg-[#def0e6] text-[#1b4332] text-xs font-bold border border-[#c3e2cf]"
                >
                  <MessageCircle className="w-4 h-4 text-[#128c7e]" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-extrabold text-sm transition-all shadow-md active:scale-95"
                >
                  <span>Request My Safari Plan</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#1b4332] text-white flex items-center justify-center mx-auto ring-8 ring-[#1b4332]/15">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-3xl font-bold text-[#161f19]">
              Thank you. Your safari journey starts here.
            </h3>
            <p className="text-sm text-[#5d6e62] max-w-md mx-auto">
              We have received your enquiry for{' '}
              <strong className="text-[#9e7120]">{selectedTour?.title || selectedHotel?.name || 'your custom safari'}</strong>.
              Our dedicated safari specialist will email you the detailed itinerary and price breakdown shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-[#b3822a] text-white font-bold text-xs hover:bg-[#9e7120]"
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
