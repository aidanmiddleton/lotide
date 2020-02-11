const assertEqual = require('./assertEqual')

const findKey = function(object, callback) {
  let arrayOfKeys = Object.keys(object)
  let result = ''
  for (const key of arrayOfKeys) {
    if (callback(object[key])) {
      result += key
      console.log(result)  
      return result
    }
  }
};


module.exports = findKey;

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)

// console.log('---');

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), 'noma')

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 6 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars > 3), 'Ora')

