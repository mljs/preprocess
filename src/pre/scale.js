'use strict';
const utils = require('./utils')

exports.pareto = function pareto(dataSet, means, std) {
    [dataSet, means, std] = utils.ajustData(dataSet, means, std);
    return dataSet.subRowVector(means).divRowVector(std.map(a => {return Math.sqrt(a)}));
}

exports.auto = function auto(dataSet, means, std) {
    [dataSet, means, std] = utils.ajustData(dataSet, means, std);
    return dataSet.subRowVector(means).divRowVector(std);
}

exports.vast = function vast(dataSet, means, std) {
    [dataSet, means, std] = utils.ajustData(dataSet, means, std);
    var result = dataSet.subRowVector(means);
    result.mulRowVector(means);
    return result.divRowVector(std.map(a => {return (a*a)}));
}

exports.level = function level(dataSet, means) {
    [dataSet, means] = utils.ajustData(dataSet, means, 0);
    return dataSet.subRowVector(means).divRowVector(means);
}

