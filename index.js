const wordsArr = require("./words.json")

const allWords = words => words
console.log(allWords(wordsArr))

const firstTenWords = words => {
    let firstTen = []
    for (let i = 0; i < words.length; i++){
        if (i < 10){
            firstTen.push(words[i])
        }
    }
    return firstTen
}
console.log(firstTenWords(wordsArr))