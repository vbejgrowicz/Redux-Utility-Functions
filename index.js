(function(window){
  var library = {};

  // Array Functions
  library.compact = function(input) {
    if (input instanceof Array) {
      var newArray = [];
      newArray = this.filter(input, function(item){
        return item
      });
      return newArray;
    }
    return undefined;
  }

  library.drop = function(input, dropNum) {
    if (input instanceof Array) {
      var newArray = [];
      if (typeof dropNum === 'undefined') {
        dropNum = 1;
      }
      newArray = input.slice(dropNum);
      return newArray;
    }
    return undefined;
  }

  library.take = function(input, takeNum) {
    if (input instanceof Array) {
      var newArray = [];
      if (typeof takeNum === 'undefined') {
        takeNum = 1;
      }
      newArray = input.slice(0, takeNum);
      return newArray;
    }
    return undefined;
  }

  library.chunk = function(input, chunkSize) {
    if (input instanceof Array) {
      var newArray =  [];
      if (typeof chunkSize === 'undefined') {
        chunkSize = 1;
      }
      for (var i = 0; i < input.length; i += chunkSize) {
        newArray.push(input.slice(i, i + chunkSize));
      }
      return newArray;
    }
    return undefined;
  }

  library.remove = function(input, func) {
    if (input instanceof Array && func instanceof Function) {
      var newArray = this.filter(input, func.bind(this));
      return newArray;
    }
    return undefined;
  }
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
