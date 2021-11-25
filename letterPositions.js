const eqArrays = function(a, b) {
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

const assertArraysEqual = function(arr, arr2) {
  if (eqArrays(arr, arr2) === false) {
    console.log('shits fugaze');
  } else {
    console.log('shits legit');
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { // loop through the string
    if (i !== ' ') { //skip if its a space
      if (results[sentence[i]]) { // if sentence i is a key in results
        results[sentence[i]].push(i); // push position number/index number into results
      } else { // otherwise
        results[sentence[i]] = [i]; // make the new spot
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hey mate").e, [1, 7]);

console.log(letterPositions("hey mate").e);