// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// console.log(tail([1,2,3,4]));
// console.log(tail([1]));
// console.log(tail([]));

// // A way to check the function does not change the original array by checking the length.
// const words = ["Hello", "GoodBye", "Adios"];
// tail(words);
// assertEqual(words.length,3);


//pair programming excercise with Robin - chai testing.

const assert = require('chai').assert;
const tail = require('../tail');
describe('#tail', () => {
  it('should return ["goodbye", "adios"] for ["adieu", "goodbye", "adios"]', () => {
    assert.deepEqual(tail(["adieu", "goodbye", "adios"]), ["goodbye", "adios"]);
  });
  it('should return an empty array when given an array with one element', () => {
    assert.deepEqual(tail(["oneElement"]), []);
  });
  it('should not modify the input array', () => {
    const inputArray = ['this', 'is', 'input', 'array'];
    assert.notDeepEqual(tail(inputArray), inputArray);
  });
});

