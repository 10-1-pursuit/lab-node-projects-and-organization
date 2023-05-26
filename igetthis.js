const rules = require("./index")
const list = require("./words")
const {sortWords} = require("./index")

/*
- One that returns a list of words that has matching letters in any position
use .filter to find the words to create an array of words with rules set. Using...
*/

const findWordsWithLetter = (list, target) =>{
    return target !== "" ? list.slice().filter(wordList => wordList.includes(target)) : target 
};
//console.log(findWordsWithLetter(list, "q"))
/*
When creating this functionality, it's okay to use just a sample set of 3-10 words. This step can make troubleshooting a bit easier. Be sure to test for the following scenarios:

- find a word with the matching letter
- find a word with more than one of the matching letter
- find a word with no matching letters
- One that returns a list of words that has matching letters that also match the position
*/

function findWordsSmarter(sortWords, target){

    
}