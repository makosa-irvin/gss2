import { useParams } from 'react-router-dom';
import { BlogView } from '../views/BlogView';

interface BlogRouteProps {
  onOpenEnquiryModal: (payload?: any) => void;
}

/**
 * Handles both /blog and /blog/:slug. BlogView keeps its own internal
 * "selectedPost" state seeded from `initialSlug`, which only runs once on
 * mount - so if a user ever deep-links from one /blog/:slug straight to
 * another (bypassing the list), a stale post would stick around without
 * the `key` here forcing a fresh mount per slug.
 */
export const BlogRoute: React.FC<BlogRouteProps> = ({ onOpenEnquiryModal }) => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <BlogView key={slug || 'list'} initialSlug={slug} onOpenEnquiryModal={onOpenEnquiryModal} />
  );
};
