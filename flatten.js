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

module.exports = flatten;

// let testingArray = [1, 2, [3, 7, 4], 5, [6, 'i']];
// console.log(testingArray);
// console.log(flatten(testingArray));
// assertArraysEqual(flatten(testingArray), [1, 2, 3, 7, 4, 5, 6, 'i']);
