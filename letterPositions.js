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
    console.log(`😄👏😄 Assertion Passed, [${arrayOne}] is equal to [${arrayTwo}]`);
  } else {
    console.log(`😡💔😡 Assertion Failed [${arrayOne}] is not equal to [${arrayTwo}]`);
  }
};



const letterPositions = function(sentence) {
  let results = {};
  for (let letter in sentence) {

    if (results[sentence[letter]]) {
      results[sentence[letter]].push(letter);
      //output = letter
      //output.push(letter)
    } else {
      results[sentence[letter]] = [letter];
    }
  }
  return results;
};
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions('hello').h, [0]);
console.log(typeof(letterPositions('hello').h), typeof([0]));
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2,3]);
assertArraysEqual(letterPositions('hello').o, [4]);