const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

// const results1 = map(words, word => word.length);
// console.log(results1);

module.exports = map;

// assertArraysEqual([1, 2], [1, 2])
// assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(map(words, word => word.toUpperCase()), ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);



