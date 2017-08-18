import {adjustData} from './utils';

/**
 * return the centered data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {object} options - it could includes means and standard desviation
 * @param {Array<Array<number>>} options.means
 * @return {Matrix}
 * @link https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
export function center(dataSet, options = {}) {
    var [output, means] = adjustData(dataSet, options);
    return output.subRowVector(means);
}
