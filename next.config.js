/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jamesleepm.github.io/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/jamesleepm.github.io' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
};

module.exports = nextConfig;