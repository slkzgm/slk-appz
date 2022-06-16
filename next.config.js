/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: [
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=630720000; includeSubDomains; preload'
    },
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on'
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block'
    }
  ]
}

module.exports = nextConfig
