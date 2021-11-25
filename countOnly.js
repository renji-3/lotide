const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    if (actual !== expected) {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

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



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);