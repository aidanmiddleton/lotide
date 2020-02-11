const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArrayEqual');

const without = function(source, itemsToRemove) {
  let sourceTwo = Array.from(source)
  for (let i = 0; i < sourceTwo.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === sourceTwo[i]) {
        sourceTwo.splice(i, 1)
      }
    }
  }
  console.log(sourceTwo)
  return sourceTwo 
};

module.exports = without;

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// assertArraysEqual(without([1, 2, 3, 7, 'd', 'x'], ['d', 'x']), [1, 2, 3, 7]);

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); 
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);