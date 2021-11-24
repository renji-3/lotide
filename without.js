let eqArrays = function(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

let assertArraysEqual = function(arr) {
  if (arr === false) {
    console.log('shits fugaze');
  } else {
    if (arr === true) {
      console.log('shits legit');
    }
  }
};

const without = function(source, seeya) {
  let later = [];
  let hello = [];
  for (let i = 0; i < source.length; i++) {
    if (seeya.includes(source[i])) {
      later.push(source[i]);
    } else {
      hello.push(source[i]);
    }
  }
  return hello;
};



let words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]