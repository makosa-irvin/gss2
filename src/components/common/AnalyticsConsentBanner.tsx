import { useState } from 'react';
import { getAnalyticsConsent, setAnalyticsConsent } from '../../lib/analytics';

export const AnalyticsConsentBanner: React.FC = () => {
  const [consent, setConsent] = useState(() => getAnalyticsConsent());
  if (consent) return null;

  const choose = (value: 'granted' | 'denied') => {
    setAnalyticsConsent(value);
    setConsent(value);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-border-strong bg-white p-4 shadow-2xl sm:p-5 text-ink-strong" role="region" aria-label="Analytics preferences">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <strong className="text-sm">Help us improve safari planning</strong>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">With your permission, anonymous website analytics help us understand which guides, safari ideas and planning tools are useful. Marketing attribution is stored with an enquiry so we can measure which channels produce real leads.</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => choose('denied')} className="min-h-11 rounded-xl border border-border-strong px-4 text-sm font-bold text-ink-muted hover:text-ink-strong">Decline</button>
          <button type="button" onClick={() => choose('granted')} className="min-h-11 rounded-xl bg-brand-strong px-4 text-sm font-extrabold text-white hover:bg-brand-hover">Allow analytics</button>
        </div>
      </div>
    </div>
  );
};
