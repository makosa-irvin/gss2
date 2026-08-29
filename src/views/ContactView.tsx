import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { ApiError } from '../services/api';
import { PageMeta } from '../components/common/PageMeta';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

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
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setSubmitError('');
    setIsSubmitting(true);
    try {
      await addEnquiry({
        fullName,
        email,
        phone,
        country: country || 'International',
        travelDates: dates || 'Flexible',
        durationDays: 7,
        numberOfTravelers: { adults: Number(adults), children: Number(children) },
        preferredDestination: destination,
        safariType: 'Direct Contact Enquiry',
        budget: 'Not specified',
        accommodationPreference: 'To be discussed',
        specialRequests: message,
        hearAboutUs: 'Contact Page'
      });
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof ApiError ? error.message : 'We could not send your enquiry. Please try again or contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = 'w-full min-h-11 px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#d7d1c4] focus:border-[#8a611d] focus:ring-2 focus:ring-[#8a611d]/20 text-sm text-[#161f19] outline-none';
  const labelClass = 'text-sm font-bold text-[#303e35] block mb-1.5';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      <PageMeta title="Contact a Kenya Safari Expert" description="Talk directly with Good Secrets Safaris about a private Kenya, Tanzania, or Zanzibar itinerary. No payment is required to enquire." canonicalPath="/contact" />

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#142019] to-[#0c120e] p-7 sm:p-10 text-center shadow-xl">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e6bc65]"><Mail className="w-4 h-4" /><span>Start planning with the local team</span></div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">Tell us what your ideal East Africa trip looks like.</h1>
          <p className="text-base text-[#c7d2cb] leading-relaxed">Share what you already know — dates, destinations, pace or simply the experience you want. You do not need the whole itinerary figured out before getting in touch.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-[#e8eee9]"><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />No payment to enquire</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />Tailor-made suggestions</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#e6bc65]" />WhatsApp available</span></div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-4 space-y-5">
          <div className="p-7 rounded-3xl bg-white border border-[#ded8cb] space-y-6 shadow-sm">
            <div><h2 className="font-serif-luxury text-2xl font-bold text-[#161f19]">Prefer to talk first?</h2><p className="text-sm text-[#46544b] mt-2">Use whichever channel is easiest. Approximate dates and group size help us make the first response more useful.</p></div>
            <div className="space-y-5">
              <div className="flex items-start gap-3"><div className="p-2.5 rounded-xl bg-[#faf8f2] text-[#76541a] border border-[#ded8cb]"><Phone className="w-4 h-4" /></div><div><span className="text-xs font-bold text-[#536158] block">Phone</span><a href={`tel:${settings.contact.phone}`} className="font-semibold text-[#161f19] hover:text-[#76541a]">{settings.contact.phone}</a></div></div>
              <div className="flex items-start gap-3"><div className="p-2.5 rounded-xl bg-[#faf8f2] text-[#76541a] border border-[#ded8cb]"><Mail className="w-4 h-4" /></div><div><span className="text-xs font-bold text-[#536158] block">Email</span><a href={`mailto:${settings.contact.email}`} className="font-semibold text-[#161f19] hover:text-[#76541a] break-all">{settings.contact.email}</a></div></div>
              <div className="flex items-start gap-3"><div className="p-2.5 rounded-xl bg-[#faf8f2] text-[#76541a] border border-[#ded8cb]"><MapPin className="w-4 h-4" /></div><div><span className="text-xs font-bold text-[#536158] block">Office</span><span className="font-semibold text-[#161f19]">{settings.contact.address}</span></div></div>
              <div className="flex items-start gap-3"><div className="p-2.5 rounded-xl bg-[#faf8f2] text-[#76541a] border border-[#ded8cb]"><Clock className="w-4 h-4" /></div><div><span className="text-xs font-bold text-[#536158] block">Trip support</span><span className="font-semibold text-[#161f19]">Available 7 days a week</span></div></div>
            </div>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="w-full min-h-12 rounded-xl bg-[#128c7e] hover:bg-[#075e54] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"><MessageCircle className="w-4 h-4" /><span>Chat on WhatsApp</span></a>
          </div>
          <div className="p-5 rounded-2xl bg-[#152019] border border-white/10 flex gap-3"><ShieldCheck className="w-5 h-5 text-[#e6bc65] shrink-0" /><p className="text-sm text-[#c7d2cb]">Your enquiry is a planning request, not a booking or payment commitment. Exact trip, payment and cancellation terms are confirmed before you choose to proceed.</p></div>
        </aside>

        <div className="min-w-0 lg:col-span-8"><div className="p-6 sm:p-9 rounded-3xl bg-white border border-[#ded8cb] shadow-sm">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4" role="status"><div className="w-16 h-16 rounded-full bg-[#eef7f2] border border-[#b9d8c5] text-[#1b4332] flex items-center justify-center mx-auto"><CheckCircle2 className="w-8 h-8" /></div><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">Thanks — your enquiry is in.</h2><p className="text-base text-[#46544b] max-w-lg mx-auto">We received your trip details, {fullName}. Our team can now review them and follow up using the contact information you provided.</p><button onClick={() => { setIsSubmitted(false); setSubmitError(''); }} className="min-h-11 px-6 rounded-xl bg-[#faf8f2] border border-[#d7d1c4] text-[#161f19] text-sm font-bold hover:bg-white">Send another enquiry</button></div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Safari enquiry form">
              <div><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19]">Request your safari plan</h2><p className="text-sm text-[#536158] mt-1">Only your name and email are required. Everything else helps us make the first reply more useful.</p></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="contact-name" className={labelClass}>Full name *</label><input id="contact-name" type="text" autoComplete="name" required value={fullName} onChange={e => setFullName(e.target.value)} className={inputClass} /></div><div><label htmlFor="contact-email" className={labelClass}>Email *</label><input id="contact-email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className={inputClass} /></div><div><label htmlFor="contact-phone" className={labelClass}>Phone / WhatsApp</label><input id="contact-phone" type="tel" autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} className={inputClass} /></div><div><label htmlFor="contact-country" className={labelClass}>Country of residence</label><input id="contact-country" type="text" autoComplete="country-name" value={country} onChange={e => setCountry(e.target.value)} className={inputClass} /></div></div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><div><label htmlFor="contact-dates" className={labelClass}>Approximate dates</label><input id="contact-dates" type="text" value={dates} onChange={e => setDates(e.target.value)} placeholder="e.g. July 2027" className={inputClass} /></div><div><label htmlFor="contact-adults" className={labelClass}>Adults</label><select id="contact-adults" value={adults} onChange={e => setAdults(Number(e.target.value))} className={inputClass}>{[1,2,3,4,5,6,7,8,9].map(num => <option key={num} value={num}>{num}</option>)}</select></div><div><label htmlFor="contact-children" className={labelClass}>Children</label><select id="contact-children" value={children} onChange={e => setChildren(Number(e.target.value))} className={inputClass}>{[0,1,2,3,4,5].map(num => <option key={num} value={num}>{num}</option>)}</select></div></div>
              <div><label htmlFor="contact-destination" className={labelClass}>Where are you interested in going?</label><select id="contact-destination" value={destination} onChange={e => setDestination(e.target.value)} className={inputClass}><option value="Kenya (Maasai Mara & Parks)">Kenya</option><option value="Tanzania (Serengeti & Ngorongoro)">Tanzania</option><option value="Kenya + Tanzania Combined">Kenya + Tanzania</option><option value="Zanzibar & Coast">Safari + beach / coast</option><option value="Custom Multi-Country">Not sure yet / custom route</option></select></div>
              <div><label htmlFor="contact-message" className={labelClass}>What would make this trip special?</label><textarea id="contact-message" rows={5} value={message} onChange={e => setMessage(e.target.value)} placeholder="Wildlife you hope to see, preferred pace, celebration, accommodation style, accessibility needs, or anything else we should know..." className={`${inputClass} min-h-32`} /></div>
              {submitError && <div role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900"><strong className="block">Your enquiry was not sent.</strong><span>{submitError}</span></div>}
              <button type="submit" disabled={isSubmitting} className="w-full min-h-12 rounded-xl bg-[#8a611d] hover:bg-[#704d15] disabled:opacity-60 disabled:cursor-wait text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all"><Send className="w-4 h-4" /><span>{isSubmitting ? 'Sending your enquiry…' : 'Send my safari enquiry'}</span></button>
              <p className="text-xs text-[#536158] text-center">Submitting this form does not require payment or confirm a booking.</p>
            </form>
          )}
        </div></div>
      </div>
    </div>
  );
};
