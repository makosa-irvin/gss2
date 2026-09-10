'use client';

import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CheckCircle2, MapPin, MessageCircle, Send, ShieldCheck, X } from 'lucide-react';
import { COUNTRIES, DEFAULT_COUNTRY } from '../lib/countries';

type EnquiryContextValue = {
  openEnquiry: (context?: { type?: string; destination?: string; tourTitle?: string; hotelTitle?: string }) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function useEnquiry() {
  const value = useContext(EnquiryContext);
  if (!value) throw new Error('useEnquiry must be used inside ClientProviders');
  return value;
}

function AnalyticsTracker({ consent }: { consent: boolean }) {
  const pathname = usePathname();
  useEffect(() => {
    if (!consent || !pathname) return;
    const key = 'gss-next-session-v1';
    let sessionId = sessionStorage.getItem(key);
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem(key, sessionId);
    }
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source') || (document.referrer.includes('google.') ? 'google' : document.referrer ? 'referral' : 'direct');
    const medium = params.get('utm_medium') || (source === 'google' ? 'organic' : source === 'direct' ? '(none)' : 'referral');
    const query = params.toString();
    const campaign = params.get('utm_campaign') || undefined;
    fetch('/api/backend/api/analytics/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        eventName: 'page_view',
        pagePath: `${pathname}${query ? `?${query}` : ''}`,
        source,
        medium,
        ...(campaign ? { campaign } : {}),
        metadata: {},
      }),
    }).catch(() => undefined);
  }, [consent, pathname]);
  return null;
}

const inputClass = 'w-full min-h-11 px-3.5 py-2.5 rounded-xl bg-surface-muted border border-border-strong text-sm text-ink-strong focus:border-brand-strong focus:ring-2 focus:ring-brand-strong/20 focus:outline-none';
const labelClass = 'text-sm font-semibold text-ink block mb-1.5';

