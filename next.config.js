/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  experimental: { typedRoutes: true, optimizePackageImports: [] },
  reactStrictMode: true,
};
module.exports = nextConfig;
