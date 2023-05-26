

// ### Start simple

const words = require("./words.json")
// console.log(words)

// `allWords` logs all the words.
const allWords = (words) => words
// console.log(allWords(words))

// `firstTenWords` logs the first ten words.
const firstTenWords = (words) => words.slice(0,10)
// console.log(firstTenWords(words))

//  `nextTenWords` logs the next 10 words.
const nextTenWords = (words) => words.slice(10,20)
// console.log(nextTenWords(words))

//  `firstXWords` logs from 0 to x words.
const firstXWords = (words, x) => words.slice(0,(words.indexOf(x)+1))
// console.log(firstXWords(words, "swack"))

//  `subsetOfWords` logs from x to y words.
const subsetOfWords = (words, x, y) => words.slice((words.indexOf(x)),(words.indexOf(y)+1))
// console.log(subsetOfWords(words, "feens", "junta"))

//  `sortWords` logs all the words, sorted alphabetically.
const sortWords = (words) => words.sort()
// console.log(sortWords(words))


// ### Begin building the wordle solver functions

// `wordsWithQ` returns all the words that contain the letter q
const wordsWithQ = (words, q) => words.filter(a => a.includes(q))
// console.log(wordsWithQ(words, "q"))

// `findWordsWithLetter` takes an argument `letter` and returns all the words with that matching letter
const findWordsWithLetter = (words, letter) => words.filter(a => a.includes(letter))
// console.log(findWordsWithLetter(words, "iko"))

// input a letter from the terminal.
const findWordsWithTerminalLetter = (words, letter) => words.filter(a => a.includes(letter = process.argv[2])).sort()
// 
console.log(findWordsWithTerminalLetter(words))


