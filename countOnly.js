//takes in a collection of strings and return counts for a specific subset of those strings. In order to decide what to count, it is given an idea of which items and it will only count those, ignoring the others.
// allItems: in an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
module.exports = countOnly;