const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arrayOne, arrayTwo) {
  let isEqual;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      console.log(arrayOne[i]);
      isEqual = true;
    } else {
      isEqual = false;
    }
  }
  return isEqual;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 2]), false);
assertEqual(eqArrays([1, 2, '5'], [1, 2, '5']), true);