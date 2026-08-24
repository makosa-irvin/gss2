import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { DestinationDetailView } from '../views/DestinationDetailView';
import { NotFoundView } from './NotFoundView';

interface DestinationDetailRouteProps {
  onOpenEnquiryModal: (payload?: any) => void;
}

export const DestinationDetailRoute: React.FC<DestinationDetailRouteProps> = ({ onOpenEnquiryModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const { destinations } = useData();
  const navigate = useNavigate();

  const destination = destinations.find(d => d.slug === slug);
  if (!destination) return <NotFoundView />;

  return (
    <DestinationDetailView
      destination={destination}
      onBack={() => navigate('/destinations')}
      onSelectTour={(tour) => navigate(`/safaris/${tour.slug}`)}
      onSelectHotel={(hotel) => navigate(`/hotels/${hotel.slug}`)}
      onOpenEnquiryModal={onOpenEnquiryModal}
    />
  );
};
