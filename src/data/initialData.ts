import { Tour, Destination, Hotel, Testimonial, BlogPost, CompanySettings } from '../types';

export const initialCompanySettings: CompanySettings = {
  companyName: "Good Secrets Safaris",
  tagline: "Your Africa. Your Story. Your Safari.",
  description: "Specializing in personalized Kenya, Tanzania and Zanzibar bespoke wildlife journeys, romantic escapes, and luxury beach holidays designed around you.",
  logoUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=200&q=80",
  contact: {
    email: "info@goodsecretssafaris.com",
    phone: "+254 700 000 000",
    whatsapp: "+254700000000",
    address: "Westlands Commercial Centre, Nairobi, Kenya",
    businessHours: "Monday - Sunday: 7:00 AM - 9:00 PM EAT (24/7 Safari Support)"
  },
  social: {
    instagram: "https://instagram.com/goodsecretssafaris",
    facebook: "https://facebook.com/goodsecretssafaris",
    tiktok: "https://tiktok.com/@goodsecretssafaris",
    youtube: "https://youtube.com/@goodsecretssafaris",
    linkedin: "https://linkedin.com/company/good-secrets-safaris"
  },
  currency: {
    primary: "USD",
    exchangeRateUsdToKes: 130
  },
  booking: {
    defaultEnquiryMessage: "Hello Good Secrets Safaris, I would like to enquire about planning a customized safari trip.",
    bookingEmail: "safaris@goodsecretssafaris.com",
    whatsappNumber: "+254700000000",
    whatsappDefaultMessage: "Hello Good Secrets Safaris, I'd like to enquire about a safari."
  },
  seo: {
    defaultTitle: "Good Secrets Safaris | Kenya, Tanzania & Zanzibar Safaris",
    defaultDescription: "Experience bespoke African wildlife safaris, Kilimanjaro views, Serengeti migration tours, and Zanzibar beach holidays with Good Secrets Safaris.",
    defaultOgImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85"
  }
};

export const initialDestinations: Destination[] = [
  {
    id: "dest-masai-mara",
    name: "Maasai Mara National Reserve",
    slug: "maasai-mara",
    country: "Kenya",
    subtitle: "The Crown Jewel of African Wildlife and the Great Migration",
    description: "World-renowned for exceptional populations of lions, leopards, cheetahs, and the dramatic annual Great Wildebeest Migration across the crocodile-infested Mara River.",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTimeToVisit: "July to October for the Great Wildebeest Migration; Year-round for Big Cat sightings and predator action.",
    wildlife: ["Lions", "Cheetahs", "Leopards", "Wildebeest", "Elephants", "Black Rhinos", "Giraffes", "Zebras"],
    activities: ["Hot Air Balloon Safaris", "Mara River Crossing Drives", "Maasai Cultural Village Visits", "Bush Breakfasts & Sundowners", "Night Game Drives in Conservancies"],
    recommendedDuration: "3 to 5 Days",
    whereToStay: "Luxury tented river camps along the Talek and Mara Rivers or private conservancy eco-lodges.",
    featured: true,
    mapLocation: { lat: -1.4061, lng: 35.1075, zoom: 10 },
    faqs: [
      {
        question: "When is the best time to see the River Crossings in Maasai Mara?",
        answer: "River crossings typically occur between late July and mid-October as millions of wildebeest and zebras traverse between the Serengeti and Mara."
      },
      {
        question: "Is Maasai Mara suitable for families with young children?",
        answer: "Yes, family-friendly private lodges and enclosed camps offer customized game drives, children's bush-craft programs, and interconnecting luxury tents."
      }
    ],
    seo: {
      title: "Maasai Mara Safaris & Tours | Good Secrets Safaris",
      description: "Discover luxury Maasai Mara safaris, Great Migration river crossings, and private game drives with expert Kenyan guides."
    }
  },
  {
    id: "dest-amboseli",
    name: "Amboseli National Park",
    slug: "amboseli",
    country: "Kenya",
    subtitle: "Land of Giants with Majestic Mount Kilimanjaro Backdrops",
    description: "Famous for being the best place in Africa to get up close to free-ranging elephant herds with snow-capped Mount Kilimanjaro towering in the background.",
    heroImage: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1581852017103-68ac6550407b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTimeToVisit: "June to October and January to February for clear Kilimanjaro views and peak dry-season wildlife gatherings.",
    wildlife: ["Huge Tusker Elephants", "Lions", "Cheetahs", "Hyenas", "Cape Buffalos", "Giraffes", "Over 400 Bird Species"],
    activities: ["Observation Hill Viewpoint", "Elephant Research Walks", "Maasai Homestead Visits", "Photography at Sunset", "Swamp Birdwatching"],
    recommendedDuration: "2 to 3 Days",
    whereToStay: "Tortilis Camp, Ol Tukai Lodge, Amboseli Serena Safari Lodge, and luxury wilderness camps.",
    featured: true,
    mapLocation: { lat: -2.6527, lng: 37.2606, zoom: 11 },
    faqs: [
      {
        question: "Can we see Mount Kilimanjaro clearly from Amboseli?",
        answer: "Yes! Early mornings and late afternoons offer the clearest, unobstructed vistas of Africa's highest peak before midday clouds roll in."
      }
    ],
    seo: {
      title: "Amboseli Elephant Safaris & Kilimanjaro Views | Good Secrets Safaris",
      description: "Book customized Amboseli safaris with big elephant herds and iconic Kilimanjaro views."
    }
  },
  {
    id: "dest-samburu",
    name: "Samburu National Reserve",
    slug: "samburu",
    country: "Kenya",
    subtitle: "Untamed Northern Wilderness & The Samburu Special Five",
    description: "A rugged, dramatic arid paradise bisected by the palm-fringed Ewaso Nyiro River, home to unique wildlife species found nowhere else in southern Kenya.",
    heroImage: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTimeToVisit: "June to October and December to March for supreme game viewing around the life-giving Ewaso Nyiro River.",
    wildlife: ["Grevy's Zebra", "Reticulated Giraffe", "Beisa Oryx", "Gerenuk", "Somali Ostrich", "Leopards", "Lions", "Wild Dogs"],
    activities: ["Tracking the Samburu Special 5", "Samburu Warrior Cultural Encounters", "Camel Trek Safaris", "Riverbank Bush Dinners"],
    recommendedDuration: "3 to 4 Days",
    whereToStay: "Saruni Samburu, Elephant Bedroom Camp, Samburu Intrepids, Ashnil Samburu.",
    featured: true,
    mapLocation: { lat: 0.6272, lng: 37.5342, zoom: 11 },
    faqs: [
      {
        question: "What are the Samburu Special Five?",
        answer: "They are the Grevy's zebra, Reticulated giraffe, Beisa oryx, Gerenuk (long-necked antelope), and the blue-shanked Somali ostrich."
      }
    ],
    seo: {
      title: "Samburu Safaris & Special Five Wildlife | Good Secrets Safaris",
      description: "Explore northern Kenya's untamed Samburu reserve with luxury tented camps and rare wildlife."
    }
  },
  {
    id: "dest-serengeti",
    name: "Serengeti National Park",
    slug: "serengeti",
    country: "Tanzania",
    subtitle: "Endless Plains & the Epic Drama of Nature",
    description: "Tanzania's oldest and most iconic national park, encompassing 14,763 square kilometers of untamed savanna hosting over two million herbivores and apex predators.",
    heroImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTimeToVisit: "December to March for calving in Ndutu; July to October for Mara River crossings in Northern Serengeti.",
    wildlife: ["Wildebeest", "Lions", "Cheetahs", "Leopards", "Hyenas", "Elephants", "Topi", "Hippos"],
    activities: ["Hot Air Balloon Safaris", "Kopje Predator Tracking", "Fly-Camping Experiences", "Ndutu Calving Season Game Drives"],
    recommendedDuration: "4 to 7 Days",
    whereToStay: "Four Seasons Safari Lodge, Singita Sasakwa, Sayari Camp, Nomad Serengeti.",
    featured: true,
    faqs: [
      {
        question: "How do you combine Kenya and Tanzania in one safari?",
        answer: "We arrange seamless border transitions or short bush flights directly connecting Maasai Mara to Northern Serengeti or Kilimanjaro airport."
      }
    ],
    seo: {
      title: "Serengeti Safaris & Migration Expeditions | Good Secrets Safaris",
      description: "Experience the Serengeti's endless plains with private 4x4 Land Cruisers and premier luxury camps."
    }
  },
  {
    id: "dest-ngorongoro",
    name: "Ngorongoro Conservation Area",
    slug: "ngorongoro",
    country: "Tanzania",
    subtitle: "Africa's Eden & Intact Volcanic Caldera",
    description: "A UNESCO World Heritage site and natural wonder. The 600-meter deep unbroken caldera acts as a natural enclosure for 25,000 large animals, including dense lion prides and rare black rhinos.",
    heroImage: "https://images.unsplash.com/photo-1581852017103-68ac6550407b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTimeToVisit: "Year-round due to the permanent water and resident wildlife population inside the crater floor.",
    wildlife: ["Black Rhinos", "Lions", "Huge Bull Elephants", "Flamingos in Lake Magadi", "Spotted Hyenas", "Golden Jackals"],
    activities: ["Crater Floor Game Drives", "Olduvai Gorge Paleontological Tour", "Empakaai Crater Walking Safaris", "Crater Rim Sundowners"],
    recommendedDuration: "2 to 3 Days",
    whereToStay: "Ngorongoro Crater Lodge, Ngorongoro Serena Safari Lodge, The Highlands.",
    featured: true,
    faqs: [
      {
        question: "Can you see the Big 5 in a single day at Ngorongoro?",
        answer: "Ngorongoro offers one of the highest probabilities in Africa to encounter Lion, Leopard, Elephant, Buffalo, and Rhino in a single game drive."
      }
    ],
    seo: {
      title: "Ngorongoro Crater Safari Packages | Good Secrets Safaris",
      description: "Descend into the Ngorongoro Caldera for unmatched Big 5 encounters and volcanic vistas."
    }
  },
  {
    id: "dest-zanzibar",
    name: "Zanzibar Archipelago",
    slug: "zanzibar",
    country: "Zanzibar",
    subtitle: "Turquoise Waters, Spice Isles & Ancient Swahili Culture",
    description: "An exotic Indian Ocean paradise featuring pristine powder-white sands, kaleidoscopic coral reefs, fragrant spice plantations, and the UNESCO labyrinth of Stone Town.",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTimeToVisit: "June to October and December to February for sunny skies and tranquil crystal-clear waters.",
    wildlife: ["Dolphins at Kizimkazi", "Giant Aldabra Tortoises on Prison Island", "Red Colobus Monkeys in Jozani Forest"],
    activities: ["Stone Town Heritage Walks", "Traditional Dhow Sunset Cruises", "Mnemba Atoll Snorkeling", "Organic Spice Farm Tastings"],
    recommendedDuration: "3 to 6 Days",
    whereToStay: "The Residence Zanzibar, Zuri Zanzibar, Baraza Resort & Spa, Emerson Spice.",
    featured: true,
    faqs: [
      {
        question: "Is Zanzibar a good addition after a Kenya or Tanzania safari?",
        answer: "Yes! 'Bush & Beach' is our most popular pairing. A 1-hour flight from Arusha or Nairobi brings you straight to paradise after days in the wild."
      }
    ],
    seo: {
      title: "Zanzibar Beach Holidays & Bush-to-Beach Safaris | Good Secrets Safaris",
      description: "Indulge in luxury Zanzibar resorts, private dhow sails, and historic Stone Town explorations."
    }
  },
  {
    id: "dest-diani-beach",
    name: "Diani Beach",
    slug: "diani-beach",
    country: "Kenya",
    subtitle: "Africa's Leading Beach Destination on the Kenyan Coast",
    description: "Voted Africa's leading beach destination multiple times, Diani charms with 17 kilometers of silky white sand, gentle turquoise waters, and lush coastal forests.",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTimeToVisit: "November to March and July to October for blissful beach conditions and watersports.",
    wildlife: ["Colobus Monkeys", "Sea Turtles", "Whale Sharks (seasonal)", "Dolphins"],
    activities: ["Kitesurfing & Windsurfing", "Wasini Island Dolphin Dhow Tour", "Shimba Hills Rainforest Safari", "Glass-Bottom Boat Reef Tours"],
    recommendedDuration: "3 to 7 Days",
    whereToStay: "Swahili Beach Resort, The Sands at Nomad, Southern Palms Beach Resort, Baobab Beach Resort.",
    featured: true,
    faqs: [],
    seo: {
      title: "Diani Beach Holidays & Kenyan Coast Resorts | Good Secrets Safaris",
      description: "Relax at world-class Diani Beach luxury resorts with resident packages and international all-inclusive stays."
    }
  },
  {
    id: "dest-watamu",
    name: "Watamu & Malindi",
    slug: "watamu",
    country: "Kenya",
    subtitle: "Marine Reserves, Mangrove Creeks & Hemingways Elegance",
    description: "A tranquil coastal jewel renowned for the Watamu Marine National Park, crystalline sandbars, deep-sea fishing heritage, and the mysterious Gede Ruins.",
    heroImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTimeToVisit: "August to April for scuba diving, billfish angling, and sunbathing on sandbars.",
    wildlife: ["Green Sea Turtles", "Manta Rays", "Humpback Whales (Aug-Oct)", "Moray Eels"],
    activities: ["Watamu Marine Park Snorkeling", "Mida Creek Boardwalk & Dhow Dining", "Gede Ruins Swahili History", "Deep-Sea Big Game Fishing"],
    recommendedDuration: "3 to 5 Days",
    whereToStay: "Hemingways Watamu, Turtle Bay Beach Club, Medina Palms.",
    featured: false,
    faqs: [],
    seo: {
      title: "Watamu Beach & Marine Safaris | Good Secrets Safaris",
      description: "Experience Watamu's marine sanctuaries, Hemingways luxury, and coastal tranquility."
    }
  },
  {
    id: "dest-lake-nakuru-naivasha",
    name: "Lake Nakuru & Lake Naivasha",
    slug: "lake-nakuru-naivasha",
    country: "Kenya",
    subtitle: "Great Rift Valley Lakes, Rhinos & Walking Safaris",
    description: "An easy and captivating journey from Nairobi into the Great Rift Valley, combining Lake Nakuru's thriving sanctuary for endangered rhinos with Lake Naivasha's serene boat safaris and walking amongst giraffes on Crescent Island.",
    heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTimeToVisit: "Year-round destination with exceptional birdlife and reliable rhino encounters.",
    wildlife: ["White & Black Rhinos", "Rothschild's Giraffes", "Flamingos & Pelicans", "Hippos", "Fish Eagles", "Zebras"],
    activities: ["Rhino Sanctuary Drives", "Lake Naivasha Boat Rides", "Crescent Island Walking Safari", "Hell's Gate Gorge Cycling"],
    recommendedDuration: "1 to 2 Days",
    whereToStay: "Sarova Lion Hill Game Lodge, The Great Rift Valley Lodge, Enashipai Resort & Spa.",
    featured: false,
    faqs: [],
    seo: {
      title: "Lake Nakuru & Naivasha Safari Day Trips & Packages",
      description: "Explore Lake Nakuru and Naivasha with walking safaris, rhino tracking, and boat cruises."
    }
  },
  {
    id: "dest-nairobi",
    name: "Nairobi City & Wildlife",
    slug: "nairobi",
    country: "Kenya",
    subtitle: "The Safari Capital of the World",
    description: "The only metropolis on earth bordering a full national park where wild lions and rhinos roam against skyscrapers.",
    heroImage: "https://images.unsplash.com/photo-1581852017103-68ac6550407b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTimeToVisit: "Year-round for cultural stops, elephant orphan visits, and half-day wildlife drives.",
    wildlife: ["Lions", "Black Rhinos", "Orphaned Baby Elephants", "Rothschild Giraffes", "Leopards"],
    activities: ["David Sheldrick Elephant Orphanage", "Giraffe Centre Feeding", "Nairobi National Park Sunrise Drive", "Karen Blixen Museum", "Bomas of Kenya Cultural Dances"],
    recommendedDuration: "1 to 2 Days",
    whereToStay: "Hemingways Nairobi, Giraffe Manor, Villa Rosa Kempinski, House of Waine.",
    featured: false,
    faqs: [],
    seo: {
      title: "Nairobi Day Tours & Wildlife Excursions | Good Secrets Safaris",
      description: "Book Nairobi city safari excursions, elephant orphanage visits, and giraffe encounters."
    }
  }
];

