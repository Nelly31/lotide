const assertArraysEqual = require('./assertArraysEqual');

//Function to get an array with nested arrays and return just one array.

const flatten = function(anArray) {
  let newArray = [];
  for (let item of anArray) {
    if (Array.isArray(item)) {
      let tempNewArray = flatten(item);
      newArray = newArray.concat(tempNewArray);
    } else {
      newArray.push(item);
    }
  } return newArray;
};

module.exports = flatten;

