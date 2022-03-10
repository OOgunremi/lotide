
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄👏😄 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡💔😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(objectOne, objectTwo) {
  const keysArrayOne = Object.keys(objectOne);
  const keysArrayTwo = Object.keys(objectTwo);
  if (keysArrayOne.length !== keysArrayTwo.length) {
    return false;
  } else {

    for (let content of keysArrayOne) {
      if (Array.isArray(objectOne[content]) && Array.isArray(objectTwo[content])) {
        
        if (eqArrays(objectOne[content], objectTwo[content]) === false) {
          return false;
        }

      } else {
       
        if (objectOne[content] !== objectTwo[content]) {
          return false;
        
        }
      }
    } return true;
  }

};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`😄👏😄 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡💔😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};





//Test Centre
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

//assertEqual(eqObjects(ab, abc), false);
//assertEqual(eqObjects(ab, ba), true);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false

//assertEqual(eqObjects(cd, dc), true);
//assertEqual(eqObjects(cd, cd2), false);

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);