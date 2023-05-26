const wordsArr = require("./words.json")

const allWords = words => words

const firstTenWords = words => words.slice(0, 10)

const nextTenWords = words => words.slice(10, 20)

const firstXWords = (words, x) => words.slice(0, x)

const subsetOfWords = (words, x, y) => words.slice(x, y)

const sortWords = words => words.sort()

const wordsWithQ = words => words.filter(word => word.includes("q"))

const letter = process.argv[2]
const findWordsWithLetter = (words, letter) => words.filter(word => word.includes(letter))
const findWords = findWordsWithLetter(wordsArr, letter)
console.log(`Words with the letter '${letter}': ${findWords}`)
