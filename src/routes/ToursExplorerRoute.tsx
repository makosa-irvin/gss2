import { useSearchParams, useNavigate } from 'react-router-dom';
import { ToursExplorerView } from '../views/ToursExplorerView';

interface ToursExplorerRouteProps {
  onOpenEnquiryModal: (payload?: any) => void;
}

/**
 * /safaris?destination=...&duration=...&travelStyle=...&travelerType=...&country=...
 * Reading filters from the URL (instead of local-only state) means a
 * filtered results page can be bookmarked, shared, or linked to directly
 * from marketing emails/ads - a plain in-memory `currentView` state
 * could never support that.
 */
export const ToursExplorerRoute: React.FC<ToursExplorerRouteProps> = ({ onOpenEnquiryModal }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialFilters = {
    destination: searchParams.get('destination') || undefined,
    duration: searchParams.get('duration') || undefined,
    travelStyle: searchParams.get('travelStyle') || undefined,
    travelerType: searchParams.get('travelerType') || undefined,
    country: searchParams.get('country') || undefined,
  };

  return (
    <ToursExplorerView
      initialFilters={initialFilters}
      onSelectTour={(tour) => navigate(`/safaris/${tour.slug}`)}
      onOpenEnquiryModal={onOpenEnquiryModal}
    />
  );
};
