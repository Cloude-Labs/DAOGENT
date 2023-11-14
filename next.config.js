const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/DAOGENT/' : '',
  images: {
    unoptimized: false, // Enabled Next.js native image optimization
    domains: ['your-cdn.com'], // Allow images from an external CDN
  },
  trailingSlash: true,
  generateEtags: false,
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Long-term caching for static files
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: '/404',
      },
    ];
  },
};
