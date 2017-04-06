'use strict';

function centering(dataSet, mean) {
    var means = mean || Stat.matrix.mean(dataSet);
    var std = std || Stat.matrix.standardDeviation(dataSet, means, true);
    return Matrix.checkMatrix(dataSet).subRowVector(means);
}

module.exports = centering;
