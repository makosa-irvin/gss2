import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { ClientProviders } from '../components/ClientProviders';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { SiteChrome } from '../components/SiteChrome';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { DEFAULT_SITE_URL, SITE_NAME } from '../lib/site';
import { getDestinations, getSettings, getTours } from '../lib/api';

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || process.env.VITE_SITE_URL || DEFAULT_SITE_URL);

export const metadata: Metadata = {
  metadataBase,
  title: { default: 'Good Secrets Safaris | Kenya, Tanzania & Zanzibar Safaris', template: `%s | ${SITE_NAME}` },
  description: 'Private Kenya, Tanzania and Zanzibar safaris planned around your dates, interests and travel style.',
  applicationName: SITE_NAME,
  openGraph: { siteName: SITE_NAME, type: 'website', images: ['/images/catalog/mara-savannah.jpg'] },
  twitter: { card: 'summary_large_image' },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [settings, tours, destinations] = await Promise.all([getSettings(), getTours(), getDestinations()]);
  return <html lang="en"><body><ClientProviders><SiteChrome header={<SiteHeader />} footer={<SiteFooter />} whatsapp={<Suspense fallback={null}><FloatingWhatsApp tours={tours.map(item => ({ slug: item.slug, title: item.title }))} destinations={destinations.map(item => ({ slug: item.slug, title: item.name }))} number={settings?.booking?.whatsappNumber || settings?.contact.whatsapp || '+254729000410'} defaultMessage={settings?.booking?.whatsappDefaultMessage} /></Suspense>}>{children}</SiteChrome></ClientProviders></body></html>;
}
