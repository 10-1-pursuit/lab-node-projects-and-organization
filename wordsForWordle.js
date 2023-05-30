const wordsJSON = require("./words.json");


// Write the following functions

// - `wordsWithQ` returns all the words that contain the letter q
const allWords = wordsJSON;

function wordsWithQ(allWords) {

    let wordsThatStartWithQ = [];

    for (let i = 0; i < allWords.length; i++) {
        if (allWords.charAt(i).toLowerCase() === "q") {
            wordsThatStartWithQ.push(i)
        }

    }
    return wordsThatStartWithQ;
}

console.log(wordsWithQ(allWords, process.argv[2]))


/*
// - `findWordsWithLetter` takes an argument `letter` and returns all the words with that matching letter
*/

// **Note:** When creating this functionality, it's okay to use just a sample set of 3-10 words. This step can make troubleshooting a bit easier. Be sure to test for the following scenarios:


// Instead of hard-coding the value for `findWordsWithLetter`, instead set it up so the user can input a letter from the terminal.

// The following would test the letter P with the `findWordsWithLetter` function:

// ```bash
// node index.js p
// ```


function findWordsWithLetter(allWords, letter) {

    let wordsWithScarletLetter = [];
    for (let i = 0; i < allWords.length; i++) {
        if (words(i).includes(letter)) {
            wordsWithScarletLetter.push(words[i]);
        }
    }
    return wordsWithScarletLetter;
}
console.log(findWordsWithLetter(allWords, letter, process.argv[2]))


/*
// - find a word with the matching letter
// - find a word with more than one of the matching letter
// - find a word with no matching letters
*/


// - Write a function `lettersMatch` that lets you input up to 5 letters in any order and returns the words that match the criteria (don't worry about solving for duplicate letters).
//   - `node index.js aeiou`
// - Write a function `letttersExactMatch` that lets you input a five-character string. Put letters with the exact placement in their place, and put a placeholder like `.` or `_` for unknown letters.
// - `node index.js exactly a_ie_`
// - Update the function `lettersMatch` to handle duplicate letters
// - Create a new function that can handle both inputs
//   - One input for matched letters in the wrong position
//   - The second input for matched letters in the correct position
//   - `node index.js al__a o`


function lettersMatch(allWords, letters) {
    let lettersSplit = letters.split("");
    let wordsForWordle = allWords

    if (lettersSplit.length >= 5) {
        return "input up to 5 letters";
    }

    for (let i = 0; i < lettersSplit.length; i++) {
        if (lettersSplit[i] != "." || lettersSplit[i] != "") {
            wordsForWordle = findWordsWithLetter(wordsForWordle, lettersSplit[i])
        }
    }

    return wordsForWordle;
}

function lettersExactMatch(allWords, letters) {
    let lettersSplit = letters.split("");
    let wordsForWordle = allWords

    if (lettersSplit.length >= 5) {
        return "input up to 5 letters";
    }

    for (let i = 0; i < lettersSplit.length; i++) {
        if (lettersSplit[i] != "." && lettersSplit[i] != "") {
            wordsForWordle = findWordsWithLetter(wordsForWordle, lettersSplit[i])
        }
    }

    return wordsForWordle;
}