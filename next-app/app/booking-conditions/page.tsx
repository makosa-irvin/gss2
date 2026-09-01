import { LEGAL_PAGES } from '../../lib/legal';
import { LegalPage, legalMetadata } from '../../components/LegalPage';

const page = LEGAL_PAGES['booking-conditions'];
export const metadata = legalMetadata('/booking-conditions', page);

export default function BookingConditionsPage() {
  return <LegalPage page={page} />;
}
