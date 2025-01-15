/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath:
    process.env.NODE_ENV === "production" ? "/jamesakanoa.github.io" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/jamesakanoa.github.io" : "",
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
