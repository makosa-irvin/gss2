import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { PageMeta } from '../components/common/PageMeta';

export const NotFoundView: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-6">
      <PageMeta title="Page Not Found" noIndex />
      <Compass className="w-12 h-12 text-[#9e7120]" />
      <div className="space-y-2">
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#161f19]">
          This trail doesn't exist
        </h1>
        <p className="text-sm text-[#5d6e62] max-w-md">
          The page you're looking for may have been moved or the link may be out of date.
        </p>
      </div>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-[#b3822a] hover:bg-[#9e7120] text-white font-bold text-sm uppercase tracking-wider transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};
