import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata:Metadata={title:'Page Not Found',robots:{index:false,follow:false}};
export default function NotFound(){return <section className="page-hero" style={{minHeight:'65vh',display:'grid',alignItems:'center'}}><div className="container"><p className="eyebrow">404 · Route not found</p><h1>This safari trail ends here.</h1><p>The page may have moved during the website rebuild. Continue with the current safari catalog or planning guides.</p><div className="hero-actions"><Link className="button primary" href="/safaris">Explore safaris</Link><Link className="button secondary" href="/guides">Planning guides</Link></div></div></section>}
