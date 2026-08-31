'use client';

import { usePathname } from 'next/navigation';

export function SiteChrome({ children, header, footer, whatsapp }: { children: React.ReactNode; header: React.ReactNode; footer: React.ReactNode; whatsapp: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname === '/admin' || pathname?.startsWith('/admin/');

  if (isAdmin) return <>{children}</>;

  return <>
    <div className="site-frame">
      {header}
      <main className="main-content">{children}</main>
      {footer}
    </div>
    {whatsapp}
  </>;
}
