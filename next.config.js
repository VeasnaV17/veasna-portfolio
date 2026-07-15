/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Using local /public images only for now. Add remote domains here later if needed.
    unoptimized: true
  }
};

module.exports = nextConfig;
