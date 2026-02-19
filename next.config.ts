import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["fiestacabs.com", "www.fiestacabs.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fiestacabs.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.fiestacabs.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
