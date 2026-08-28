import React, { useEffect, useRef, useState } from 'react';
import { useData } from '../../context/DataContext';
import { Tour, Hotel } from '../../types';
import { ApiError } from '../../services/api';
import { X, Send, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';

interface EnquiryModalProps { isOpen: boolean; onClose: () => void; selectedTour?: Tour | null; selectedHotel?: Hotel | null; initialType?: string; }

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, selectedTour, selectedHotel, initialType }) => {
  const { addEnquiry, getWhatsAppUrl } = useData();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [fullName, setFullName] = useState(''); const [email, setEmail] = useState(''); const [phone, setPhone] = useState(''); const [country, setCountry] = useState(''); const [travelDates, setTravelDates] = useState(''); const [adults, setAdults] = useState(2); const [children, setChildren] = useState(0); const [budget, setBudget] = useState('Not sure yet'); const [accommodationPreference, setAccommodationPreference] = useState('Open to recommendations'); const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); const [isSubmitting, setIsSubmitting] = useState(false); const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKeyDown); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSubmitError(''); setIsSubmitting(true);
    try {
      await addEnquiry({ fullName, email, phone, country: country || 'Not specified', travelDates: travelDates || 'Flexible', durationDays: selectedTour?.durationDays || 5, numberOfTravelers: { adults: Number(adults), children: Number(children) }, tourId: selectedTour?.id, tourTitle: selectedTour?.title, hotelId: selectedHotel?.id, hotelTitle: selectedHotel?.name, preferredDestination: selectedTour?.destinations.join(', ') || selectedHotel?.location || 'Open to recommendations', safariType: selectedTour?.title || selectedHotel?.name || initialType || 'Custom Safari', budget, accommodationPreference, specialRequests, hearAboutUs: 'Website enquiry' });
      setIsSubmitted(true);
    } catch (err) { setSubmitError(err instanceof ApiError ? err.message : 'Something went wrong sending your enquiry. Please try again or reach us on WhatsApp.'); }
    finally { setIsSubmitting(false); }
  };

  const handleClose = () => { setIsSubmitted(false); setSubmitError(''); onClose(); };
  const inputClass = 'w-full min-h-11 px-3.5 py-2.5 rounded-xl bg-[#faf8f2] border border-[#d7d1c4] text-sm text-[#161f19] focus:border-[#8a611d] focus:outline-none';
  const labelClass = 'text-sm font-semibold text-[#303e35] block mb-1.5';
  const title = selectedTour?.title || selectedHotel?.name || 'Tell us about your ideal trip';

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto" onMouseDown={e => { if (e.target === e.currentTarget) handleClose(); }}>
      <div role="dialog" aria-modal="true" aria-labelledby="enquiry-title" aria-describedby="enquiry-description" className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#ded8cb] shadow-2xl p-5 sm:p-8 my-4 sm:my-8 text-left">
        <button ref={closeButtonRef} type="button" onClick={handleClose} aria-label="Close enquiry form" className="absolute top-4 right-4 min-w-11 min-h-11 flex items-center justify-center rounded-full bg-[#f4f1e8] hover:bg-[#eae5d8] text-[#303e35] border border-[#d7d1c4]"><X className="w-5 h-5" /></button>

        {!isSubmitted ? <div>
          <div className="mb-6 pr-12"><span className="text-xs font-extrabold uppercase tracking-wider text-[#76541a]">No-obligation enquiry</span><h2 id="enquiry-title" className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#161f19] mt-1">{title}</h2><p id="enquiry-description" className="text-sm text-[#46544b] mt-2 leading-relaxed">Share the essentials and our team can suggest a route, confirm availability and prepare an indicative quote. You do not need every detail decided yet.</p></div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label htmlFor="enquiry-name" className={labelClass}>Full name *</label><input id="enquiry-name" autoComplete="name" required value={fullName} onChange={e => setFullName(e.target.value)} className={inputClass} /></div>
              <div><label htmlFor="enquiry-email" className={labelClass}>Email *</label><input id="enquiry-email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className={inputClass} /></div>
              <div><label htmlFor="enquiry-phone" className={labelClass}>Phone / WhatsApp <span className="font-normal text-[#66766b]">(optional)</span></label><input id="enquiry-phone" type="tel" autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} className={inputClass} /></div>
              <div><label htmlFor="enquiry-country" className={labelClass}>Country <span className="font-normal text-[#66766b]">(optional)</span></label><input id="enquiry-country" autoComplete="country-name" value={country} onChange={e => setCountry(e.target.value)} className={inputClass} /></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div><label htmlFor="enquiry-dates" className={labelClass}>Travel dates</label><input id="enquiry-dates" value={travelDates} onChange={e => setTravelDates(e.target.value)} placeholder="Flexible is fine" className={inputClass} /></div>
              <div><label htmlFor="enquiry-adults" className={labelClass}>Adults</label><input id="enquiry-adults" type="number" min={1} max={30} value={adults} onChange={e => setAdults(Number(e.target.value))} className={inputClass} /></div>
              <div><label htmlFor="enquiry-children" className={labelClass}>Children</label><input id="enquiry-children" type="number" min={0} max={15} value={children} onChange={e => setChildren(Number(e.target.value))} className={inputClass} /></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label htmlFor="enquiry-budget" className={labelClass}>Budget per person</label><select id="enquiry-budget" value={budget} onChange={e => setBudget(e.target.value)} className={inputClass}><option>Not sure yet</option><option>Under $1,500 / person</option><option>$1,500 - $3,000 / person</option><option>$3,000 - $6,000 / person</option><option>$6,000 - $10,000+ / person</option><option>Kenyan resident rates (KES)</option></select></div>
              <div><label htmlFor="enquiry-stay" className={labelClass}>Stay preference</label><select id="enquiry-stay" value={accommodationPreference} onChange={e => setAccommodationPreference(e.target.value)} className={inputClass}><option>Open to recommendations</option><option>Luxury lodges & camps</option><option>Comfortable midrange lodges</option><option>Ultra-luxury & private conservancies</option><option>Beach resort</option></select></div>
            </div>
            <div><label htmlFor="enquiry-notes" className={labelClass}>What matters most on this trip? <span className="font-normal text-[#66766b]">(optional)</span></label><textarea id="enquiry-notes" rows={3} value={specialRequests} onChange={e => setSpecialRequests(e.target.value)} placeholder="Wildlife interests, celebration, accessibility, dietary needs, preferred pace..." className={`${inputClass} min-h-24`} /></div>
            {submitError && <p role="alert" className="text-sm text-rose-800 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2.5">{submitError}</p>}
            <div className="rounded-xl bg-[#f6f3ea] border border-[#e3ddcf] p-3 flex gap-2 text-xs text-[#46544b]"><ShieldCheck className="w-4 h-4 text-[#76541a] shrink-0 mt-0.5" /><span>Submitting this form is an enquiry only. No payment is taken and no booking is confirmed.</span></div>
            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
              <a href={getWhatsAppUrl({ tourTitle: selectedTour?.title, hotelTitle: selectedHotel?.name })} target="_blank" rel="noopener noreferrer" className="min-h-12 inline-flex items-center justify-center gap-2 px-5 rounded-xl bg-[#eef7f2] hover:bg-[#def0e6] text-[#1b4332] text-sm font-bold border border-[#b9d8c5]"><MessageCircle className="w-4 h-4" />Ask on WhatsApp</a>
              <button type="submit" disabled={isSubmitting} className="min-h-12 inline-flex items-center justify-center gap-2 px-7 rounded-xl bg-[#8a611d] hover:bg-[#704d15] disabled:opacity-60 text-white font-extrabold text-sm shadow-md"><span>{isSubmitting ? 'Sending…' : 'Request my quote'}</span><Send className="w-4 h-4" /></button>
            </div>
          </form>
        </div> : <div className="text-center py-10 space-y-4"><div className="w-16 h-16 rounded-full bg-[#1b4332] text-white flex items-center justify-center mx-auto ring-8 ring-[#1b4332]/15"><CheckCircle2 className="w-8 h-8" /></div><h2 id="enquiry-title" className="font-serif-luxury text-3xl font-bold text-[#161f19]">Thanks — we received your enquiry.</h2><p id="enquiry-description" className="text-sm text-[#46544b] max-w-md mx-auto leading-relaxed">Our team will review the details for <strong>{selectedTour?.title || selectedHotel?.name || 'your trip'}</strong> and follow up with next steps.</p><button onClick={handleClose} className="min-h-11 px-6 rounded-xl bg-[#8a611d] text-white font-bold text-sm hover:bg-[#704d15]">Close</button></div>}
      </div>
    </div>
  );
};