export const initialTours: Tour[] = [
  {
    id: "tour-14-day-ultimate-kenya-tanzania",
    title: "14-Day Ultimate Kenya & Tanzania Safari Experience",
    slug: "14-day-ultimate-kenya-tanzania-safari",
    shortDescription: "Kenya and Tanzania's greatest hits in one trip — the Mara, the Serengeti, Ngorongoro Crater, and Amboseli's elephants beneath Kilimanjaro.",
    fullDescription: "Our most complete journey through East Africa, for travelers who want to see it all. Track the Great Migration across the Mara and the Serengeti, descend into Ngorongoro Crater, and watch elephant herds cross the plains below Kilimanjaro — all in a private 4x4 with a guide who knows exactly where to be and when.",
    country: "Kenya + Tanzania",
    destinations: ["Maasai Mara National Reserve", "Serengeti National Park", "Ngorongoro Conservation Area", "Amboseli National Park", "Samburu National Reserve"],
    durationDays: 14,
    durationLabel: "14 Days / 13 Nights",
    startingLocation: "Nairobi, Kenya",
    endingLocation: "Arusha / Kilimanjaro, Tanzania",
    categories: ["Multi-Country", "Big 5 Safari", "Luxury Experience"],
    travelStyles: ["Big 5", "Great Migration", "Luxury", "Photography"],
    comfortLevel: "Luxury",
    travelerTypes: ["Couples", "Families", "Groups", "Solo"],
    featured: true,
    popular: true,
    recommended: true,
    priceFrom: 9759,
    currency: "USD",
    soloPrice: 11450,
    sharingPrice: 9759,
    residentPriceKES: 980000,
    seasonalPricing: [
      {
        id: "sp-14-green",
        name: "Green Season (Jan - May)",
        startDate: "01-05",
        endDate: "05-31",
        soloPrice: 10200,
        sharingPrice: 8850,
        currency: "USD",
        notes: "Lush green landscapes, excellent predator sightings, fewer vehicles"
      },
      {
        id: "sp-14-migration",
        name: "Migration Peak (Jul - Oct)",
        startDate: "07-01",
        endDate: "10-31",
        soloPrice: 11450,
        sharingPrice: 9759,
        currency: "USD",
        notes: "Peak River Crossing and Great Migration season across Mara & Serengeti"
      },
      {
        id: "sp-14-shoulder",
        name: "Shoulder Season (Nov - Dec 20)",
        startDate: "11-01",
        endDate: "12-20",
        soloPrice: 10400,
        sharingPrice: 8990,
        currency: "USD"
      },
      {
        id: "sp-14-festive",
        name: "Festive Season (Dec 21 - Jan 4)",
        startDate: "12-21",
        endDate: "01-04",
        soloPrice: 11800,
        sharingPrice: 9990,
        currency: "USD"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581852017103-68ac6550407b?auto=format&fit=crop&w=1000&q=80"
    ],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi & Welcome Reception",
        subtitle: "Nairobi City",
        description: "Arrive at Jomo Kenyatta International Airport where your Good Secrets Safaris concierge welcomes you and transfers you to your boutique hotel. Safari briefing and welcome dinner.",
        accommodation: "Hemingways Nairobi / Villa Rosa Kempinski",
        meals: "Dinner Included",
        transport: "Private Luxury Alphard / Land Cruiser Transfer",
        activities: ["VIP Airport Meet & Greet", "Welcome Dinner", "Safari Briefing"]
      },
      {
        day: 2,
        title: "Nairobi to Samburu National Reserve",
        subtitle: "Northern Wilderness & Ewaso Nyiro River",
        description: "Depart north passing Mount Kenya into the arid beauty of Samburu. Afternoon game drive tracking the Samburu Special 5 species.",
        accommodation: "Elephant Bedroom Camp / Saruni Samburu",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser with pop-up roof",
        activities: ["Scenic drive through Central Highlands", "Afternoon Samburu Special 5 Game Drive"]
      },
      {
        day: 3,
        title: "Full Day in Samburu & Cultural Immersion",
        subtitle: "Rare Wildlife & Samburu Heritage",
        description: "Morning and afternoon game drives. Spot Reticulated giraffes, Grevy's zebras, and leopards resting in acacia trees. Visit a local Samburu cultural village.",
        accommodation: "Elephant Bedroom Camp",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Morning Game Drive", "Authentic Samburu Village Visit", "Sundowner by the Ewaso Nyiro River"]
      },
      {
        day: 4,
        title: "Samburu to Lake Nakuru National Park",
        subtitle: "Rhino Sanctuary & Birdlife",
        description: "Descend into the Great Rift Valley to Lake Nakuru. Afternoon game drive seeking white and black rhinos, tree-climbing lions, and Rothschild giraffes.",
        accommodation: "Sarova Lion Hill Game Lodge",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Rift Valley Viewpoint Stop", "Rhino Sanctuary Game Drive"]
      },
      {
        day: 5,
        title: "Lake Nakuru to Maasai Mara National Reserve",
        subtitle: "Into the World's Premier Wildlife Sanctuary",
        description: "Journey into the Maasai Mara savannah. Arrive in time for an exhilarating late afternoon game drive across the golden grasslands.",
        accommodation: "Mara Serena Safari Lodge / Ashnil Mara Camp",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Afternoon Big Cat Game Drive", "Campfire Stargazing"]
      },
      {
        day: 6,
        title: "Full Day Maasai Mara & Mara River Excursion",
        subtitle: "Predator Action & Migration Crossings",
        description: "Spend an unforgettable full day traversing the Mara plains. Picnic lunch in the bush beside the Mara River watching hippos and Nile crocodiles.",
        accommodation: "Mara Serena Safari Lodge / Ashnil Mara Camp",
        meals: "Breakfast, Picnic Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Full Day Game Drive", "Bush Picnic by Mara River", "Big 5 Tracking"]
      },
      {
        day: 7,
        title: "Maasai Mara to Lake Victoria / Speke Bay",
        subtitle: "Cross-Border Journey into Tanzania",
        description: "Morning transfer to the Isebania border with smooth assisted customs clearance. Proceed to the shores of Lake Victoria for a peaceful afternoon.",
        accommodation: "Speke Bay Lodge",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Private 4x4 Safari Land Cruiser",
        activities: ["Border crossing assistance", "Lake Victoria sunset cruise"]
      },
      {
        day: 8,
        title: "Lake Victoria to Serengeti National Park",
        subtitle: "Western Corridor & Central Serengeti",
        description: "Enter the vast Serengeti plains through Ndabaka gate. Game drive en route through the Western Corridor into Seronera central valley.",
        accommodation: "Four Seasons Safari Lodge / Kubu Kubu Tented Lodge",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Grumeti River Game Drive", "Central Serengeti Predator Patrol"]
      },
      {
        day: 9,
        title: "Full Day Serengeti Exploration",
        subtitle: "Endless Plains & Pride of Lions",
        description: "Full day game tracking across the Seronera Valley and rocky Kopjes where cheetahs and leopards scout for prey.",
        accommodation: "Four Seasons Safari Lodge / Kubu Kubu Tented Lodge",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Optional Sunrise Hot Air Balloon Safari", "All-day Serengeti Game Drive"]
      },
      {
        day: 10,
        title: "Serengeti to Ngorongoro Conservation Area",
        subtitle: "Olduvai Gorge & Caldera Rim",
        description: "Morning game drive in Serengeti. Stop at Olduvai Gorge, the cradle of mankind, before ascending to the breathtaking rim of Ngorongoro Crater.",
        accommodation: "Ngorongoro Serena Safari Lodge / Ngorongoro Crater Lodge",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Olduvai Gorge Museum Visit", "Crater Rim Sunset Viewing"]
      },
      {
        day: 11,
        title: "Ngorongoro Crater Floor Safari",
        subtitle: "Big 5 in Africa's Lost World",
        description: "Descend 600 meters to the caldera floor for a 6-hour safari. Spot black rhinos, massive bull tuskers, and flamingoes at Lake Magadi.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "Breakfast, Picnic Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Crater Floor Game Drive", "Picnic at Ngoitokitok Springs"]
      },
      {
        day: 12,
        title: "Ngorongoro to Amboseli National Park",
        subtitle: "Re-entering Kenya beneath Kilimanjaro",
        description: "Drive through Arusha and Namanga border to Amboseli National Park in Kenya. Marvel at the sheer majesty of Mount Kilimanjaro.",
        accommodation: "Ol Tukai Lodge / Amboseli Serena Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Cross-border transfer", "Afternoon Elephant Herd Safari"]
      },
      {
        day: 13,
        title: "Full Day Amboseli Wildlife Safari",
        subtitle: "Observation Hill & Giant Tusker Herds",
        description: "Marvel at hundreds of elephants wading through the Enkongo Narok swamps. Climb Observation Hill for panoramic views of Kilimanjaro.",
        accommodation: "Ol Tukai Lodge / Amboseli Serena Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Sunrise Kilimanjaro Photography", "Swamp Elephant Watching", "Observation Hill Hike"]
      },
      {
        day: 14,
        title: "Amboseli to Nairobi / Departure",
        subtitle: "Farewell Africa",
        description: "Final early morning game drive in Amboseli. Hearty breakfast before driving back to Nairobi for a farewell lunch at Carnivore Restaurant and airport drop-off.",
        accommodation: "Day Room / Departure Flight",
        meals: "Breakfast, Farewell Lunch Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Morning Game Drive", "Farewell Lunch in Nairobi", "Airport Transfer"]
      }
    ],
    accommodationSummary: "Premier 4-star & 5-star luxury safari lodges and tented camps throughout.",
    mealsSummary: "All meals included during safari (Full Board) + Selected Welcome & Farewell Dinners.",
    includedActivities: [
      "All park conservation & concession fees for Kenya and Tanzania",
      "Unlimited game drives in customized 4x4 Land Cruiser with pop-up roof",
      "Dedicated professional English-speaking safari guide / driver",
      "Ngorongoro Crater descent vehicle fee",
      "Samburu cultural village entry",
      "Complimentary bottled mineral water throughout",
      "Olduvai Gorge historical museum tour",
      "All government taxes and VAT"
    ],
    includedServices: [
      "24/7 Concierge & Operations Support",
      "Emergency AMREF Flying Doctors Medical Evacuation Cover",
      "Airport pick-up and drop-off"
    ],
    exclusions: [
      "International flights to/from East Africa",
      "Tanzania and Kenya entry e-Visas",
      "Hot Air Balloon Safari (optional $550/person)",
      "Gratuities for safari driver-guides and lodge staff",
      "Travel insurance",
      "Alcoholic & premium beverages unless specified"
    ],
    importantInformation: [
      "Passport must have at least 6 months validity.",
      "Yellow fever vaccination certificate is required for border crossing between Kenya and Tanzania.",
      "Luggage is restricted to 15-20 kg in soft duffel bags."
    ],
    childrenPolicy: "Children of all ages welcome. Special child discounts available for ages 3-11 sharing with adults.",
    startingDates: "Weekly Guaranteed Departures & Private Custom Dates Daily",
    bookingAvailability: "Available",
    isKenyanResidentPackage: false,
    seo: {
      title: "14-Day Ultimate Kenya & Tanzania Safari | Good Secrets Safaris",
      description: "Book the 14-day ultimate Kenya and Tanzania safari package covering Maasai Mara, Serengeti, Amboseli, and Ngorongoro with luxury lodges.",
      keywords: ["14 day safari kenya tanzania", "ultimate east africa safari", "serengeti masai mara tour"]
    },
    createdAt: "2026-01-10T08:00:00Z",
    updatedAt: "2026-08-15T12:00:00Z"
  },
  {
    id: "tour-3-day-amboseli-kilimanjaro-views",
    title: "3-Day Amboseli Safari & Kilimanjaro Views",
    slug: "3-day-amboseli-safari-kilimanjaro-views",
    shortDescription: "Face-to-face with Africa's largest elephant herds, framed by the snow-capped peak of Kilimanjaro.",
    fullDescription: "Amboseli is where elephant families roam in the hundreds, set against the most photographed mountain in Africa. Over three days you'll track herds across open swampland, catch golden-hour light on Kilimanjaro, and return each night to comfortable lodging just minutes from the action.",
    country: "Kenya",
    destinations: ["Amboseli National Park"],
    durationDays: 3,
    durationLabel: "3 Days / 2 Nights",
    startingLocation: "Nairobi, Kenya",
    endingLocation: "Nairobi, Kenya",
    categories: ["Wildlife Safari", "Photography", "Short Safaris"],
    travelStyles: ["Big 5", "Family", "Senior Friendly", "Midrange"],
    comfortLevel: "Midrange",
    travelerTypes: ["Couples", "Families", "Solo", "Seniors"],
    featured: true,
    popular: true,
    recommended: true,
    priceFrom: 747,
    currency: "USD",
    soloPrice: 1236,
    sharingPrice: 747,
    residentPriceKES: 48500,
    seasonalPricing: [
      {
        id: "sp-amb-jan-jun",
        name: "January – June (Standard Season)",
        startDate: "01-01",
        endDate: "06-30",
        soloPrice: 1236,
        sharingPrice: 747,
        residentPriceKES: 48500,
        currency: "USD",
        notes: "Great photography, calm season, lush plains"
      },
      {
        id: "sp-amb-jul-oct",
        name: "July – October (Peak Season)",
        startDate: "07-01",
        endDate: "10-31",
        soloPrice: 1263,
        sharingPrice: 759,
        residentPriceKES: 52000,
        currency: "USD",
        notes: "Peak dry season with maximum elephant concentration around waterholes"
      },
      {
        id: "sp-amb-nov-dec20",
        name: "November 1 – December 20",
        startDate: "11-01",
        endDate: "12-20",
        soloPrice: 1236,
        sharingPrice: 747,
        residentPriceKES: 48500,
        currency: "USD"
      },
      {
        id: "sp-amb-festive",
        name: "December 21 – January 3 (Festive Peak)",
        startDate: "12-21",
        endDate: "01-03",
        soloPrice: 1263,
        sharingPrice: 759,
        residentPriceKES: 54000,
        currency: "USD"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1581852017103-68ac6550407b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Amboseli & Afternoon Game Drive",
        subtitle: "Kilimanjaro Welcomes You",
        description: "Depart early from Nairobi through the Athi plains to Amboseli National Park. Arrive at your lodge for lunch, followed by an afternoon game drive watching elephant herds trek to the swamp.",
        accommodation: "Amboseli Sopa Lodge / AA Lodge Amboseli",
        meals: "Lunch, Dinner Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Scenic drive", "Afternoon Elephant Game Drive", "Sunset Drinks"]
      },
      {
        day: 2,
        title: "Full Day Amboseli Safari with Observation Hill",
        subtitle: "Swamps, Predators & Snow-Capped Peaks",
        description: "Enjoy early morning game drive when Kilimanjaro is most visible. Ascend Observation Hill for a panoramic view of herds submerged in water lilies. Afternoon game drive tracking lions and cheetahs.",
        accommodation: "Amboseli Sopa Lodge / AA Lodge Amboseli",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Morning Kilimanjaro Photography", "Observation Hill Lookout", "Evening Game Drive"]
      },
      {
        day: 3,
        title: "Amboseli Morning Safari & Return to Nairobi",
        subtitle: "Final Wildlife Memories",
        description: "Final early morning game drive. Hearty breakfast before checking out and driving comfortably back to Nairobi, arriving in the afternoon.",
        accommodation: "Nairobi Hotel or Airport Drop-off",
        meals: "Breakfast Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Morning Game Drive", "Nairobi drop-off"]
      }
    ],
    accommodationSummary: "Comfortable safari lodge with swimming pool and Kilimanjaro viewing deck.",
    mealsSummary: "Full board meal plan (Breakfast, Lunch, Dinner).",
    includedActivities: [
      "Park entrance fees for Amboseli National Park",
      "Game drives in 4x4 Land Cruiser with pop-up roof",
      "Professional English-speaking driver/guide",
      "Drinking water in safari vehicle"
    ],
    includedServices: ["Airport / Hotel pickup and drop-off in Nairobi", "All Government taxes"],
    exclusions: ["Tips and gratuities", "Personal expenses", "Optional Maasai village visit ($30/person)"],
    importantInformation: ["Ideal for all age groups including seniors and children.", "Warm clothing advised for early morning drives."],
    childrenPolicy: "Children below 3 years free; 3-11 years pay 50% sharing with 2 adults.",
    startingDates: "Daily Departures (Year-Round)",
    bookingAvailability: "Available",
    seo: {
      title: "3-Day Amboseli Safari & Kilimanjaro Views | Good Secrets Safaris",
      description: "Book our popular 3-day Amboseli safari starting from $747 with seasonal pricing, solo and sharing rates.",
      keywords: ["3 day amboseli safari", "amboseli kilimanjaro tour", "kenya elephant safari"]
    },
    createdAt: "2026-01-15T09:00:00Z",
    updatedAt: "2026-08-15T10:00:00Z"
  },
  {
    id: "tour-3-day-masai-mara-luxury-migration",
    title: "3-Day Masai Mara Luxury Big 5 & Migration Safari",
    slug: "3-day-masai-mara-luxury-big-5-migration-safari",
    shortDescription: "Luxury tented camps, private game drives, and the highest concentration of big cats in Africa.",
    fullDescription: "The Mara is East Africa's wildlife theater at its most dramatic — lions on the hunt, leopards in the trees, and, in season, millions of wildebeest crossing the plains. You'll watch it all from a private 4x4, then unwind each evening at a five-star tented camp with river views and genuinely excellent food.",
    country: "Kenya",
    destinations: ["Maasai Mara National Reserve"],
    durationDays: 3,
    durationLabel: "3 Days / 2 Nights",
    startingLocation: "Nairobi, Kenya",
    endingLocation: "Nairobi, Kenya",
    categories: ["Luxury Safaris", "Big 5 Safari", "Great Migration"],
    travelStyles: ["Luxury", "Big 5", "Great Migration", "Honeymoon"],
    comfortLevel: "Luxury",
    travelerTypes: ["Couples", "Solo", "Families"],
    featured: true,
    popular: true,
    recommended: true,
    priceFrom: 1415,
    currency: "USD",
    soloPrice: 1980,
    sharingPrice: 1415,
    residentPriceKES: 95000,
    seasonalPricing: [
      {
        id: "sp-mara-lux-green",
        name: "Jan - May (Low/Green Season)",
        startDate: "01-01",
        endDate: "05-31",
        soloPrice: 1650,
        sharingPrice: 1250,
        currency: "USD"
      },
      {
        id: "sp-mara-lux-peak",
        name: "Jul - Oct (Migration Peak)",
        startDate: "07-01",
        endDate: "10-31",
        soloPrice: 1980,
        sharingPrice: 1415,
        currency: "USD"
      },
      {
        id: "sp-mara-lux-festive",
        name: "Dec 20 - Jan 3 (Festive Peak)",
        startDate: "12-20",
        endDate: "01-03",
        soloPrice: 2100,
        sharingPrice: 1520,
        currency: "USD"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Maasai Mara & Sunset Game Drive",
        subtitle: "Into Big Cat Country",
        description: "Depart Nairobi through the Great Rift Valley to the Maasai Mara. Check into your luxury camp, enjoy a gourmet lunch, and head out for an afternoon predator drive.",
        accommodation: "Ashnil Mara Camp / Mara Serena Safari Lodge",
        meals: "Lunch, Dinner Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Rift Valley Viewpoint", "Afternoon Game Drive", "Campfire Sundowner"]
      },
      {
        day: 2,
        title: "Full Day Big 5 & Mara River Safari",
        subtitle: "Wildebeest & Big Cats",
        description: "Full day tracking lions, cheetahs, leopards, and rhinos. Picnic lunch under an acacia tree overlooking the Mara River.",
        accommodation: "Ashnil Mara Camp / Mara Serena Safari Lodge",
        meals: "Breakfast, Picnic Lunch, Gourmet Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Full Day Game Drive", "Bush Picnic", "Mara River Crossing Scouting"]
      },
      {
        day: 3,
        title: "Morning Game Drive & Return to Nairobi",
        subtitle: "Final Dawn Safari",
        description: "Dawn game drive when predators are active. Return to camp for a champagne breakfast, then drive back to Nairobi.",
        accommodation: "Departure",
        meals: "Breakfast Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Sunrise Game Drive", "Return Transfer"]
      }
    ],
    accommodationSummary: "5-star luxury tented camp with private ensuite facilities and river views.",
    mealsSummary: "Gourmet Full Board meals included.",
    includedActivities: [
      "Maasai Mara park entrance fees",
      "Unlimited game drives in private 4x4 Land Cruiser",
      "Bush picnic lunch",
      "Dedicated safari guide"
    ],
    includedServices: ["Nairobi hotel/airport pick-up and drop-off", "AMREF Emergency Evacuation insurance"],
    exclusions: ["Hot air balloon flight ($550)", "International flights", "Staff gratuities"],
    importantInformation: ["Yellow fever certificate may be required depending on nationality."],
    childrenPolicy: "Children welcome; family luxury tents available.",
    startingDates: "Daily Departures",
    bookingAvailability: "Available",
    seo: {
      title: "3-Day Masai Mara Luxury Safari | Good Secrets Safaris",
      description: "Indulge in a 3-Day Maasai Mara luxury safari with private 4x4 Land Cruisers and premier luxury camps."
    },
    createdAt: "2026-01-12T08:00:00Z",
    updatedAt: "2026-08-14T09:00:00Z"
  },
  {
    id: "tour-1-day-nairobi-wildlife-culture",
    title: "1-Day Nairobi Wildlife & Cultural Discovery Safari",
    slug: "1-day-nairobi-wildlife-cultural-discovery",
    shortDescription: "Baby elephants, giraffe feeding, and a game drive with the Nairobi skyline as your backdrop — all in one day.",
    fullDescription: "You don't need to leave the city to see incredible wildlife. Spend the morning on a game drive through Nairobi National Park, visit orphaned elephants at the Sheldrick Trust during feeding time, hand-feed endangered Rothschild giraffes, and round out the day with a taste of Kenyan culture at Bomas of Kenya.",
    country: "Kenya",
    destinations: ["Nairobi City & Wildlife"],
    durationDays: 1,
    durationLabel: "1 Day / Full Day",
    startingLocation: "Nairobi, Kenya",
    endingLocation: "Nairobi, Kenya",
    categories: ["Day Tours", "Family Friendly", "Culture"],
    travelStyles: ["Family", "Senior Friendly", "Budget", "Cultural Encounters"],
    comfortLevel: "Midrange",
    travelerTypes: ["Solo", "Couples", "Families", "Seniors", "Groups"],
    featured: true,
    popular: true,
    recommended: false,
    priceFrom: 253,
    currency: "USD",
    soloPrice: 380,
    sharingPrice: 253,
    residentPriceKES: 14500,
    seasonalPricing: [
      {
        id: "sp-nbo-1",
        name: "Year-Round Standard",
        startDate: "01-01",
        endDate: "12-31",
        soloPrice: 380,
        sharingPrice: 253,
        currency: "USD"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1581852017103-68ac6550407b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80"
    ],
    itinerary: [
      {
        day: 1,
        title: "Full Day Nairobi Safari & Cultural Circuit",
        subtitle: "Park, Elephants, Giraffes & Swahili Culture",
        description: "6:30 AM pickup for a morning game drive in Nairobi National Park. 11:00 AM visit to Sheldrick Elephant Orphanage. Lunch at the Karen Blixen Coffee Garden. Afternoon at Giraffe Centre followed by Bomas of Kenya cultural performances.",
        accommodation: "Not Applicable (Day Tour)",
        meals: "Lunch Included at Tamambo Karen Blixen",
        transport: "Private Safari Minivan / 4x4 Land Cruiser",
        activities: ["Nairobi National Park Safari", "Sheldrick Elephant Feeding", "Giraffe Centre visit", "Bomas of Kenya Dances"]
      }
    ],
    accommodationSummary: "Day excursion (accommodation not included).",
    mealsSummary: "Lunch included at a scenic Karen restaurant.",
    includedActivities: [
      "Nairobi National Park entry fee",
      "Sheldrick Elephant Orphanage donation entry",
      "Giraffe Centre admission",
      "Bomas of Kenya ticket",
      "Private vehicle with professional guide"
    ],
    includedServices: ["Door-to-door hotel / airport pickup in Nairobi", "Bottled water"],
    exclusions: ["Tips", "Alcoholic drinks"],
    importantInformation: ["Sheldrick Elephant visit requires advance booking as slots are strictly limited."],
    childrenPolicy: "Highly recommended for children of all ages.",
    startingDates: "Daily Departures (Year-Round)",
    bookingAvailability: "Available",
    seo: {
      title: "1-Day Nairobi Wildlife & Elephant Orphanage Tour | Good Secrets Safaris",
      description: "Book Nairobi full-day tour with elephant orphanage, Giraffe Centre, and Nairobi National Park starting from $253."
    },
    createdAt: "2026-01-20T08:00:00Z",
    updatedAt: "2026-08-15T08:00:00Z"
  },
  {
    id: "tour-1-day-lake-nakuru-naivasha",
    title: "1-Day Lake Nakuru & Lake Naivasha Adventure",
    slug: "1-day-lake-nakuru-lake-naivasha-adventure",
    shortDescription: "Rhino tracking, a boat safari, and a rare walking safari among zebras — all within a day's reach of Nairobi.",
    fullDescription: "This Rift Valley day trip packs in more than most week-long itineraries. Search for black and white rhino at Lake Nakuru, cruise Lake Naivasha by boat, then step out of the vehicle entirely for a guided walk among zebra and giraffe on predator-free Crescent Island.",
    country: "Kenya",
    destinations: ["Lake Nakuru & Lake Naivasha"],
    durationDays: 1,
    durationLabel: "1 Day / Full Day",
    startingLocation: "Nairobi, Kenya",
    endingLocation: "Nairobi, Kenya",
    categories: ["Day Tours", "Family Friendly", "Walking Safari"],
    travelStyles: ["Family", "Senior Friendly", "Budget"],
    comfortLevel: "Midrange",
    travelerTypes: ["Solo", "Couples", "Families", "Groups"],
    featured: false,
    popular: true,
    recommended: false,
    priceFrom: 259,
    currency: "USD",
    soloPrice: 395,
    sharingPrice: 259,
    residentPriceKES: 16500,
    seasonalPricing: [
      {
        id: "sp-nakuru-1",
        name: "Year-Round Rate",
        startDate: "01-01",
        endDate: "12-31",
        soloPrice: 395,
        sharingPrice: 259,
        currency: "USD"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?auto=format&fit=crop&w=1000&q=80"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi → Lake Nakuru → Lake Naivasha → Nairobi",
        subtitle: "Rift Valley Wildlife Blitz",
        description: "6:00 AM pickup. Drive to Lake Nakuru for a 3-hour rhino and flamingo game drive. Proceed to Lake Naivasha for lunch, followed by an afternoon boat ride and Crescent Island walking safari. Return to Nairobi by 7:00 PM.",
        accommodation: "Not Applicable",
        meals: "Lunch Included at Lake Naivasha Country Club",
        transport: "Private Safari Minivan / 4x4 Land Cruiser",
        activities: ["Lake Nakuru Rhino Safari", "Lake Naivasha Boat Cruise", "Crescent Island Walking Safari"]
      }
    ],
    accommodationSummary: "Day trip.",
    mealsSummary: "Buffet lunch included at Lake Naivasha resort.",
    includedActivities: [
      "Lake Nakuru National Park entry fees",
      "Lake Naivasha boat ride & Crescent Island entry fee",
      "Professional safari guide"
    ],
    includedServices: ["Hotel pickup and drop-off in Nairobi", "Mineral water"],
    exclusions: ["Tips and personal items"],
    importantInformation: ["Comfortable walking shoes recommended for Crescent Island."],
    childrenPolicy: "Child-friendly.",
    startingDates: "Daily Departures",
    bookingAvailability: "Available",
    seo: {
      title: "1-Day Lake Nakuru & Lake Naivasha Tour | Good Secrets Safaris",
      description: "Full-day Lake Nakuru & Naivasha safari with boat ride and walking safari from $259."
    },
    createdAt: "2026-01-22T08:00:00Z",
    updatedAt: "2026-08-15T08:00:00Z"
  },
  {
    id: "tour-2-day-masai-mara-lion-encounters",
    title: "2-Day Masai Mara Lion Encounters & Endless Savannah Safari",
    slug: "2-day-masai-mara-lion-encounters",
    shortDescription: "Short on time, not on adventure — a fast-paced overnight in prime lion territory.",
    fullDescription: "Perfect for travelers who want the real Masai Mara experience without a long commitment. Two full game drives, an overnight in a tented safari camp under the stars, and a genuine shot at seeing the Mara's famous lion prides up close.",
    country: "Kenya",
    destinations: ["Maasai Mara National Reserve"],
    durationDays: 2,
    durationLabel: "2 Days / 1 Night",
    startingLocation: "Nairobi, Kenya",
    endingLocation: "Nairobi, Kenya",
    categories: ["Short Safaris", "Big 5 Safari"],
    travelStyles: ["Big 5", "Budget", "Midrange"],
    comfortLevel: "Midrange",
    travelerTypes: ["Solo", "Couples", "Groups"],
    featured: false,
    popular: true,
    recommended: false,
    priceFrom: 612,
    currency: "USD",
    soloPrice: 890,
    sharingPrice: 612,
    residentPriceKES: 38000,
    seasonalPricing: [
      {
        id: "sp-2mara-std",
        name: "Standard Season (Jan - Jun, Nov)",
        startDate: "01-01",
        endDate: "06-30",
        soloPrice: 890,
        sharingPrice: 612,
        currency: "USD"
      },
      {
        id: "sp-2mara-peak",
        name: "Peak Season (Jul - Oct, Dec)",
        startDate: "07-01",
        endDate: "10-31",
        soloPrice: 990,
        sharingPrice: 685,
        currency: "USD"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Masai Mara & Afternoon Big Cat Drive",
        subtitle: "Into the Savannah",
        description: "Early morning pickup in Nairobi. Drive through the Great Rift Valley floor to Masai Mara. Check in, lunch, and an extensive afternoon game drive tracking lions and cheetahs until sunset.",
        accommodation: "Enkorok Mara Camp / Mara Sopa Lodge",
        meals: "Lunch, Dinner Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Rift Valley Viewpoint", "Afternoon Lion Safari"]
      },
      {
        day: 2,
        title: "Early Morning Mara Game Drive & Return to Nairobi",
        subtitle: "Sunrise on the Plains",
        description: "6:30 AM sunrise game drive to spot active predators returning from hunts. Hearty breakfast at camp and return journey to Nairobi arriving late afternoon.",
        accommodation: "Departure",
        meals: "Breakfast Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Dawn Game Drive", "Return to Nairobi"]
      }
    ],
    accommodationSummary: "Ensuite safari tented camp near the reserve gate.",
    mealsSummary: "Lunch, dinner on day 1; breakfast on day 2.",
    includedActivities: ["Masai Mara park entrance fees", "All game drives in 4x4 Land Cruiser", "Driver/guide"],
    includedServices: ["Roundtrip Nairobi transport", "Mineral water"],
    exclusions: ["Tips", "Maasai village visit ($30)", "Drinks"],
    importantInformation: ["Early departure on Day 1 is essential to maximize safari time."],
    childrenPolicy: "Children welcome.",
    startingDates: "Daily Departures",
    bookingAvailability: "Available",
    seo: {
      title: "2-Day Masai Mara Safari from Nairobi | Good Secrets Safaris",
      description: "Quick 2-day Masai Mara safari starting from $612 with private 4x4 game drives."
    },
    createdAt: "2026-01-25T08:00:00Z",
    updatedAt: "2026-08-15T08:00:00Z"
  },
  {
    id: "tour-3-day-samburu-untamed-beauty",
    title: "3-Day Samburu Untamed Beauty & Rare Wildlife Safari",
    slug: "3-day-samburu-untamed-beauty-rare-wildlife",
    shortDescription: "Kenya's wild north, home to species you won't find anywhere else on safari.",
    fullDescription: "Samburu feels like a different Africa — dry, dramatic, and far less traveled. Track the 'Samburu Special Five' (Grevy's zebra, reticulated giraffe, gerenuk, and more) along the Ewaso Nyiro River, then retreat to a comfortable safari lodge as the sun sets over the hills.",
    country: "Kenya",
    destinations: ["Samburu National Reserve"],
    durationDays: 3,
    durationLabel: "3 Days / 2 Nights",
    startingLocation: "Nairobi, Kenya",
    endingLocation: "Nairobi, Kenya",
    categories: ["Luxury Safaris", "Wildlife Safari"],
    travelStyles: ["Luxury", "Photography", "Big 5"],
    comfortLevel: "Luxury",
    travelerTypes: ["Couples", "Solo", "Families"],
    featured: true,
    popular: false,
    recommended: true,
    priceFrom: 1187,
    currency: "USD",
    soloPrice: 1650,
    sharingPrice: 1187,
    residentPriceKES: 78000,
    seasonalPricing: [
      {
        id: "sp-sam-lux-std",
        name: "Standard Season (Jan - Jun, Nov)",
        startDate: "01-01",
        endDate: "06-30",
        soloPrice: 1550,
        sharingPrice: 1187,
        currency: "USD"
      },
      {
        id: "sp-sam-lux-peak",
        name: "Peak Season (Jul - Oct, Dec)",
        startDate: "07-01",
        endDate: "10-31",
        soloPrice: 1780,
        sharingPrice: 1295,
        currency: "USD"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Samburu National Reserve",
        subtitle: "Crossing the Equator into the North",
        description: "Drive north past Mount Kenya pineapple and coffee plantations to Samburu. Afternoon game drive along the palm-fringed riverbanks.",
        accommodation: "Elephant Bedroom Camp / Ashnil Samburu",
        meals: "Lunch, Dinner Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Equator marker stop", "Afternoon Special 5 Game Drive"]
      },
      {
        day: 2,
        title: "Full Day Samburu Wildlife & Cultural Discovery",
        subtitle: "Predators & Samburu Traditions",
        description: "Morning and late afternoon game drives. High likelihood of seeing leopards resting on acacia branches. Optional Samburu village visit.",
        accommodation: "Elephant Bedroom Camp / Ashnil Samburu",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Morning Game Drive", "Riverbank Wildlife Watching", "Evening Sundowner"]
      },
      {
        day: 3,
        title: "Samburu Morning Drive & Return to Nairobi",
        subtitle: "Return Journey",
        description: "Early morning drive, delicious breakfast, and scenic drive back to Nairobi arriving around 4:00 PM.",
        accommodation: "Departure",
        meals: "Breakfast Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Sunrise Game Drive", "Return to Nairobi"]
      }
    ],
    accommodationSummary: "Luxury riverfront tented camp with private viewing decks.",
    mealsSummary: "Full board meals.",
    includedActivities: ["Samburu reserve entrance fees", "All game drives in 4x4 Land Cruiser", "Guide fees"],
    includedServices: ["Nairobi hotel transfers", "Bottled water"],
    exclusions: ["Tips", "Drinks", "Samburu village visit"],
    importantInformation: ["Warm, arid climate during day; cool evenings."],
    childrenPolicy: "Children welcome.",
    startingDates: "Daily Departures",
    bookingAvailability: "Available",
    seo: {
      title: "3-Day Samburu Luxury Safari | Good Secrets Safaris",
      description: "Discover Samburu's rare wildlife and luxury tented camps from $1,187."
    },
    createdAt: "2026-01-26T08:00:00Z",
    updatedAt: "2026-08-15T08:00:00Z"
  },
  {
    id: "tour-3-day-samburu-midrange",
    title: "3-Day Midrange Wildlife Safari Escape in Samburu",
    slug: "3-day-midrange-wildlife-safari-samburu",
    shortDescription: "All the wildlife of Samburu and comfortable lodging, without the five-star price tag.",
    fullDescription: "A smart way to experience one of Kenya's most rewarding, least-crowded reserves. Expect the same rich game drives and rare wildlife sightings as our luxury Samburu safaris, in comfortable mid-range lodges that keep the focus on the experience, not the extras.",
    country: "Kenya",
    destinations: ["Samburu National Reserve"],
    durationDays: 3,
    durationLabel: "3 Days / 2 Nights",
    startingLocation: "Nairobi, Kenya",
    endingLocation: "Nairobi, Kenya",
    categories: ["Midrange Safaris", "Wildlife Safari"],
    travelStyles: ["Midrange", "Family", "Photography"],
    comfortLevel: "Midrange",
    travelerTypes: ["Couples", "Families", "Solo", "Groups"],
    featured: false,
    popular: true,
    recommended: false,
    priceFrom: 988,
    currency: "USD",
    soloPrice: 1380,
    sharingPrice: 988,
    residentPriceKES: 62000,
    seasonalPricing: [
      {
        id: "sp-sam-mid-std",
        name: "Standard Season",
        startDate: "01-01",
        endDate: "06-30",
        soloPrice: 1380,
        sharingPrice: 988,
        currency: "USD"
      },
      {
        id: "sp-sam-mid-peak",
        name: "Peak Season (Jul - Oct)",
        startDate: "07-01",
        endDate: "10-31",
        soloPrice: 1490,
        sharingPrice: 1060,
        currency: "USD"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1000&q=80"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Samburu National Reserve",
        subtitle: "Northern Journey",
        description: "Depart Nairobi for Samburu. Check into lodge for lunch, followed by afternoon game drive searching for elephants and the Samburu Special 5.",
        accommodation: "Samburu Sopa Lodge / Simba Lodge",
        meals: "Lunch, Dinner Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Afternoon Game Drive"]
      },
      {
        day: 2,
        title: "Full Day Samburu Game Drives",
        subtitle: "Ewaso Nyiro River Banks",
        description: "Morning and afternoon game drives with time to relax by the pool during midday heat.",
        accommodation: "Samburu Sopa Lodge / Simba Lodge",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Morning & Afternoon Game Drives"]
      },
      {
        day: 3,
        title: "Samburu to Nairobi",
        subtitle: "Return",
        description: "Early morning drive, breakfast, and return journey to Nairobi.",
        accommodation: "Departure",
        meals: "Breakfast Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Return drive"]
      }
    ],
    accommodationSummary: "Comfortable safari lodge with swimming pool and buffet dining.",
    mealsSummary: "Full board meal plan.",
    includedActivities: ["Park entrance fees", "All game drives in 4x4 vehicle", "Driver/guide"],
    includedServices: ["Nairobi transfers", "Drinking water"],
    exclusions: ["Tips", "Personal expenses"],
    importantInformation: ["Hat and sunscreen recommended."],
    childrenPolicy: "Family friendly.",
    startingDates: "Daily Departures",
    bookingAvailability: "Available",
    seo: {
      title: "3-Day Midrange Samburu Safari | Good Secrets Safaris",
      description: "Affordable 3-day Samburu safari from $988 with comfortable lodge accommodations."
    },
    createdAt: "2026-01-27T08:00:00Z",
    updatedAt: "2026-08-15T08:00:00Z"
  },
  {
    id: "tour-3-day-amboseli-luxury-elephant",
    title: "3-Day Amboseli Elephant Encounters & Kilimanjaro Luxury Safari",
    slug: "3-day-amboseli-luxury-elephant-kilimanjaro",
    shortDescription: "Five-star camps, front-row elephant herds, and Kilimanjaro on the horizon.",
    fullDescription: "For travelers who want Amboseli done right. Stay at properties like Tortilis Camp or Ol Tukai, watch massive tuskers cross the swamps with Kilimanjaro behind them, and end each day with a private sundowner looking out over it all.",
    country: "Kenya",
    destinations: ["Amboseli National Park"],
    durationDays: 3,
    durationLabel: "3 Days / 2 Nights",
    startingLocation: "Nairobi, Kenya",
    endingLocation: "Nairobi, Kenya",
    categories: ["Luxury Safaris", "Photography"],
    travelStyles: ["Luxury", "Honeymoon", "Photography", "Big 5"],
    comfortLevel: "Luxury",
    travelerTypes: ["Couples", "Solo", "Families"],
    featured: false,
    popular: true,
    recommended: true,
    priceFrom: 1058,
    currency: "USD",
    soloPrice: 1540,
    sharingPrice: 1058,
    residentPriceKES: 69000,
    seasonalPricing: [
      {
        id: "sp-amb-lux-std",
        name: "Standard Season (Jan - Jun, Nov)",
        startDate: "01-01",
        endDate: "06-30",
        soloPrice: 1540,
        sharingPrice: 1058,
        currency: "USD"
      },
      {
        id: "sp-amb-lux-peak",
        name: "Peak Season (Jul - Oct, Dec)",
        startDate: "07-01",
        endDate: "10-31",
        soloPrice: 1690,
        sharingPrice: 1180,
        currency: "USD"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1581852017103-68ac6550407b?auto=format&fit=crop&w=1000&q=80"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Amboseli Luxury Camp",
        subtitle: "VIP Arrival",
        description: "Private transfer to Amboseli. Check into your luxury suite with unobstructed Kilimanjaro views. Afternoon game drive and luxury sundowner.",
        accommodation: "Ol Tukai Lodge / Tortilis Camp",
        meals: "Lunch, Gourmet Dinner Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Private afternoon safari", "Champagne sundowner"]
      },
      {
        day: 2,
        title: "Full Day Amboseli Wildlife Luxury Experience",
        subtitle: "Swamp Elephants & Predators",
        description: "Sunrise photography session. Full day tracking cheetahs, lions, and hundred-strong elephant families. Gourmet bush lunch.",
        accommodation: "Ol Tukai Lodge / Tortilis Camp",
        meals: "Breakfast, Gourmet Bush Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Sunrise Photography", "Bush Lunch", "Evening Safari"]
      },
      {
        day: 3,
        title: "Morning Safari & Return to Nairobi",
        subtitle: "Farewell Kilimanjaro",
        description: "Early morning drive, hearty breakfast, and transfer back to Nairobi.",
        accommodation: "Departure",
        meals: "Breakfast Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Morning game drive", "Return transfer"]
      }
    ],
    accommodationSummary: "5-star luxury lodge in prime Amboseli location.",
    mealsSummary: "Gourmet full board dining with selected drinks.",
    includedActivities: ["Amboseli park fees", "Private 4x4 Land Cruiser with guide", "Bush sundowner"],
    includedServices: ["VIP door-to-door Nairobi transfers", "Emergency medical cover"],
    exclusions: ["Tips", "Premium champagne"],
    importantInformation: ["Bring warm layers for early mornings."],
    childrenPolicy: "Family suites available.",
    startingDates: "Daily Departures",
    bookingAvailability: "Available",
    seo: {
      title: "3-Day Amboseli Luxury Elephant Safari | Good Secrets Safaris",
      description: "5-star Amboseli luxury safari from $1,058 with private Land Cruiser and Kilimanjaro views."
    },
    createdAt: "2026-01-28T08:00:00Z",
    updatedAt: "2026-08-15T08:00:00Z"
  },
  {
    id: "tour-3-day-midrange-amboseli",
    title: "3-Day Midrange Amboseli Big Elephant Safari",
    slug: "3-day-midrange-amboseli-big-elephant-safari",
    shortDescription: "Amboseli's elephant herds and Kilimanjaro views, at a price that works for families and groups.",
    fullDescription: "Everything that makes Amboseli special — vast elephant herds, wide-open plains, and that iconic mountain backdrop — with comfortable lodging and extensive game drives at a genuinely accessible price. A favorite for families, couples, and small groups.",
    country: "Kenya",
    destinations: ["Amboseli National Park"],
    durationDays: 3,
    durationLabel: "3 Days / 2 Nights",
    startingLocation: "Nairobi, Kenya",
    endingLocation: "Nairobi, Kenya",
    categories: ["Midrange Safaris", "Family Friendly"],
    travelStyles: ["Midrange", "Family", "Senior Friendly"],
    comfortLevel: "Midrange",
    travelerTypes: ["Families", "Couples", "Groups", "Solo"],
    featured: false,
    popular: false,
    recommended: true,
    priceFrom: 917,
    currency: "USD",
    soloPrice: 1290,
    sharingPrice: 917,
    residentPriceKES: 56000,
    seasonalPricing: [
      {
        id: "sp-amb-mid-std",
        name: "Standard Season",
        startDate: "01-01",
        endDate: "06-30",
        soloPrice: 1290,
        sharingPrice: 917,
        currency: "USD"
      },
      {
        id: "sp-amb-mid-peak",
        name: "Peak Season (Jul - Oct)",
        startDate: "07-01",
        endDate: "10-31",
        soloPrice: 1390,
        sharingPrice: 980,
        currency: "USD"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Amboseli National Park",
        subtitle: "Arrival & Afternoon Drive",
        description: "Drive to Amboseli, check in, lunch, and afternoon game drive watching elephants and Kilimanjaro.",
        accommodation: "Amboseli Sopa Lodge / Kibo Safari Camp",
        meals: "Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Afternoon Safari"]
      },
      {
        day: 2,
        title: "Full Day Amboseli Safari",
        subtitle: "Observation Hill & Swamps",
        description: "Morning and afternoon game drives with time to relax by the lodge swimming pool.",
        accommodation: "Amboseli Sopa Lodge / Kibo Safari Camp",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Full Day Game Drives", "Observation Hill"]
      },
      {
        day: 3,
        title: "Amboseli to Nairobi",
        subtitle: "Return Journey",
        description: "Morning game drive, breakfast, and return drive to Nairobi.",
        accommodation: "Departure",
        meals: "Breakfast",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Morning Safari", "Return Transfer"]
      }
    ],
    accommodationSummary: "Comfortable tented camp or lodge with en-suite amenities.",
    mealsSummary: "Full board meals.",
    includedActivities: ["Park fees", "Game drives in 4x4 Land Cruiser", "Driver/guide"],
    includedServices: ["Nairobi transfers", "Drinking water"],
    exclusions: ["Tips", "Personal items"],
    importantInformation: ["Great for all age groups."],
    childrenPolicy: "Child discounts apply.",
    startingDates: "Daily Departures",
    bookingAvailability: "Available",
    seo: {
      title: "3-Day Midrange Amboseli Big Elephant Safari | Good Secrets Safaris",
      description: "Enjoy Amboseli safari at $917 with comfortable lodge accommodation and private 4x4 drives."
    },
    createdAt: "2026-01-29T08:00:00Z",
    updatedAt: "2026-08-15T08:00:00Z"
  },
  {
    id: "tour-8-day-safari-zanzibar-beach",
    title: "8-Day Safari & Zanzibar Spice Beach Escape",
    slug: "8-day-safari-zanzibar-spice-beach-escape",
    shortDescription: "Four days chasing the Big Five in the Mara, then four days doing nothing at all on Zanzibar's white-sand beaches.",
    fullDescription: "The best of both worlds, in one trip. Start with big game drives across the Maasai Mara, tracking lion, leopard, and elephant, then fly straight to Zanzibar for spice tours, sunset dhow cruises, and as much — or as little — beach time as you want.",
    country: "Safari + Beach",
    destinations: ["Maasai Mara National Reserve", "Zanzibar Archipelago"],
    durationDays: 8,
    durationLabel: "8 Days / 7 Nights",
    startingLocation: "Nairobi, Kenya",
    endingLocation: "Zanzibar, Tanzania",
    categories: ["Bush & Beach", "Honeymoon Safaris", "Luxury Experience"],
    travelStyles: ["Safari & Beach", "Honeymoon", "Luxury", "Fly-In"],
    comfortLevel: "Luxury",
    travelerTypes: ["Couples", "Honeymooners", "Families", "Solo"],
    featured: true,
    popular: true,
    recommended: true,
    priceFrom: 3450,
    currency: "USD",
    soloPrice: 4680,
    sharingPrice: 3450,
    residentPriceKES: 345000,
    seasonalPricing: [
      {
        id: "sp-bb-std",
        name: "Standard Season (Jan - May, Nov)",
        startDate: "01-01",
        endDate: "05-31",
        soloPrice: 4200,
        sharingPrice: 3150,
        currency: "USD"
      },
      {
        id: "sp-bb-peak",
        name: "Peak Season (Jul - Oct, Dec)",
        startDate: "07-01",
        endDate: "10-31",
        soloPrice: 4680,
        sharingPrice: 3450,
        currency: "USD"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi & Transfer to Masai Mara",
        subtitle: "Into the Wilderness",
        description: "Meet your guide and drive or fly into the Masai Mara. Afternoon game drive tracking lions and leopards.",
        accommodation: "Ashnil Mara Camp / Mara Serena",
        meals: "Lunch, Dinner Included",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Afternoon Big Cat Safari"]
      },
      {
        day: 2,
        title: "Full Day Masai Mara Big 5 Tracking",
        subtitle: "Savannah Action",
        description: "Full day game drive with bush picnic near the Mara River.",
        accommodation: "Ashnil Mara Camp / Mara Serena",
        meals: "Breakfast, Picnic Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Full Day Game Drive", "Bush Picnic"]
      },
      {
        day: 3,
        title: "Masai Mara Morning Safari & Bush Walk",
        subtitle: "Nature Up Close",
        description: "Dawn game drive followed by nature walk and Maasai cultural interaction.",
        accommodation: "Ashnil Mara Camp / Mara Serena",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Custom 4x4 Safari Land Cruiser",
        activities: ["Dawn Safari", "Maasai Village Visit"]
      },
      {
        day: 4,
        title: "Fly from Masai Mara to Zanzibar",
        subtitle: "From Savannah to Ocean",
        description: "Transfer to airstrip for scheduled flight to Zanzibar via Nairobi. Meet your island concierge and transfer to your beachfront resort.",
        accommodation: "The Residence Zanzibar / Zuri Zanzibar",
        meals: "Breakfast, All-Inclusive Resort Dinner",
        transport: "Domestic flight + Private VIP island transfer",
        activities: ["Bush Flight to Zanzibar", "Beach Sunset Stroll"]
      },
      {
        day: 5,
        title: "Stone Town Heritage & Spice Tour",
        subtitle: "Sultans & Spices",
        description: "Guided morning walking tour through Stone Town's carved wooden doors and bustling bazaars. Afternoon spice plantation tasting.",
        accommodation: "The Residence Zanzibar / Zuri Zanzibar",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Private air-conditioned minivan",
        activities: ["Stone Town Walking Tour", "Organic Spice Farm Tour"]
      },
      {
        day: 6,
        title: "Private Dhow Sunset Cruise & Ocean Leisure",
        subtitle: "Turquoise Waters",
        description: "Morning at leisure on the beach or snorkeling at Mnemba Atoll. Late afternoon private wooden dhow cruise with champagne.",
        accommodation: "The Residence Zanzibar / Zuri Zanzibar",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Private Dhow Boat",
        activities: ["Snorkeling", "Private Dhow Sunset Sail"]
      },
      {
        day: 7,
        title: "Full Day Beach Relaxation & Spa",
        subtitle: "Pure Bliss",
        description: "Indulge in spa treatments, beachfront dining, and Indian Ocean tranquility.",
        accommodation: "The Residence Zanzibar / Zuri Zanzibar",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Not Applicable",
        activities: ["Resort Spa Treatment", "Beachfront Dinner"]
      },
      {
        day: 8,
        title: "Zanzibar Departure",
        subtitle: "Until Next Time",
        description: "Breakfast at resort, last dip in the ocean, and private transfer to Zanzibar Abeid Amani Karume International Airport for departure.",
        accommodation: "Departure",
        meals: "Breakfast Included",
        transport: "Private VIP airport transfer",
        activities: ["Airport Transfer"]
      }
    ],
    accommodationSummary: "Luxury 5-star safari camp + 5-star all-inclusive beachfront resort.",
    mealsSummary: "All meals included throughout safari and beach stay.",
    includedActivities: [
      "All park and conservation fees",
      "Private safari 4x4 vehicle with guide",
      "Stone Town walking tour & Spice tour",
      "Private sunset dhow cruise"
    ],
    includedServices: [
      "Bush flight from Masai Mara to Zanzibar",
      "VIP transfers in Kenya and Zanzibar",
      "AMREF Flying Doctors coverage"
    ],
    exclusions: ["International flights to Nairobi / from Zanzibar", "Zanzibar infrastructure tax ($5/night)", "Tips"],
    importantInformation: ["Yellow fever vaccination required between Kenya and Tanzania."],
    childrenPolicy: "Great for honeymoons and families.",
    startingDates: "Departures on any day",
    bookingAvailability: "Available",
    seo: {
      title: "8-Day Masai Mara Safari & Zanzibar Beach Holiday | Good Secrets Safaris",
      description: "Ultimate 8-day Bush to Beach safari combining Masai Mara and luxury Zanzibar beach resort."
    },
    createdAt: "2026-01-30T08:00:00Z",
    updatedAt: "2026-08-15T08:00:00Z"
  }
];

