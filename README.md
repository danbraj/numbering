# numbering

## Installation

`npm install danbraj/numbering`

## Usage

```js
// prep function
const nb1 = prep('cat_', 'small', 4);
nb1.get(30); // return: cat_0030small

// recog function
const nb2 = recog('file012_copy');
nb2.get(7); // return: file007_copy
```

## License

MIT