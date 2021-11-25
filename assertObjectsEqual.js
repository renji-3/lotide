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


const eqObjects = function(object1, object2) {
  
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (let y of array1) {
    if (Array.isArray(object1[y]) && Array.isArray(object2[y])) {
      if (!eqArrays(object1[y], object2[y])) {
        return false;
      }
    } else if (object2[y] !== object1[y]) {
      return false;
    }
     
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  let lastResult = eqObjects(actual, expected);
  if (lastResult === false) {
    console.log('ur fucked');
  } else
    console.log('ur bless');
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), false); // fucked

console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // bless