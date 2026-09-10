'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { COUNTRIES, DEFAULT_COUNTRY } from '../lib/countries';

const inputClass = 'w-full min-h-11 px-3.5 py-2.5 rounded-xl bg-surface-muted border border-border-strong focus:border-brand-strong focus:ring-2 focus:ring-brand-strong/20 text-sm text-ink-strong outline-none';
const labelClass = 'text-sm font-bold text-ink block mb-1.5';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setError('');
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: String(data.get('fullName') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      country: String(data.get('country') || ''),
      travelDates: String(data.get('travelDates') || 'Flexible'),
      adults: Number(data.get('adults') || 2),
      children: Number(data.get('children') || 0),
      preferredDestination: String(data.get('preferredDestination') || ''),
      safariType: 'Direct Contact Enquiry',
      budget: 'Not specified',
      accommodationPreference: 'To be discussed',
      specialRequests: String(data.get('specialRequests') || ''),
      hearAboutUs: 'Contact Page',
    };
    try {
      const response = await fetch('/api/backend/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || 'We could not send your enquiry.');
      }
      setStatus('sent');
      form.reset();
    } catch (caught) {
      setStatus('error');
      setError(caught instanceof Error ? caught.message : 'We could not send your enquiry.');
    }
  }

  if (status === 'sent') {
    return <div className="py-12 text-center space-y-4" role="status"><div className="w-16 h-16 rounded-full bg-action-soft border border-action-border text-action flex items-center justify-center mx-auto"><CheckCircle2 className="w-8 h-8" /></div><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-ink-strong">Thanks — your enquiry is in.</h2><p className="text-base text-ink-muted max-w-lg mx-auto">The safari team received your trip details and can follow up using the contact information you provided.</p><button type="button" onClick={() => setStatus('idle')} className="min-h-11 px-6 rounded-xl bg-surface-muted border border-border-strong text-ink-strong text-sm font-bold">Send another enquiry</button></div>;
  }

  return <form onSubmit={submit} className="space-y-6" aria-label="Safari enquiry form">
    <div><h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-ink-strong">Request your safari plan</h2><p className="text-sm text-ink-muted mt-1">Share enough detail for the first reply to be useful.</p></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div><label htmlFor="contact-name" className={labelClass}>Full name *</label><input id="contact-name" name="fullName" autoComplete="name" required className={inputClass} /></div>
      <div><label htmlFor="contact-email" className={labelClass}>Email *</label><input id="contact-email" name="email" type="email" autoComplete="email" required className={inputClass} /></div>
      <div><label htmlFor="contact-phone" className={labelClass}>Phone / WhatsApp *</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" required className={inputClass} /></div>
      <div><label htmlFor="contact-country" className={labelClass}>Country of residence *</label><select id="contact-country" name="country" autoComplete="country-name" required defaultValue={DEFAULT_COUNTRY} className={inputClass}>{COUNTRIES.map(country => <option key={country} value={country}>{country}</option>)}</select></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div><label htmlFor="contact-dates" className={labelClass}>Approximate dates</label><input id="contact-dates" name="travelDates" placeholder="e.g. July 2027" className={inputClass} /></div>
      <div><label htmlFor="contact-adults" className={labelClass}>Adults</label><select id="contact-adults" name="adults" defaultValue="2" className={inputClass}>{[1,2,3,4,5,6,7,8,9].map(number => <option key={number}>{number}</option>)}</select></div>
      <div><label htmlFor="contact-children" className={labelClass}>Children</label><select id="contact-children" name="children" defaultValue="0" className={inputClass}>{[0,1,2,3,4,5].map(number => <option key={number}>{number}</option>)}</select></div>
    </div>
    <div><label htmlFor="contact-destination" className={labelClass}>Where are you interested in going?</label><select id="contact-destination" name="preferredDestination" defaultValue="Kenya (Maasai Mara & Parks)" className={inputClass}><option>Kenya (Maasai Mara & Parks)</option><option>Tanzania (Serengeti & Ngorongoro)</option><option>Kenya + Tanzania Combined</option><option>Zanzibar & Coast</option><option>Custom Multi-Country</option></select></div>
    <div><label htmlFor="contact-requests" className={labelClass}>What would make this trip special?</label><textarea id="contact-requests" name="specialRequests" rows={5} placeholder="Wildlife, pace, celebration, accommodation style, accessibility needs..." className={`${inputClass} min-h-32`} /></div>
    {status === 'error' ? <div role="alert" className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">{error}</div> : null}
    <button type="submit" disabled={status === 'sending'} className="w-full min-h-12 rounded-xl bg-brand-strong hover:bg-brand-hover disabled:opacity-60 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md"><Send className="w-4 h-4" />{status === 'sending' ? 'Sending your enquiry…' : 'Send my safari enquiry'}</button>
    <p className="text-xs text-ink-muted text-center">Submitting this form does not require payment or confirm a booking.</p>
  </form>;
}
