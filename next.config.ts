import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["source.unsplash.com", "images.unsplash.com"],
  },
  reactStrictMode: true, // optional but recommended
};

export default nextConfig;
