const { withPWA } = require('next-pwa');
const { createSecureHeaders } = require('next-safe-middleware');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'mdx'],
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      }
    ],
  },
  async headers() {
    const headers = createSecureHeaders({
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'"],
          "script-src": ["'self'", "'unsafe-inline'", 'https://www.googletagmanager.com'],
          "style-src": ["'self'", "'unsafe-inline'"],
          "img-src": ["'self'", 'data:', 'https://images.unsplash.com', 'https://play-lh.googleusercontent.com', 'https://cdn.pixabay.com', 'https://assets.website-files.com'],
          "connect-src": ["'self'", 'https://www.google-analytics.com'],
          "font-src": ["'self'", 'https://fonts.gstatic.com'],
          "frame-src": ["'self'"],
        },
      },
      referrerPolicy: 'strict-origin-when-cross-origin',
    });

    return [
      {
        source: '/:path*',
        headers,
      },
    ];
  },
};

module.exports = withMDX(
  withPWA({
    dest: 'public',
    disable: !isProd,
    register: true,
    skipWaiting: true,
  })(nextConfig)
);
