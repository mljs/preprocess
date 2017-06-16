import {matrix} from 'ml-stat';
import Matrix from 'ml-matrix';

/**
 * Create a matrix with its mean and standard deviation
 * @ignore
 * @param {Array<number>|Array<Array<number>>} dataSet - Vector or matrix
 * @param {object} [options]
 * @param {Array<number>} [options.means]
 * @param {Array<number>} [options.std]
 * @return {[Matrix,Array<number>,Array<number>]}
 */
export function adjustData(dataSet, options = {}) {
    const {
        means = matrix.mean(dataSet),
        std = matrix.standardDeviation(dataSet, means, true)
    } = options;
    if (Array.isArray(dataSet[0])) {
        dataSet = Matrix.checkMatrix(dataSet);
    } else if (Array.isArray(dataSet)) {
        dataSet = new Matrix(dataSet.map(a => {
            return [a];
        }));
    } else {
        throw new Error('Invalid data type for dataSet');
    }
    return [dataSet, means, std];
}
