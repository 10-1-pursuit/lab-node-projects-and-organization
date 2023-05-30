const data = require('./words.json');
//console.log(data)
// logs all the words
function allWord(word) {
    const allTheWords = data
    console.log('all words', allTheWords)
}
allWord()
//logs the first ten words
function firstTenWords() {
    let tenWords = []
    let firstTen = data.slice(0, 10)
    tenWords.push(firstTen)
    console.log('10', tenWords)
}
firstTenWords()
//logs the next ten words
function nextTenWords() {
    let nexTenWords = []
    const nextTen = data.slice(10, 20)
    nexTenWords.push(nextTen)
    console.log('NEXT TEN', nexTenWords)
}
nextTenWords()
// logs from 0 to x words
function firstXWords() {
    let eighty8Words = []
    const wordRange = data.slice(0, 88)
    eighty8Words.push(wordRange)
    console.log('88words', eighty8Words)
}
firstXWords()
//logs from x to y words
//logs from 50 t0 100
function subsetOfWords() {
    xYWords = []
    const fiftyHun = data.slice(50, 100)
    xYWords.push(fiftyHun)
    console.log('50', xYWords)
}
subsetOfWords()
//logs all the words, sorted alphabetically
function sortWords() {
    const sortedWords = data.sort()
    console.log(sortedWords)
}
sortWords()


function wordsWithQ() {
    for (words of data) {
        if (words.includes('q')) {
            console.log(words)
        }
    }
}
wordsWithQ()


    const findWordsWLetter = (letter) => {
      const wordsWL=  data.filter((words) => words.includes(letter))
    console.log(wordsWL)
    }
n