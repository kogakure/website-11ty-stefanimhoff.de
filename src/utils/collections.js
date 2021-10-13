const _ = require('lodash');

module.exports = {
  journalByYear: function (collection) {
    return _.chain(
      collection
        .getFilteredByTag('journal')
        .filter(
          (item) =>
            !(item.data.draft && process.env.ELEVENTY_ENV == 'production')
        )
    )
      .groupBy((post) => post.date.getFullYear())
      .toPairs()
      .reverse()
      .value();
  },
  postsByYear: function (collection) {
    return _.chain(
      collection
        .getFilteredByTag('posts')
        .filter(
          (item) =>
            !(item.data.draft && process.env.ELEVENTY_ENV == 'production')
        )
    )
      .groupBy((post) => post.date.getFullYear())
      .toPairs()
      .reverse()
      .value();
  },
  linksByYear: function (collection) {
    return _.chain(
      collection
        .getFilteredByTag('links')
        .filter(
          (item) =>
            !(item.data.draft && process.env.ELEVENTY_ENV == 'production')
        )
    )
      .groupBy((post) => post.date.getFullYear())
      .toPairs()
      .reverse()
      .value();
  },
  quotesByYear: function (collection) {
    return _.chain(
      collection
        .getFilteredByTag('quotes')
        .filter(
          (item) =>
            !(item.data.draft && process.env.ELEVENTY_ENV == 'production')
        )
    )
      .groupBy((post) => post.date.getFullYear())
      .toPairs()
      .reverse()
      .value();
  },
};
