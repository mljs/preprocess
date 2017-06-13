import {matrix} from 'ml-stat';
import Matrix from 'ml-matrix';

export function ajustData(dataSet, means, std) {
    if (Array.isArray(dataSet[1])) {
        dataSet = Matrix.checkMatrix(dataSet);
    } else if (Array.isArray(dataSet)) {
        dataSet = new Matrix(dataSet.map(a => {
            return [a];
        }));
    }
    means = means || matrix.mean(dataSet);
    std = std || matrix.standardDeviation(dataSet, means, true);
    return [dataSet, means, std];
}
