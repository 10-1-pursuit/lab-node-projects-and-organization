const words = require('./words.json');

// 1. Start simple

/**
 * Logs all the words.
 * @param {String[]} words - an array of strings.
 *
 */

function allWords(words) {
	words.forEach((word) => console.log(word));
}
allWords(words);
