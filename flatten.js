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

const flatten = function(anArray) {
  let newArray = []
  for (let i = 0; i < anArray.length; i++) {
    if (Array.isArray(anArray[i])) {
      for (let j = 0; j < anArray[i].length; j++) {
        newArray.push(anArray[i][j]);
      } 
    } else {
      newArray.push(anArray[i]);
    }
  }
  return newArray;
};


let testingArray = [1, 2, [3, 7, 4], 5, [6, 'i']];
console.log(testingArray);
console.log(flatten(testingArray));
assertArraysEqual(flatten(testingArray), [1, 2, 3, 7, 4, 5, 6, 'i']);
