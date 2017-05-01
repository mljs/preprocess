'use strict';

var preprocess = require('../..');

var v1 = [0, 0, 0];
var v2 = [1000, 2000, 3000];
var m1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var m2 = [[1000, 2000, 3000], [10000, 20000, 30000], [10, 20, 30]];
var m3 = [[0,0,0], [1000, 2000, 3000], [10000, 20000, 30000], [10, 20, 30]];

describe('Data normalization', function () {
    it('should return zeros', function () {
        preprocess.normal(v1)[0].should.equal(0);
        preprocess.normal(m1)[0][2].should.equal(0);
    });
    it('should be correct', function () {
        preprocess.normal(v2)[0].should.equal(-1);
        preprocess.normal(m2)[0][2].should.be.approximately(-0.12172425899763464, 0.00001);
    });
});

describe('center and scale', function () {
    it('should be correct', function () {
        preprocess.scale.auto(m3)[0][0].should.approximately(-0.567, 0.001);
        preprocess.scale.level(m3)[0][0].should.equal(-1);
        preprocess.scale.vast(m3)[0][0].should.approximately(-0.32, 0.01);
        preprocess.scale.pareto(m3)[0][0].should.approximately(-39.505, 0.001);
        preprocess.scale.auto(v2)[0][0].should.equal(-1);
        preprocess.center(v2)[0][0].should.equal(-1000);
    });
});

