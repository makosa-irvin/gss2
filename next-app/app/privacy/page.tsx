import { LEGAL_PAGES } from '../../lib/legal';
import { LegalPage, legalMetadata } from '../../components/LegalPage';

const page = LEGAL_PAGES.privacy;
export const metadata = legalMetadata('/privacy', page);

export default function PrivacyPage() {
  return <LegalPage page={page} />;
}
