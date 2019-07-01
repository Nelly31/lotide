//Function to find a key inside an object when given the object.

const findKey = function(anObject, callback) {
  let theKey = "";
  for (let item in anObject) {
    if (callback(anObject[item])) {
      theKey = item;
      break;
    }
  }
  return theKey;
};

module.exports = findKey;


