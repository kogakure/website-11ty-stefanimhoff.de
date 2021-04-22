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
};
