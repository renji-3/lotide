const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { // loop through the string
    if (i !== ' ') { //skip if its a space
      if (results[sentence[i]]) { // if sentence i is a key in results
        results[sentence[i]].push(i); // push position number/index number into results
      } else { // otherwise
        results[sentence[i]] = [i]; // make the new spot
      }
    }
  }
  return results;
};

module.exports = letterPositions;