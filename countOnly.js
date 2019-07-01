const assertEqual = require('./assertEqual');

// function to count the number of times given elements appears in an array and return an object with the element as the key and the count as the value
const countOnly = function(allItems,itemsToCount) {
  const results = {};
  
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;

