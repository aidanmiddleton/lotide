const assertArraysEqual = require('./assertArrayEqual');
const middle = function(array) {
  let newArray = [];
  let middlePoint = Math.floor(array.length/2)
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 !== 0) {
    newArray.push(array[middlePoint]);
  } else if (array.length % 2 === 0) {
    newArray = array.slice(middlePoint - 1, middlePoint + 1);
  }
  return newArray;
};


module.exports = middle