module.exports = function (eleventyConfig) {
  // Set copy asset folder to dist
  eleventyConfig.addPassthroughCopy('assets');

  // Set input and output folder
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    dataTemplateEngine: 'njk',
    mardownTemplateEngine: 'njk',
  };
};
