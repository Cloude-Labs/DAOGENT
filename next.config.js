const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/DAOGENT/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Added trailingSlash for static site export compatibility
  generateEtags: false, // Disabled ETag generation for improved caching
  compress: true, // Enabled gzip compression for better performance
};
