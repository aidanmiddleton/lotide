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


module.exports = eqArrays;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 2]), false);
// assertEqual(eqArrays([1, 2, '5'], [1, 2, '5']), true);