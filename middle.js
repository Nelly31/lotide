
const assertArraysEqual = require('./assertArraysEqual.js');

//returns the middle element of an array if the array length is even, returns the middle 2 elements if the array length is odd.

const middle = function(anArray) {
  let middleVal = [];
  if (anArray.length > 2) {
    if ((anArray.length % 2) !== 0) {
      middleVal = anArray.splice((Math.floor((anArray).length) / 2),1);
    } else if ((anArray.length % 2) === 0) {
      middleVal = anArray.splice(((anArray.length) / 2 - 1),2);
    }
  } return middleVal;
};

module.exports = middle;