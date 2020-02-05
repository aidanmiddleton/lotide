const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬Assertion Failed: ${actual} !== ${expected}`);
  }
};
// function should cyce through object, and find 
const findKeyByValue = function (object, value) {
  let arrayOfKeys = Object.keys(object)
  console.log(arrayOfKeys);
  let matchingKey;
  for (const key of arrayOfKeys) {
    if (object[key] === value){ 
    matchingKey = key;
    }
    
  }
  return matchingKey;  
  
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);