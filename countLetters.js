const assertEqual = function(actual, expected) {
  console.log('the actual: ', actual )
  console.log("this is the expected", expected);
  if (actual === expected) {
    console.log(`😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (string) {
  string = string.toLowerCase().trim().split(' ').join('');
  let results = {};
  for (const letter of string) {
      if (results[letter]) {
        results[letter] += 1
      } else {
        results[letter] = 1
      }
  }
  return results
};

let testString = 'I am dead inside';

assertEqual(countLetters(testString), { i: 3, a: 2, m: 1, d: 3, e: 2, n: 1, s: 1 });

countLetters(testString);