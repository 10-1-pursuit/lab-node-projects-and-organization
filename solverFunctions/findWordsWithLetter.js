const { words, findWordsWithLetter } = require('../index');

const letter = process.argv[2];
const position = Number(process.argv[3]);

console.log(findWordsWithLetter(words, letter, position));
