//homemade function to check that 2 objects are the same

let eqObject = function(firstObject,secondObject) {
  let truthfulness = true;

  for (let i = 0; i < Object.keys(firstObject).length; i++) {
    //checking keys  are the same
    if (Object.keys(firstObject)[i] !== Object.keys(secondObject)[i]) {
      truthfulness = false;
      //checking the values are the same
    } if (Array.isArray(Object.values(firstObject)[i]) && Array.isArray(Object.values(secondObject)[i])) {
      for (let j = 0; j < Object.values(firstObject)[i].length; j++) {
        if ((Object.values(firstObject)[i][j]) !== (Object.values(secondObject)[i][j])) {
          truthfulness = false;
        }
      }
    } else if (Object.values(firstObject)[i] !== Object.values(secondObject)[i]) {
      truthfulness = false;
    }
  } return truthfulness;
};

module.exports = eqObject;
