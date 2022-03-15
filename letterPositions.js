//returns all the indices (zero-based positions) in the string where each character is found. For each letter, multiple numbers may be returned to represent all the places in the string that the letter shows up.
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
module.exports = letterPositions;