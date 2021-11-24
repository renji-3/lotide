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




assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false