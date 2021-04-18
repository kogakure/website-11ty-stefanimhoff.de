const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const readingTime = require('eleventy-plugin-reading-time');

const filters = require('./src/utils/filters.js');
const shortcodes = require('./src/utils/shortcodes.js');
const collections = require('./src/utils/collections.js');

module.exports = function (config) {
  // Plugins
  config.addPlugin(syntaxHighlight);
  config.addPlugin(readingTime);

  // Markdown It
  let markdownIt = require('markdown-it');
  let markdownItFootnotes = require('markdown-it-footnote');
  let markdownItGitHubHeadings = require('markdown-it-github-headings');
  let options = {
    html: true,
  };
  let markdownLib = markdownIt(options)
    .use(markdownItFootnotes)
    .use(markdownItGitHubHeadings);
  config.setLibrary('md', markdownLib);

  // Compress and combine JS files
  config.addFilter('jsmin', require('./src/utils/minify-js.js'));

  // Minify the HTML in production
  if (process.env.NODE_ENV == 'production') {
    config.addTransform('htmlmin', require('./src/utils/minify-html.js'));
  }

  // Layouts
  config.addLayoutAlias('base', 'base.njk');

  // Shortcodes
  config.addShortcode('affiliate', shortcodes.affiliate);
  config.addShortcode('book', shortcodes.book);
  config.addShortcode('color', shortcodes.color);
  config.addShortcode('download', shortcodes.download);
  config.addShortcode('email', shortcodes.email);
  config.addShortcode('more', shortcodes.more);
  config.addShortcode('flag', shortcodes.flag);
  config.addShortcode('netflix', shortcodes.netflix);
  config.addShortcode('primevideo', shortcodes.primevideo);
  config.addPairedShortcode('bookshelf', shortcodes.bookshelf);
  config.addPairedShortcode('colorstack', shortcodes.colorstack);
  config.addPairedShortcode('banner', shortcodes.banner);

  // Filters
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName]);
  });

  // Watch for changes and reload
  config.addWatchTarget('src/assets');

  // Copy static files to dist
  config.addPassthroughCopy({ 'src/static/**/*': '.' });
  config.addPassthroughCopy({ 'src/downloads': 'downloads' });
  config.addPassthroughCopy({ 'src/assets/fonts': 'assets/fonts' });
  config.addPassthroughCopy({ 'src/assets/images': 'assets/images' });
  config.addPassthroughCopy({
    'src/assets/styles/print.css': 'assets/styles/print.css',
  });

  // Deep-Merge
  config.setDataDeepMerge(true);

  // Custom Collections
  Object.keys(collections).forEach((collectionName) => {
    config.addCollection(collectionName, collections[collectionName]);
  });

  // Set input and output folders
  return {
    dir: {
      input: 'src',
      data: 'data',
      includes: 'includes',
      layouts: 'layouts',
      output: 'dist',
    },
    templateFormats: ['njk', 'md', '11ty.js', 'jpg', 'png', 'svg'],
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
