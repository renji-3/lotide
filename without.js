const without = function(source, seeya) {
  let later = [];
  let hello = [];
  for (let i = 0; i < source.length; i++) {
    if (seeya.includes(source[i])) {
      later.push(source[i]);
    } else {
      hello.push(source[i]);
    }
  }
  return hello;
};



module.exports = without;