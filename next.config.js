const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/DAOGENT/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Added trailingSlash for static site export compatibility
  generateEtags: false, // Disabled ETag generation for improved caching
  compress: true, // Enabled gzip compression for better performance
  poweredByHeader: false, // Added to disable "X-Powered-By" header for security
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path', // Redirect old URL to a new URL
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: '/404', // Redirect any unmatched paths to the custom 404 page
      },
    ];
  },
};
