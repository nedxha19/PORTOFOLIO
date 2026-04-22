import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? "/Pixelize" : "";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
