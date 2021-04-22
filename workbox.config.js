module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.woff2'],
  swDest: 'dist/sw.js',
  sourcemap: false,
  cleanupOutdatedCaches: true,
  clientsClaim: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:jpg|png|svg|gif|webp|avif)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 365,
        },
      },
    },
  ],
};
