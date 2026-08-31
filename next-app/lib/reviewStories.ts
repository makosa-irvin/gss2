export const SAFARI_BOOKINGS_URL='https://www.safaribookings.com/p7127';
export const TRIPADVISOR_URL='https://www.tripadvisor.com/Attraction_Review-g294207-d25284334-Reviews-Good_Secrets_Safaris-Nairobi.html';
export type ReviewStory={platform:'Tripadvisor'|'SafariBookings';reviewer:string;title:string;date:string;rating:number;excerpt:string;destinations:string[]};
export const featuredReviews:ReviewStory[]=[
{platform:'SafariBookings',reviewer:'Jordan Pope',title:'Brilliant Team, incredible experience',date:'17 Aug 2026',rating:5,excerpt:'Everything was organised seamlessly.',destinations:[]},
{platform:'SafariBookings',reviewer:'Pritesh',title:'Very professional and knowledgeable Tour Guide',date:'16 Jun 2026',rating:5,excerpt:'Extremely friendly and professional.',destinations:[]},
{platform:'Tripadvisor',reviewer:'Martin',title:'Private safari in Kenya',date:'14 Jul 2026',rating:5,excerpt:'Professional and highly skilled.',destinations:[]},
{platform:'Tripadvisor',reviewer:'Sondra M',title:'Perfect 9-Day Safari',date:'17 Nov 2025',rating:5,excerpt:'Felt safe and cared for from start to finish.',destinations:['Ol Pejeta','Maasai Mara','Lake Nakuru','Lake Naivasha','Hell’s Gate','Mount Longonot','Crescent Island','Amboseli','Nairobi National Park']},
{platform:'Tripadvisor',reviewer:'Kris K',title:'Super safari company in Kenya',date:'1 Nov 2025',rating:5,excerpt:'Wonderful from start to finish.',destinations:['Ol Pejeta','Amboseli']},
{platform:'Tripadvisor',reviewer:'Davide Conti',title:'Unforgettable Safari with Excellent Guides and Service',date:'25 Aug 2025',rating:5,excerpt:'Truly outstanding.',destinations:[]},
{platform:'Tripadvisor',reviewer:'Brian S',title:'Exceptional',date:'8 Aug 2025',rating:5,excerpt:'The best trip we have ever been on.',destinations:['Maasai Mara','Lake Nakuru','Lake Naivasha']},
{platform:'Tripadvisor',reviewer:'Clare K',title:'Exceptional and professional',date:'10 Aug 2025',rating:5,excerpt:'Everything ran smoothly and felt so well organized.',destinations:[]},
{platform:'Tripadvisor',reviewer:'Lucia M',title:'Wonderful experience',date:'28 Mar 2025',rating:5,excerpt:'A wonderful experience with this tour operator.',destinations:[]},
{platform:'Tripadvisor',reviewer:'Hua Z',title:'The best experience we ever had in Kenya',date:'6 Feb 2025',rating:5,excerpt:'Very professional and open to communication.',destinations:['Maasai Mara','Amboseli']}
];
export const sourceUrl=(platform:ReviewStory['platform'])=>platform==='SafariBookings'?SAFARI_BOOKINGS_URL:TRIPADVISOR_URL;
const normalize=(value:string)=>value.toLowerCase().replace(/[’']/g,"'").replace('masai','maasai').trim();
export function getRouteReviewStories(tourDestinations:string[]=[],limit=3){return featuredReviews.filter(review=>review.destinations.some(reviewPlace=>tourDestinations.some(tourPlace=>{const a=normalize(tourPlace);const b=normalize(reviewPlace);return a.includes(b)||b.includes(a)||a.split(' ').some(part=>part.length>4&&b.includes(part));}))).slice(0,limit)}
