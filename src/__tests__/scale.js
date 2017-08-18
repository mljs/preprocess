import {pareto, auto, vast, level} from '..';

var m1 = [
    [2, 0],
    [1, 3]
];
var v1 = [3, 2, 1, 0, -1, -2];

describe('scale methods', () => {
    it('pareto scaling on vectors and 2D array', () => {
        let v1Scaled = pareto(v1);
        let m1Scaled = pareto(m1);
        expect(v1Scaled[0][0]).toEqual(1.827776114272562);
        expect(m1Scaled[1][1]).toEqual(1.0298835719535588);
    });
    it('auto scaling on vectors and 2D array', () => {
        let v1Scaled = auto(v1);
        let m1Scaled = auto(m1);
        expect(v1Scaled[3][0]).toEqual(-0.2672612419124244);
        expect(m1Scaled[1][1]).toEqual(0.7071067811865476);
    });
    it('vast scaling on vectors and 2D array', () => {
        let v1Scaled = vast(v1);
        let m1Scaled = vast(m1);
        expect(v1Scaled[3][0]).toEqual(-0.07142857142857142);
        expect(m1Scaled[1][1]).toEqual(0.5000000000000001);
    });
    it('level scaling on vectors and 2D array', () => {
        let v1Scaled = level(v1);
        let m1Scaled = level(m1);
        expect(v1Scaled[3][0]).toEqual(-1);
        expect(m1Scaled[1][1]).toEqual(1);
    });
});
