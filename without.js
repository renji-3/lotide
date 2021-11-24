let eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] !== b[j]) {
        return false;
      } else {
        return true;
      }
    }
  }
};

let assertArraysEqual = function(arr, arr2) {
  if (eqArrays(arr, arr2) === false) {
    console.log('shits fugaze');
  } else {
    console.log('shits legit');
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