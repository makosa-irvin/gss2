import type { Metadata } from 'next';
import { SafariExplorer } from '../../components/SafariExplorer';
import { getTours } from '../../lib/api';

export const revalidate=900;
export const metadata:Metadata={title:'Safaris & Tours',description:'Browse private Kenya and Tanzania safaris and tailor-made East Africa journeys.',alternates:{canonical:'/safaris'}};

export default async function SafarisPage({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const params=await searchParams;const one=(key:string)=>typeof params[key]==='string'?params[key] as string:undefined;const tours=await getTours();return <SafariExplorer tours={tours} initial={{country:one('country'),destination:one('destination'),duration:one('duration'),travelStyle:one('travelStyle'),travelerType:one('travelerType')}}/>}
