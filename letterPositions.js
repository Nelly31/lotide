//returning the index of each letter within a given input.
const letterPositions = function(inputSentence) {
  const result = {};
  let sentence = inputSentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) {
      result[sentence[i]].push(i);
    } else if (sentence[i] !== " ") {
      result[sentence[i]] = [i];
    }
  }
  return result;
};

module.exports = letterPositions;