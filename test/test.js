var assert = require('assert');
var $r = require('../Redux-Utility-Functions.js');

describe('Array Functions Tests', function() {
	it('Compact- Returns no null or undefined values', function(done) {
		assert.deepEqual($r.compact([1, null, 3, undefined]), [1,3]);
		done();
	});
	it('Compact- Returns no empty string or false values', function(done) {
		assert.deepEqual($r.compact(['', false, 5, false]), [5]);
		done();
	});
	it('Compact- Invalid argument of Object returns undefined', function(done) {
		assert.deepEqual($r.compact({a: null, b: 5}), undefined);
		done();
	});
	it('Drop- With no amount removes first value', function(done) {
		assert.deepEqual($r.drop([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
		done();
	});
	it('Drop- With drop value return smaller than array returns remaining values', function(done) {
		assert.deepEqual($r.drop([1, 2, 3, 4, 5], 4), [5]);
		done();
	});
	it('Drop- With drop value larger than array returns empty array', function(done) {
		assert.deepEqual($r.drop([1, 2, 3, 4, 5], 12), []);
		done();
	});
	it('Drop- Invalid argument of object returns undefined', function(done) {
		assert.deepEqual($r.drop({a : 4, b : 3, c : 2}, 3), undefined);
		done();
	});
	it('Take- With no amount returns first value', function(done) {
		assert.deepEqual($r.take([1, 2, 3, 4, 5]), [1]);
		done();
	});
	it('Take- With amount less then array length returns amount of values', function(done) {
		assert.deepEqual($r.take([1, 2, 3, 4], 2), [1, 2]);
		done();
	});
	it('Take- With amount larger then array length returns all values', function(done) {
		assert.deepEqual($r.take([1, 2, 3, 4], 12), [1, 2, 3, 4]);
		done();
	});
  it('Take- Invalid argument of object returns undefined', function(done) {
		assert.deepEqual($r.take({a : 4, b : 3, c : 2}, 3), undefined);
		done();
	});
  it('.min(Min- Returns min value with mixed values', function(done) {
		assert.deepEqual($r.min([10, -2, -40, 1000, -103, 20]), -103);
		done();
	});
  it('.min(Min- Returns min value with all negative values)', function(done) {
		assert.deepEqual($r.min([-10, -2, -40, -1000, -103, -20]), -1000);
		done();
	});
  it('.min(Min- Returns min value with all positive values)', function(done) {
		assert.deepEqual($r.min([10, 2, 40, 1000, 103, 20]), 2);
		done();
	});
  // it('.min(Min- Returns min value with falsey values)', function(done) {
	// 	assert.deepEqual($r.min([10, 2, 40, false, 103, 20]), false);
	// 	done();
	// });
  it('Min- Invalid argument of object returns undefined', function(done) {
		assert.deepEqual($r.min({a : 4, b : 3, c : 2}), undefined);
		done();
	});
  it('Min- Empty array argument returns undefined', function(done) {
		assert.deepEqual($r.min([]), undefined);
		done();
	});
  it('Max- Returns max value with mixed values', function(done) {
		assert.deepEqual($r.max([10, 2, -40, -1000, -103, 20]), 20);
		done();
	});
  it('Max- Returns max value with all negative values', function(done) {
		assert.deepEqual($r.max([-10, -2, -40, -1000, -103, -20]), -2);
		done();
	});
  it('Max- Returns max value with all positive values', function(done) {
		assert.deepEqual($r.max([10, 2, 40, 1000, 103, 20]), 1000);
		done();
	});
  it('Max- Invalid argument of number returns undefined', function(done) {
		assert.deepEqual($r.max(2), undefined);
		done();
	});
  it('Max- Empty array argument returns undefined', function(done) {
		assert.deepEqual($r.max([]), undefined);
		done();
	});
  it('Uniq- Returns uniq array of numbers', function(done) {
    assert.deepEqual($r.uniq([3, 4, 6, 1, 3, 4, 9, 8]), [3, 4, 6, 1, 9, 8]);
    done();
  });
  it('Uniq- Returns uniq array of strings', function(done) {
    assert.deepEqual($r.uniq(['a', 'a', 'a', 'd']), ['a', 'd']);
    done();
  });
  it('Uniq- Returns uniq array of strings and numbers', function(done) {
    assert.deepEqual($r.uniq(['a', 1, 'a', '1']), ['a', 1, '1']);
    done();
  });
  it('Chunk- Returns array chunked into arrays of 1 when no value passed', function(done) {
    assert.deepEqual($r.chunk([1, 2, 3, 4, 5]), [[1], [2], [3], [4], [5]]);
    done();
  });
  it('Chunk- Returns array chunked into arrays of value passed', function(done) {
    assert.deepEqual($r.chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
    done();
  });
  it('Flatten- Returns recursively flattened array', function(done) {
    assert.deepEqual($r.flatten([1, [2, [3, [[4], 5]]]]), [1, 2, 3, 4, 5]);
    done();
  });
  it('Flatten- Returns flattened array a single level deep', function(done) {
    assert.deepEqual($r.flatten([[1], [2], [3], [4], [5]]), [1, 2, 3, 4, 5]);
    done();
  });
  it('Remove- Returns array values that are divisible by 2', function(done) {
    assert.deepEqual($r.remove([1, 2, 3, 4], function(key, val){ return val%2 === 0}), [2, 4]);
    done();
  });
  it('Remove- Returns array of values not eq to 1', function(done) {
    assert.deepEqual($r.remove([1, 2, 3, 4], function(key, val){ return val !== 1}), [2, 3, 4]);
    done();
  });
  it('Remove- Returns empty arry if empty array argument', function(done) {
    assert.deepEqual($r.remove([], function(key, val){ return val !== 1}), []);
    done();
  });
  it('Remove- Invalid argument of object returns undefined', function(done) {
    assert.deepEqual($r.remove({a: 1, b: 2, c: 3}, function(key, val){ return val !== 1}), undefined);
    done();
  });
  it('Remove- Missing function argument returns undefined', function(done) {
    assert.deepEqual($r.remove([1, 2, 3]), undefined);
    done();
  });
});
