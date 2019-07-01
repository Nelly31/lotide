// const assertEqual = function(actual,expected) {
//   if (actual === expected) {
//     console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

//homemade function to check that 2 objects are the same

const assertObjectsEqual = function(firstObject,secondObject) {
  const inspect = require('util').inspect;

  let truthfulness = true;

  for (let i = 0; i < Object.keys(firstObject).length; i++) {
    //checking keys  are the same
    if (Object.keys(firstObject)[i] !== Object.keys(secondObject)[i]) {
      truthfulness = false;
      //checking the values are the same
    } if (Array.isArray(Object.values(firstObject)[i]) && Array.isArray(Object.values(secondObject)[i])) {
      for (let j = 0; j < Object.values(firstObject)[i].length; j++) {
        if ((Object.values(firstObject)[i][j]) !== (Object.values(secondObject)[i][j])) {
          truthfulness = false;
        }
      }
    } else if (Object.values(firstObject)[i] !== Object.values(secondObject)[i]) {      truthfulness = false;
    }
  } if (truthfulness) {
    return `👍👍👍 Assertion Passed: ${inspect(firstObject)} === ${inspect(secondObject)}`;
  } else {
    return `😡😡😡 Assertion Failed: ${inspect(firstObject)} !== ${inspect(secondObject)}`;
  }
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc));

const cd2 = { c: "1", d: ["2", 3] };
console.log(assertObjectsEqual(cd, cd2));