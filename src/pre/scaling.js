'use strict';


const Matrix = require('ml-matrix');
const Stat = require('ml-stat');

function pareto(dataSet, mean, std) {
    var means = mean || Stat.matrix.mean(dataSet);
    var std = std || Stat.matrix.standardDeviation(dataSet, means, true);
    var result = Matrix.checkMatrix(dataSet).subRowVector(means)
    return result.divRowVector(Math.sqrt(std));
}

function autoScaling(dataSet, mean, std) {
    var means = mean || Stat.matrix.mean(dataSet);
    var std = std || Stat.matrix.standardDeviation(dataSet, means, true);
    var result = Matrix.checkMatrix(dataSet).subRowVector(means)
    return result.divRowVector(std);
}

function vastScaling(dataSet, mean, std) {
    var means = mean || Stat.matrix.mean(dataSet);
    var std = std || Stat.matrix.standardDeviation(dataSet, means, true);
    var result = autoScaling(dataSet, means, std);
    result.mulColumnVector(means)
    return result.divColumnVector(std);
}

function levelScaling(dataSet, mean) {
    var means = mean || Stat.matrix.mean(dataSet);
    var result = Matrix.checkMatrix(dataSet).subRowVector(means)
    return result.divColumnVector(means);
}

module.exports = {
    levelScaling: levelScaling,
    vastScaling: vastScaling,
    autoScaling: autoScaling,
    pareto: pareto
};