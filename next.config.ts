/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
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

export default nextConfig;