const eqArrays = require('./eqArrays')

const assertArraysEqual = function(firstA, secondA) {
  if (eqArrays(firstA, secondA)) {
    console.log(`Assertion Passed: ${firstA} === ${secondA}. Well done!😍`);
  } else {
    console.log(`Assertion failed: ${firstA} !== ${secondA}. you were sadly mistaken🤬`);
  }
};

module.exports = assertArraysEqual;