function EnquiryModal({ context, onClose }: { context: Record<string, string> | null; onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!context) return;
    setStatus('idle');
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocusedRef.current?.focus();
    };
  }, [context, onClose]);

  if (!context) return null;
  const enquiryContext = context;
  const enquiryItems = [enquiryContext.tourTitle, enquiryContext.hotelTitle, enquiryContext.destination].filter(Boolean) as string[];
  const title = enquiryContext.tourTitle || enquiryContext.hotelTitle || enquiryContext.type || (enquiryContext.destination ? `Plan a ${enquiryContext.destination} safari` : 'Tell us about your ideal trip');

  async function submit(formData: FormData) {
    setStatus('sending');
    const payload = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone') || '',
      country: formData.get('country') || '',
      travelDates: formData.get('travelDates') || 'Flexible',
      adults: Number(formData.get('adults') || 2),
      children: Number(formData.get('children') || 0),
      tourTitle: enquiryContext.tourTitle || undefined,
      hotelTitle: enquiryContext.hotelTitle || undefined,
      preferredDestination: enquiryContext.destination || '',
      safariType: enquiryContext.type || enquiryContext.tourTitle || enquiryContext.hotelTitle || 'Tailor-made safari',
      budget: formData.get('budget') || 'Not sure yet',
      accommodationPreference: formData.get('accommodationPreference') || 'Open to recommendations',
      specialRequests: formData.get('specialRequests') || '',
      hearAboutUs: 'Website enquiry',
    };
    try {
      const response = await fetch('/api/backend/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="fixed inset-0 z-[250] flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-hidden p-2 sm:p-4" onMouseDown={event => event.target === event.currentTarget && onClose()}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="enquiry-title" aria-describedby="enquiry-description" className="relative w-full max-w-2xl max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-2xl sm:rounded-3xl bg-white border border-border-strong shadow-2xl p-5 sm:p-8 text-left">
        <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close enquiry form" className="sticky top-0 z-20 float-right -mr-1 -mt-1 min-w-11 min-h-11 flex items-center justify-center rounded-full bg-surface-soft hover:bg-border text-ink border border-border-strong shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-strong"><X className="w-5 h-5" /></button>

        {status === 'sent' ? (
          <div className="clear-both text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-action text-white flex items-center justify-center mx-auto ring-8 ring-action/15"><CheckCircle2 className="w-8 h-8" /></div>
            <h2 id="enquiry-title" className="font-serif-luxury text-3xl font-bold text-ink-strong">Thanks — we received your enquiry.</h2>
            <p id="enquiry-description" className="text-sm text-ink-muted max-w-lg mx-auto leading-relaxed">The safari team can now review your details. No payment has been taken and no booking has been confirmed.</p>
            <button type="button" onClick={onClose} className="min-h-11 px-5 rounded-xl bg-brand-strong hover:bg-brand-hover text-white text-sm font-bold">Close</button>
          </div>
        ) : (
          <div className="clear-both">
            <div className="mb-5 -mt-8 pr-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-deep">No-obligation enquiry</span>
              <h2 id="enquiry-title" className="font-serif-luxury text-2xl sm:text-3xl font-bold text-ink-strong mt-1 leading-tight">{title}</h2>
              <p id="enquiry-description" className="text-sm text-ink-muted mt-2 leading-relaxed">We already carry across the safari, destination or shortlist you were viewing. Add only the details needed to shape the right proposal.</p>
            </div>

            {enquiryItems.length > 0 && <div className="mb-5 rounded-2xl border border-action-border bg-action-soft p-4"><div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-action"><MapPin className="w-4 h-4" />Included in this enquiry</div><div className="mt-2 flex flex-wrap gap-2">{enquiryItems.map(item => <span key={item} className="rounded-full border border-action-border bg-white px-3 py-1.5 text-xs font-semibold text-ink">{item}</span>)}</div></div>}

            <form action={submit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label htmlFor="enquiry-name" className={labelClass}>Full name *</label><input id="enquiry-name" name="fullName" autoComplete="name" required className={inputClass} /></div>
                <div><label htmlFor="enquiry-email" className={labelClass}>Email *</label><input id="enquiry-email" name="email" type="email" autoComplete="email" required className={inputClass} /></div>
                <div><label htmlFor="enquiry-phone" className={labelClass}>Phone / WhatsApp *</label><input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" required minLength={3} className={inputClass} /></div>
                <div><label htmlFor="enquiry-country" className={labelClass}>Country *</label><select id="enquiry-country" name="country" autoComplete="country-name" required defaultValue={DEFAULT_COUNTRY} className={inputClass}>{COUNTRIES.map(country => <option key={country} value={country}>{country}</option>)}</select></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div><label htmlFor="enquiry-dates" className={labelClass}>Travel dates</label><input id="enquiry-dates" name="travelDates" placeholder="Flexible is fine" className={inputClass} /></div>
                <div><label htmlFor="enquiry-adults" className={labelClass}>Adults</label><input id="enquiry-adults" name="adults" type="number" min="1" max="30" defaultValue="2" className={inputClass} /></div>
                <div><label htmlFor="enquiry-children" className={labelClass}>Children</label><input id="enquiry-children" name="children" type="number" min="0" max="15" defaultValue="0" className={inputClass} /></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label htmlFor="enquiry-budget" className={labelClass}>Budget per person</label><select id="enquiry-budget" name="budget" defaultValue="Not sure yet" className={inputClass}><option>Not sure yet</option><option>Under $1,500 / person</option><option>$1,500 - $3,000 / person</option><option>$3,000 - $6,000 / person</option><option>$6,000 - $10,000+ / person</option><option>Kenyan resident rates (KES)</option></select></div>
                <div><label htmlFor="enquiry-stay" className={labelClass}>Stay preference</label><select id="enquiry-stay" name="accommodationPreference" defaultValue="Open to recommendations" className={inputClass}><option>Open to recommendations</option><option>Luxury lodges & camps</option><option>Comfortable midrange lodges</option><option>Ultra-luxury & private conservancies</option><option>Beach resort</option></select></div>
              </div>
              <div><label htmlFor="enquiry-notes" className={labelClass}>Anything else we should know? <span className="font-normal text-ink-subtle">(optional)</span></label><textarea id="enquiry-notes" name="specialRequests" rows={3} placeholder="Celebration, accessibility, dietary needs, wildlife priorities, preferred pace..." className={`${inputClass} min-h-24`} /></div>
              {status === 'error' && <p role="alert" className="text-sm text-rose-800 bg-rose-50 border border-rose-200 rounded-xl px-3 py-2.5">Something went wrong sending your enquiry. Please try again or reach us on WhatsApp.</p>}
              <div className="rounded-xl bg-surface-soft border border-border-strong p-3 flex gap-2 text-xs text-ink-muted"><ShieldCheck className="w-4 h-4 text-brand-deep shrink-0 mt-0.5" /><span>Submitting is an enquiry only. No payment is taken and no booking is confirmed.</span></div>
              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
                <a href="https://wa.me/254729000410" target="_blank" rel="noopener noreferrer" className="min-h-12 inline-flex items-center justify-center gap-2 px-5 rounded-xl bg-action-soft hover:bg-action-soft text-action text-sm font-bold border border-action-border"><MessageCircle className="w-4 h-4" />Ask on WhatsApp</a>
                <button type="submit" disabled={status === 'sending'} className="min-h-12 inline-flex items-center justify-center gap-2 px-7 rounded-xl bg-brand-strong hover:bg-brand-hover disabled:opacity-60 disabled:cursor-wait text-white font-extrabold text-sm shadow-md"><span>{status === 'sending' ? 'Sending…' : 'Request my safari quote'}</span><Send className="w-4 h-4" /></button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [context, setContext] = useState<Record<string, string> | null>(null);
  const [consent, setConsent] = useState<boolean | null>(null);
  useEffect(() => {
    const saved = localStorage.getItem('gss-analytics-consent-v1');
    setConsent(saved === 'granted' ? true : saved === 'declined' ? false : null);
  }, []);
  const value = useMemo(() => ({ openEnquiry: (next?: Record<string, string>) => setContext(next || {}) }), []);
  const decide = (allowed: boolean) => {
    localStorage.setItem('gss-analytics-consent-v1', allowed ? 'granted' : 'declined');
    setConsent(allowed);
  };

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryModal context={context} onClose={() => setContext(null)} />
      {consent === null && (
        <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-border-strong bg-white p-4 shadow-2xl sm:p-5 text-ink-strong" role="region" aria-label="Analytics preferences">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl"><strong className="text-sm">Help us improve safari planning</strong><p className="mt-1 text-xs leading-relaxed text-ink-muted">With your permission, anonymous website analytics help us understand which guides, safari ideas and planning tools are useful. Marketing attribution is stored with an enquiry so we can measure which channels produce real leads.</p></div>
            <div className="flex shrink-0 gap-2"><button type="button" onClick={() => decide(false)} className="min-h-11 rounded-xl border border-border-strong px-4 text-sm font-bold text-ink-muted hover:text-ink-strong">Decline</button><button type="button" onClick={() => decide(true)} className="min-h-11 rounded-xl bg-brand-strong px-4 text-sm font-extrabold text-white hover:bg-brand-hover">Allow analytics</button></div>
          </div>
        </div>
      )}
      <AnalyticsTracker consent={consent === true} />
    </EnquiryContext.Provider>
  );
}
