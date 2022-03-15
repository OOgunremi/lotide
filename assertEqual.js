// assertEqual compares  two values it takes in and print out a message telling us if they match or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅😄👌👏😄✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡👎💔✘😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};
module.exports = assertEqual;
