// // Function to test the truthfulness of whether 2 array are the same and printing to the console.

const assertArraysEqual = function(firstArray,secondArray) {
  let truthfulness = true;
  // looping through the first array
  for (let i = 0; i < firstArray.length; i++) {
  //looping second array
    for (let j = 0; j < secondArray.length; j++) {
      if (secondArray[i] !== firstArray[i]) {
        truthfulness = false;
        break;
      }
    }
  } if (truthfulness) {
    console.log(`👍👍👍 Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

module.exports = assertArraysEqual;

