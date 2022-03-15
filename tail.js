// a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
const tail = function(array) {
  if (array.length === 0) {
    return [];
  }
  let answer = [];
  for (let i = 1; i < array.length; i++) {
    answer.push(array[i]);
  }
  return answer;
};
module.exports = tail;