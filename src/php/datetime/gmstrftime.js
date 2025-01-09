module.exports = function gmstrftime(format, timestamp) {
  //  discuss at: https://locutus.io/php/gmstrftime/
  // original by: Brett Zamir (https://brett-zamir.me)
  //    input by: Alex
  // bugfixed by: Brett Zamir (https://brett-zamir.me)
  //   example 1: gmstrftime("%A", 1062462400)
  //   returns 1: 'Tuesday'
  // improved by: Markus Marchewa
  //   example 2: (() => {let e = process.env, tz = e.TZ; e.TZ = 'Europe/Vienna'; let r = gmstrftime('%F %T %z', 1680300000); e.TZ = tz; return r;})();
  //   returns 2: '2023-03-31 22:00:00 +0000'

  const strftime = require('../datetime/strftime')

  // issue: `%z` should print '+0000' but actually depended on `Date.getTimezoneOffset()`
  // solution: move everything to `strftime`, pass an object with a flag

  return strftime(format, {timestamp, utc: true})
}
