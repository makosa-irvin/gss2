import type { Metadata } from 'next';
import { AdminPortal } from '../../components/AdminPortal';

export const metadata:Metadata={title:'Admin',description:'Good Secrets Safaris administration portal.',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default function AdminPage(){return <><header className="page-hero"><div className="container"><p className="eyebrow">Private administration</p><h1>CRM & catalog</h1><p>Authenticated management for enquiries, safari content, destinations, hotels, blog posts and testimonials.</p></div></header><section className="section"><div className="container"><AdminPortal/></div></section></>}
