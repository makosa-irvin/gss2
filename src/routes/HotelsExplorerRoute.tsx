import { useSearchParams, useNavigate } from 'react-router-dom';
import { HotelsExplorerView } from '../views/HotelsExplorerView';

interface HotelsExplorerRouteProps {
  onOpenEnquiryModal: (payload?: any) => void;
}

/** /hotels?resident=true */
export const HotelsExplorerRoute: React.FC<HotelsExplorerRouteProps> = ({ onOpenEnquiryModal }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <HotelsExplorerView
      initialResidentOnly={searchParams.get('resident') === 'true'}
      onSelectHotel={(hotel) => navigate(`/hotels/${hotel.slug}`)}
      onOpenEnquiryModal={onOpenEnquiryModal}
    />
  );
};
