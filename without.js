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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`😄👏😄 Assertion Passed, [${arrayOne}] is equal to [${arrayTwo}].`);
  } else {
    console.log(`😡💔😡 Assertion Failed [${arrayOne}] is not equal to [${arrayTwo}].`);
  }
};

//Implement without which will return a subset of a given array, removing unwanted elements.
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let a = 0; a < source.length; a++) {
    let found = false;
    for (let b = 0; b < itemsToRemove.length; b++) {
      if (source[a] === itemsToRemove[b]) {
        found = true;
      }
    }
    if (!found) newArray.push(source[a]);
  }
  return newArray;
};
module.exports = without;

assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without([1], [1, 4]), []);

//Write a test case to make sure that the original array is not modified.
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);