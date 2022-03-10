const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄👏😄 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡💔😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};


let stringInput = ''; let countedLetters = {};
const countLetters = function(stringInput){
  for (character of stringInput){
    if (character !== ' '){
      if (countedLetters[character]){
        countedLetters[character] +=1;
      }
      else { countedLetters[character] =1};
    }
  }
  return countedLetters;
}
console.log(countLetters('lighthouse in the house'), '===', { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
assertEqual(countedLetters['h'], 4);
assertEqual(countedLetters['h'], 4);