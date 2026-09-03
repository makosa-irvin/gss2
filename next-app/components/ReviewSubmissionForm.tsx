'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { COUNTRIES, DEFAULT_COUNTRY } from '../lib/countries';

const inputClass = 'mt-1.5 w-full min-h-11 rounded-xl border border-border-strong bg-surface-muted px-3.5 py-2.5 text-sm text-ink-strong outline-none focus:border-brand-strong focus:ring-2 focus:ring-brand-strong/20';

export function ReviewSubmissionForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setError('');
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch('/api/backend/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reviewerName: String(data.get('reviewerName') || ''),
          reviewerCountry: String(data.get('reviewerCountry') || ''),
          tourTaken: String(data.get('tourTaken') || ''),
          rating: Number(data.get('rating') || 5),
          reviewText: String(data.get('reviewText') || ''),
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Could not submit your review.');
      setStatus('sent');
      form.reset();
    } catch (caught) {
      setStatus('error');
      setError(caught instanceof Error ? caught.message : 'Could not submit your review.');
    }
  }

  if (status === 'sent') {
    return <div className="py-10 text-center"><CheckCircle2 className="mx-auto h-12 w-12 text-action" /><h2 className="mt-4 font-serif-luxury text-3xl font-bold text-ink-strong">Thank you for sharing</h2><p className="mx-auto mt-2 max-w-lg text-sm text-ink-muted">Your review is awaiting admin approval and will appear publicly after moderation.</p></div>;
  }

  return <form onSubmit={submit} className="space-y-5">
    <div><h2 className="font-serif-luxury text-3xl font-bold text-ink-strong">Share your safari experience</h2><p className="mt-2 text-sm text-ink-muted">Every customer submission is reviewed before publication.</p></div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-bold text-ink">Name *<input name="reviewerName" required minLength={2} className={inputClass} /></label>
      <label className="text-sm font-bold text-ink">Country *<select name="reviewerCountry" required defaultValue={DEFAULT_COUNTRY} className={inputClass}>{COUNTRIES.map(country => <option key={country} value={country}>{country}</option>)}</select></label>
      <label className="text-sm font-bold text-ink">Tour or holiday taken *<input name="tourTaken" required className={inputClass} /></label>
      <label className="text-sm font-bold text-ink">Rating *<select name="rating" defaultValue="5" className={inputClass}>{[5,4,3,2,1].map(rating => <option key={rating} value={rating}>{rating} stars</option>)}</select></label>
    </div>
    <label className="block text-sm font-bold text-ink">Your review *<textarea name="reviewText" required minLength={20} rows={5} className={`${inputClass} resize-y`} /></label>
    {status === 'error' ? <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">{error}</p> : null}
    <button type="submit" disabled={status === 'sending'} className="min-h-12 w-full rounded-xl bg-brand-strong px-6 text-sm font-extrabold text-white shadow-md hover:bg-brand-hover disabled:opacity-60 inline-flex items-center justify-center gap-2"><Send className="h-4 w-4" />{status === 'sending' ? 'Submitting…' : 'Submit for moderation'}</button>
  </form>;
}
