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

//function add(a, b) {
//  return a + b;
//}
//var curriedAdd = curry(add);  
//var result = curriedAdd(1)(2);
//console.log(result);
//
//function add(a, b, c) {
//  return a + b + c;
//}
//var curriedAdd = curry(add); 
//var result = curriedAdd(1, 2)(3);
//var result = curriedAdd(1)(2)(3);
//var result = curriedAdd(2)(3)(4);
//console.log(result);
//function output(n) {
//    return n;
//}
//var curriedOutput = curry(output);  
//var result = curriedOutput(55);
//console.log(result);
//
//function merge(a, b, c) {
//    return [a, b, c].join(', ');
//};
//var curriedMerge = curry(merge);  
//var result = curriedMerge('1')(2)(3);
//console.log(result);
//
//function add(a, b, c, d) {
//    return a + b + c + d;
//}
//var curriedAdd = curry(add); 
//var curriedTwo = curriedAdd(1)(2);
////var result = curriedTwo(3)(4);
//var curriedThree = curriedTwo(5);
//var result1 = curriedThree(6);
//
//console.log(result1);