// It is not possible to compare 2 arrays in Javascript.
const assertEqual = require('./assertEqual');

// Function to get the all the items in an array except the first without amending the original array.
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;