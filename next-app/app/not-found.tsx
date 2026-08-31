import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass } from 'lucide-react';

export const metadata: Metadata = { title: 'Page Not Found', robots: { index: false, follow: false } };

export default function NotFound() {
  return <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-6"><Compass className="w-12 h-12 text-brand-strong" /><div className="space-y-2"><h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">This trail doesn&apos;t exist</h1><p className="text-sm text-on-shell-muted max-w-md">The page you&apos;re looking for may have been moved or the link may be out of date.</p></div><Link href="/" className="px-6 py-3 rounded-xl bg-brand hover:bg-brand-strong text-white font-bold text-sm uppercase tracking-wider transition-colors">Back to Home</Link></div>;
}
