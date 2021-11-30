const findKeyByValue = function(obj, val) {
  const keyArr = Object.keys(obj);
  for (let x of keyArr) {
    if (obj[x] === val) return x;
  }
};

module.exports = findKeyByValue;