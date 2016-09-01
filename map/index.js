module.exports =  function map(obj, final_callback, context) {
  var k, result, v, i, arr;
  result = {};
  for (k in obj) {
        v = obj[k];
        arr = obj;
        i = k;
        result[k] = final_callback.apply(context, [v, i, arr]);
  }
    return result;
};

