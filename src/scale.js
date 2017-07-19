import {adjustData} from './utils';

/**
 * return the pareto scaled data as a matrix
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {object} options - it could includes means and standard desviation
 * @param {Array<Array<number>>} options.std - standard desviation.
 * @param {Array<Array<number>>} options.means
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
export function pareto(dataSet, options = {}) {
    var [output, means, std] = adjustData(dataSet, options);
    return output.subRowVector(means).divRowVector(std.map(a => {
        return Math.sqrt(a);
    }));
}

/**
 * return the auto scaled data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {object} options - it could includes means and standard desviation
 * @param {Array<Array<number>>} options.std - standard desviation.
 * @param {Array<Array<number>>} options.means
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
export function auto(dataSet, options = {}) {
    var [output, means, std] = adjustData(dataSet, options);
    return output.subRowVector(means).divRowVector(std);
}

/**
 * return the vast scaled data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {object} options - it could includes means and standard desviation
 * @param {Array<Array<number>>} options.std - standard desviation.
 * @param {Array<Array<number>>} options.means
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
export function vast(dataSet, options = {}) {
    var [output, means, std] = adjustData(dataSet, options);
    let result = output.subRowVector(means);
    result.mulRowVector(means);
    return result.divRowVector(std.map((a) => (a * a)));
}

/**
 * return the level scaled data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {object} options - it could includes means and standard desviation
 * @param {Array<Array<number>>} options.means
 * @return {Matrix}
 * @link  https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
export function level(dataSet, options = {}) {
    var [output, means] = adjustData(dataSet, options);
    return output.subRowVector(means).divRowVector(means);
}
