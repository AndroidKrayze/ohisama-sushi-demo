import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/ohisama-sushi-demo",
  assetPrefix: "/ohisama-sushi-demo",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
