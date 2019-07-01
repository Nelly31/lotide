
const assertEqual = require('./assertEqual');

//homemade function to find a key on an object where its value matches a given value

const findKeyByValue = function(myObject,valueToFind) {
  
  let theValues = Object.values(myObject);

  for (let i = 0; i < theValues.length; i++) {
    if (theValues[i] === valueToFind) {
      return Object.keys(myObject)[i];
    }
  }
};

module.exports = findKeyByValue;


