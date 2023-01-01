/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
  },
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/nextjs-cv",
  assetPrefix: "/nextjs-cv",
};

module.exports = nextConfig;
