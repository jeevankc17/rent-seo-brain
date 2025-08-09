import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow Next.js to fetch & optimize remote images from placehold.co
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // keep dangerouslyAllowSVG off (Next.js cannot optimize SVGs)
    dangerouslyAllowSVG: false,
  },
};

export default nextConfig;
