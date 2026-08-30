import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { captureMarketingAttribution, getAnalyticsConsent, initializeAnalytics, trackPageView } from '../../lib/analytics';

export const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    captureMarketingAttribution();
    if (getAnalyticsConsent() === 'granted') initializeAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
};
