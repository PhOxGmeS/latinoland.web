
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestudio.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dododex.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ark.wiki.gg',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'latamempires.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ark.fandom.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https' ,
        hostname: 'www.pcgamesn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https' ,
        hostname: 'www.notebookcheck.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https' ,
        hostname: 'www.ginx.tv',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https' ,
        hostname: 'www.nme.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'e7.pngegg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'e1.pngegg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.pngplay.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'assets-global.website-files.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.pngfind.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'arkids.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
