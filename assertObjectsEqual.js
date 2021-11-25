// FUNCTION IMPLEMENTATION
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
  if (eqObjects(actual, expected) === false) {
    console.log('shits fugaze');
  } else {
    console.log('shits legit');
  }
};

