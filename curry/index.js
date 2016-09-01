module.exports = function (f) {  
  return function curry() {                           
    var args = [].slice.call(arguments);
    return args.length >= f.length ?
      f.apply(null, args) :
      function () {
        var rest = [].slice.call(arguments);
          return curry.apply(null, args.concat(rest));
    };
  };
};

