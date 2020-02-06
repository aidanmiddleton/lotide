const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(firstA, secondA) {
  if (eqArrays(firstA, secondA)) {
    console.log(`Assertion Passed: ${firstA} === ${secondA}. Well done!😍`);
  } else {
    console.log(`Assertion failed: ${firstA} !== ${secondA}. you were sadly mistaken🤬`);
  }
};
assertArraysEqual([1, 2, 4], [1, 2, 5])

