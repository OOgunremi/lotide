// FUNCTION IMPLEMENTATION
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