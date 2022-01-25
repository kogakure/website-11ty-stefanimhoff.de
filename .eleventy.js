const pluginLazyImages = require('eleventy-plugin-lazyimages');
const pluginReadingTime = require('eleventy-plugin-reading-time');
const pluginRssFeed = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const filterNbsp = require('eleventy-nbsp-filter');

const filters = require('./src/utils/filters.js');
const shortcodes = require('./src/utils/shortcodes.js');
const collections = require('./src/utils/collections.js');

module.exports = function(config) {
  // Plugins
  config.addPlugin(pluginReadingTime);
  config.addPlugin(pluginRssFeed);
  config.addPlugin(pluginSyntaxHighlight);

  if (process.env.ELEVENTY_ENV == 'production') {
    config.addPlugin(pluginLazyImages);
  }

  // Markdown It
  let markdownIt = require('markdown-it');
  let markdownItCharts = require('markdown-it-charts');
  let markdownItFootnotes = require('markdown-it-footnote');
  let markdownItGitHubHeadings = require('markdown-it-github-headings');
  let markdownItSpoiler = require('markdown-it-spoiler');
  let markdownItSub = require('markdown-it-sub');
  let markdownItSup = require('markdown-it-sup');
  let markdownItExternalAnchor = require('markdown-it-external-anchor');
  let options = {
    html: true,
  };

  let markdownLib = markdownIt(options)
    .use(markdownItFootnotes)
    .use(markdownItCharts)
    .use(markdownItGitHubHeadings)
    .use(markdownItExternalAnchor, {
      domain: 'www.stefanimhoff.de',
      class: 'external',
    })
    .use(markdownItSpoiler)
    .use(markdownItSub)
    .use(markdownItSup);

  markdownLib.renderer.rules.footnote_caption = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString();

    if (tokens[idx].meta.subId > 0) {
      n += ':' + tokens[idx].meta.subId;
    }

    return (
      '<span class="footnote-bracket">[</span>' +
      n +
      '<span class="footnote-bracket">]</span>'
    );
  };

  markdownLib.renderer.rules.footnote_block_open = () =>
    '<hr />\n' +
    '<h2 class="mt-3">Footnotes</h2>\n' +
    '<section class="footnotes">\n' +
    '<ol class="footnotes-list">\n';

  config.setLibrary('md', markdownLib);

  // Compress and combine JS files
  config.addFilter('jsmin', require('./src/utils/minify-js.js'));

  // Minify the HTML in production
  if (process.env.ELEVENTY_ENV == 'production') {
    config.addTransform('htmlmin', require('./src/utils/minify-html.js'));
  }

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
  config.addShortcode('youtube', shortcodes.youtube);
  config.addShortcode('odysee', shortcodes.odysee);
  config.addPairedShortcode('bookshelf', shortcodes.bookshelf);
  config.addPairedShortcode('colorstack', shortcodes.colorstack);
  config.addPairedShortcode('banner', shortcodes.banner);
  config.addPairedShortcode('verse', shortcodes.verse);

  // Filters
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName]);
  });
  config.addFilter('nbsp', filterNbsp(2, 15));

  // Watch for changes and reload
  config.addWatchTarget('src/assets');

  // Copy static files to dist
  config.addPassthroughCopy({
    'src/static/**/*.{xml,html,ico}': '.'
  });
  config.addPassthroughCopy({
    'src/static/.well-known/*': '.well-known'
  });
  config.addPassthroughCopy({
    'src/downloads': 'downloads'
  });
  config.addPassthroughCopy({
    'src/assets/fonts': 'assets/fonts'
  });
  config.addPassthroughCopy({
    'src/assets/images': 'assets/images'
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
