'use strict';
var array = require('./array');
var matrix = require('./matrix');

module.exports = function normal(X) {
	
	// is not an array
	if (X.length === 'undefined') {
		return 'undefined';
	}
	
	// is a vector
	else if (X[0].length === 'undefined') {
		var m = array.mean(X);
		var s = standardDeviation(X, true);
		for (var i = 0; i < X.length; i++) {
			X[i] = (X[i] - m) / s;
		}
	}

	// is a matrix
	else if (X[0][0].length === 'undefined') {
		var m = matrix.mean(X, 0);
		var s = standardDeviation(X, m, true);
		for (var i = 0; i < X.length; i++) {
			for (var j = 0; j < X[i].length; j++) {
				X[i][j] = (X[i][j] - m[i]) / s[i];
			}
		}
	}
}