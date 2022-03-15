//takes in a sentence (as a string) and returns a count of each of the letters in that sentence as an object.
const countLetters = function(stringInput) {
  let countedLetters = {};
  for (let character of stringInput) {
    if (character !== ' ') {
      if (countedLetters[character]) {
        countedLetters[character] += 1;
      } else {
        countedLetters[character] = 1;
      }
    }
  }
  return countedLetters;
};
module.exports = countLetters;