import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['your-domain.com'], // Add your domain if you host images externally
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias['@/public'] = path.join(__dirname, 'public');
    }
    return config;
  },
};

export default nextConfig;
