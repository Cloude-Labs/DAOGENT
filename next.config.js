const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/DAOGENT/' : '',
  images: {
    unoptimized: false,
    domains: ['your-cdn.com'],
  },
  trailingSlash: true,
  generateEtags: false,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true, // Optimize CSS for smaller file sizes
    modern: true, // Serve modern JavaScript
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Encoding',
            value: 'br', // Enable Brotli compression
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' data: https://your-cdn.com; script-src 'self' 'unsafe-inline';",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
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
        source: '/:slug',
        destination: '/404',
      },
    ];
  },
};
