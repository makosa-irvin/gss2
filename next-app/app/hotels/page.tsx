import type { Metadata } from 'next';
import { HotelExplorer } from '../../components/HotelExplorer';
import { getHotels } from '../../lib/api';

export const revalidate=900;
export const metadata:Metadata={title:'Beach Resorts & Lodges',description:'Browse beach resorts and safari lodges in Kenya, including Kenyan resident rates.',alternates:{canonical:'/hotels'}};
export default async function HotelsPage({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const params=await searchParams;return <HotelExplorer hotels={await getHotels()} initialResident={params.resident==='true'}/>}
