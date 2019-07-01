// const assertArraysEqual = function(firstArray,secondArray) {
//   let truthfulness = true;
//   // looping through the first array
//   for (let i = 0; i < firstArray.length; i++) {
//     if (secondArray[i] !== firstArray[i]) {
//       truthfulness = false;
//       break;
//     }
//   } if (truthfulness) {
//     console.log(`👍👍👍 Assertion Passed: ${firstArray} === ${secondArray}`);
//   } else {
//     console.log(`😡😡😡 Assertion Failed: ${firstArray} !== ${secondArray}`);
//   }
// };

//function to take in an array and a function and return a new array based on the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array,callback) {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(results1,['g','c','t','m','t']);

// const results2 = map(words, word => word.length);
// console.log(results1);

// assertArraysEqual(results2,[6,7,2,5,3]);

// const results3 = map(words, word => word.toUpperCase());
// console.log(results3);

// assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);

// const results4 = map(words, word => word + " Oooh");
// console.log(results4);

// assertArraysEqual(results4, ['ground Oooh', 'control Oooh', 'to Oooh', 'major Oooh', 'tom Oooh']);

