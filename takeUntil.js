//Method 1 using forEach Loop commetted out
/*const takeUntil = function (array, callback) {
  let output = [];
  let isLooping = true;
  array.forEach(item => {
    if (isLooping) {
      if (callback(item)) {
        isLooping = false;
      }
      else {
        output.push(item);
      }
    }
  })
  return output;
}
*/
const takeUntil = function(array, callback) {
  let output = [];
  for (let item of array) {
    if (callback(item)) {
      return output;
    } else {
      output.push(item);
    }
  }
  return output;
};
module.exports = takeUntil;

//This section is for testing
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

//testing data
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

//console.log(results2);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
console.log('---');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);