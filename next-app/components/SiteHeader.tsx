import Image from 'next/image';
import Link from 'next/link';
import { EnquiryButton } from './EnquiryButton';

const links = [
  ['Safaris', '/safaris'], ['Destinations', '/destinations'], ['Hotels', '/hotels'], ['Guides', '/guides'],
  ['Reviews', '/reviews'], ['About', '/about'], ['Contact', '/contact'],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-lockup" aria-label="Good Secrets Safaris home">
          <Image src="/images/brand/logo.png" alt="Good Secrets Safaris" width={54} height={54} priority />
          <span><strong>Good Secrets Safaris</strong><small>Kenya · Tanzania · Zanzibar</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
        <div className="header-actions"><Link className="shortlist-link" href="/shortlist">Shortlist</Link><EnquiryButton label="Plan my safari" /></div>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">{links.slice(0, 6).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    </header>
  );
}
