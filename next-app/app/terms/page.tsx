import { LEGAL_PAGES } from '../../lib/legal';
import { LegalPage, legalMetadata } from '../../components/LegalPage';

const page = LEGAL_PAGES.terms;
export const metadata = legalMetadata('/terms', page);

export default function TermsPage() {
  return <LegalPage page={page} />;
}
