const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬Assertion Failed: ${actual} !== ${expected}`);
  }
};

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



const eqObjects = function(object1, object2) {
  let keyArray1 = Object.keys(object1); 
  let keyArray2 = Object.keys(object2);
  
  if (keyArray1.length === keyArray2.length) {
    for (const key of keyArray1) {
      if (object1[key] !== object2[key]) {
        if (
          Array.isArray(object1[key]) &&
          Array.isArray(object2[key]) &&
          eqArrays(object1[key], object2[key])
        ) {
          return true
        } else if (eqObjects(object1[key], object2[key])) {
          return true
        }
        return false
      }
    }
    return true
  }
  return false
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); 

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); 

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); 

const arr1 = [1, 2, 3];
const arr2 = [1, 4, 3];
assertEqual(eqArrays(arr1, arr2), false);



