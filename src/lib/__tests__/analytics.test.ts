import { beforeEach, describe, expect, it } from 'vitest';
import {
  captureMarketingAttribution,
  getAnalyticsConsent,
  getMarketingAttribution,
  setAnalyticsConsent,
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
});