export const initialHotels: Hotel[] = [
  {
    id: "hotel-southern-palms",
    name: "Southern Palms Beach Resort",
    slug: "southern-palms-beach-resort",
    location: "Diani Beach, South Coast, Kenya",
    country: "Kenya",
    description: "Nestled along the world-renowned white sands of Diani Beach, featuring the largest swimming pool in East Africa, lush coconut groves, and warm Swahili hospitality.",
    category: "Beach Resort & Spa",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],
    priceFromUSD: 208,
    priceFromKES: 26945,
    soloPriceUSD: 245,
    sharingPriceUSD: 208,
    seasonalPricing: [
      {
        seasonName: "Normal / Low Season",
        dates: "Apr 1 - Jun 30",
        priceKES: 22000,
        priceUSD: 175,
        sharingPriceUSD: 175
      },
      {
        seasonName: "High Season",
        dates: "Jul 1 - Oct 31, Jan 5 - Mar 31",
        priceKES: 26945,
        priceUSD: 208,
        sharingPriceUSD: 208
      },
      {
        seasonName: "Festive & Christmas Peak",
        dates: "Dec 22 - Jan 4",
        priceKES: 36500,
        priceUSD: 285,
        sharingPriceUSD: 285
      }
    ],
    facilities: [
      "2 Massive Interconnected Swimming Pools",
      "5 World-Class Restaurants & Bars",
      "Direct Beachfront Access to Diani Beach",
      "Water Sports & PADI Diving Centre",
      "Kids Club & Animation Team",
      "Tennis & Squash Courts"
    ],
    roomTypes: ["Standard Sea Facing Room", "Superior Deluxe Room", "Ocean Front Suite"],
    inclusions: ["All-Inclusive meal plan (Breakfast, Lunch, Dinner, Selected Drinks)", "Use of swimming pools and beach loungers", "Daily evening entertainment"],
    exclusions: ["Motorized water sports", "Airport transfers", "Spa treatments"],
    isFamilyFriendly: true,
    isHoneymoonFriendly: true,
    isSeniorFriendly: true,
    isKenyanResidentOffer: true,
    rating: 4.8,
    seo: {
      title: "Southern Palms Beach Resort Diani Rates & Deals | Good Secrets Safaris",
      description: "Book Southern Palms Beach Resort Diani from KES 26,945 / $208 per night with all-inclusive resident and tourist packages."
    }
  },
  {
    id: "hotel-swahili-beach",
    name: "Swahili Beach Resort",
    slug: "swahili-beach-resort",
    location: "Diani Beach, Kenya",
    country: "Kenya",
    description: "An architectural masterpiece combining Swahili, Arabian, and Indian influences with an iconic 8-tier cascading swimming pool leading to the Indian Ocean.",
    category: "Beach Resort & Spa",
    images: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
    ],
    priceFromUSD: 150,
    priceFromKES: 17500,
    soloPriceUSD: 190,
    sharingPriceUSD: 150,
    seasonalPricing: [
      {
        seasonName: "Low Season",
        dates: "Apr - Jun",
        priceKES: 15500,
        priceUSD: 130
      },
      {
        seasonName: "Standard Season",
        dates: "Jan - Mar, Jul - Oct",
        priceKES: 17500,
        priceUSD: 150
      },
      {
        seasonName: "Peak Festive",
        dates: "Dec 20 - Jan 3",
        priceKES: 28000,
        priceUSD: 230
      }
    ],
    facilities: [
      "8-Tier Cascading Cascade Pool",
      "Award-winning Majilis & Spice Route Restaurants",
      "Full Service Spa & Ayurvedic Centre",
      "Private Beach Cabanas"
    ],
    roomTypes: ["Standard Room", "Superior Pool View", "Executive Suite"],
    inclusions: ["Half Board (Breakfast & Dinner)", "Free Wi-Fi", "Access to 8 swimming pools"],
    exclusions: ["Lunch and alcoholic drinks", "Spa treatments"],
    isFamilyFriendly: true,
    isHoneymoonFriendly: true,
    isSeniorFriendly: true,
    isKenyanResidentOffer: true,
    rating: 4.9,
    seo: {
      title: "Swahili Beach Resort Diani Packages | Good Secrets Safaris",
      description: "Book Swahili Beach Resort in Diani from KSH 17,500 / USD 150."
    }
  },
  {
    id: "hotel-turtle-bay",
    name: "Turtle Bay Beach Club",
    slug: "turtle-bay-beach-club",
    location: "Watamu, Kenya",
    country: "Kenya",
    description: "Eco-friendly, award-winning all-inclusive beach resort situated right inside Watamu National Marine Park, renowned for turtle conservation and coral reefs.",
    category: "Beach Resort & Spa",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],
    priceFromUSD: 140,
    priceFromKES: 17100,
    soloPriceUSD: 175,
    sharingPriceUSD: 140,
    seasonalPricing: [
      {
        seasonName: "Green Season",
        dates: "May 1 - Jun 30",
        priceKES: 14200,
        priceUSD: 115
      },
      {
        seasonName: "Standard Season",
        dates: "Jan - Apr, Jul - Nov",
        priceKES: 17100,
        priceUSD: 140
      },
      {
        seasonName: "Christmas Season",
        dates: "Dec 21 - Jan 5",
        priceKES: 26500,
        priceUSD: 215
      }
    ],
    facilities: ["All-Inclusive Beachfront", "Marine Park Snorkeling Boats", "PADI Dive Centre", "Waterpolo & Windsurfing"],
    roomTypes: ["Club Room", "Lamoo Room", "Ocean Front Room"],
    inclusions: ["All-Inclusive Meals & Selected Local Drinks", "Non-motorized watersports", "Marine conservation tour"],
    exclusions: ["Deep sea fishing", "Spa"],
    isFamilyFriendly: true,
    isHoneymoonFriendly: false,
    isSeniorFriendly: true,
    isKenyanResidentOffer: true,
    rating: 4.7,
    seo: {
      title: "Turtle Bay Beach Club Watamu Rates | Good Secrets Safaris",
      description: "Watamu all-inclusive holidays at Turtle Bay Beach Club from KSH 17,100 / USD 140."
    }
  },
  {
    id: "hotel-hemingways-watamu",
    name: "Hemingways Watamu",
    slug: "hemingways-watamu",
    location: "Watamu Marine Park, Kenya",
    country: "Kenya",
    description: "An iconic 5-star boutique luxury hotel offering premier beachfront ocean suites, Michelin-grade coastal dining, and world-class billfish big game angling.",
    category: "Boutique Hotel",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80"
    ],
    priceFromUSD: 195,
    priceFromKES: 25155,
    soloPriceUSD: 260,
    sharingPriceUSD: 195,
    seasonalPricing: [
      {
        seasonName: "Standard Season",
        dates: "Jan - Apr, Jul - Nov",
        priceKES: 25155,
        priceUSD: 195
      },
      {
        seasonName: "Festive Peak",
        dates: "Dec 20 - Jan 5",
        priceKES: 39000,
        priceUSD: 310
      }
    ],
    facilities: ["Direct Watamu Sandbar Beach", "Two Infinity Pools", "Hemingways Spa", "Big Game Fishing Fleet"],
    roomTypes: ["Ocean View Room", "1-Bedroom Ocean Apartment", "2-Bedroom Luxury Suite"],
    inclusions: ["Bed & Gourmet Breakfast", "Wi-Fi", "Tennis & Gym"],
    exclusions: ["Lunch, Dinner & Drinks", "Deep sea fishing charters"],
    isFamilyFriendly: true,
    isHoneymoonFriendly: true,
    isSeniorFriendly: true,
    isKenyanResidentOffer: true,
    rating: 5.0,
    seo: {
      title: "Hemingways Watamu 5-Star Luxury Rates | Good Secrets Safaris",
      description: "5-star luxury at Hemingways Watamu from KSH 25,155 / USD 195."
    }
  },
  {
    id: "hotel-voyager-beach-resort",
    name: "Voyager Beach Resort",
    slug: "voyager-beach-resort",
    location: "Nyali, North Coast, Mombasa, Kenya",
    country: "Kenya",
    description: "A famous ship-themed all-inclusive resort overlooking the pristine waters of Nyali Beach with spectacular nautical aesthetics and family entertainment.",
    category: "Beach Resort & Spa",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],
    priceFromUSD: 120,
    priceFromKES: 15500,
    soloPriceUSD: 160,
    sharingPriceUSD: 120,
    seasonalPricing: [
      {
        seasonName: "Low Season",
        dates: "May - Jun",
        priceKES: 13500,
        priceUSD: 105
      },
      {
        seasonName: "Standard Season",
        dates: "Jan - Apr, Jul - Nov",
        priceKES: 15500,
        priceUSD: 120
      },
      {
        seasonName: "Peak Season",
        dates: "Dec 20 - Jan 3",
        priceKES: 24000,
        priceUSD: 190
      }
    ],
    facilities: ["3 Swimming Pools (including Relaxing Infinity Pool)", "4 Bars & 3 Themed Restaurants", "Adventurers Club for Kids"],
    roomTypes: ["Garden Cabin", "Superior Sea View Cabin", "Deluxe Sea View"],
    inclusions: ["All-Inclusive Meals & Drinks", "Daily Animation & Sports", "Kids Club"],
    exclusions: ["Spa treatments", "Transfers"],
    isFamilyFriendly: true,
    isHoneymoonFriendly: false,
    isSeniorFriendly: true,
    isKenyanResidentOffer: true,
    rating: 4.7,
    seo: {
      title: "Voyager Beach Resort Mombasa Deals | Good Secrets Safaris",
      description: "Mombasa all-inclusive holiday at Voyager Beach Resort from KSH 15,500 / USD 120."
    }
  },
  {
    id: "hotel-baobab-beach-resort",
    name: "Baobab Beach Resort & Spa",
    slug: "baobab-beach-resort-spa",
    location: "Diani Beach, Kenya",
    country: "Kenya",
    description: "Spanning 80 acres of tropical gardens with ancient baobab trees along Diani Beach, offering 3 unique resort wings (Baobab, Maridadi, and Kole Kole).",
    category: "Beach Resort & Spa",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
    ],
    priceFromUSD: 116,
    priceFromKES: 11600,
    soloPriceUSD: 150,
    sharingPriceUSD: 116,
    seasonalPricing: [
      {
        seasonName: "Off-Peak Season",
        dates: "May - Jun",
        priceKES: 9800,
        priceUSD: 95
      },
      {
        seasonName: "Normal Season",
        dates: "Jan - Apr, Jul - Oct",
        priceKES: 11600,
        priceUSD: 116
      },
      {
        seasonName: "Festive Season",
        dates: "Dec 22 - Jan 3",
        priceKES: 21000,
        priceUSD: 180
      }
    ],
    facilities: ["3 Large Swimming Pools", "Afya Bora Wellness Spa", "Direct 500m Beachfront", "Amphitheatre"],
    roomTypes: ["Standard Garden Room", "Superior Sea View", "Deluxe Bungalow"],
    inclusions: ["All-Inclusive Dining & Drinks", "Free gym and tennis courts", "Nightly live shows"],
    exclusions: ["Afya Bora Spa treatments", "Transfers"],
    isFamilyFriendly: true,
    isHoneymoonFriendly: true,
    isSeniorFriendly: true,
    isKenyanResidentOffer: true,
    rating: 4.8,
    seo: {
      title: "Baobab Beach Resort Diani Packages | Good Secrets Safaris",
      description: "Diani all-inclusive holidays at Baobab Beach Resort from KSH 11,600 / USD 116."
    }
  },
  {
    id: "hotel-diani-reef",
    name: "Diani Reef Beach Resort & Spa",
    slug: "diani-reef-beach-resort-spa",
    location: "Diani Beach, Kenya",
    country: "Kenya",
    description: "A 5-star beach resort set on 34 acres of lush gardens with direct access to Diani's sparkling sands and vibrant coral reefs.",
    category: "Beach Resort & Spa",
    images: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80"
    ],
    priceFromUSD: 184,
    priceFromKES: 18480,
    soloPriceUSD: 220,
    sharingPriceUSD: 184,
    seasonalPricing: [
      {
        seasonName: "Standard Season",
        dates: "Jan - Nov",
        priceKES: 18480,
        priceUSD: 184
      },
      {
        seasonName: "Peak Season",
        dates: "Dec 20 - Jan 3",
        priceKES: 29500,
        priceUSD: 250
      }
    ],
    facilities: ["Maya Health & Wellness Spa", "Freeform Swimming Pool", "Casino & Cigar Lounge", "Water Sports"],
    roomTypes: ["Standard Garden View", "Deluxe Ocean View", "Junior Suite"],
    inclusions: ["Half Board (Breakfast & Dinner)", "Access to gym & pools", "Wi-Fi"],
    exclusions: ["Lunch & Drinks", "Spa packages"],
    isFamilyFriendly: true,
    isHoneymoonFriendly: true,
    isSeniorFriendly: true,
    isKenyanResidentOffer: true,
    rating: 4.8,
    seo: {
      title: "Diani Reef Beach Resort & Spa Rates | Good Secrets Safaris",
      description: "5-star luxury at Diani Reef Beach Resort from KSH 18,480 / USD 184."
    }
  },
  {
    id: "hotel-prideinn-paradise",
    name: "PrideInn Paradise Beach Resort & Spa",
    slug: "prideinn-paradise-beach-resort",
    location: "Shanzu Beach, Mombasa, Kenya",
    country: "Kenya",
    description: "East Africa's first family resort with a dedicated Aqua Park, private beachfront, and extensive conference and leisure facilities.",
    category: "Beach Resort & Spa",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],
    priceFromUSD: 140,
    priceFromKES: 15000,
    soloPriceUSD: 180,
    sharingPriceUSD: 140,
    seasonalPricing: [
      {
        seasonName: "Standard Season",
        dates: "Jan - Nov",
        priceKES: 15000,
        priceUSD: 140
      },
      {
        seasonName: "Peak Festive Season",
        dates: "Dec 20 - Jan 3",
        priceKES: 26000,
        priceUSD: 210
      }
    ],
    facilities: ["Aqua Park with Water Slides", "Olympic Size Pool", "Bamboo Spa", "Private Beach Access"],
    roomTypes: ["Deluxe Garden View", "Deluxe Ocean View", "Family Suite"],
    inclusions: ["Half Board or All-Inclusive Options", "Aqua Park access for kids", "Wi-Fi"],
    exclusions: ["Spa treatments", "Transfers"],
    isFamilyFriendly: true,
    isHoneymoonFriendly: false,
    isSeniorFriendly: true,
    isKenyanResidentOffer: true,
    rating: 4.7,
    seo: {
      title: "PrideInn Paradise Beach Resort Shanzu | Good Secrets Safaris",
      description: "Mombasa family resort at PrideInn Paradise from KSH 15,000 / USD 140."
    }
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "rev-1",
    reviewerName: "David & Sarah Jenkins",
    reviewerCountry: "United Kingdom",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tourTaken: "14-Day Ultimate Kenya & Tanzania Safari Experience",
    reviewText: "Good Secrets Safaris exceeded every expectation. From watching thousands of wildebeest cross the Mara River to having breakfast with elephants in Amboseli, everything was flawlessly organized. Our guide Joseph felt like family by day two.",
    date: "July 2026",
    featured: true,
    platform: "TripAdvisor"
  },
  {
    id: "rev-2",
    reviewerName: "Dr. Arthur Vance",
    reviewerCountry: "United States",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tourTaken: "3-Day Amboseli Elephant Encounters",
    reviewText: "As an 72-year-old traveler, comfort and pacing were my biggest priorities. Good Secrets Safaris provided the smoothest 4x4 Land Cruiser, an attentive guide, and stunning lodges with step-free access. Waking up to Kilimanjaro was breathtaking.",
    date: "June 2026",
    featured: true,
    platform: "SafariBookings"
  },
  {
    id: "rev-3",
    reviewerName: "Elena & Marco Rossi",
    reviewerCountry: "Italy",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tourTaken: "8-Day Safari & Zanzibar Spice Beach Escape",
    reviewText: "The perfect honeymoon. Three unforgettable days in the Masai Mara spotting 4 out of the Big 5 on day one, followed by pure luxury in Zanzibar. The private sunset dhow cruise was pure magic!",
    date: "May 2026",
    featured: true,
    platform: "Google Reviews"
  },
  {
    id: "rev-4",
    reviewerName: "Wanjiru & Family",
    reviewerCountry: "Kenya (Resident)",
    avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tourTaken: "Southern Palms Beach Resort Resident Package",
    reviewText: "We booked our family holiday through Good Secrets Safaris and the KES resident rates were unbeatable. Check-in was seamless, the kids loved the massive pools, and the Good Secrets team kept in touch throughout.",
    date: "August 2026",
    featured: true,
    platform: "Direct Feedback"
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Great Wildebeest Migration Guide: When and Where to Witness the Crossing",
    slug: "great-wildebeest-migration-guide",
    excerpt: "Everything you need to know about tracking the 2-million-strong migration across the Serengeti and Maasai Mara plains.",
    content: `## What is the Great Migration?
The Great Wildebeest Migration is often referred to as the **Eighth Wonder of the World**. Over two million wildebeest, zebras, and gazelles embark on a perpetual circular clockwise journey across the Serengeti-Mara ecosystem in search of fresh grazing.

### Month-by-Month Timing:
- **July to October**: The iconic Mara River crossings in Kenya's Maasai Mara.
- **December to March**: Calving season in the southern Serengeti (Ndutu plains).
- **April to June**: The herds move north through the Western Corridor and Grumeti River.

### Key Safari Tips:
1. Book at least 6 to 9 months in advance for peak river crossing months.
2. Choose a camp located inside or near the prime crossing points.
3. Allow at least 3 full days in the reserve to account for unpredictable crossing moments.`,
    featuredImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Samson Kimani",
      role: "Lead Naturalist & Safari Guide",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    publishedDate: "August 10, 2026",
    category: "Safari Guide",
    readingTime: "5 min read",
    relatedDestinations: ["Maasai Mara National Reserve", "Serengeti National Park"],
    relatedTours: ["14-Day Ultimate Kenya & Tanzania Safari Experience", "3-Day Masai Mara Luxury Big 5 & Migration Safari"],
    tags: ["Great Migration", "Masai Mara", "Serengeti", "Wildlife"]
  },
  {
    id: "blog-2",
    title: "Senior-Friendly Safari Planning: Comfort, Accessibility, and Pacing",
    slug: "senior-friendly-safari-planning-guide",
    excerpt: "How to design a stress-free, luxurious African safari tailored for mature travelers, with private 4x4 vehicles and accessible lodges.",
    content: `## Pacing Your African Dream
A safari should never feel like an endurance test. For senior travelers, selecting the right destinations, vehicle configurations, and lodge layouts makes all the difference.

### What We Prioritize for Senior Travelers:
- **Private 4x4 Land Cruisers**: Ensuring extra legroom, cushioned suspension, and personalized game drive timing.
- **Ground-Floor Tents & Lodges**: Avoiding steep staircases and lengthy pathways between rooms and dining pavilions.
- **Direct Fly-In Options**: Minimizing bumpy road transfers by utilizing scheduled bush airstrip flights.`,
    featuredImage: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Faith Mwangi",
      role: "Travel Specialist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    publishedDate: "July 28, 2026",
    category: "Senior Travel",
    readingTime: "4 min read",
    relatedDestinations: ["Amboseli National Park", "Maasai Mara National Reserve"],
    relatedTours: ["3-Day Amboseli Safari & Kilimanjaro Views"],
    tags: ["Senior Travel", "Comfort Safaris", "Amboseli"]
  },
  {
    id: "blog-3",
    title: "Kenya or Tanzania: Which African Safari Destination is Right for You?",
    slug: "kenya-or-tanzania-safari-comparison",
    excerpt: "A comprehensive comparison of wildlife density, landscapes, travel costs, and unique safari highlights across East Africa's top two safari giants.",
    content: `## Comparing Two Safari Powerhouses
Both Kenya and Tanzania offer peerless wildlife experiences, but each has its own distinct character.

### Why Choose Kenya:
- Shorter driving distances and world-class road infrastructure.
- Year-round high density of Big Cats in Maasai Mara.
- Iconic views of Mount Kilimanjaro from Amboseli.

### Why Choose Tanzania:
- Immense wilderness scale (Serengeti is nearly 10 times larger than Mara).
- The unique enclosed ecosystem of Ngorongoro Crater.
- Direct proximity to Zanzibar beaches.`,
    featuredImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Samson Kimani",
      role: "Lead Naturalist & Safari Guide",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    publishedDate: "July 15, 2026",
    category: "Safari Guide",
    readingTime: "6 min read",
    relatedDestinations: ["Maasai Mara National Reserve", "Serengeti National Park", "Ngorongoro Conservation Area"],
    relatedTours: ["14-Day Ultimate Kenya & Tanzania Safari Experience"],
    tags: ["Kenya vs Tanzania", "East Africa", "Safari Planning"]
  }
];
