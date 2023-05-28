const myImportedModule= require("./lab-node-projects-and-organization/words")
const { myObject } = require("./lab-node-projects-and-organization/modules")
//console.log(myImportedModule)


// wordle is a simple guessing game where you must guess a five-letter word in 6 tries or less.

// Every time you guess a word, you learn if you have found any letters that are correct and in the correct position or correct but in the wrong position.

// The goal will be to build two functions that will return a list of possible words that match your guesses so far.

// You can see an implementation of this functionality using the instructions from [tabatkin's version](https://github.com/tabatkins/wordle-list#filtering-guesses-with-grep)

// ### Start simple

// Write the following functions:

// - `allWords` logs all the words.
// - `firstTenWords` logs the first ten words.
// - `nextTenWords` logs the next 10 words.
// - `firstXWords` logs from 0 to x words.
// - `subsetOfWords` logs from x to y words.
// - `sortWords` logs all the words, sorted alphabetically.

//FUNCTION ALL WORDS
function allWords(words) {

    return (words)
}
console.log(allWords(myObject))

//FUNCTION FIRST TEN WORDS
function firstTenWords(words) {

    firstTen = words.slice(0, 10); {
        return firstTen
    }
}

console.log(firstTenWords(myObject))

//FUNCTION NEXT TEN WORDS

function nextTenWords(words) {

    nextTen = words.slice(10, 20); {
        return nextTen
    }
}
console.log(nextTenWords(myObject))

//Function sort words

function sortWords(words) {
    sort = words.sort(); {
        return sort
    }

}


console.log(sortWords(myObject))


// firstXWords` logs from 0 to x words.



function firstXWords(words){
    let start=0
    let x = 33
   
      zeroToX = words.slice(start,x);{
  
        return zeroToX
      }
    
    }
  console.log(firstXWords(myObject))
  






// - `subsetOfWords` logs from x to y words.
function subsetOfWords(words){
 
    xToY = words.sort().filter((element=> {
      if (element.startsWith("x")||element.startsWith("y")){

        console.log(element)
        }
    }))
  return xToY
  }
subsetOfWords(myObject)


/*
wordsWithQ` returns all the words that contain the letter q
- `findWordsWithLetter` takes an argument `letter` and returns all the words with that matching letter

**Note:** When creating this functionality, it's okay to use just a sample set of 3-10 words. This step can make troubleshooting a bit easier. Be sure to test for the following scenarios:

- find a word with the matching letter
- find a word with more than one of the matching letter
- find a word with no matching letters


*/
//WORDS THAT CONTAIN THE LETTER Q

function wordsWithQ(words){
 
   find = words.filter((element=> {
      if (element.includes("q") ){

        console.log(element)
        }
    }))
  return find
  }
wordsWithQ(myObject)



// function findWordsWithLetter(words,letter){
 
//     wordFind = words.filter((element=> {
//      if (element.includes(letter) ){

//         console.log(element)
//        }
//  }))
//  return wordFind
//   }
// findWordsWithLetter(myObject,"a")

console.log("process argv function")

function findWordsWithLetter(words,letter){
 
    wordFind = words.filter((element=> {
     if (element.includes(letter) ){

        console.log(element)
       }
 }))
 return wordFind
  }
findWordsWithLetter(myObject,process.argv[2])

//BONUS
// - Write a function `lettersMatch` that lets you input up to 5 letters 
// in any order and returns the words that match the criteria 
// (don't worry about solving for duplicate letters).


function lettersMatch(words){
 
  wordFind = words.sort().filter((element=> {
   if (element.includes(process.argv[2][0]) && element.includes(process.argv[2][2])&&element.includes(process.argv[2][1])&& element.includes(process.argv[2][3])&&element.includes(process.argv[2][4])){

      console.log(element)
     }
}))
return wordFind
}
lettersMatch(myObject,process.argv[2])

//BONUS 2

function lettersExactMatch(words){
 
  wordFind = words.sort().filter((element=> {
   if (element.includes(process.argv[3][0] )
     
       && element.includes(process.argv[3][2])
       
       && process.argv[3][1]==="_" && element.includes(process.argv[3][3])
      
       && process.argv[3][4]==="_"){

      console.log(element)
     }
}))
return wordFind
}
lettersExactMatch(myObject,process.argv[3])