const { words, lettersMatch } = require('../index');

const letters = process.argv[2];

console.log(lettersMatch(words, letters));
