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
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c49a45]">
          <Mail className="w-4 h-4" />
          <span>Connect with Our Safari Specialists</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4f2eb]">
          We Are Here to Guide You
        </h1>
        <p className="text-sm text-[#a3b2a7]">
          Have questions about season timing, custom safari routes, or booking accommodation? Reach out directly via form or WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-[#141e17] border border-[#233327] space-y-6">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#f4f2eb]">
              Headquarters & Concierge
            </h3>

            <div className="space-y-4 text-sm text-[#c4d4c8]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#0c120e] text-[#c49a45] border border-[#233327]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#8b9e90] block">Direct Telephone</span>
                  <a href={`tel:${settings.contact.phone}`} className="font-semibold text-[#f4f2eb] hover:text-[#c49a45]">
                    {settings.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#0c120e] text-[#c49a45] border border-[#233327]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#8b9e90] block">Email Enquiries</span>
                  <a href={`mailto:${settings.contact.email}`} className="font-semibold text-[#f4f2eb] hover:text-[#c49a45]">
                    {settings.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#0c120e] text-[#c49a45] border border-[#233327]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#8b9e90] block">Office Location</span>
                  <span className="font-semibold text-[#f4f2eb]">
                    {settings.contact.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#0c120e] text-[#c49a45] border border-[#233327]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#8b9e90] block">Concierge Hours</span>
                  <span className="font-semibold text-[#f4f2eb]">
                    24 Hours / 7 Days a Week (East Africa Time)
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#233327]">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#141e17] border border-[#233327] shadow-xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#f4f2eb] mb-2">
                  Request a Tailor-Made Safari Itinerary
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Doe"
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
                      placeholder="john@example.com"
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
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Country of Residence</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g. USA / Kenya / Germany"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Target Dates</label>
                    <input
                      type="text"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      placeholder="e.g. July - August 2026"
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
                    <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Children</label>
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

                <div>
                  <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Preferred Safari Destination</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  >
                    <option value="Kenya (Maasai Mara & Parks)">Kenya (Maasai Mara, Amboseli, Samburu)</option>
                    <option value="Tanzania (Serengeti & Ngorongoro)">Tanzania (Serengeti Migration, Ngorongoro)</option>
                    <option value="Kenya + Tanzania Combined">Kenya + Tanzania Combined Expedition</option>
                    <option value="Bush Safari & Zanzibar Beach">Bush Safari & Zanzibar Beach Island</option>
                    <option value="Kenyan Resident Beach Holiday">Kenyan Resident Beach Holiday (Diani/Watamu)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#c4d4c8] block mb-1">Tell Us About Your Dream Safari</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what animals you'd love to see, pace preference, special celebrations..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c120e] border border-[#233327] text-sm text-[#f4f2eb] focus:border-[#c49a45] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#c49a45] hover:bg-[#d6b772] text-[#0c120e] font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Send Safari Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1b4332] text-[#86efac] flex items-center justify-center mx-auto ring-8 ring-[#1b4332]/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-3xl font-bold text-[#f4f2eb]">
                  Thank You, {fullName}!
                </h3>
                <p className="text-sm text-[#c4d4c8] max-w-md mx-auto">
                  We have received your custom safari request. One of our lead East Africa safari guides will contact you within 12 hours with a comprehensive quotation and itinerary draft.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#1b2920] text-[#c4d4c8] text-xs font-semibold"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
