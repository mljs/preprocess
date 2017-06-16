import {normal} from '..';

let v1 = [0, 0, 0];
let v2 = [1000, 2000, 3000];
let m1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let m2 = [
    [2000, 1000, 3000],
    [3000, 2000, 1000],
    [1000, 1000, 1000]
];

describe('Data normalization', () => {
    it('should return zeros', () => {
        expect(normal(v1)).toEqual([0, 0, 0]);
        expect(normal(m1)).toEqual([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]);
    });

    it('should be correct', () => {
        expect(normal(v2)).toEqual([-1, 0, 1]);
        expect(normal(m2)).toEqual([
            [0, -1, 1],
            [1, 0, -1],
            [0, 0, 0]
        ]);
    });
});
