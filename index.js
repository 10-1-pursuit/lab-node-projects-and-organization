const wordsData = require("./words.json");

/** logs all the words.
 * @param {string[]} words
*/
function allWords(words){
    console.log(words);
}

/**logs the first ten words.
 * @param {string[]} words
*/
function firstTenWords(words){
    for(let i = 0; i < 10; i++){
        console.log(words[i])
    }
}

/**logs the next 10 words.
 * @param {string[]} words
 * @param {number} index - starting position in the array
*/
function nextTenWords(words, index){
    for(let i = index; i < index + 10; i++){
        console.log(words[i]);
    }
}

/**logs from 0 to x words.
 * @param {string[]} words
 * @param {number} index - ending position of the array
*/
function firstXWords(words, index){
    for(let i = 0; i <= index; i++){
        console.log(words[i]);
    }
}

firstXWords(wordsData, 3);
/**logs from x to y words.
 * @param {string[]} words
*/
function subsetOfWords(words, firstIndex, lastIndex){}

/**logs all the words, sorted alphabetically.
 * @param {string[]} words
*/
function sortWords(words){}