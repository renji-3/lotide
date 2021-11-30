const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) {  //for every part in the items list
    if (itemsToCount[item]) {  //if it matches the itemsToCount
      if (results[item]) {  //AND if it's in the results object
        results[item] += 1; //increase its count by 1
      } else { // if its not yet in the results object
        results[item] = 1; // put it there and set its count to 1
      }
    }
  }
  return results;
};


module.exports = countOnly;