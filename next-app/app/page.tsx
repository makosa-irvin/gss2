import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js Migration Preview',
  description: 'Internal preview shell for the Good Secrets Safaris hybrid rendering migration.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <main className="page">
      <span className="eyebrow">Migration foundation</span>
      <h1>Good Secrets Safaris on Next.js</h1>
      <p className="lede">This parallel application lets us migrate public routes to server-rendered and statically generated HTML without changing the current Vite deployment until route parity is proven.</p>
      <div className="preview-note"><strong>Current slice:</strong> legal pages are migrated as static Server Components with native Next.js metadata. Interactive and data-backed routes remain on the existing React/Vite application until later migration phases.</div>
      <div className="links">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Website Terms</Link>
        <Link href="/booking-conditions">Booking Conditions</Link>
      </div>
    </main>
  );
}
