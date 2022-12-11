/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcMinify: true,
  },
  images: {
    // external image domains
    domains: [""],
  },
}

module.exports = nextConfig
