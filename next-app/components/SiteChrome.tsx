'use client';

import { usePathname } from 'next/navigation';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname === '/admin' || pathname?.startsWith('/admin/');

  if (isAdmin) return <>{children}</>;

  return <>
    <div className="site-frame">
      <SiteHeader />
      <main className="main-content">{children}</main>
      <SiteFooter />
    </div>
    <FloatingWhatsApp />
  </>;
}
