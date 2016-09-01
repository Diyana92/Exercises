module.exports =  function once(f) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = f.apply(this, arguments);
      func = null;
      return memo;
    };
};