/**
 * Sets the document <title> and meta description for the current page.
 *
 * React 19 natively hoists <title>, <meta>, and <link> tags rendered
 * anywhere in the component tree up into the document <head>, so this
 * doesn't need react-helmet or any manual document.title side effects.
 * Rendering a <PageMeta> further down the tree (e.g. inside a detail
 * route) overrides whatever an ancestor rendered.
 */
interface PageMetaProps {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

const SITE_NAME = 'Good Secrets Safaris';
const DEFAULT_DESCRIPTION =
  'Personalized East Africa safari experiences, luxury wildlife encounters, and coastal getaways across Kenya, Tanzania, and Zanzibar.';

export const PageMeta: React.FC<PageMetaProps> = ({ title, description, image, noIndex }) => {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const metaDescription = description || DEFAULT_DESCRIPTION;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      {image && <meta property="og:image" content={image} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </>
  );
};
