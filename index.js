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

