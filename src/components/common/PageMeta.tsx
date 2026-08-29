/**
 * Route-level metadata. React 19 hoists these head elements from the route
 * component into <head>. Canonicals are generated from the public site URL,
 * never from the API/admin host.
 */
interface PageMetaProps {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonicalPath?: string;
  type?: 'website' | 'article';
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = 'Good Secrets Safaris';
const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.goodsecretssafaris.com').replace(/\/$/, '');
const DEFAULT_DESCRIPTION = 'Personalized East Africa safari experiences, luxury wildlife encounters, and coastal getaways across Kenya, Tanzania, and Zanzibar.';

function absoluteUrl(value?: string): string | undefined {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
}

export const PageMeta: React.FC<PageMetaProps> = ({ title, description, image, noIndex, canonicalPath, type = 'website', structuredData }) => {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = canonicalPath ? `${SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}` : undefined;
  const socialImage = absoluteUrl(image);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {socialImage && <meta property="og:image" content={socialImage} />}
      <meta name="twitter:card" content={socialImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {socialImage && <meta name="twitter:image" content={socialImage} />}
      {noIndex && <meta name="robots" content="noindex, follow" />}
      {structuredData && <script type="application/ld+json">{JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>}
    </>
  );
};
