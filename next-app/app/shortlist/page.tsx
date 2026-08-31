import type { Metadata } from 'next';
import { ShortlistView } from '../../components/ShortlistView';

export const metadata:Metadata={title:'My Safari Shortlist',description:'Compare safari ideas you have saved while planning with Good Secrets Safaris.',alternates:{canonical:'/shortlist'},robots:{index:false,follow:false}};
export default function ShortlistPage(){return <><header className="page-hero"><div className="container"><p className="eyebrow">Your planning workspace</p><h1>Safari shortlist</h1><p>Your saved ideas stay in this browser. Use them to compare routes before sending context to a safari planner.</p></div></header><section className="section"><div className="container"><ShortlistView/></div></section></>}
