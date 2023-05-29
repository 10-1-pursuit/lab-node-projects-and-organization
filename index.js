/**
 * import words array from words.json
 */

const words = require("./words.json");



/**
 * Function to log all words
 * @param {string[]} words - an array of words
 */
const allWords = (words) => console.log("0", words);
allWords(words);

/**
 * Function to log first 10 words
 * @param {string[]} words - an array of words
 */
const firstTenWords = (words) => console.log("1", words.slice(0, 10).join(", "));
firstTenWords(words);

/**
 * Function to log words 11-20
 * @param {string[]} words - An array of words
 */
const nextTenWords = (words) => {
    const nextTen = words.slice(10, 20).join(", ");
    console.log("2", nextTen);
  };
  nextTenWords(words);


/**
 * Function to log the first X(33) words in the words array
 * @param {string[]} words - an array of words
 * @returns {string} - the first X words joined as a string
 */
function firstXWords(words) {
    const firstThirtyThree = words.slice(0, 33).join(", ");
    console.log("3", firstThirtyThree);
    return firstThirtyThree;
  }
  firstXWords(words);

/**
 * Function to log a subset of words from words array
 * @returns {string[]} - A subset of words (6-25)
 */
const subsetOfWords = () => words.slice(5, 25);

const subset = subsetOfWords();
console.log("Subset of words:", subset);

/**
 * Function to sort words in alphabetical order
 * @param {string[]} words - An array of words
 * @returns {string[]} - Words sorted in alphabetical order
 */
const sortWords = (words) => words.sort((a, b) => a.localeCompare(b));
console.log("Sorted:", sortWords(words));

/**
 * Function to find words with the specified letter
 * @returns {string[]} - Words containing the letter 'q'
 */
const wordsWithQ = () => words.filter(word => word.includes('q'));

const wordsWithQArr = wordsWithQ();
console.log("Words with 'q':", wordsWithQArr);


/**
 *function to find words containing specified letter
 * @param {string} letter - the letter to search for
 * @returns {string[]} words containing specified letter
 */

const findWordsWithLetter = (letter) => words.filter((word) => word.includes(letter));

//finds words depending on letter-input change using process.argv
const letter = process.argv[2] || "";
console.log(`Words with '${letter}':`, findWordsWithLetter(letter));


/**
 * Function find words with specified letters
 * @param {string[]} letters - array of letters to search for
 * @returns {string} words containing all letters specified
 */
function lettersMatch(letters) {
        const lowerCaseLetters = letters.map(letter => letter.toLowerCase()); //lc each letter
        const wordMatch = words.filter((word) => {
        const lowerCaseWord = word.toLowerCase();
        return lowerCaseLetters.every((letter) => lowerCaseWord.includes(letter)); //is each lcl in word
        });
        return wordMatch;
};

/**
 * Function to find letters with exact placement match
 * @param {string} letters - a five-character string w/ w/o placeholders
 * @returns {string[]} - words with exact letter placement
 */
function letttersExactMatch(letters) {
    const lowerCaseLetters = letters.toLowerCase().split('');
    return words.filter((word) => {
        const lowerCaseWord = word.toLowerCase().split('');

        for (let i=0; i <5; i++) {
            if (lowerCaseLetters[i] !== '.' && lowerCaseLetters[i] !== '_') {
                return false;
            
            }
        }
        return true
    })
}

module.exports = {
  allWords,
  firstTenWords,
  nextTenWords,
  firstXWords,
  subsetOfWords,
  sortWords,
  wordsWithQ,
  findWordsWithLetter,
  lettersMatch,
  letttersExactMatch
};
