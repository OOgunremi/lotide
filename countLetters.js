//counts the letters in a strint; returns it as an object
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