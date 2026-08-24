import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { HotelDetailView } from '../views/HotelDetailView';
import { NotFoundView } from './NotFoundView';

interface HotelDetailRouteProps {
  onOpenEnquiryModal: (payload?: any) => void;
}

export const HotelDetailRoute: React.FC<HotelDetailRouteProps> = ({ onOpenEnquiryModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const { hotels } = useData();
  const navigate = useNavigate();

  const hotel = hotels.find(h => h.slug === slug);
  if (!hotel) return <NotFoundView />;

  return (
    <HotelDetailView
      hotel={hotel}
      onBack={() => navigate('/hotels')}
      onOpenEnquiryModal={onOpenEnquiryModal}
    />
  );
};
