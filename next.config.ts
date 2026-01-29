import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'id.wikipedia.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'bp4jkt.or.id',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'ehef.id',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lttq-ptiq.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'image.cermati.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'halal.kemenperin.go.id',
        port: '',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
