/*
Implement middle which takes in an array and return the middle-most element(s) of the given array.
*/
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
module.exports = middle;
