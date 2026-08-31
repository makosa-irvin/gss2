import type { Metadata } from 'next';
import './globals.css';
import { ClientProviders } from '../components/ClientProviders';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { DEFAULT_SITE_URL, SITE_NAME } from '../lib/site';

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || process.env.VITE_SITE_URL || DEFAULT_SITE_URL);

export const metadata: Metadata = {
  metadataBase,
  title: { default: 'Good Secrets Safaris | Kenya, Tanzania & Zanzibar Safaris', template: `%s | ${SITE_NAME}` },
  description: 'Private Kenya, Tanzania and Zanzibar safaris planned around your dates, interests and travel style.',
  applicationName: SITE_NAME,
  openGraph: { siteName: SITE_NAME, type: 'website', images: ['/images/catalog/mara-savannah.jpg'] },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ClientProviders><div className="site-frame"><SiteHeader/><main className="main-content">{children}</main><SiteFooter/></div><FloatingWhatsApp/></ClientProviders></body></html>;
}
