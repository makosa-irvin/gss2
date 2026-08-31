import type { Metadata } from 'next';
import { Heart } from 'lucide-react';
import { ShortlistView } from '../../components/ShortlistView';

export const metadata:Metadata={title:'My Safari Shortlist',description:'Keep your favourite Good Secrets Safaris itineraries and stays together while you plan your East Africa trip.',alternates:{canonical:'/shortlist'},robots:{index:false,follow:false}};
export default function ShortlistPage(){return <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-10"><header className="max-w-3xl space-y-4"><span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-soft"><Heart className="w-4 h-4 fill-current"/>Saved trips</span><h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-white">Build your trip basket.</h1><p className="text-base sm:text-lg text-on-shell-muted leading-relaxed">Keep everything you like saved, then choose only the safaris and stays you want us to compare in one enquiry. Your saved list stays unchanged.</p></header><ShortlistView/></div>}
