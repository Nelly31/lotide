// Our homemade function to test the truthfulness of whether 2 inputs are the same.

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
