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



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, cb) {
  const results = [];
  for (let item of array) { //loop the array
    results.push(cb(item)); //push the callback condition into the array
  }
  return results;
};

const results1 = map(words, word => word[0]); //callback condition is first letter of every string (still confused on where word came from, but i think thats a new variable being defined)

console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);