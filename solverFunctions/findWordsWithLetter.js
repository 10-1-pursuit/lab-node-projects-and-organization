const { words, findWordsWithLetter } = require('../index');

const letter = process.argv[2];

console.log(findWordsWithLetter(words, letter));
