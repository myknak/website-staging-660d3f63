/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.NODE_ENV == 'production' ? 'export' : 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Required for static export
  },
  experimental: {
    optimizeCss: true,
  },
}

if (process.env.NODE_ENV == 'production') {
  module.exports = nextConfig
} else {
  const { withJsxLoc } = require('@builder.io/nextjs-plugin-jsx-loc')
  module.exports = withJsxLoc({}, nextConfig)
}
