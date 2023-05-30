const myWordleLab = require("./words.json");

console.log(myWordleLab)

// Function to log all the words
const allWords = (words) => {
    console.log(words);
};

// Funciton to log the FIRST 🔟 words
const firstTenWords = (words) => {
    console.log(words.slice(0, 10));
}; // extract portion of an array, index 0 - index 10 which reps the first 🔟 words in the array

// Function to log the NEXT 🔟 words
const nextTenWords = (words) => {
    console.log(words.slice(10, 20));
}; // same as above now extracting the following 🔟 words in the array

// Function to log from 0 - x words
const firstXWords = (words, x) => {
    console.log(words.slice(0, x));
};

// Function to log from x to y words 
const subsetOfWords = (words, x, y) => {
    console.log(words.slice(x, y));
}; // extracts elements from 'x' up to not incliding 'y'.

// Function to log all the words, sorted alphabetically 🔤
const sortWords = (words) => {
    console.log(words.sort());
}; // sort the elements of the 'words' array in ascending 🔼 order based on their strong values.

// Write a function that `wordsWithQ` returns all the words that contain the letter q
const wordsWithQ = (words) => {
    return words.filter(word => word.includes('q'));
};

/* // Test passed! 🥷🏽
const wordList = [
"women",
"nikau",
"swack",
"feens",
"fyles",
"poled",
"clags",
"starn",
"bindi",
"woops",
"fanos",
"cabin",
"souct",
"trass",
"shoat",
"lefty",
"durra",
"hypes",
"junta",
"baisa"]
console.log(wordsWithQ(wordList)); 
*/ // Test passed! 🥷🏽

/* Function that `findWordsWithLetter` takes an 🗣️ argument `letter` 🔤 and returns ⮐ all 
the words with that matching letter 🔤
*/
const findWordsWithLetter = (words, letter) => {
    return words.filter(word => word.includes(letter));
}

// Must be able to allow user to input letter from the terminal
const letter = process.argv[2];
// This property is used to retrieve 🪃 the command-line arguments provided when running the script.

const wordList = ["women",
    "nikau",
    "swack",
    "feens",
    "fyles",
    "poled",
    "clags",
    "starn",
    "bindi",
    "woops",
    "fanos",
    "cabin",
    "souct",
    "trass",
    "shoat",
    "lefty",
    "durra",
    "hypes",
    "junta",
    "baisa"]

//Call 🤙🏽 the findWordsWithLetter funciton w/ user input & log the result ✨
console.log(findWordsWithLetter(wordList, letter));

// IT PASSED! 🫡