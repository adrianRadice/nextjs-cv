/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
    NPM_CONFIG_LEGACY_PEER_DEPS: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

  minify: true,
};

module.exports = nextConfig;
