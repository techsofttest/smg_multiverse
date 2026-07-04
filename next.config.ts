/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'techsoftwebsolutions.com',
        pathname: '/techsoft/demo/SMG_admin/public/uploads/**',
      },
    ],

    dangerouslyAllowSVG: true, 
    unoptimized: true,
  },
};

export default nextConfig;