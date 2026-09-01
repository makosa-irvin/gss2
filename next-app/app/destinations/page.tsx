import type { Metadata } from 'next';
import { DestinationExplorer } from '../../components/DestinationExplorer';
import { getDestinations } from '../../lib/api';

export const revalidate=900;
export const metadata:Metadata={title:'Destinations',description:'Explore Maasai Mara, Serengeti, Zanzibar and other East Africa safari destinations.',alternates:{canonical:'/destinations'}};
export default async function DestinationsPage(){return <DestinationExplorer destinations={await getDestinations()}/>}
