const assertEqual = require('./assertEqual');

let tail = function(array) {
  return array.slice(1);
};

console.log(tail([1, 2, 3, 4]));


module.exports = tail;