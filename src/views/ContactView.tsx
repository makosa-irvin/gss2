import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { settings, addEnquiry, getWhatsAppUrl } = useData();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [dates, setDates] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [destination, setDestination] = useState('Kenya (Maasai Mara & Parks)');
  const [budget, setBudget] = useState('$3,000 - $6,000 / person');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry({
      fullName,
      email,
      phone,
      country: country || 'International',
      travelDates: dates || 'Flexible in 2026',
      durationDays: 7,
      numberOfTravelers: { adults: Number(adults), children: Number(children) },
      preferredDestination: destination,
      safariType: 'Direct Contact Enquiry',
      budget,
      accommodationPreference: 'Luxury Lodges & Camps',
      specialRequests: message,
      hearAboutUs: 'Contact Page'
    });
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9e7120]">
          <Mail className="w-4 h-4 text-[#9e7120]" />
          <span>Connect with Our Safari Specialists</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#161f19]">
          We Are Here to Guide You
        </h1>
        <p className="text-sm text-[#5d6e62]">
          Have questions about season timing, custom safari routes, or booking accommodation? Reach out directly via form or WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-[#e8e4da] space-y-6 shadow-sm">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#161f19]">
              Headquarters & Concierge
            </h3>

            <div className="space-y-4 text-sm text-[#4d5c52]">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#faf8f2] text-[#9e7120] border border-[#e8e4da]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#707f74] block">Direct Telephone</span>
                  <a href={`tel:${settings.contact.phone}`} className="font-semibold text-[#161f19] hover:text-[#9e7120]">
                    {settings.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#faf8f2] text-[#9e7120] border border-[#e8e4da]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#707f74] block">Email Enquiries</span>
                  <a href={`mailto:${settings.contact.email}`} className="font-semibold text-[#161f19] hover:text-[#9e7120]">
                    {settings.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#faf8f2] text-[#9e7120] border border-[#e8e4da]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#707f74] block">Office Location</span>
                  <span className="font-semibold text-[#161f19]">
                    {settings.contact.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#faf8f2] text-[#9e7120] border border-[#e8e4da]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#707f74] block">Concierge Hours</span>
                  <span className="font-semibold text-[#161f19]">
                    24 Hours / 7 Days a Week (East Africa Time)
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#eeebe2]">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#128c7e] hover:bg-[#075e54] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e8e4da] shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#eef7f2] border border-[#c3e2cf] text-[#1b4332] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">
                  Message Received
                </h3>
                <p className="text-sm text-[#5d6e62] max-w-md mx-auto">
                  Thank you, <strong>{fullName}</strong>. A dedicated safari naturalist has received your enquiry and will respond within 4 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#faf8f2] border border-[#ded8cb] text-[#161f19] text-xs font-bold hover:bg-white"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#161f19]">
                    Plan Your Custom Itinerary
                  </h3>
                  <p className="text-xs text-[#707f74]">
                    Fill in your details below and our team will prepare a tailor-made proposal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#161f19] block mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#e8e4da] focus:border-[#b3822a] text-sm text-[#161f19] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#161f19] block mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="eleanor@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#e8e4da] focus:border-[#b3822a] text-sm text-[#161f19] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#161f19] block mb-1.5">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#e8e4da] focus:border-[#b3822a] text-sm text-[#161f19] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#161f19] block mb-1.5">Country of Residence</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="United States, UK, Kenya..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#e8e4da] focus:border-[#b3822a] text-sm text-[#161f19] outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#161f19] block mb-1.5">Preferred Dates</label>
                    <input
                      type="text"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      placeholder="e.g. August 2026"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#e8e4da] text-xs text-[#161f19] outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#161f19] block mb-1.5">Adults (12+)</label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#e8e4da] text-xs text-[#161f19] outline-hidden"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                        <option key={num} value={num}>{num} Adults</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#161f19] block mb-1.5">Children (0-11)</label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#e8e4da] text-xs text-[#161f19] outline-hidden"
                    >
                      {[0, 1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} Children</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#161f19] block mb-1.5">Destination Interest</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#e8e4da] text-xs text-[#161f19] outline-hidden"
                  >
                    <option value="Kenya (Maasai Mara & Parks)">Kenya (Maasai Mara, Amboseli, Samburu)</option>
                    <option value="Tanzania (Serengeti & Ngorongoro)">Tanzania (Serengeti, Ngorongoro Crater, Tarangire)</option>
                    <option value="Kenya + Tanzania Combined">Combined Kenya & Tanzania Classic Migration</option>
                    <option value="Zanzibar & Coast">Diani / Watamu / Zanzibar Island Sanctuary</option>
                    <option value="Custom Multi-Country">Custom Bespoke Route</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#161f19] block mb-1.5">Safari Dreams & Special Requests</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your interests: Big cats, birding, luxury tented camps, photography vehicle, honeymoon champagne..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#e8e4da] focus:border-[#b3822a] text-xs text-[#161f19] outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Safari Proposal Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
