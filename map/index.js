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
  }
  return result;
};


