const { DateTime } = require('luxon');

module.exports = (dateObj, format = 'LLL d, y') => {
  return DateTime.fromJSDate(dateObj, {
    zone: 'utc',
  }).toFormat(format);
};
