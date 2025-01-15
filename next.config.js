/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "",
  },
  distDir: "docs",
  basePath: "/jamesakanoa.github.io",
  assetPrefix: "/jamesakanoa.github.io/",
  trailingSlash: true,
};

export default nextConfig;
