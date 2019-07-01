const tail = require('../tail');
const assertEqual = require('../assertEqual');

console.log(tail([1,2,3,4]));
console.log(tail([1]));
console.log(tail([]));

// A way to check the function does not change the original array by checking the length.
const words = ["Hello", "GoodBye", "Adios"];
tail(words);
assertEqual(words.length,3);