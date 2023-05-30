const list = require("./words")              // setting list as var and assigning it to require, a keyword.
const {findWordsSmarter} = require("./igetthis")    // destructured a var and created an object with i get this as its source.
const {findWordsbyLetter} = require("./igetthis")
const {firstTenWords} = require("./index")
const {firstXWords} = require("./index")

const sortedWords = (list) => {
    //n console.log(sortedList)
     return list.slice().sort()
 };


// console.log(sortedWords(list), list)

// `firstXWords` logs from 0 to x words.


 /*const trial1 = (sortedWords, target) => {
  
    for 
    for (let targetWords of wordsWithTarget) {
        singleWord = targetWords.split(" ")
        for (let i = 0; i < singleWord.length; i++) {
            console.log(wordsWithTarget)
        }
    }

}

console.log(trial1(sortedWords, "r")) 
*/



//console.log(firstTenWords(list))

// const trial2 = (firstTenWords, target) => {
//     let TargetWordsSplit = []
//     firstTenWords.map(string => {
//      if(string.includes(target)){
//         TargetWordsSplit.push( string.split("") )
//      }
//        // console.log(TargetWordsSplit)
//     })
    
//     return TargetWordsSplit;
// }

// //console.log(trial2(firstTenWords(list), process.argv[2]))

// //console.log(list)


// const trial3 = (list, targetA , targetB ) => {
//     let targetSplitWords = [] 
//     let doubleLetters = []
//     list.slice().map(string => {
//         if(string.includes((targetA && targetB) )){
//             targetSplitWords.push(string)
//         }
 
    
// })
//  return targetSplitWords
   
      
// } 

// const lettersMatch = (trial3(list, process.argv[2], process.argv[3]))

// function targetRegexWord(targetWordArr, targetReg){

//    for(let wordArr of targetWordArr){

//         let regrex = /targetReg/
//         regrex.test(wordArr)
//    }

// }
// let targetA = process.argv[2]
// let targetB = process.argv[3]
// let targetC = process.argv[4]
// let targetD = process.argv[5]


// const processKeys = {
   
//     targetA: targetA,
//     targetB: targetB,
//     targetC: targetC,
//     targetD: targetD
// }





let target = process.argv[2]             // setting target vaule for terminal access
let myRegex = new RegExp( target, "ig")   // using the Regular Expression Constructor. an object (like "function") two arguments, the pattern to look for and the "flags"                              
                                            // pattern the function is looking for is equal to terminal one entry.  
                                            // "i"- a flag for ignore case "g"- a flag for repeating letters

//console.log(lettersMatch)
const lettersMatch =(firstXWords) => {        //destructured function use firstXwords returned subset of 25 avaible words.
    let caughtWords = []                       //a array to catch the found words
   for(let strings of firstXWords){             // looping through array
       let result = myRegex.test(strings)         // using .test method on my RegExpression function. This returns a boolean value if pattern is found.
    if(result){                          // if true
        caughtWords.push(strings)          //push them into my caught list.
    }
   }
   return caughtWords                     //returning it.

}

console.log(lettersMatch(firstXWords(list)))     //This function finds whatever pattern entred into the terminal as prcess.argv[2]
