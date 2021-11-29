const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

assertEqual(words.length, 3);
assertEqual([1, 2, 3].length, [1, 2, 3].length);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"].length);