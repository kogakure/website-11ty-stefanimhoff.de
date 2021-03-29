module.exports = function (eleventyConfig) {
  // Compress and combine JS files
  eleventyConfig.addFilter('jsmin', require('./src/utils/minify-js.js'));

  // Minify the HTML in production
  if (process.env.NODE_ENV == 'production') {
    eleventyConfig.addTransform(
      'htmlmin',
      require('./src/utils/minify-html.js')
    );
  }

  // Watch for changes and reload
  eleventyConfig.addWatchTarget('src/assets/postcss');

  // Copy assets to dist
  eleventyConfig.addPassthroughCopy({ 'src/assets/image': 'assets/images' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/js': 'assets/js' });

  // Set input and output folders
  return {
    dir: {
      input: 'src/site',
      data: '../data',
      includes: '../includes',
      layouts: '../layouts',
      output: 'dist',
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
