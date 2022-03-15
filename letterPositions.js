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