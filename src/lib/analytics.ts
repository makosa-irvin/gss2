export interface MarketingAttribution {
  source: string;
  medium: string;
  campaign?: string;
  term?: string;
  content?: string;
  referrer?: string;
  landingPage: string;
  firstTouchAt: string;
}

type AnalyticsValue = string | number | boolean | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;

const ATTRIBUTION_KEY = 'gss-marketing-attribution-v1';
const CONSENT_KEY = 'gss-analytics-consent-v1';
let analyticsInitialized = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function safeSessionGet<T>(key: string): T | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : null;
  } catch {
    return null;
  }
}

function safeSessionSet(key: string, value: unknown) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Attribution improves reporting but must never block trip planning.
  }
}

function inferSource(referrer: string) {
  if (!referrer) return { source: 'direct', medium: '(none)' };
  try {
    const url = new URL(referrer);
    if (url.origin === window.location.origin) return { source: 'direct', medium: '(none)' };
    const host = url.hostname.replace(/^www\./, '');
    if (host.includes('google.')) return { source: 'google', medium: 'organic' };
    if (host.includes('bing.')) return { source: 'bing', medium: 'organic' };
    if (host.includes('tripadvisor.')) return { source: 'tripadvisor', medium: 'referral' };
    if (host.includes('safaribookings.')) return { source: 'safaribookings', medium: 'referral' };
    if (host.includes('instagram.') || host.includes('l.instagram.')) return { source: 'instagram', medium: 'social' };
    if (host.includes('facebook.') || host.includes('l.facebook.')) return { source: 'facebook', medium: 'social' };
    return { source: host || 'referral', medium: 'referral' };
  } catch {
    return { source: 'referral', medium: 'referral' };
  }
}

export function captureMarketingAttribution(): MarketingAttribution | null {
  if (typeof window === 'undefined') return null;
  const existing = safeSessionGet<MarketingAttribution>(ATTRIBUTION_KEY);
  if (existing) return existing;

  const params = new URLSearchParams(window.location.search);
  const inferred = inferSource(document.referrer);
  const attribution: MarketingAttribution = {
    source: params.get('utm_source') || inferred.source,
    medium: params.get('utm_medium') || inferred.medium,
    campaign: params.get('utm_campaign') || undefined,
    term: params.get('utm_term') || undefined,
    content: params.get('utm_content') || undefined,
    referrer: document.referrer || undefined,
    landingPage: `${window.location.pathname}${window.location.search}`,
    firstTouchAt: new Date().toISOString(),
  };
  safeSessionSet(ATTRIBUTION_KEY, attribution);
  return attribution;
}

export function getMarketingAttribution(): MarketingAttribution | null {
  if (typeof window === 'undefined') return null;
  return safeSessionGet<MarketingAttribution>(ATTRIBUTION_KEY) || captureMarketingAttribution();
}

export function getAnalyticsConsent(): 'granted' | 'denied' | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function setAnalyticsConsent(consent: 'granted' | 'denied') {
  try {
    window.localStorage.setItem(CONSENT_KEY, consent);
  } catch {
    // Consent state can still be respected for the current interaction.
  }
  if (consent === 'granted') initializeAnalytics();
}

export function initializeAnalytics() {
  if (typeof window === 'undefined' || analyticsInitialized || getAnalyticsConsent() !== 'granted') return;
  captureMarketingAttribution();
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  if (!measurementId) return;

  analyticsInitialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => { window.dataLayer?.push(args); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: false, anonymize_ip: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return;
  const attribution = getMarketingAttribution();
  const detail = { ...params, source: attribution?.source, medium: attribution?.medium, campaign: attribution?.campaign };
  window.dispatchEvent(new CustomEvent('gss:analytics', { detail: { name, params: detail } }));
  if (getAnalyticsConsent() === 'granted') {
    initializeAnalytics();
    window.gtag?.('event', name, detail);
  }
}

export function trackPageView(path: string) {
  trackEvent('page_view', { page_path: path, page_title: document.title });
}
