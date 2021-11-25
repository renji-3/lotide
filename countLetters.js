const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    if (actual !== expected) {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};


const countLetters = function(str) {
  const count = {};
  for (let x of str) { //at each point on the string
    if (x !== ' ') { //as long as it isnt a space
      if (count[x]) { //if the x value is already in count
        count[x] += 1; //increase its count value by 1
      } else { //otherwise
        count[x] = 1; //set its count value to 1
      }
    }
  }
  return count;
};

const output = countLetters("lighthouse in the house");
console.log(output);
assertEqual(output["h"], 4);