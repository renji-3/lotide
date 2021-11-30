const takeUntil = function(array, callback) {
  const endArr = [];
  for (let item of array) {
    if (callback(item)) { //if the callback item happens, stop the function, dont even add it to the array
      return endArr;
    } else {
      endArr.push(item); //the callback function doesnt happen until later in the array, so it loops through the array, sees the condition isnt met, pushes it into the new array
    }
  }
  return endArr;
};

module.exports = takeUntil;