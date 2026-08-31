import type { Metadata } from 'next';
import { SafariBuilder } from '../../components/SafariBuilder';

export const metadata:Metadata={title:'Custom Safari Builder',description:'Answer a few quick questions to create a useful safari brief for a tailor-made Kenya, Tanzania or Zanzibar itinerary.',alternates:{canonical:'/safari-builder'}};
export default function SafariBuilderPage(){return <><header className="page-hero"><div className="container"><p className="eyebrow">Tailor-made journey engine</p><h1>Build a useful safari brief.</h1><p>Answer six questions. We will use them to narrow the route rather than pretending current lodge and flight availability can be solved by a generic calculator.</p></div></header><section className="section"><div className="container" style={{maxWidth:900}}><SafariBuilder/></div></section></>}
