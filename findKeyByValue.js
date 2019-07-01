// Our homemade function to test the truthfulness of whether 2 inputs are the same.

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//homemade function to find a key on an object where its value matches a given value

const findKeyByValue = function(myObject,valueToFind) {
  
  let theValues = Object.values(myObject);

  for (let i = 0; i < theValues.length; i++) {
    if (theValues[i] === valueToFind) {
      return Object.keys(myObject)[i];
    }
  }
};




const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  sitcom: "The 70s Show"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const holidays = {
  beach: "Hawaii" ,
  city: "New York" ,
  home: "Melbourne" ,
  relaxing: "Cambodia"
};

assertEqual(findKeyByValue(holidays, "Melbourne"), "home");
assertEqual(findKeyByValue(holidays, "New York"), "city");

console.log(holidays);

console.log(findKeyByValue(holidays, "Melbourne"));

console.log(assertEqual(findKeyByValue(holidays, "New York"), "city"));

