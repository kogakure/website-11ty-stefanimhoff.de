const _ = require('lodash');
const notDraft = (p) => !p.data.draft;

module.exports = {
  liveFeatured: function (collection) {
    return collection.getFilteredByTag('featured').filter(notDraft).reverse();
  },
  livePosts: function (collection) {
    return collection.getFilteredByTag('posts').filter(notDraft).reverse();
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
};
