const wordsArr = require("./words.json")

const allWords = words => words
//console.log(allWords(wordsArr))

const firstTenWords = words => words.slice(0, 10)
//console.log(firstTenWords(wordsArr))

const nextTenWords = words => words.slice(10, 20)
//console.log(nextTenWords(wordsArr))

const firstXWords = (words, x) => words.slice(0, x)
//console.log(firstXWords(wordsArr, 100))
//console.log(firstXWords(wordsArr, 2479))

const subsetOfWords = (words, x, y) => words.slice(x, y)
//console.log(subsetOfWords(wordsArr, 8, 15))
//console.log(subsetOfWords(wordsArr, 356, 3463))

const sortWords = words => words.sort()
//console.log(sortWords(wordsArr))

const wordsWithQ = words => words.filter(word => word.includes("q"))
//console.log(wordsWithQ(wordsArr))


const userLetters = process.argv[2]

const findWordsWithLetter = (words, letter) => words.filter(word => word.includes(letter))

const wordsWithLetter = findWordsWithLetter(wordsArr, userLetters)
console.log(`Words with the letter '${userLetters}': ${wordsWithLetter}`)


const lettersMatch = (words, letter) => {
    if (letter.length > 5){
        return "Must be 5 letters or less!"
    }
    let splitArr = letter.split("")
    const matchingWordsOfLetters = []
    for (const letter of splitArr){
        matchingWordsOfLetters.push(findWordsWithLetter(words, letter))
    }
    return matchingWordsOfLetters
}
const wordsForLettersMatch = lettersMatch(wordsArr, userLetters)
console.log(`Words with the letters '${userLetters}': ${wordsForLettersMatch}`)