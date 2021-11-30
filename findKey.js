const findKey = function(obj, cb) {
  for (let key in obj) { // loop the object
    if (cb(obj[key])) return key; // if callback matches obj[key] (still dont know what this means) return key (which is the name and thats what we want returned)
  }
};

module.exports = findKey;
