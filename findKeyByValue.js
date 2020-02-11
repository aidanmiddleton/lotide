const assertEqual = require('./assertEqual');

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


module.exports = findKeyByValue;

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);