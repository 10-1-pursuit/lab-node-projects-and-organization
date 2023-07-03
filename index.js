const words = require("./words.json")


// This will log all of the words
const everyWord = (words) => words
// console.log(everyWord(words))

// Logs the first ten words.
const tenWordsOnly = (words) => words.slice(0, 10)


//  Logs the next 10 words.
const updatedTenWords = (words) => words.slice(10, 20)

// First words that start with an "X".
const XWords = (words, x) => words.slice(0, (words.indexOf(x) + 1))

// Will log the subset of words. 
const subsetWords = (words, x, y) => words.slice((words.indexOf(x)), (words.indexOf(y) + 1))

//  Sorted words that will be organized alphabetically. 
const wordSort = (words) => words.sort()

//Returns all the words that have the letter Q. 
const qWords = (words, q) => words.filter(a => a.includes(q))

// Takes a letter and added an arugment for each letter and returns all the words with that matching that letter.
const letterFinder = (words, letter) => words.filter(a => a.includes(letter))

// Inputs a letter from the terminal.
const terminalLetterFinder = (words, letter) => words.filter(a => a.includes(letter = process.argv[2])).sort()