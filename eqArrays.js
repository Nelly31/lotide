//checks that the length of 2 arrays are the same.

let eqArrays = function(firstArray,secondArray) {
  let truthfulness = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (secondArray[i] !== firstArray[i]) {
      truthfulness = false;
      break;
    }
  } return truthfulness;
};


module.exports = eqArrays;
