module.exports = function throttle(f, threshhold) {
  var last, deferTimer;
  return function () {        
    var now = +new Date;
    var args = arguments; 
    var context = this;
    if (last && now < last + threshhold) {
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
