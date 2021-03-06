# preprocess

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![Test coverage][codecov-image]][codecov-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]

Preprocess functions to improve the representation and quality of data.

## Installation
`$ npm install --save ml-preprocess`

## Usage

```js
import {normal} from 'ml-preprocess';

// vectors
let vector = [1000, 2000, 3000];
normal(vector) == [-1, 0, 1];

// matrices
let matrix = [
    [2000, 1000, 3000],
    [3000, 2000, 1000],
    [1000, 1000, 1000]
];
normal(matrix) == [
    [0, -1, 1],
    [1, 0, -1],
    [0, 0, 0]
];
```
Or test it in [Runkit](https://runkit.com/npm/ml-preprocess)

## [API Documentation](https://mljs.github.io/preprocess/)

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-preprocess.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-preprocess
[travis-image]: https://img.shields.io/travis/mljs/preprocess/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mljs/preprocess
[codecov-image]: https://img.shields.io/codecov/c/github/mljs/preprocess.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/mljs/preprocess
[david-image]: https://img.shields.io/david/mljs/preprocess.svg?style=flat-square
[david-url]: https://david-dm.org/mljs/preprocess
[download-image]: https://img.shields.io/npm/dm/ml-preprocess.svg?style=flat-square
[download-url]: https://npmjs.org/package/ml-preprocess
