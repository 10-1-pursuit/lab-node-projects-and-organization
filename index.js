const wordsArr = require("./words.json")

const allWords = words => words
console.log(allWords(wordsArr))

const firstTenWords = words => words.slice(0, 10)
console.log(firstTenWords(wordsArr))

const nextTenWords = words => words.slice(10, 20)
console.log(nextTenWords(wordsArr))

const firstXWords = (words, x) => words.slice(0, x)
console.log(firstXWords(wordsArr))