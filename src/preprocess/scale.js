import {adjustData} from './utils';

/**
 * return the pareto scaled data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {Array} means
 * @param {Array} std
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
export function pareto(dataSet, means, std) {
    [dataSet, means, std] = adjustData(dataSet, means, std);
    return dataSet.subRowVector(means).divRowVector(std.map(a => {
        return Math.sqrt(a);
    }));
}

/**
 * return the auto scaled data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {Array} means
 * @param {Array} std
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
export function auto(dataSet, means, std) {
    [dataSet, means, std] = adjustData(dataSet, means, std);
    return dataSet.subRowVector(means).divRowVector(std);
}

/**
 * return the vast scaled data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {Array} means
 * @param {Array} std
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
export function vast(dataSet, means, std) {
    [dataSet, means, std] = adjustData(dataSet, means, std);
    let result = dataSet.subRowVector(means);
    result.mulRowVector(means);
    return result.divRowVector(std.map((a) => (a * a)));
}

/**
 * return the level scaled data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {Array} means
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
export function level(dataSet, means) {
    [dataSet, means] = adjustData(dataSet, means, 0);
    return dataSet.subRowVector(means).divRowVector(means);
}

