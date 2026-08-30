import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  captureMarketingAttribution,
  getAnalyticsConsent,
  getMarketingAttribution,
  setAnalyticsConsent,
  trackEvent,
  trackPageView,
} from '../analytics';

describe('marketing attribution', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    window.localStorage.clear();
    window.history.replaceState({}, '', '/');
  });

  it('captures UTM parameters and the first landing page', () => {
    window.history.replaceState({}, '', '/safaris?utm_source=google&utm_medium=cpc&utm_campaign=usa-fall&utm_term=kenya+safari');
    const attribution = captureMarketingAttribution();

    expect(attribution).toMatchObject({
      source: 'google',
      medium: 'cpc',
      campaign: 'usa-fall',
      term: 'kenya safari',
      landingPage: '/safaris?utm_source=google&utm_medium=cpc&utm_campaign=usa-fall&utm_term=kenya+safari',
    });
    expect(attribution?.firstTouchAt).toBeTruthy();
  });

  it('preserves first-touch attribution while the traveller browses', () => {
    window.history.replaceState({}, '', '/safaris?utm_source=tripadvisor&utm_medium=referral');
    captureMarketingAttribution();

    window.history.replaceState({}, '', '/hotels?utm_source=instagram&utm_medium=social');
    expect(getMarketingAttribution()).toMatchObject({
      source: 'tripadvisor',
      medium: 'referral',
      landingPage: '/safaris?utm_source=tripadvisor&utm_medium=referral',
    });
  });

  it('stores the visitor analytics preference independently of attribution', () => {
    expect(getAnalyticsConsent()).toBeNull();
    setAnalyticsConsent('denied');
    expect(getAnalyticsConsent()).toBe('denied');
    expect(getMarketingAttribution()).toMatchObject({ source: 'direct', medium: '(none)' });
  });

  it('persists the current page view after analytics consent is granted', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 201,
      json: async () => ({ id: 'event-1' }),
    } as Response);
    vi.stubGlobal('fetch', fetchMock);
    document.title = 'Safari ideas';
    window.history.replaceState({}, '', '/safaris?utm_source=google&utm_medium=organic&utm_campaign=content');

    setAnalyticsConsent('granted');

    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const [, request] = fetchMock.mock.calls[0];
    expect(fetchMock.mock.calls[0][0]).toBe('http://localhost:4000/api/analytics/events');
    expect(request).toEqual(expect.objectContaining({ method: 'POST', credentials: 'include' }));
    expect(JSON.parse(String(request?.body))).toMatchObject({
      eventName: 'page_view',
      pagePath: '/safaris?utm_source=google&utm_medium=organic&utm_campaign=content',
      source: 'google',
      medium: 'organic',
      campaign: 'content',
      metadata: { page_title: 'Safari ideas' },
    });
  });

  it('does not persist behavioral events when analytics consent is denied', () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    setAnalyticsConsent('denied');

    trackEvent('shortlist_added', { tour_id: 'tour-1' });

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('persists consented events with metadata and emits the local analytics event', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 201,
      json: async () => ({ id: 'event-2' }),
    } as Response);
    vi.stubGlobal('fetch', fetchMock);
    window.history.replaceState({}, '', '/safaris?utm_source=tripadvisor&utm_medium=referral');
    window.localStorage.setItem('gss-analytics-consent-v1', 'granted');
    const listener = vi.fn();
    window.addEventListener('gss:analytics', listener as EventListener);

    trackEvent('shortlist_added', { tour_id: 'tour-1', page_path: '/safaris/test-tour' });

    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(JSON.parse(String(fetchMock.mock.calls[0][1]?.body))).toMatchObject({
      eventName: 'shortlist_added',
      pagePath: '/safaris/test-tour',
      source: 'tripadvisor',
      medium: 'referral',
      metadata: { tour_id: 'tour-1' },
    });
    expect(listener).toHaveBeenCalledTimes(1);
    window.removeEventListener('gss:analytics', listener as EventListener);
  });

  it('tracks route page views through the shared event pipeline', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 201,
      json: async () => ({ id: 'event-3' }),
    } as Response);
    vi.stubGlobal('fetch', fetchMock);
    window.localStorage.setItem('gss-analytics-consent-v1', 'granted');
    document.title = 'Amboseli Safari';

    trackPageView('/destinations/amboseli');

    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(JSON.parse(String(fetchMock.mock.calls[0][1]?.body))).toMatchObject({
      eventName: 'page_view',
      pagePath: '/destinations/amboseli',
      metadata: { page_title: 'Amboseli Safari' },
    });
  });
});
