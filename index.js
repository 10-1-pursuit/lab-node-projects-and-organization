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
 * Takes an argument `letter` and returns all the words with that matching letter(s).
 * @param {string[]} words - an array of strings.
 * @param {string} letter - a string.
 * @param {number} position [optional] - a number that represents the index of inputted letter in all the words.
 * @returns {string[]} An array of strings that all contain the inputted letter(s).
 */

function findWordsWithLetter(words, letter, position) {
	return words.filter((word) => {
		if (word[position] === letter.toLowerCase()) {
			return word;
		} else if (position === undefined && word.includes(letter.toLowerCase())) {
			return word;
		}
	});
}

// Bonus -

/**
 * Takes an argument `letter` and returns all the words with that matching letter(s).
 * @param {string[]} words - an array of strings.
 * @param {string} letter - a string.
 * @param {number} position [optional] - a number that represents the index of inputted letter in all the words.
 * @returns {string[]} An array of strings that all contain the inputted letter(s).
 */

function lettersMatch(words, letters) {
	const wordsWithLetter = words.filter((word) => {
		if (letters.length === 1 && word.includes(letters.toLowerCase())) {
			return word;
		} else if (letters.length === 2 && word.includes(letters.toLowerCase())) {
			return word;
		} else if (letters.length === 3 && word.includes(letters.toLowerCase())) {
			return word;
		} else if (letters.length === 4 && word.includes(letters.toLowerCase())) {
			return word;
		} else if (letters.length === 5 && word.includes(letters.toLowerCase())) {
			return word;
		}
	});
	return wordsWithLetter;
}

module.exports = {
	words,
	allWords,
	firstTenWords,
	nextTenWords,
	firstXWords,
	subsetOfWords,
	sortWords,
	wordsWithQ,
	findWordsWithLetter,
};
