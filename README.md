# Redux-Utility-Functions

Redux-Utiltity-Functions is a small but feature-rich JavaScript library. It's goal is to simplfify working with arrays and objects in Redux state.

## Functions
### Array
  - [Compact](#compact)
  - [Drop](#drop)
  - [Take](#take)
  - [Min](#min)
  - [Max](#max)
  - [Uniq](#uniq)
  - [Chunk](#chunk)
  - [Flatten](#flatten)
  - [Remove](#remove)

Compact
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

Drop
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

Take
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

Min
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

Max
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

Uniq
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
  
Chunk
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
  
Flatten
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

Remove
----
Creates a new array of values that function returns truthy for.
```
reduxUtils.remove(array, function(key, value, array))
```
#### Example
```
reduxUtils.remove([1, 2, 3, 4, 5, 6], function(key, value) { 
  return value % 2 === 0
});
// [2, 4, 6]

reduxUtils.remove([1, 2, 3, 4, 5, 6], function(key, value) { 
  return value !== 1
});
// [2, 3, 4, 5, 6]
```
