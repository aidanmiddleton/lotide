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

//let testString = 'I am dead inside';


//countLetters(testString);

module.exports = countLetters;