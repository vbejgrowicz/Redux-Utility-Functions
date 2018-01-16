(function(window){
  var library = {};

  // Object/Array Functions
  library.each = function(input, func) {
    if (input instanceof Object && func instanceof Function) {
      for (key in input) {
        func(key, input[key]);
      }
      return input;
    }
    return undefined;
  }

  library.filter = function(input, func) {
    if (input instanceof Object && func instanceof Function) {
      var newArray = [];
      this.each(input, function(key, value){
        if (func(input[key])) {
          newArray.push(input[key])
        }
      });
      return newArray;
    }
    return undefined;
  }

  window.$l = library;

  console.log('Library Loaded...');
})(window);
