const _ = require('lodash');
const notDraft = (p) => !p.data.draft;

module.exports = {
  liveFeatured: function (collection) {
    return collection.getFilteredByTag('featured').filter(notDraft).reverse();
  },
  livePosts: function (collection) {
    return collection.getFilteredByTag('posts').filter(notDraft).reverse();
  },
  liveLinks: function (collection) {
    return collection.getFilteredByTag('links').filter(notDraft).reverse();
  },
  liveQuotes: function (collection) {
    return collection.getFilteredByTag('quotes').filter(notDraft).reverse();
  },
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
