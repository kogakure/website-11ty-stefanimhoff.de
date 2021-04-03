const filters = require('./src/utils/filters.js');

module.exports = function (config) {
  // Compress and combine JS files
  config.addFilter('jsmin', require('./src/utils/minify-js.js'));

  // Minify the HTML in production
  if (process.env.NODE_ENV == 'production') {
    config.addTransform('htmlmin', require('./src/utils/minify-html.js'));
  }

  // Layouts
  config.addLayoutAlias('base', 'base.njk');

  // Filters
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName]);
  });

  // Watch for changes and reload
  config.addWatchTarget('src/assets');

  // Copy static files to dist
  config.addPassthroughCopy({ 'src/assets/fonts': 'assets/fonts' });
  config.addPassthroughCopy({ 'src/assets/images': 'assets/images' });

  // Set input and output folders
  return {
    dir: {
      input: 'src',
      data: 'data',
      includes: 'includes',
      layouts: 'layouts',
      output: 'dist',
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
