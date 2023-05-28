
const list = require("./words")
const {findWordsSmarter} = require("./igetthis")
const {findWordsbyLetter} = require("./igetthis")
const {firstTenWords} =require("./index")


const medium = []
const abrvWords = (list) => {
    for (let i = 0; i < 20; i++) {
        medium.push(list[i])
    }
    return medium;
}


function wordsByLetters(abrvWords){
  let slicedWords = [];
    for(let string of abrvWords) {
        slicedWords.push(string.split(''))
    }
    return slicedWords
}

const playingAround = (wordsByLetters(abrvWords(list)))
const letter = "o"
let wordObject = null;



//console.log(playingAround)


function SortingDuplicates(playingAround, target){
  let foundWords = []
  let amountCount = 0
  for(let wordArr of playingAround){
    for(let letters of wordArr){
      if(letters === target){
        amountCount++
      
         foundWords.push(wordArr.join(""))
        }
      }
    }
    console.log(foundWords, count)
  
  
  
  }
  
  
  
  const wordsWithDuplicateLetters = playingAround.filter(word => {
    const letterCount = {};
    letterCount[letter] = (letterCount[letter]|| 0) + 1
    console.log(letterCount)
    return Object.values(letterCount).indexOf(count => count > 1) !== -1;
  } );
  
  
  
  const arrayOfWordsbyLetter = (wordsByLetters(abrvWords(list)))


  console.log(arrayOfWordsbyLetter)


function doingDoubleLetters(letter){


}
