(function(){
  var $r = {};

  // Array Functions
  $r.compact = function(input) {
    if (input instanceof Array) {
      var newArray = [];
      newArray = this.filter(input, function(key, item) {
        return item
      });
      return newArray;
    }
    return undefined;
  }

  $r.drop = function(input, dropNum) {
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

  $r.take = function(input, takeNum) {
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

  $r.min = function(input) {
    if (input instanceof Array && input.length > 0) {
      var min = Math.min.apply(this, input);
      return min;
    }
    return undefined;
  }

  $r.max = function(input) {
    if (input instanceof Array && input.length > 0) {
      var max = Math.max.apply(this, input);
      return max;
    }
    return undefined;
  }

  $r.uniq = function(input) {
    if (input instanceof Array) {
      var newArray =  [];
      for (var i = 0; i < input.length; i += 1) {
        if (newArray.indexOf(input[i]) === -1) {
          newArray.push(input[i]);
        }
      }
      return newArray;
    }
    return undefined;
  }

  $r.chunk = function(input, chunkSize) {
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

  $r.flatten = function(input) {
    if (input instanceof Array) {
      var newArray = this.reduce(input, function(previous, current) {
        if (current instanceof Array) {
          current = this.flatten(current);
        }
        return previous.concat(current)
      }.bind(this), []);
      return newArray;
    }
    return undefined;
  }

  $r.remove = function(input, func) {
    if (input instanceof Array && func instanceof Function) {
      var newArray = this.filter(input, func.bind(this));
      return newArray;
    }
    return undefined;
  }

  // Object Functions
  $r.keys = function(input) {
    if (input instanceof Object) {
      var newArray = [];
      this.each(input, function(key, value, object) {
        newArray.push(key);
      });
      return newArray;
    }
    return undefined;
  }

  $r.values = function(input) {
    if (input instanceof Object) {
      var newArray = [];
      this.each(input, function(key, value, object) {
        newArray.push(value);
      });
      return newArray;
    }
    return undefined;
  }

  $r.findKey = function(input, func) {
    if (input instanceof Object && func instanceof Function) {
      var foundKey;
      for (var key in input) {
        var result = func(key, input[key], input);
        if (result === true) {
          foundKey = key;
          return foundKey;
        }
      }
      return foundKey;
    }
    return undefined;
  }

  $r.merge = function(inputOne, inputTwo) {
    if (inputOne instanceof Object && inputTwo instanceof Object) {
      var mergedObject = inputOne;
      for (var key in inputTwo) {
        mergedObject[key] = inputTwo[key]
      }
      return mergedObject;
    }
    return undefined;
  }

  $r.mapKeys = function(input, func) {
    if (input instanceof Object && func instanceof Function) {
      var newObject = {};
      this.each(input, function(key, value, object) {
        var newKey = func(key, value, object);
        newObject[newKey] = value;
      });
      return newObject;
    }
    return undefined;
  }

  $r.mapValues = function(input, func) {
    if (input instanceof Object && func instanceof Function) {
      var newObject = {};
      this.each(input, function(key, value, object) {
        var newValue = func(key, value, object);
        newObject[key] = newValue;
      });
      return newObject;
    }
    return undefined;
  }

  $r.pick = function(input, omitedKey) {
    if (input instanceof Object) {
      var newObject = {};
      this.each(input, function(key, value, object) {
        if (omitedKey.indexOf(key) === -1) {
        } else {
          newObject[key] = value;
        }
      });
      return newObject;
    }
    return undefined;
  }

  $r.omit = function(input, omitedKey) {
    if (input instanceof Object) {
      var newObject = {};
      this.each(input, function(key, value, object) {
        if (omitedKey.indexOf(key) !== -1) {
        } else {
          newObject[key] = value;
        }
      });
      return newObject;
    }
    return undefined;
  }

  // Object/Array Functions
  $r.each = function(input, func) {
    if (input instanceof Object && func instanceof Function) {
      for (var key in input) {
        func(key, input[key], input);
      }
      return input;
    }
    return undefined;
  }

  $r.every = function(input, func) {
    if (input instanceof Object && func instanceof Function) {
      var result;
      for (var key in input) {
        result = func(input[key]);
        if (result === false) {
          return result;
        }
      }
      return result;
    }
    return undefined;
  }

  $r.filter = function(input, func) {
    if (input instanceof Object && func instanceof Function) {
      var newArray = [];
      this.each(input, function(key, value, object) {
        if (func(key, value, object)) {
          newArray.push(value)
        }
      });
      return newArray;
    }
    return undefined;
  }

  $r.map = function(input, func) {
    if (input instanceof Object && func instanceof Function) {
      var newArray = [];
      this.each(input, function(key, value, object) {
        newArray.push(func(key, value, object));
      });
      return newArray;
    }
    return undefined;
  }

  $r.reduce = function(input, func, accumulator) {
    if (input instanceof Object && func instanceof Function) {
      this.each(input, function(key, value, object) {
        accumulator = func(accumulator, value, key);
      });
      return accumulator;
    }
    return undefined;
  }

  module.exports = $r;

  console.log('Redux Utility Functions Library Loaded...');
})();
