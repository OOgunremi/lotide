
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
const middle = function(array) {
  let output = [];
  let centreIndex = 0;
  centreIndex = array.length / 2;
  if (array.length % 2 !== 0) {
    output.push(array[Math.floor(centreIndex)]);
  } else {
    output.push(array[centreIndex - 1]);
    output.push(array[centreIndex]);
  }
  return output;
};
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);