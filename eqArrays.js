
const assertEqual = require('./assertEqual');

let eqArrays = function(firstArray,secondArray) {
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
  } return truthfulness;
};

module.exports = eqArrays;
