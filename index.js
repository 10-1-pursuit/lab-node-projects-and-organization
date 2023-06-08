const words = require("./words.json")

// Write the following functions:

// - `allWords` logs all the words.
function allWords(words) {
    console.log(words);
};

// - `firstTenWords` logs the first ten words.
function firstTenWords(words) {
    console.log(words.slice(0, 10));
}
// - `nextTenWords` logs the next 10 words.
function nextTenWords(words) {
    console.log(words.slice(10, 20));
}
// - `firstXWords` logs from 0 to x words.
function firstXWords(words, num) {
    console.log(words.slice(0, num));
}
// - `subsetOfWords` logs from x to y words.
function subsetOfWords(words, num1, num2) {
    console.log(words.slice(num1, num2));
}
// - `sortWords` logs all the words, sorted alphabetically.
function sortWords(words) {
    console.log(words.sort());
}

// Write the following functions
// - `wordsWithQ` returns all the words that contain the letter q
function wordsWithQ(words) {
    return words.filter(word => word.includes('q')).sort();
}

// - `findWordsWithLetter` takes an argument `letter` and returns all the words with that matching letter
function findWordsWithLetter(words, letter) {
    return words.filter(word => word.includes(letter)).sort();
}
const letter = process.argv[2];

// - Write a function `lettersMatch` that lets you input up to 5 letters in any order and returns the words that match the criteria (don't worry about solving for duplicate letters).
//     - `node index.js aeiou`
function lettersMatch(words, fiveLetterStr) {
    const letters = Array.from(fiveLetterStr)
    return words.filter(word => word.includes(letters[0]) && word.includes(letters[1]) && word.includes(letters[2]) && word.includes(letters[3]) && word.includes(letters[4])).sort();
}
const fiveLetterStr = process.argv[2]

// - Write a function `lettersExactMatch` that lets you input a five - character string. Put letters with the exact placement in their place, and put a placeholder like `.` or `_` for unknown letters.
// - `node index.js exactly a_ie_`
function lettersExactMatch(words, fiveCharStr) {
    const letters = Array.from(fiveCharStr);

    return words.filter((word) => {
        for (let i = 0; i < letters.length; i++) {
            const char = letters[i];
            if (char !== '_' && char !== '.' && word[i] !== char) {
                return false;
            }
        }
        return true;
    });
}
const fiveCharStr = process.argv[2]


// - Update the function `lettersMatch` to handle duplicate letters


// - Create a new function that can handle both inputs
//  - One input for matched letters in the wrong position
//  - The second input for matched letters in the correct position
//  - `node index.js al__a o`
function lettersExactMatchAndNonExactMatch(words, fiveCharStr, positionChar) {
    const positionMatch = lettersExactMatch(words, fiveCharStr)
    const result = findWordsWithLetter(positionMatch, positionChar)
    return result
}
const positionChar = process.argv[3];

console.log(lettersExactMatchAndNonExactMatch(words, fiveCharStr, positionChar))
