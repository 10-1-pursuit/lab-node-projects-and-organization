const { words, findWordsWithLetterAtPosition } = require('../index');

const letter = process.argv[2];
const position = Number(process.argv[3]);

console.log(findWordsWithLetterAtPosition(words, letter, position));
