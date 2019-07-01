const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

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

console.log(findKeyByValue(holidays, "Melbourne"));

console.log(assertEqual(findKeyByValue(holidays, "New York"), "city"));
