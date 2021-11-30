const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr, arr2) {
  if (eqArrays(arr, arr2) === false) {
    console.log('shits fugaze');
  } else {
    console.log('shits legit');
  }
};



module.exports = assertArraysEqual;