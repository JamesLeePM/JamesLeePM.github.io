/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  }
  
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/jamesleepm.github.io/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};