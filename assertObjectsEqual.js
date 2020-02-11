const eqArrays = require('./eqArrays');


const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  if ((eqObjects(actual, expected)) === true) {
    console.log(`Assertion Passed: ${actual} === ${expected}. Well done!😍`);
  } else if ((eqObjects(actual, expected)) === false) {
    console.log(`Assertion failed: ${actual} !== ${expected}. you were sadly mistaken🤬`);
  }
};


module.exports = assertObjectsEqual; 

/*
const assertArraysEqual = function(firstA, secondA) {
  if ((eqArrays(firstA, secondA)) === true) {
    console.log(`Assertion Passed: ${firstA} === ${secondA}. Well done!😍`);
  } else if ((eqArrays(firstA, secondA)) === false) {
    console.log(`Assertion failed: ${firstA} !== ${secondA}. you were sadly mistaken🤬`);
  }
}; */

// assertObjectsEqual({thing: 2, otherThing: 7, thirdThing: 4}, {thing: 2, otherThing: 7, thirdThing: 4})
// assertObjectsEqual({thing: 2, otherThing: 7, thirdThing: 4}, {thing: 2, otherThing: 7, thirdThing: 6})