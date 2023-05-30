const wordleList = require("./words");
/**
 * Returns all the words that contain the letter `q`.
 * @param {string[]} wordleList - an array of strings.
 * @returns {string[]} An array of strings that all contain the letter `q`.
 */

function wordsWithQ(list) {
  return list.reduce((prev, word) => {
    return prev + word.includes("q");
  }, []);
}

/**
 * Takes an argument `letter` and returns all the words with that matching letter.
 * @param {string[]} wordleList - an array of strings.
 * @param {string} letter - a string.
 * @returns {string[]} An array of strings that all contain the inputted letter(s).
 */
function findWordsWithLetter(list, lttr) {
  return list.filter((word) => word.includes(lttr.toLowerCase()));
}
//console.log(process);
console.log(wordsWithQ(wordleList));
console.log(findWordsWithLetter(wordleList, "unt"));

module.exports = {
  wordleList,
  wordsWithQ,
  findWordsWithLetter,
};
