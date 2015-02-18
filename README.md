# ml-preprocess

  [![NPM version][npm-image]][npm-url]
  [![build preprocessus][travis-image]][travis-url]

Preprocess functions to improve the representation and quality of data

## Installation

```js
$ npm install ml-preprocess
```

## Methods

### normal(X,m)

Data normalization of x data using the m method. 

#### normal methods

* *median*: Median Normalization
* *pqn*: Probabilistic Quotient Normalization

## Contributing

A new metod should normally be in its own file in the src/pre directory. There should be a corresponding test file in test/pre.  
The metod should be then added in the exports of src/index.js with a relatively small but understandable name (use camelCase).  
It should also be added to this README with either a link to the formula or an inline description.

## Test

```js
$ npm install
$ npm test
```
## Authors

  - [Miguel Asencio](https://github.com/maasencioh)

## License

  MIT

[npm-image]: https://img.shields.io/npm/v/ml-preprocess.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-preprocess
[travis-image]: https://img.shields.io/travis/mljs/preprocess/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mljs/preprocess