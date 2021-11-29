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

module.exports = middle;




