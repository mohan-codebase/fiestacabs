import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],
  experimental: {
    serverActions: {
      allowedOrigins: ["fiestacabs.com", "www.fiestacabs.com", "*.fiestacabs.com", "https://fiestacabs.com"],
    },
  },
  images: {
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
