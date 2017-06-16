import {normal} from 'ml-preprocess';

// vectors
let vector = [1000, 2000, 3000];
normal(vector); // [-1, 0, 1]

// matrices
let matrix = [
    [2000, 1000, 3000],
    [3000, 2000, 1000],
    [1000, 1000, 1000]
];
normal(matrix); // [[0, -1, 1], [1, 0, -1], [0, 0, 0]]
