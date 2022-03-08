// FUNCTION IMPLEMENTATION
const tail = function(array) {
  let answer = [];
  for (let i = 1; i < array.length; i++) {
    answer.push(array[i]);
  }
  return answer;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄👏😄 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡💔😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Case 1: Check the returned array elements for single array element
const test1 = tail(["Hello"]);
console.log(test1);
assertEqual(test1.length, 0);
assertEqual(test1[0],undefined);
assertEqual(test1[1],undefined);

// Test Case 2: Check the returned array elements for single array element
const test2 = tail(["Hello", "Lighthouse", "Labs"]);
console.log(test2);
assertEqual(test2.length, 2); // ensure we get back two elements
assertEqual(test2[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(test2[1], "Labs"); // ensure second element is "Labs"

// Test Case 3: Check the returned array elements for empty array element
const test3 = tail([]);
console.log(test3);
assertEqual(test3.length, 0);
assertEqual(test3[0],undefined);
assertEqual(test3[1],undefined);

// Test Case 4: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!