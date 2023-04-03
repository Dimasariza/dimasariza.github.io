/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.cdndomain.com'],
    loader: 'vercel',
    path: 'https://domain.com/myaccount/',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,
}

module.exports = nextConfig
