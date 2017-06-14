import {adjustData} from './utils';

/**
 * return the centered data
 * @param {Array<number>|Array<Array<number>>} dataSet
 * @param {Array} means
 * @return {Matrix}
 * @link https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
export function center(dataSet, means) {
    [dataSet, means] = adjustData(dataSet, {means, std: [0]});
    return dataSet.subRowVector(means);
}
