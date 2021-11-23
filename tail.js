const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    if (actual !== expected) {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

let tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual([1, 2, 3].length, [1, 2, 3].length);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"].length);