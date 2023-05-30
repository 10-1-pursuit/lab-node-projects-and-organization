const wordleList = require("./words.json");
/**
 * allWords()
 * ---------------------
 * Logs all the words.
 * @param {string[]} wordleList
 */
function allWords(list) {
  console.log(list);
}

/**
 * firstTenWords()
 * ---------------------
 * Logs the first ten words.
 * @param {string[]} wordleList
 */
function firstTenWords(list) {
  for (let i = 0; i < 10; i++) {
    console.log(list[i]);
  }
}

/**
 * nextTenWords()
 * ---------------------
 * Logs the next 10 words.
 * @param {string[]} wordleList
 */
function nextTenWords(list) {
  for (let i = 10; i < 20; i++) {
    console.log(list[i]);
  }
}

/**
 * firstXWords()
 * ---------------------
 * Logs from 0 to x words.
 * @param {string[]} wordleList
 * @param {number} endOfIndex(x)
 */
function firstXWords(list, x) {
  for (let i = 0; i < x; i++) {
    console.log(list[i]);
  }
}

/**
 * subsetOfWords()
 * ---------------------
 * Logs from x to y words.
 * @param {string[]} wordleList
 * @param {number} startOfIndex(x)
 * @param {number} endOfIndex(y)
 */
function subsetOfWords(list, x, y) {
  for (x; x < y; x++) {
    console.log(list[x]);
  }
}

/**
 * sortWords()
 * ---------------------
 * Logs all the words, sorted alphabetically.
 * @param {string[]} wordleList
 */
function sortWords(list) {
  const sortedList = list.sort((a, b) => {
    return a.localeCompare(b);
  });
  sortedList.forEach((word) => console.log(word));
}

//allWords(wordleList);
//firstTenWords(wordleList);
// nextTenWords(wordleList);
//  firstXWords(wordleList);
//  subsetOfWords(wordleList);
//  sortWords(wordleList);

module.exports = {
  wordleList,
  allWords,
  firstTenWords,
  nextTenWords,
  firstXWords,
  subsetOfWords,
  sortWords,
};
