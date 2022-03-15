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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;

//return first letters in each element of an array
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

//test with even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results2 = map(numbers, (number =>  number * 2));
console.log(results2);

//test for strings with length more than 4
//returns only arrays in an array
//Testing Zone
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]);
//assertArraysEqual([1, 2, 3], [1, 2, 3]);