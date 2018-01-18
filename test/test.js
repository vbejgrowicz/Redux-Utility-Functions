var assert = require('assert');
var reduxUtils = require('../Redux-Utility-Functions.js');

describe('Array Functions Tests', function() {
	it('.compact- Returns no null or undefined values', function(done) {
		assert.deepEqual(reduxUtils.compact([1, null, 3, undefined]), [1,3]);
		done();
	});
	it('.compact- Returns no empty string or false values', function(done) {
		assert.deepEqual(reduxUtils.compact(['', false, 5, false]), [5]);
		done();
	});
	it('.compact- Invalid argument of Object returns undefined', function(done) {
		assert.deepEqual(reduxUtils.compact({a: null, b: 5}), undefined);
		done();
	});
	it('.drop- With no amount removes first value', function(done) {
		assert.deepEqual(reduxUtils.drop([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
		done();
	});
	it('.drop- With drop value return smaller than array returns remaining values', function(done) {
		assert.deepEqual(reduxUtils.drop([1, 2, 3, 4, 5], 4), [5]);
		done();
	});
	it('.drop- With drop value larger than array returns empty array', function(done) {
		assert.deepEqual(reduxUtils.drop([1, 2, 3, 4, 5], 12), []);
		done();
	});
	it('.drop- Invalid argument of object returns undefined', function(done) {
		assert.deepEqual(reduxUtils.drop({a : 4, b : 3, c : 2}, 3), undefined);
		done();
	});
	it('.take- With no amount returns first value', function(done) {
		assert.deepEqual(reduxUtils.take([1, 2, 3, 4, 5]), [1]);
		done();
	});
	it('.take- With amount less then array length returns amount of values', function(done) {
		assert.deepEqual(reduxUtils.take([1, 2, 3, 4], 2), [1, 2]);
		done();
	});
	it('.take- With amount larger then array length returns all values', function(done) {
		assert.deepEqual(reduxUtils.take([1, 2, 3, 4], 12), [1, 2, 3, 4]);
		done();
	});
  it('.take- Invalid argument of object returns undefined', function(done) {
		assert.deepEqual(reduxUtils.take({a : 4, b : 3, c : 2}, 3), undefined);
		done();
	});
  it('.min(Min- Returns min value with mixed values', function(done) {
		assert.deepEqual(reduxUtils.min([10, -2, -40, 1000, -103, 20]), -103);
		done();
	});
  it('.min(Min- Returns min value with all negative values)', function(done) {
		assert.deepEqual(reduxUtils.min([-10, -2, -40, -1000, -103, -20]), -1000);
		done();
	});
  it('.min(Min- Returns min value with all positive values)', function(done) {
		assert.deepEqual(reduxUtils.min([10, 2, 40, 1000, 103, 20]), 2);
		done();
	});
  // it('.min(Min- Returns min value with falsey values)', function(done) {
	// 	assert.deepEqual(reduxUtils.min([10, 2, 40, false, 103, 20]), false);
	// 	done();
	// });
  it('.min- Invalid argument of object returns undefined', function(done) {
		assert.deepEqual(reduxUtils.min({a : 4, b : 3, c : 2}), undefined);
		done();
	});
  it('.min- Empty array argument returns undefined', function(done) {
		assert.deepEqual(reduxUtils.min([]), undefined);
		done();
	});
  it('.max- Returns max value with mixed values', function(done) {
		assert.deepEqual(reduxUtils.max([10, 2, -40, -1000, -103, 20]), 20);
		done();
	});
  it('.max- Returns max value with all negative values', function(done) {
		assert.deepEqual(reduxUtils.max([-10, -2, -40, -1000, -103, -20]), -2);
		done();
	});
  it('.max- Returns max value with all positive values', function(done) {
		assert.deepEqual(reduxUtils.max([10, 2, 40, 1000, 103, 20]), 1000);
		done();
	});
  it('.max- Invalid argument of number returns undefined', function(done) {
		assert.deepEqual(reduxUtils.max(2), undefined);
		done();
	});
  it('.max- Empty array argument returns undefined', function(done) {
		assert.deepEqual(reduxUtils.max([]), undefined);
		done();
	});
  it('.uniq- Returns uniq array of numbers', function(done) {
    assert.deepEqual(reduxUtils.uniq([3, 4, 6, 1, 3, 4, 9, 8]), [3, 4, 6, 1, 9, 8]);
    done();
  });
  it('.uniq- Returns uniq array of strings', function(done) {
    assert.deepEqual(reduxUtils.uniq(['a', 'a', 'a', 'd']), ['a', 'd']);
    done();
  });
  it('.uniq- Returns uniq array of strings and numbers', function(done) {
    assert.deepEqual(reduxUtils.uniq(['a', 1, 'a', '1']), ['a', 1, '1']);
    done();
  });
  it('.chunk- Returns array chunked into arrays of 1 when no value passed', function(done) {
    assert.deepEqual(reduxUtils.chunk([1, 2, 3, 4, 5]), [[1], [2], [3], [4], [5]]);
    done();
  });
  it('.chunk- Returns array chunked into arrays of value passed', function(done) {
    assert.deepEqual(reduxUtils.chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
    done();
  });
  it('.flatten- Returns recursively flattened array', function(done) {
    assert.deepEqual(reduxUtils.flatten([1, [2, [3, [[4], 5]]]]), [1, 2, 3, 4, 5]);
    done();
  });
  it('.flatten- Returns flattened array a single level deep', function(done) {
    assert.deepEqual(reduxUtils.flatten([[1], [2], [3], [4], [5]]), [1, 2, 3, 4, 5]);
    done();
  });
  it('.remove- Returns array values that are not divisible by 2', function(done) {
    assert.deepEqual(reduxUtils.remove([1, 2, 3, 4], function(val){ return val%2 === 0}), [1, 3]);
    done();
  });
  it('.remove- Returns array of values eq to 1', function(done) {
    assert.deepEqual(reduxUtils.remove([1, 2, 3, 4], function(val){ return val !== 1}), [1]);
    done();
  });
  it('.remove- Returns empty arry if empty array argument', function(done) {
    assert.deepEqual(reduxUtils.remove([], function(val){ return val !== 1}), []);
    done();
  });
  it('.remove- Invalid argument of object returns undefined', function(done) {
    assert.deepEqual(reduxUtils.remove({a: 1, b: 2, c: 3}, function(val){ return val !== 1}), undefined);
    done();
  });
  it('.remove- Missing function argument returns undefined', function(done) {
    assert.deepEqual(reduxUtils.remove([1, 2, 3]), undefined);
    done();
  });
	it('.map- Loop through array and return new array with values doubled', function(done) {
		assert.deepEqual(reduxUtils.map([2, 4, 5], function(value) { return value * 2; }), [4, 8, 10]);
		done();
	});
	it('.map- Invalid argument object returns undefined', function(done) {
		assert.deepEqual(reduxUtils.map({'a': 2, 'b': 4, 'c': 5}, function(value) { return value; }), undefined);
		done();
	});
	it('.reduce- Reduce Sum Array values', function(done) {
		assert.deepEqual(reduxUtils.reduce([2, 4, 5], function(acc, value) { return acc + value; }, 0), 11);
		done();
	});
	it('.reduce- Invalid argument object returns undefined', function(done) {
		assert.deepEqual(reduxUtils.reduce({'a': 2, 'b': 4, 'c': 5}, function(acc, value) { return acc + value }, []), undefined);
		done();
	});
});

describe('Object Functions Tests', function() {
	it('.keys- Returns array of object keys', function(done) {
		assert.deepEqual(reduxUtils.keys({ name: 'Vivian', age: 25 }), ['name', 'age']);
		done();
	});
	it('.keys- Returns empty array for empty object', function(done) {
		assert.deepEqual(reduxUtils.keys({}), []);
		done();
	});
	it('.keys- Invalid argument array returns undefined', function(done) {
		assert.deepEqual(reduxUtils.keys(['blue', 'red', 'green']), undefined);
		done();
	});
	it('Values- Returns array of values', function(done) {
		assert.deepEqual(reduxUtils.values({ name: 'Vivian', age: 25 }), ['Vivian', 25]);
		done();
	});
	it('.values- Returns empty array for empty object', function(done) {
		assert.deepEqual(reduxUtils.values({}), []);
		done();
	});
	it('.values- Invalid argument array returns undefined', function(done) {
		assert.deepEqual(reduxUtils.keys(['blue', 'red', 'green']), undefined);
		done();
	});
	it('.findKey- Returns first key with truthy key value', function(done) {
		assert.deepEqual(reduxUtils.findKey({ "a": 1, "b": "2", "c": 3}, function(key, val){ return key !== 'a' }), 'b');
		done();
	});
	it('.findKey- Returns first key with truthy val value', function(done) {
		assert.deepEqual(reduxUtils.findKey({ "a": { is: true}, "b": { is: true} , "c": { is: false }}, function(key, val){ return !val.is }), 'c');
		done();
	});
	it('.findKey- Returns undefined if all false not found', function(done) {
		assert.deepEqual(reduxUtils.findKey({ "a": { is: true}, "b": { is: true} , "c": { is: false }}, function(key, val){ return key === "d" }), undefined);
		done();
	});
	it('.findKey- Returns undefined if invalid array input', function(done) {
		assert.deepEqual(reduxUtils.findKey([1, 2, 3], function(key, val){ return val === 2 }), undefined);
		done();
	});
	it('.merge- Merge two objects with overwriting keys (Keeps second object values)', function(done) {
		assert.deepEqual(reduxUtils.merge({ a: 1, b: 10 }, { a: 5, c: 15 }), { a: 5, b: 10, c: 15 });
		done();
	});
	it('.merge- Merge two objects with different keys', function(done) {
		assert.deepEqual(reduxUtils.merge({ a: '1', b: '2' }, { c: '3', d: '4' }), { a: '1', b: '2', c: '3', d: '4' });
		done();
	});
	it('.merge- Missing second object returns first object', function(done) {
		assert.deepEqual(reduxUtils.merge({ a: '1', b: '2' }), { a: '1', b: '2' });
		done();
	});
	it('.merge- Invalid array input returns undefined', function(done) {
		assert.deepEqual(reduxUtils.merge([1, 2, 3], [4, 5, 6]), undefined);
		done();
	});
	it('.mapKeys- Maps over keys and returns new object', function(done) {
		assert.deepEqual(reduxUtils.mapKeys({"a": 1, "b": 2}, function(key, value) { return key + value}), {"a1": 1, "b2": 2});
		done();
	});
	it('.mapKeys- Invalid argument array retuns undefined', function(done) {
		assert.deepEqual(reduxUtils.mapKeys([1, 2, 3], function(key, value) { return value + 1}), undefined);
		done();
	});
	it('.mapValues- Maps over values and returns new object', function(done) {
		assert.deepEqual(reduxUtils.mapValues({"a": 1, "b": 2}, function(key, value) { return key + value}), {"a": "a1", "b": "b2"});
		done();
	});
	it('.mapValues- Invalid argument array retuns undefined', function(done) {
		assert.deepEqual(reduxUtils.mapValues([1, 2, 3], function(key, value) { return value + 1}), undefined);
		done();
	});
	it('.pick- Returns object with picked keys', function(done) {
		assert.deepEqual(reduxUtils.pick({a: 1, b: 2, c: 3}, ['a', 'c']), {a: 1, c: 3});
		done();
	});
	it('.pick- Returns empty object if picked keys empty array', function(done) {
		assert.deepEqual(reduxUtils.pick({a: 1, b: 2, c: 3}, []), {});
		done();
	});
	it('.pick- Returns empty object if no picked keys', function(done) {
		assert.deepEqual(reduxUtils.pick({a: 1, b: 2, c: 3}), {});
		done();
	});
	it('.pick- Invalid argument array retuns undefined', function(done) {
		assert.deepEqual(reduxUtils.pick([1, 2, 3], [1]), undefined);
		done();
	});
	it('.omit- Returns object with not ommited keys', function(done) {
		assert.deepEqual(reduxUtils.omit({a: 1, b: 2, c: 3}, ['a', 'c']), {b: 2});
		done();
	});
	it('.omit- Returns input object if keys empty array', function(done) {
		assert.deepEqual(reduxUtils.omit({a: 1, b: 2, c: 3}, []), {a: 1, b: 2, c: 3});
		done();
	});
	it('.omit- Returns input object if no omitted keys', function(done) {
		assert.deepEqual(reduxUtils.omit({a: 1, b: 2, c: 3}), {a: 1, b: 2, c: 3});
		done();
	});
	it('.omit- Invalid argument array retuns undefined', function(done) {
		assert.deepEqual(reduxUtils.omit([1, 2, 3], [1]), undefined);
		done();
	});
});

describe('Object/Array Functions Tests', function() {
	it('.every-  Every on array return false for not all pass function ', function(done) {
		assert.deepEqual(reduxUtils.every([2, 4, 5], function(value) { return value % 2 == 0; }), false);
		done();
	});
	it('.every-  Every on array return true for all pass function ', function(done) {
		assert.deepEqual(reduxUtils.every([2, 4, 6], function(value) { return value % 2 == 0; }), true);
		done();
	});
	it('.every- Every on array of objects return true for pass function', function(done) {
		assert.deepEqual(reduxUtils.every([{'user': 1, 'active': true}, {'user': 2, 'active': true}], function(value){ return value.active }), true);
		done();
	});
	it('.every- Every object return true for pass function', function(done) {
		assert.deepEqual(reduxUtils.every({ 'user': 1, 'active': true }, function(key, value){ return value !== null }), true);
		done();
	});
	it('.filter- Returns array values that are divisible by 2', function(done) {
    assert.deepEqual(reduxUtils.filter([1, 2, 3, 4], function(val){ return val%2 === 0}), [2, 4]);
    done();
  });
  it('.filter- Returns array of values not eq to 1', function(done) {
    assert.deepEqual(reduxUtils.filter([1, 2, 3, 4], function(val){ return val !== 1}), [2, 3, 4]);
    done();
  });
  it('.filter- Returns empty arry if empty array argument', function(done) {
    assert.deepEqual(reduxUtils.filter([], function(val){ return val !== 1}), []);
    done();
  });
  it('.filter- Returns new object without filtered keys', function(done) {
    assert.deepEqual(reduxUtils.filter({a: 1, b: 2, c: 3}, function(key, val){ return key !== 'a'}), { b: 2, c: 3 });
    done();
  });
  it('.filter- Missing function argument returns undefined', function(done) {
    assert.deepEqual(reduxUtils.filter([1, 2, 3]), undefined);
    done();
  });
});
