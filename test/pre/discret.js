var preprocess = require('../..');

var v1 = [0, 0, 0];
var v2 = [1000, 2000, 3000];
var m1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var m2 = [[1000, 2000, 3000], [10000, 20000, 30000], [10, 20, 30]];

describe('Data normalization', function () {
	it('should return zeros', function () {
		preprocess.normal(v1).should.equal(v1);
		preprocess.normal(m1).should.equal(m1);
	});

	it('should be correct', function () {
		preprocess.normal(v2).should.equal(v2);
		preprocess.normal(m2).should.equal(m2);
	});
});