/*
Implement the function findKeyByValue which takes in an object and a value. It  scans the object and return the first key which contains the given value. If no key with that given value is found, then it returns undefined.

*/
const findKeyByValue = function(objectTaken, valueToFind) {
  let arrayKeys = Object.keys(objectTaken);
  //let arrayValues = Object.values(objectTaken);
  for (let items of arrayKeys) {

    if (objectTaken[items] === valueToFind) {
      return items;
    }
  }
};
module.exports = findKeyByValue;