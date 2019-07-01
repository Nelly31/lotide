//function to take in an array and a function and return a new array based on the callback function


const map = function(array,callback) {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

module.exports = map;



