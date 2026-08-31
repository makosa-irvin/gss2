import Image from 'next/image';
import Link from 'next/link';
import { EnquiryButton } from './EnquiryButton';
import { companyContact } from '../lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/images/brand/logo.png" alt="Good Secrets Safaris" width={72} height={72} />
          <h2>Good Secrets Safaris</h2>
          <p>Private Kenya, Tanzania and Zanzibar safaris planned around your dates, interests and travel style.</p>
          <div className="trust-badges">
            <Image src="/images/brand/tra-badge.jpg" alt="Tourism Regulatory Authority badge" width={70} height={70} />
            <Image src="/images/brand/amref-badge.jpg" alt="AMREF Flying Doctors badge" width={70} height={70} />
          </div>
        </div>
        <div><h3>Explore</h3><Link href="/safaris">Safaris</Link><Link href="/destinations">Destinations</Link><Link href="/hotels">Places to stay</Link><Link href="/guides">Planning guides</Link><Link href="/blog">Stories</Link></div>
        <div><h3>Plan with confidence</h3><Link href="/reviews">Traveler reviews</Link><Link href="/plan-with-us">How we plan</Link><Link href="/guides/booking-safari-direct-local-operator">Booking direct: what to know</Link><Link href="/safari-builder">Safari builder</Link><Link href="/shortlist">My shortlist</Link></div>
        <div><h3>Contact</h3><a href={`tel:${companyContact.phone.replace(/\s/g, '')}`}>{companyContact.phone}</a><a href={`mailto:${companyContact.email}`}>{companyContact.email}</a><p>{companyContact.address}</p><EnquiryButton label="Request a safari plan" /></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Good Secrets Safaris</span><span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/booking-conditions">Booking conditions</Link><Link href="/admin">Admin</Link></span></div>
    </footer>
  );
}
