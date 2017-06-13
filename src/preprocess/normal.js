import {matrix, array} from 'ml-stat';

/**
 *
 * @param {Array<number>|Array<Array<number>>} x
 * @return {*}
 */
export function normal(x) {
    let X = x.slice();

    if (!X.length) {
        // is not an array
        return undefined;
    } else if (X[0].length === undefined) {
        // is a vector
        let m = array.mean(X);
        let s = array.standardDeviation(X, true);
        if (s === 0) {
            for (let i = 0; i < X.length; i++) {
                X[i] = (X[i] - m);
            }
        } else {
            for (let i = 0; i < X.length; i++) {
                X[i] = (X[i] - m) / s;
            }
        }
    } else if (X[0][0].length === undefined) {
        // is a matrix
        let m = matrix.mean(X, 0);
        let s = matrix.standardDeviation(X, m, true);
        for (let i = 0; i < X.length; i++) {
            for (let j = 0; j < X[i].length; j++) {
                if (s[i] === 0) {
                    X[i][j] = (X[i][j] - m[i]);
                } else {
                    X[i][j] = (X[i][j] - m[i]) / s[i];
                }
            }
        }
    }

    return X;
}
