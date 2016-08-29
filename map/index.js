//module.exports =  function map(arr,func) {
//    console.log(arr);
//    func.apply(this, arr);
//
//};

module.exports =  function map(obj, f, callback) {
  var k, result, v, i, arr;
  result = {};
  var context = this;
  for (k in obj) {
    v = obj[k];
    arr=obj;
    i=k;
    result[k] = f(v, i, arr);
    f(callback);

  // result[k] = f.apply(this,v, i, arr)
  }
  return result;
};

//
//module.exports = function map(obj, iteratee, context) {
//    iteratee = cb(iteratee, context);
//    var keys = !isArrayLike(obj) && _.keys(obj),
//        length = (keys || obj).length,
//        results = Array(length);
//    for (var index = 0; index < length; index++) {
//      var currentKey = keys ? keys[index] : index;
//      results[index] = iteratee(obj[currentKey], currentKey, obj);
//    }
//    return results;
//  };

