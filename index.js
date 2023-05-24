const words = require('./words.json');

// 1. Start simple -

/**
 * Logs all the words.
 * @param {string[]} words - an array of strings.
 */

function allWords(words) {
	words.forEach((word) => console.log(word));
}

/**
 * Logs the first ten words.
 * @param {string[]} words - an array of strings.
 */

function firstTenWords(words) {
	for (let i = 0; i < 10; i++) {
		console.log(words[i]);
	}
}
