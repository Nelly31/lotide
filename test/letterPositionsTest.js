const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

console.log(letterPositions("this is a sentence"));

assertArraysEqual(letterPositions("hello").e,[1]);
assertArraysEqual(letterPositions("nelly").l,[2,3]);