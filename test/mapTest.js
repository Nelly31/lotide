const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1,['g','c','t','m','t']);

const results2 = map(words, word => word.length);
console.log(results1);

assertArraysEqual(results2,[6,7,2,5,3]);

const results3 = map(words, word => word.toUpperCase());
console.log(results3);

assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);

const results4 = map(words, word => word + " Oooh");
console.log(results4);

assertArraysEqual(results4, ['ground Oooh', 'control Oooh', 'to Oooh', 'major Oooh', 'tom Oooh']);