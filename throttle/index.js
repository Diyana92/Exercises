module.exports = function throttle(f, threshhold, scope) {
  threshhold || (threshhold = 100);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        f.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      f.apply(context, args);
    }
  };
};
