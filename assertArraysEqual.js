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




assertArraysEqual((eqArrays)([1, 2, 3], [3, 2, 1])); // => false
assertArraysEqual((eqArrays)([1, 2, 3], [1, 2, 3])); // => true
assertArraysEqual((eqArrays)(["1", "2", "3"], ["1", "2", "3"])); // => true
assertArraysEqual((eqArrays)(["1", "2", "3"], ["1", "2", 3])); // => false