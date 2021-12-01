const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withVideos = require('next-videos');

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
};

module.exports = withPlugins([
  withVideos,
  [
    withOptimizedImages,
    {
      handleImages: ['jpeg', 'png'],
      responsive: {
        sizes: [306, 306 * 2, 326, 326 * 2],
      },
    },
  ],
  nextConfig,
]);
