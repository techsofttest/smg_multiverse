import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'techsoftwebsolutions.com',
        pathname: '/techsoft/demo/SMG_admin/public/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.smgmultiverse.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'smgmultiverse.com',
        pathname: '/uploads/**',
      },
    ],

    dangerouslyAllowSVG: true, 
    unoptimized: true,
  },
};
export default config;