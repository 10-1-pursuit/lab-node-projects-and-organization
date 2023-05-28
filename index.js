

const wordsJSON = require("./words.json");


// - `allWords` logs all the words.
// - `firstTenWords` logs the first ten words.
// - `nextTenWords` logs the next 10 words.
// - `firstXWords` logs from 0 to x words.
// - `subsetOfWords` logs from x to y words.
// - `sortWords` logs all the words, sorted alphabetically.

// Write the following functions

// - `wordsWithQ` returns all the words that contain the letter q
// - `findWordsWithLetter` takes an argument `letter` and returns all the words with that matching letter

// **Note:** When creating this functionality, it's okay to use just a sample set of 3-10 words. This step can make troubleshooting a bit easier. Be sure to test for the following scenarios:

// - find a word with the matching letter
// - find a word with more than one of the matching letter
// - find a word with no matching letters

// Instead of hard-coding the value for `findWordsWithLetter`, instead set it up so the user can input a letter from the terminal.

// The following would test the letter P with the `findWordsWithLetter` function:

// ```bash
// node index.js p
// ```

// - Write a function `lettersMatch` that lets you input up to 5 letters in any order and returns the words that match the criteria (don't worry about solving for duplicate letters).
//   - `node index.js aeiou`
// - Write a function `letttersExactMatch` that lets you input a five-character string. Put letters with the exact placement in their place, and put a placeholder like `.` or `_` for unknown letters.
// - `node index.js exactly a_ie_`
// - Update the function `lettersMatch` to handle duplicate letters
// - Create a new function that can handle both inputs
//   - One input for matched letters in the wrong position
//   - The second input for matched letters in the correct position
//   - `node index.js al__a o`



let allWords = wordsJSON;
function consoleAllWords(wordsJSON) {

    return allWords;

}

function consoleTenWords(allWords) {

    let getTenWords = [];

    for (let i = 0; i < 10; i++) {
        // const getTenWords = allWords.some((onlyTen) => onlyTen.length === 10)
        getTenWords.push(allWords[i])
    }
    return getTenWords;
}

// - `nextTenWords` logs the next 10 words.

function consoleNextTen(allWords) {

    let nextTenWords = [];

    for (let i = 10; i < 20; i++) {
        // const getTenWords = allWords.some((onlyTen) => onlyTen.length === 10)
        nextTenWords.push(allWords[i])
    }
    return nextTenWords;
}

// - `firstXWords` logs from 0 to x words.

function firstXWords(xWords, xAmount) {

    for (let i = 0; i < xAmount; i++) {

    }
    return xWords;
}

function subsetOfWords(allWords, xSubset, ySubset) {

    let subset = [];

    for (let i = xSubset; i < ySubset; i++) {
        subset.push(allWords[i])
    }
    return subset;
}

console.log(subsetOfWords(allWords, process.argv[2], process.argv[3]))