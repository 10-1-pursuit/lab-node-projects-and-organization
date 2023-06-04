const wordsJson = require("../data/words.json");

/**
 * allWords()
 * -----------------------
 * Showing all the words in the data.
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 */
function allWords(words = wordsJson){
    for(let word of words){
        console.log(word);
    }
}

/**
 * firstTenWords()
 * -----------------------
 * showing first ten words (from index 0 to 9)
 * if the size of [words] less than 10, return -1 w/ error log.
 * 
 * @param {string[]} words - a data set for words, default value is JSON file, [wordsJson]
 */
function firstTenWords(words = wordsJson){
    /** validation for size of the data */
    if(words.length < 10){
        console.log("Our data set does have less than 10 words");
        return -1;
    }

    for(let index = 0; index < 10; index++){
        console.log(words[index]);
    }
}

/**
 * nextTenWords()
 * ------------------------
 * showing 10 words which begin w/ index [position]
 * 
 * @param {string[]} words - a data set for words, default value is JSON file, [wordsJson]
 * @param {number} position - a start position
 */
function nextTenWords(words = wordsJson, position = 0){
    /** validation for size of the data */
    if(words.length < 10){
        console.log("Our data set does have less than 10 words");
        return -1;
    }
    for(let index = position; index < position + 10; index ++){
        console.log(words[index]);
    }
}

/**
 * firstXWords()
 * ------------------------
 * showing words from index 0 to index [end]
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 * @param {number} end - an end position for words
 */
function firstXWords(words = wordsJson, end = words.length){
    if(end > words.length){
        console.log("Out of range");
        return -1;
    }
    for(let index = 0; index < end; index++){
        console.log(words[index]);
    }
}

/**
 * subsetOfWords()
 * ------------------------
 * showing words from index [start] to index [end]
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 * @param {number} start - the initial position for words 
 * @param {*} end - the end position for words
 */
function subsetOfWords(words = wordsJson, start = 0, end = words.length){
    /** validation */
    if(end > words.length || start >= words.length){
        console.log("Out of range");
        return -1;
    }

    if(start > end){
        console.log("the value of the start position must be less than the value of the end position");
        return -1;
    }

    for(let index = start; index < end; index++){
        console.log(words[index]);
    }
}

/**
 * sortWords()
 * -------------------------
 * showing all the words w/ alphabettical order
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 */
function sortWords(words = wordsJson){
    console.log(words.sort());
}

module.exports = {
    sortWords,
    subsetOfWords,
    firstXWords,
    nextTenWords,
    firstTenWords,
    allWords,
}