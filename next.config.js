/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dr.savee-cdn.com',
      },
    ],
  },
}

module.exports = nextConfig