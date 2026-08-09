import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bookstore.eraasoft.pro",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;