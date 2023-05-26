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

/**
 * Logs the next ten words.
 * @param {string[]} words - an array of strings.
 */

function nextTenWords(words) {
	for (let i = 10; i < 20; i++) {
		console.log(words[i]);
	}
}

/**
 * Logs from 0 to x words.
 * @param {string[]} words - an array of strings.
 * @param {number} num - number that represents how many words to log from the 0th index.
 */

function firstXWords(words, num) {
	for (let i = 0; i < num; i++) {
		console.log(words[i]);
	}
}

/**
 * Logs from x to y words.
 * @param {string[]} words - an array of strings.
 * @param {number} firstPos - number that represents the starting index in the array.
 * @param {number} secondPos - number that represents the ending index in the array.
 */

function subsetOfWords(words, firstPos, secondPos) {
	for (firstPos; firstPos < secondPos; firstPos++) {
		console.log(words[firstPos]);
	}
}

/**
 * Logs all the words, sorted alphabetically.
 * @param {string[]} words - an array of strings.
 */

function sortWords(words) {
	const sortedWords = words.sort((a, b) => {
		if (a.toLowerCase() < b.toLowerCase()) {
			return -1;
		}
		if (a.toLowerCase() > b.toLowerCase()) {
			return 1;
		}
		return 0;
	});
	console.log(sortedWords);
}

// 2. Begin building the `wordle` solver functions -
/* 
The `wordle` solver requires two functions:
  - one that returns a list of words that has matching letters in any position.
  - one that returns a list of words that has matching letters that also match the position.
*/
// Start with simpler versions -

/**
 * Returns all the words that contain the letter `q`.
 * @param {string[]} words - an array of strings.
 * @returns {string[]} An array of strings that all contain the letter `q`.
 */

function wordsWithQ(words) {
	const qWords = words.filter((word) => word.includes('q'));
	return qWords;
}

/**
 * Returns all the words that contain the letter `q`.
 * @param {string[]} words - an array of strings.
 * @returns {string[]} An array of strings that all contain the letter `q`.
 */

function findWordsWithLetter(words, letter) {
	const wordsWithLetter = words.filter((word) =>
		word.includes(letter.toLowerCase())
	);
	return wordsWithLetter;
}

console.log(findWordsWithLetter(words, process.argv[2]));
