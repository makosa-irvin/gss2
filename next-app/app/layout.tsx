import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

const SITE_URL = 'https://www.goodsecretssafaris.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Good Secrets Safaris',
    template: '%s | Good Secrets Safaris',
  },
  description: 'Private Kenya, Tanzania and Zanzibar safaris planned around your dates, interests and travel style.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="site-header">
            <div className="site-header__inner">
              <Link href="/" className="brand">Good Secrets Safaris · Next migration</Link>
              <nav className="nav" aria-label="Migration preview navigation">
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/booking-conditions">Booking conditions</Link>
              </nav>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
