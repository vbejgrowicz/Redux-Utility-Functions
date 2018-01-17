# Redux-Utility-Functions

Redux-Utiltity-Functions is a small but feature-rich JavaScript library. It's goal is to simplfify working with arrays and objects in Redux state.

## Functions
  - [Drop](#drop)
  - [Take](#take)

### Drop
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

### Take
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
