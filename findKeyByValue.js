const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄👏😄 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡💔😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objectTaken, valueToFind) {
  let arrayKeys = Object.keys(objectTaken);
  //let arrayValues = Object.values(objectTaken);
  for (let items of arrayKeys) {

    if (objectTaken[items] === valueToFind) {
      return items;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
//findKeyByValue(bestTVShowsByGenre, "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);