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

const middle = function(array) {
  let newArray = []
  let middlePoint = Math.floor(array.length/2)
  if (array.length <= 2) {
    return newArray
  } else if (array.length % 2 !== 0) {
    newArray.push(array[middlePoint])
  } else if (array.length % 2 === 0) {
    newArray = array.slice(middlePoint - 1, middlePoint + 1);
  }
  return newArray;
};

console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4, 5, 6]))
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])