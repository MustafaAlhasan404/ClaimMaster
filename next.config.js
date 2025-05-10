/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.planetdds.com',
      },
      {
        protocol: 'https',
        hostname: 'practiceweb.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dentrix.com',
      },
      {
        protocol: 'https',
        hostname: 'www.opendental.com',
      },
      {
        protocol: 'https',
        hostname: 'www.pattersondental.com',
      },
      {
        protocol: 'https',
        hostname: 'www.curvedental.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dentrixascend.com',
      },
    ],
  },
}

module.exports = nextConfig 