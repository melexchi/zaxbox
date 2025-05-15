import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        // Optionally add pathname and port if needed
        // pathname: '/**',
        // port: ''
      }
    ],
    // Recommended to add these additional image optimizations
    minimumCacheTTL: 60, // 60 seconds minimum cache
    formats: ['image/webp'], // Modern format support
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Standard device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Common image sizes
  },
  // The api.bodyParser setting should be at the root level, not inside images
  api: {
    bodyParser: false
  },
  // Recommended additional configurations
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false // Set to true for debugging in production
};

export default nextConfig;