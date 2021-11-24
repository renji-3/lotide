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


const middle = function(arr) {
  let newA = [];
  if (arr.length > 2) {
    let mid = arr[Math.floor(arr.length / 2)]; {
      newA.push(mid - 1);
      newA.push(mid);
    }
  } else if (arr.length < 2) {
    return newA;
  }
  return newA;
};



assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2]), [3]); // => []


/*assertArraysEqual(middle([1, 2, 3, 4])); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6])); // => [3, 4])
assertArraysEqual(middle([1])); // => []
assertArraysEqual(middle([1, 2])); // => []*/