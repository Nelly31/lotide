// // Function to test the truthfulness of whether 2 array are the same and printing to the console.

const assertArraysEqual = require('./assertArraysEqual.js');


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