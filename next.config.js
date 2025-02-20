const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.BASE_PATH || '/DAOGENT/';

module.exports = {
  assetPrefix: isProd ? basePath : '',
  images: {
    unoptimized: false,
    domains: ['your-cdn.com'],
    formats: ['image/avif', 'image/webp'], // Added WebP & AVIF support
  },
  trailingSlash: true,
  generateEtags: false,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
    modern: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Encoding',
            value: 'br, gzip', // Added gzip for broader support
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' data: https://your-cdn.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none';",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow', // SEO enhancement
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
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
        source: '/special-route/:slug',
        destination: '/custom-handler/:slug', // Improved specific rewrites
      },
    ];
  },
};
