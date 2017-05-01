'use strict';

const utils = require('./utils');

module.exports = function center(dataSet, means) {
    [dataSet, means] = utils.ajustData(dataSet, means, 0);
    return dataSet.subRowVector(means);
}

