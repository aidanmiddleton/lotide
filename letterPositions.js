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



const letterPositions = function(sentence) {
  console.log(sentence);
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    console.log(i);
    console.log(sentence[i]);
    const currentLetter = sentence[i]
    if (results[currentLetter]) {
      results[currentLetter].push(i)
    } else {
      results[currentLetter] = [i]
    }
  }
  delete results[' '];
  return results;
};


console.log(letterPositions('some string')); 



