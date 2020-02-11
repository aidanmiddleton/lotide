const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArrayEqual');



const letterPositions = function(sentence) {
  console.log(sentence);
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const currentLetter = sentence[i]
    if (results[currentLetter]) {
      results[currentLetter].push(i)
    } else {
      results[currentLetter] = [i]
    }
  }
  delete results[' '];
  return results;
};


// console.log(letterPositions('some string')); 


module.exports = letterPositions;
