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



const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const results1 = map(words, word => word.length);
console.log(results1);

assertArraysEqual([1, 2], [1, 2])
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word.toUpperCase()), ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);



