# Redux-Utility-Functions

Redux-Utiltity-Functions is a small but feature-rich JavaScript library. It's goal is to simplfify working with arrays and objects in Redux state.

## Functions
- Array
  - [.compact](#compact)
  - [.drop](#drop)
  - [.take](#take)
  - [.min](#min)
  - [.max](#max)
  - [.uniq](#uniq)
  - [.chunk](#chunk)
  - [.flatten](#flatten)
  - [.remove](#remove)
- Object
  - [.keys](#keys)
  - [.values](#values)
  - [.findKey](#findkey)
  - [.merge](#merge)
  - [.mapKeys](#mapkeys)
  - [.mapValues](#mapvalues)
  - [.pick](#pick)
  - [.omit](#omit)

.compact
----
Creates a new array that does not include falsey values (false, null, 0, "", undefined, NaN)
```
reduxUtils.compact(array)
```
#### Example
```
reduxUtils.compact([1, false, 3, null, 5, undefined])
// [1, 3, 5]
```

.drop
----
Creates a new array with number of elements removed from beginning
```
reduxUtils.drop(array, number)
```
#### Example
```
reduxUtils.drop([1, 2, 3, 4, 5])
// [2, 3, 4, 5]

reduxUtils.drop([1, 2, 3, 4, 5], 4)
// [5]

reduxUtils.drop([1, 2, 3, 4, 5], 10)
// []
```

.take
----
Creates a new array with number of elements from beginning
```
reduxUtils.take(array, number)
```
#### Example
```
reduxUtils.take([1, 2, 3, 4, 5])
// [1]

reduxUtils.take([1, 2, 3, 4, 5], 4)
// [1, 2, 3, 4]

reduxUtils.take([1, 2, 3, 4, 5], 10)
// [1, 2, 3, 4, 5]
```

.min
----
Returns minimum value in array
```
reduxUtils.min(array)
```
#### Example
```
reduxUtils.min([1, -1, 2, -5, 4, -3])
// [-5]

reduxUtils.min([])
// undefined
```

.max
----
Returns maximum value in array
```
reduxUtils.max(array)
```
#### Example
```
reduxUtils.max([1, -1, 2, -5, 4, -3])
// [4]

reduxUtils.max([])
// undefined
```

.uniq
----
Creates a new array without duplicate values
```
reduxUtils.uniq(array)
```
#### Example
```
reduxUtils.uniq([1, 2, 1])
// [1, 2]

reduxUtils.uniq(['a', 'c', 'c', 'a'])
// ['a', 'c']
```
  
.chunk
----
Creates a new array of elements split into arrays with a size of number given. If not split evenly, last chunk will include remaining elements.
```
reduxUtils.chunk(array, number)
```
#### Example
```
reduxUtils.chunk([1, 2, 3, 4, 5])
// [[1], [2], [3], [4], [5]]

reduxUtils.chunk([1, 2, 3, 4, 5], 2)
// [[1, 2], [3, 4], [5]]
```
  
.flatten
----
Creates a new array with elements recursively flattened.
```
reduxUtils.flatten(array)
```
#### Example
```
reduxUtils.flatten([[1], [2], [3], [4], [5])
// [1, 2, 3, 4, 5]

reduxUtils.flatten([1, [2, [3, [4]]]])
// [1, 2, 3, 4]
```

.remove
----
Creates a new array of values that function returns false for.
```
reduxUtils.remove(array, function(key, value, array))
```
#### Example
```
reduxUtils.remove([1, 2, 3, 4, 5, 6], function(key, value) { 
  return value % 2 === 0
});
// [1, 3, 5]

reduxUtils.remove([1, 2, 3, 4, 5, 6], function(key, value) { 
  return value !== 1
});
// [1]
```

.keys
----
Creates an array of object keys.
```
reduxUtils.keys(object)
```
#### Example
```
reduxUtils.keys({ name: 'Vivian', favoriteColor: 'blue });
// ['name', 'favoriteColor']
```

.values
----
Creates an array of object values.
```
reduxUtils.values(object)
```
#### Example
```
reduxUtils.values({ name: 'Vivian', favoriteColor: 'blue });
// ['Vivian', 'blue']
```

.findKey
----
Returns first key with truthy value.
```
reduxUtils.findKey(object, function(key, value, object))
```
#### Example
```
reduxUtils.findKey({ "a": { isActive: true}, "b": { isActive: true} , "c": { isActive: false }}, function(key, value, object) {
  return val.isActive;
});
// 'a'
```

.merge
----
Creates a new object of given objects, second object takes priority if contains same key as first object.
```
reduxUtils.merge(object, object)
```
#### Example
```
reduxUtils.merge({ name: 'Vivian', favoriteColor: 'green' }, { favoriteColor: 'blue' });
// { name: 'Vivian', favoriteColor: 'blue' };

reduxUtils.merge({ 1: 'a', 2: 'b' }, { 3: 'c', 4: 'd' });
// { 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
```

.mapKeys
----
Creates new object with the same values as object and generates new keys using function.
```
reduxUtils.mapKeys(object, function(key, value, object))
```
#### Example
```
reduxUtils.mapKeys({"a": 1, "b": 2}, function(key, value, object) {
  return key + value;
});
// { 'a1': 1, 'b2': 2}
```

.mapValues
----
Creates new object with the same keys as object and generates new values using function.
```
reduxUtils.mapValues(object, function(key, value, object))
```
#### Example
```
reduxUtils.mapValues({"a": 1, "b": 2}, function(key, value, object) {
  return key + value;
});
// { 'a': 'a1', 'b': 'b2' }
```

.pick
----
Creates new object with only keys in array.
```
reduxUtils.pick(object, array)
```
#### Example
```
reduxUtils.pick({ 'id': 1, 'name': 'User', 'color': 'red'}, ['name']);
// { 'name': 'User' }
```

.omit
----
Creates new object without keys in array.
```
reduxUtils.omit(object, array)
```
#### Example
```
reduxUtils.omit({ 'id': 1, 'name': 'User', 'color': 'red'}, ['name']);
// { 'id': 1, 'color': 'red' }
```
