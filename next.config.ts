import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for better error detection during development
  reactStrictMode: true,

  // Enable SWC minification for faster builds
  swcMinify: true,

  // Configure for Vercel deployment (standalone output)
  output: "standalone",

  // Allow custom webpack configurations if needed
  webpack: (config) => {
    // Example: Adding support for SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  // Define environment variables (optional)
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  },
};

export default nextConfig;
