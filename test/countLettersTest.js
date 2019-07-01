const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

//logging the count function with various inputs
console.log(countLetters("Nelly"));
console.log(countLetters("This is a string"));
console.log(countLetters("abcABC"));

// testing the output is as expected for Nelly
let objResult = countLetters("nelly");

assertEqual(objResult['n'],1);
assertEqual(objResult['e'],1);
assertEqual(objResult['l'],2);

assertEqual(countLetters("nelly").n,1);