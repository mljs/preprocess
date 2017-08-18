import {center} from '..';

let v1 = [4, 5, 6];
let m1 = [
    [4, 5, 6],
    [3, 4, 5],
    [2, 3, 4]
];
describe('centering data', () => {
    it('center a vector', () => {
        let v1Centered = center(v1);
        expect(v1Centered[1][0]).toEqual(0);
    });
    it('center a matrix', () => {
        let m1Centered = center(m1);
        expect(m1Centered[1]).toEqual([0, 0, 0]);
    });
});
