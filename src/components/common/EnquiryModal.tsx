import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useData } from '../../context/DataContext';
import { Tour, Hotel } from '../../types';
import { ApiError } from '../../services/api';
import { X, Send, CheckCircle2, MessageCircle, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTour?: Tour | null;
  selectedHotel?: Hotel | null;
  initialType?: string;
  initialDestination?: string;
  initialSpecialRequests?: string;
  contextItems?: string[];
}

interface RememberedTraveller {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  adults: number;
  children: number;
  budget: string;
  accommodationPreference: string;
}

const TRAVELLER_SESSION_KEY = 'gss-enquiry-traveller-v1';

function loadRememberedTraveller(): Partial<RememberedTraveller> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.sessionStorage.getItem(TRAVELLER_SESSION_KEY);
    return raw ? JSON.parse(raw) as Partial<RememberedTraveller> : {};
  } catch {
    return {};
  }
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, selectedTour, selectedHotel, initialType, initialDestination, initialSpecialRequests, contextItems = [] }) => {
  const { addEnquiry, getWhatsAppUrl } = useData();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const [fullName, setFullName] = useState(''); const [email, setEmail] = useState(''); const [phone, setPhone] = useState(''); const [country, setCountry] = useState(''); const [travelDates, setTravelDates] = useState(''); const [adults, setAdults] = useState(2); const [children, setChildren] = useState(0); const [budget, setBudget] = useState('Not sure yet'); const [accommodationPreference, setAccommodationPreference] = useState('Open to recommendations'); const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); const [isSubmitting, setIsSubmitting] = useState(false); const [submitError, setSubmitError] = useState('');

  const enquiryItems = useMemo(() => {
    const items = [...contextItems];
    if (selectedTour?.title) items.unshift(selectedTour.title);
    if (selectedHotel?.name) items.unshift(selectedHotel.name);
    if (initialDestination && !items.includes(initialDestination)) items.unshift(`${initialDestination} destination`);
    return Array.from(new Set(items));
  }, [contextItems, selectedTour?.title, selectedHotel?.name, initialDestination]);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); return; }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(el => !el.hasAttribute('hidden'));
      if (!focusable.length) return;
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => { window.clearTimeout(timer); document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKeyDown); previouslyFocusedRef.current?.focus(); };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const remembered = loadRememberedTraveller();
    setFullName(remembered.fullName || ''); setEmail(remembered.email || ''); setPhone(remembered.phone || ''); setCountry(remembered.country || '');
    setAdults(remembered.adults || 2); setChildren(remembered.children ?? 0); setBudget(remembered.budget || 'Not sure yet'); setAccommodationPreference(remembered.accommodationPreference || 'Open to recommendations');
    setTravelDates(''); setSpecialRequests(initialSpecialRequests || ''); setSubmitError(''); setIsSubmitted(false);
  }, [isOpen, initialSpecialRequests, selectedTour?.id, selectedHotel?.id, initialType, initialDestination]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); if (isSubmitting) return; setSubmitError(''); setIsSubmitting(true);
    try {
      const contextualNotes = enquiryItems.length > 1 && !initialSpecialRequests
        ? `Please compare these saved options:\n${enquiryItems.map(item => `• ${item}`).join('\n')}${specialRequests ? `\n\nTraveller notes:\n${specialRequests}` : ''}`
        : specialRequests;
      await addEnquiry({
        fullName, email, phone, country: country || 'Not specified', travelDates: travelDates || 'Flexible', durationDays: selectedTour?.durationDays || 5,
        numberOfTravelers: { adults: Number(adults), children: Number(children) }, tourId: selectedTour?.id, tourTitle: selectedTour?.title,
        hotelId: selectedHotel?.id, hotelTitle: selectedHotel?.name,
        preferredDestination: selectedTour?.destinations.join(', ') || selectedHotel?.location || initialDestination || 'Open to recommendations',
        safariType: selectedTour?.title || selectedHotel?.name || initialType || (initialDestination ? `Safari to ${initialDestination}` : 'Custom Safari'),
        budget, accommodationPreference, specialRequests: contextualNotes, hearAboutUs: 'Website enquiry'
      });
      try { window.sessionStorage.setItem(TRAVELLER_SESSION_KEY, JSON.stringify({ fullName, email, phone, country, adults, children, budget, accommodationPreference } satisfies RememberedTraveller)); } catch { /* Session prefill is optional. */ }
      setIsSubmitted(true);
    } catch (err) { setSubmitError(err instanceof ApiError ? err.message : 'Something went wrong sending your enquiry. Please try again or reach us on WhatsApp.'); }
    finally { setIsSubmitting(false); }
  };

  const handleClose = () => { setIsSubmitted(false); setSubmitError(''); onClose(); };
  const inputClass = 'w-full min-h-11 px-3.5 py-2.5 rounded-xl bg-surface-muted border border-border-strong text-sm text-ink-strong focus:border-brand-strong focus:ring-2 focus:ring-brand-strong/20 focus:outline-none';
  const labelClass = 'text-sm font-semibold text-ink block mb-1.5';
  const title = selectedTour?.title || selectedHotel?.name || initialType || (initialDestination ? `Plan a ${initialDestination} safari` : 'Tell us about your ideal trip');
  const hasRememberedDetails = Boolean(loadRememberedTraveller().email || loadRememberedTraveller().fullName);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-hidden p-2 sm:p-4" onMouseDown={e => { if (e.target === e.currentTarget) handleClose(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="enquiry-title" aria-describedby="enquiry-description" className="relative w-full max-w-2xl max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-2xl sm:rounded-3xl bg-white border border-border-strong shadow-2xl p-5 sm:p-8 text-left">
        <button ref={closeButtonRef} type="button" onClick={handleClose} aria-label="Close enquiry form" className="sticky top-0 z-20 float-right -mr-1 -mt-1 min-w-11 min-h-11 flex items-center justify-center rounded-full bg-surface-soft hover:bg-border text-ink border border-border-strong shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-strong"><X className="w-5 h-5" /></button>

        {!isSubmitted ? <div className="clear-both">
          <div className="mb-5 -mt-8 pr-12"><span className="text-xs font-extrabold uppercase tracking-wider text-brand-deep">No-obligation enquiry</span><h2 id="enquiry-title" className="font-serif-luxury text-2xl sm:text-3xl font-bold text-ink-strong mt-1 leading-tight">{title}</h2><p id="enquiry-description" className="text-sm text-ink-muted mt-2 leading-relaxed">We already carry across the safari, destination or shortlist you were viewing. Add only the details needed to shape the right proposal.</p></div>

          {enquiryItems.length > 0 && <div className="mb-5 rounded-2xl border border-action-border bg-action-soft p-4"><div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-action"><MapPin className="w-4 h-4" />Included in this enquiry</div><div className="mt-2 flex flex-wrap gap-2">{enquiryItems.map(item => <span key={item} className="rounded-full border border-action-border bg-white px-3 py-1.5 text-xs font-semibold text-ink">{item}</span>)}</div></div>}
          {hasRememberedDetails && <p className="mb-5 rounded-xl border border-border-strong bg-surface-muted px-3 py-2 text-xs text-ink-muted">We prefilled traveller details from an earlier successful enquiry in this browser session. You can edit them before sending.</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="enquiry-name" className={labelClass}>Full name *</label><input id="enquiry-name" autoComplete="name" required value={fullName} onChange={e => setFullName(e.target.value)} className={inputClass} /></div><div><label htmlFor="enquiry-email" className={labelClass}>Email *</label><input id="enquiry-email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className={inputClass} /></div><div><label htmlFor="enquiry-phone" className={labelClass}>Phone / WhatsApp <span className="font-normal text-ink-subtle">(optional)</span></label><input id="enquiry-phone" type="tel" autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} className={inputClass} /></div><div><label htmlFor="enquiry-country" className={labelClass}>Country <span className="font-normal text-ink-subtle">(optional)</span></label><input id="enquiry-country" autoComplete="country-name" value={country} onChange={e => setCountry(e.target.value)} className={inputClass} /></div></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><div><label htmlFor="enquiry-dates" className={labelClass}>Travel dates</label><input id="enquiry-dates" value={travelDates} onChange={e => setTravelDates(e.target.value)} placeholder="Flexible is fine" className={inputClass} /></div><div><label htmlFor="enquiry-adults" className={labelClass}>Adults</label><input id="enquiry-adults" type="number" min={1} max={30} value={adults} onChange={e => setAdults(Number(e.target.value))} className={inputClass} /></div><div><label htmlFor="enquiry-children" className={labelClass}>Children</label><input id="enquiry-children" type="number" min={0} max={15} value={children} onChange={e => setChildren(Number(e.target.value))} className={inputClass} /></div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label htmlFor="enquiry-budget" className={labelClass}>Budget per person</label><select id="enquiry-budget" value={budget} onChange={e => setBudget(e.target.value)} className={inputClass}><option>Not sure yet</option><option>Under $1,500 / person</option><option>$1,500 - $3,000 / person</option><option>$3,000 - $6,000 / person</option><option>$6,000 - $10,000+ / person</option><option>Kenyan resident rates (KES)</option></select></div><div><label htmlFor="enquiry-stay" className={labelClass}>Stay preference</label><select id="enquiry-stay" value={accommodationPreference} onChange={e => setAccommodationPreference(e.target.value)} className={inputClass}><option>Open to recommendations</option><option>Luxury lodges & camps</option><option>Comfortable midrange lodges</option><option>Ultra-luxury & private conservancies</option><option>Beach resort</option></select></div></div>
            <div><label htmlFor="enquiry-notes" className={labelClass}>Anything else we should know? <span className="font-normal text-ink-subtle">(optional)</span></label><textarea id="enquiry-notes" rows={3} value={specialRequests} onChange={e => setSpecialRequests(e.target.value)} placeholder="Celebration, accessibility, dietary needs, wildlife priorities, preferred pace..." className={`${inputClass} min-h-24`} /></div>
            {submitError && <p role="alert" className="text-sm text-rose-800 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2.5">{submitError}</p>}
            <div className="rounded-xl bg-surface-soft border border-border-strong p-3 flex gap-2 text-xs text-ink-muted"><ShieldCheck className="w-4 h-4 text-brand-deep shrink-0 mt-0.5" /><span>Submitting is an enquiry only. No payment is taken and no booking is confirmed. Contact details are remembered only for this browser session after a successful enquiry.</span></div>
            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pb-1"><a href={getWhatsAppUrl({ tourTitle: selectedTour?.title, hotelTitle: selectedHotel?.name })} target="_blank" rel="noopener noreferrer" className="min-h-12 inline-flex items-center justify-center gap-2 px-5 rounded-xl bg-action-soft hover:bg-action-soft text-action text-sm font-bold border border-action-border"><MessageCircle className="w-4 h-4" />Ask on WhatsApp</a><button type="submit" disabled={isSubmitting} className="min-h-12 inline-flex items-center justify-center gap-2 px-7 rounded-xl bg-brand-strong hover:bg-brand-hover disabled:opacity-60 disabled:cursor-wait text-white font-extrabold text-sm shadow-md"><span>{isSubmitting ? 'Sending…' : 'Request my safari quote'}</span><Send className="w-4 h-4" /></button></div>
          </form>
        </div> : <div className="clear-both text-center py-10 space-y-4"><div className="w-16 h-16 rounded-full bg-action text-white flex items-center justify-center mx-auto ring-8 ring-action/15"><CheckCircle2 className="w-8 h-8" /></div><h2 id="enquiry-title" className="font-serif-luxury text-3xl font-bold text-ink-strong">Thanks — we received your enquiry.</h2><p id="enquiry-description" className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">Your safari context and traveller details were sent together, so you will not need to repeat the same information in a follow-up enquiry during this browser session.</p><div className="flex justify-center"><button onClick={handleClose} className="min-h-11 px-6 rounded-xl bg-brand-strong text-white font-bold text-sm hover:bg-brand-hover inline-flex items-center gap-2"><Sparkles className="w-4 h-4" />Continue planning</button></div></div>}
      </div>
    </div>
  );
};
