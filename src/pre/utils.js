'use strict';

const Stat = require('ml-stat');
const Matrix = require('ml-matrix');

exports.ajustData = function ajustData(dataSet, means, std) {
    if (Array.isArray(dataSet[1])) {
        dataSet = Matrix.checkMatrix(dataSet);
    } else if (Array.isArray(dataSet)) {
        dataSet = new Matrix(dataSet.map(a => {
            return [a];
        }));
    }
    means = means || Stat.matrix.mean(dataSet);
    std = std || Stat.matrix.standardDeviation(dataSet, means, true);
    return [dataSet, means, std];
};

