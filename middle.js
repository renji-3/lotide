const middle = function(arr) {
  let newA = [];
  let mid = arr[Math.floor(arr.length / 2)];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      newA.push(mid - 1);
      newA.push(mid);
    } else
    if (arr.length % 2 === 1) {
      newA.push(mid);
    }
  }
  return newA;
};

module.exports = middle;

console.log(middle([1, 2]));