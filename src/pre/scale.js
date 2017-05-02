'use strict';
const utils = require('./utils');
/**
 * return the pareto scaled data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {Array} means
 * @param {Array} std
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
exports.pareto = function pareto(dataSet, means, std) {
    [dataSet, means, std] = utils.ajustData(dataSet, means, std);
    return dataSet.subRowVector(means).divRowVector(std.map(a => {
        return Math.sqrt(a);
    }));
};
/**
 * return the auto scaled data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {Array} means
 * @param {Array} std
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
exports.auto = function auto(dataSet, means, std) {
    [dataSet, means, std] = utils.ajustData(dataSet, means, std);
    return dataSet.subRowVector(means).divRowVector(std);
};
/**
 * return the vast scaled data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {Array} means
 * @param {Array} std
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
exports.vast = function vast(dataSet, means, std) {
    [dataSet, means, std] = utils.ajustData(dataSet, means, std);
    var result = dataSet.subRowVector(means);
    result.mulRowVector(means);
    return result.divRowVector(std.map(a => {
        return (a * a);
    }));
};
/**
 * return the level scaled data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {Array} means
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
exports.level = function level(dataSet, means) {
    [dataSet, means] = utils.ajustData(dataSet, means, 0);
    return dataSet.subRowVector(means).divRowVector(means);
};

