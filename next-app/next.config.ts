import type { NextConfig } from 'next';

const backendOrigin = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || process.env.VITE_API_URL || 'http://localhost:4000';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      new URL('/uploads/**', backendOrigin),
    ],
  },
  async redirects() {
    return [
      { source: '/book-direct', destination: '/guides/booking-safari-direct-local-operator', permanent: true },
      { source: '/about-2', destination: '/about', permanent: true },
      { source: '/contact-2', destination: '/contact', permanent: true },
      { source: '/all-tours-and-safaris', destination: '/safaris', permanent: true },
      { source: '/safari-tour-packages', destination: '/safaris', permanent: true },
      { source: '/accommodation-packag', destination: '/hotels', permanent: true },
      { source: '/accommodation-packag/southern-palms-beach-resort', destination: '/hotels/southern-palms-beach-resort', permanent: true },
      { source: '/accommodation-packag/swahili-beach-resort', destination: '/hotels/swahili-beach-resort', permanent: true },
      { source: '/accommodation-packag/turtle-bay-beach-club', destination: '/hotels/turtle-bay-beach-club', permanent: true },
      { source: '/accommodation-packag/hemingways-watamu', destination: '/hotels/hemingways-watamu', permanent: true },
      { source: '/accommodation-packag/voyager-beach-resort', destination: '/hotels/voyager-beach-resort', permanent: true },
      { source: '/accommodation-packag/baobab-beach-resort-spa', destination: '/hotels/baobab-beach-resort-spa', permanent: true },
      { source: '/accommodation-packag/diani-reef-beach-resort-spa', destination: '/hotels/diani-reef-beach-resort-spa', permanent: true },
      { source: '/accommodation-packag/prideinn-paradise-beach-resort-spa', destination: '/hotels/prideinn-paradise-beach-resort', permanent: true },
    ];
  },
};

export default nextConfig;
