import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { TourDetailView } from '../views/TourDetailView';
import { NotFoundView } from './NotFoundView';

interface TourDetailRouteProps {
  onOpenEnquiryModal: (payload?: any) => void;
}

/**
 * Resolves /safaris/:slug to a real Tour from context and renders
 * TourDetailView, or a 404 if the slug doesn't match anything. Keeping
 * this lookup at the route level (rather than inside TourDetailView
 * itself) means TourDetailView stays a plain, easily-testable component
 * that just takes a `tour` prop - it doesn't need to know about routing.
 */
export const TourDetailRoute: React.FC<TourDetailRouteProps> = ({ onOpenEnquiryModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const { tours, destinations } = useData();
  const navigate = useNavigate();

  const tour = tours.find(t => t.slug === slug);
  if (!tour) return <NotFoundView />;

  return (
    <TourDetailView
      tour={tour}
      onBack={() => navigate('/safaris')}
      onOpenEnquiryModal={onOpenEnquiryModal}
      onSelectDestination={(destName) => {
        const dest = destinations.find(d => d.name === destName);
        if (dest) navigate(`/destinations/${dest.slug}`);
      }}
    />
  );
};
