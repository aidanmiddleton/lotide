const eqArrays = function(arrayOne, arrayTwo) {
  let isEqual;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      isEqual = true;
    } else {
      isEqual = false;
    }
  }
  return isEqual;
};

const assertArraysEqual = function(firstA, secondA) {
  if ((eqArrays(firstA, secondA)) === true) {
    console.log(`Assertion Passed: ${firstA} === ${secondA}. Well done!😍`);
  } else if ((eqArrays(firstA, secondA)) === false) {
    console.log(`Assertion failed: ${firstA} !== ${secondA}. you were sadly mistaken🤬`);
  }
};

assertArraysEqual([1, 2, 4], [1, 2, 4])

