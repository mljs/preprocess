import {matrix, array} from 'ml-stat';

/**
 * Normalizes the data based in the mean and the standard deviation
 * @param {Array<number>|Array<Array<number>>} x - Array or matrix to normalize
 * @return {Array<number>|Array<Array<number>>}
 * @link https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-142
 */
export function normal(x) {
    if (!Array.isArray(x)) {
        throw new Error('The input should be an array');
    } else if (!Array.isArray(x[0])) {
        return vectorNormalization(x);
    } else {
        return matrixNormalization(x);
    }
}

function vectorNormalization(data) {
    let mean = array.mean(data);
    let std = array.standardDeviation(data, true);

    let ans = new Array(data.length);
    if (std === 0) {
        for (let i = 0; i < ans.length; i++) {
            ans[i] = (data[i] - mean);
        }
    } else {
        for (let i = 0; i < ans.length; i++) {
            ans[i] = (data[i] - mean) / std;
        }
    }

    return ans;
}

function matrixNormalization(data) {
    let means = matrix.mean(data, 1);
    let std = matrixStandardDeviation(data, means);

    let ans = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
        ans[i] = new Array(data[i].length);
        for (let j = 0; j < data[i].length; j++) {
            if (std[i] === 0) {
                ans[i][j] = (data[i][j] - means[i]);
            } else {
                ans[i][j] = (data[i][j] - means[i]) / std[i];
            }
        }
    }

    return ans;
}

function matrixStandardDeviation(data, means) {
    return data.map(
        (row, i) => Math.sqrt(row.reduce(
            (acc, val) => acc + ((val - means[i]) * (val - means[i]))
            , 0) / (row.length - 1))
    );
}
