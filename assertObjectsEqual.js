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
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



const obj1 = {
  name: "Kevin",
  location: "Canada"
};

const obj2 = {
  name: "Devin",
  location: "Canada"
};

const obj3 = {
  location: "Canada",
  name: "Kevin"
};

assertObjectsEqual(eqObjects(obj1, obj1), false); //fail
assertObjectsEqual(eqObjects(obj1, obj2), true); //fail
assertObjectsEqual(eqObjects(obj1, obj3), true); //true

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), true); // => fail

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false