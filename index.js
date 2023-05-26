const words = require("./words.json")

// Write the following functions:

// - `allWords` logs all the words.
function allWords(words) {
    console.log(words)
};

// - `firstTenWords` logs the first ten words.
function firstTenWords(words) {
    console.log(words.slice(0, 10))
}
// - `nextTenWords` logs the next 10 words.
function nextTenWords(words) {
    console.log(words.slice(10, 20))
}
// - `firstXWords` logs from 0 to x words.
function firstXWords(words, num) {
    console.log(words.slice(0, num))
}
// - `subsetOfWords` logs from x to y words.
function subsetOfWords(words, num1, num2) {
    console.log(words.slice(num1, num2))
}
// - `sortWords` logs all the words, sorted alphabetically.
function sortWords(words) {
    console.log(words.sort())
}

// Write the following functions
// - `wordsWithQ` returns all the words that contain the letter q
function wordsWithQ(words) {
    return words.filter(word => word.includes('q'));
}

// - `findWordsWithLetter` takes an argument `letter` and returns all the words with that matching letter
function findWordsWithLetter(words, letter) {
    return words.filter(word => word.includes(letter))
}
const letter = process.argv[2];



// console.log(findWordsWithLetter(words, letter))
