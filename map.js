const map = function(array, cb) {
  const results = [];
  for (let item of array) { //loop the array
    results.push(cb(item)); //push the callback condition into the array
  }
  return results;
};

module.exports = map;