'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

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
    fetch('/api/backend/api/analytics/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        eventName: 'page_view',
        pagePath: `${pathname}${query ? `?${query}` : ''}`,
        source,
        medium,
        campaign: params.get('utm_campaign'),
        metadata: {},
      }),
    }).catch(() => undefined);
  }, [consent, pathname]);
  return null;
}

function EnquiryModal({ context, onClose }: { context: Record<string, string> | null; onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  if (!context) return null;
  const enquiryContext = context;

  async function submit(formData: FormData) {
    setStatus('sending');
    const payload = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone') || '',
      country: formData.get('country') || '',
      travelDates: formData.get('travelDates') || '',
      adults: Number(formData.get('adults') || 2),
      children: Number(formData.get('children') || 0),
      tourTitle: enquiryContext.tourTitle || undefined,
      hotelTitle: enquiryContext.hotelTitle || undefined,
      preferredDestination: enquiryContext.destination || '',
      safariType: enquiryContext.type || 'Tailor-made safari',
      budget: formData.get('budget') || 'Not sure yet',
      accommodationPreference: formData.get('accommodationPreference') || 'Open to recommendations',
      specialRequests: formData.get('specialRequests') || '',
      hearAboutUs: 'Website',
    };
    try {
      const response = await fetch('/api/backend/api/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close enquiry form">×</button>
        <p className="eyebrow">Personal safari planning</p>
        <h2 id="enquiry-title">Request your safari plan</h2>
        {status === 'sent' ? (
          <div className="success-panel"><strong>Thank you.</strong><p>Your enquiry has been sent to the safari team. No payment or booking has been made.</p><button className="button primary" onClick={onClose}>Close</button></div>
        ) : (
          <form action={submit} className="form-grid">
            <label>Full name<input name="fullName" required autoComplete="name" /></label>
            <label>Email<input name="email" required type="email" autoComplete="email" /></label>
            <label>Phone / WhatsApp<input name="phone" required minLength={3} autoComplete="tel" /></label>
            <label>Country<input name="country" required autoComplete="country-name" /></label>
            <label>Travel dates<input name="travelDates" placeholder="Approximate is fine" /></label>
            <label>Adults<input name="adults" type="number" min="1" defaultValue="2" /></label>
            <label>Children<input name="children" type="number" min="0" defaultValue="0" /></label>
            <label>Budget<select name="budget" defaultValue="Not sure yet"><option>Not sure yet</option><option>Under $3,000 pp</option><option>$3,000–$5,000 pp</option><option>$5,000–$8,000 pp</option><option>$8,000+ pp</option></select></label>
            <label>Stay preference<select name="accommodationPreference"><option>Open to recommendations</option><option>Midrange</option><option>Luxury</option><option>Ultra Luxury</option></select></label>
            <label className="full">Anything we should know?<textarea name="specialRequests" rows={4} /></label>
            {status === 'error' && <p className="form-error full">We could not send the enquiry. Please try again or use WhatsApp.</p>}
            <div className="full form-actions"><button className="button primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Request my safari quote'}</button><a className="button secondary" href="https://wa.me/254729000410" target="_blank" rel="noreferrer">WhatsApp instead</a></div>
            <p className="form-note full">Submitting this form does not reserve accommodation, take payment, or confirm a booking.</p>
          </form>
        )}
      </div>
    </div>
  );
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [context, setContext] = useState<Record<string, string> | null>(null);
  const [consent, setConsent] = useState<boolean | null>(null);
  useEffect(() => { const saved = localStorage.getItem('gss-analytics-consent-v1'); setConsent(saved === 'granted' ? true : saved === 'declined' ? false : null); }, []);
  const value = useMemo(() => ({ openEnquiry: (next?: Record<string, string>) => setContext(next || {}) }), []);
  const decide = (allowed: boolean) => { localStorage.setItem('gss-analytics-consent-v1', allowed ? 'granted' : 'declined'); setConsent(allowed); };

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryModal context={context} onClose={() => setContext(null)} />
      {consent === null && <div className="consent"><div><strong>Optional analytics</strong><p>Allow anonymous page-view and interaction analytics to help improve the safari planning experience.</p></div><div className="consent-actions"><button className="button secondary" onClick={() => decide(false)}>Decline</button><button className="button primary" onClick={() => decide(true)}>Allow analytics</button></div></div>}
      <AnalyticsTracker consent={consent === true} />
    </EnquiryContext.Provider>
  );
}
