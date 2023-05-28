const list = require("./words")
const {findWordsSmarter} = require("./igetthis")
const {findWordsbyLetter} = require("./igetthis")
const {firstTenWords} =require("./index")


const sortedWords = (list) => {
    //n console.log(sortedList)
     return list.slice().sort()
 };


// console.log(sortedWords(list), list)



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

const trial2 = (firstTenWords, target) => {
    let TargetWordsSplit = []
    firstTenWords.map(string => {
     if(string.includes(target)){
        TargetWordsSplit.push( string.split("") )
     }
       // console.log(TargetWordsSplit)
    })
    
    return TargetWordsSplit;
}

//console.log(trial2(firstTenWords(list), process.argv[2]))

//console.log(list)


const trial3 = (list, targetA , targetB ) => {
    let targetSplitWords = [] 
    let doubleLetters = []
    list.slice().map(string => {
        if(string.includes((targetA && targetB) )){
            targetSplitWords.push(string.split(""))
        }
 
    
})
 return targetSplitWords
   
      
} 

console.log(trial3(list, process.argv[2], process.argv[3]))

