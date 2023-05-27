const { words, subsetOfWords } = require('../index');

const firstPos = Number(process.argv[2]);
const secondPos = Number(process.argv[3]);

subsetOfWords(words, firstPos, secondPos);
