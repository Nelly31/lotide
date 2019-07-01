
const assertEqual = require('./assertEqual');

//counting all the letters in a word
const countLetters = function(input) {
  //changing the input to all lowercase
  const stringInput = input.toLowerCase();
  const result = {};
  //for of loop
  for (const letter of stringInput) {
    //not counting the space
    if (letter !== " ") {
      //if the letter key hasn't already been defined
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  } return result;
};

module.exports = countLetters;