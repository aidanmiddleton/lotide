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



const eqObjects = function(object1, object2) {
  let keyArray1 = Object.keys(object1); 
  let keyArray2 = Object.keys(object2);
  
  if (keyArray1.length === keyArray2.length) {
    for (const key of keyArray1) {
      if (object1[key] !== object2[key]) {
        if (
          Array.isArray(object1[key]) &&
          Array.isArray(object2[key]) &&
          eqArrays(object1[key], object2[key])
        ) {
          return true
        } else if (eqObjects(object1[key], object2[key])) {
          return true
        }
        return false
      }
    }
    return true
  }
  return false
};

const assertObjectsEqual = function(actual, expected) {
  if ((eqObjects(actual, expected)) === true) {
    console.log(`Assertion Passed: ${actual} === ${expected}. Well done!😍`);
  } else if ((eqObjects(actual, expected)) === false) {
    console.log(`Assertion failed: ${actual} !== ${expected}. you were sadly mistaken🤬`);
  }
};

/*
const assertArraysEqual = function(firstA, secondA) {
  if ((eqArrays(firstA, secondA)) === true) {
    console.log(`Assertion Passed: ${firstA} === ${secondA}. Well done!😍`);
  } else if ((eqArrays(firstA, secondA)) === false) {
    console.log(`Assertion failed: ${firstA} !== ${secondA}. you were sadly mistaken🤬`);
  }
}; */

assertObjectsEqual({thing: 2, otherThing: 7, thirdThing: 4}, {thing: 2, otherThing: 7, thirdThing: 4})
assertObjectsEqual({thing: 2, otherThing: 7, thirdThing: 4}, {thing: 2, otherThing: 7, thirdThing: 6})