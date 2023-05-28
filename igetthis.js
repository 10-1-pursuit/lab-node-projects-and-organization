const rules = require("./index")
const list = require("./words")
const {sortWords} = require("./index")
const {firstTenWords} =require("./index")


/*
- One that returns a list of words that has matching letters in any position
use .filter to find the words to create an array of words with rules set. Using...
*/

const findWordsWithLetter = (list, target) =>{
    return target !== "" ? list.slice().filter(wordList => wordList.includes(target)) : target 
};
//
/*
When creating this functionality, it's okay to use just a sample set of 3-10 words. This step can make troubleshooting a bit easier. Be sure to test for the following scenarios:

- find a word with the matching letter
- find a word with more than one of the matching letter
- find a word with no matching letters
- One that returns a list of words that has matching letters that also match the position
*/

const findWordsSmarter = (sortWords, target) => {
    wordsWithTarget = sortWords.filter((wordsArr) => wordsArr.includes(target))  // - finds the words with the matching letter
    wordsWithOutTarget = sortWords.filter((wordsArr) => wordsArr.includes(!target)) // - - finds the words with no matching letters

    for (let targetWords of wordsWithTarget) {
        singleWord = targetWords.split(" ")
        for (let i = 0; i < singleWord.length; i++) {
            console.log(wordsWithTarget)
        }
    }

}
//const letterControlNSplit = (findWordsSmarter(sortWords(list), "o"))
//console.log(findWordsSmarter(sortWords(list), "o"))
//console.log(findWordsSmarter(sortWords(words), "e"))

//module.exports = {letterControlNSplit}


const findWordsbyLetter = (list, letter) => {
    let wordsWithLetter = list.slice().filter((string) =>{
        if(string.includes(letter)){
            return string
    }else{
           return string
 } })

}

//console.log(findWordsSmarter(list, "a"))

console.log(findWordsSmarter(sortWords(list), "m"))