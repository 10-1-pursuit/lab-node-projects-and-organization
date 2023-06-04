const wordsJson = require("../data/words.json");

/**
 * wordsWithQ()
 * --------------------------
 * return words that contains "q"
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 * @returns {string[]} - filtering words that contain "q"
 */
function wordsWithQ(words = wordsJson){
    return words.filter(a => a.includes("q"));
}

/**
 * findWordsWithLetter()
 * ----------------------------
 * return words that contain a character [letter]
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 * @param {string} letter - a character to filter in 
 * @returns {string[]} - a filtered array of strings
 */
function findWordsWithLetter(words = wordsJson, letter){
    return words.filter(a => a.includes(letter));
}

module.exports = {
    findWordsWithLetter,
    wordsWithQ,
}