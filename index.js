const importedJson = require("./words.json");


function allWords(importedJson) {
    console.log(importedJson);
}
allWords(importedJson);

function firstTenWords(importedJson) {
    for (let i = 0; i < 10; i++) {
        console.log(importedJson[i]);
    }
}
firstTenWords(importedJson);

function nextTenWords(importedJson) {
    for (let x = 10; x < 20; x++) {
        console.log(importedJson[x]);
    }
}
nextTenWords(importedJson);

function firstXWord(importedJson, x) { // x represents a number that specifices how many words you wanna extract form the beginning of the importedJson
    for (let i = 0; i < x; i++) {
        console.log(importedJson[i]);
    }
}
firstXWord(importedJson, 12);

function subsetOfWords(importedJson, x, y) { // x represents start, y represents end
    for (let i = x; i < y; i++) {
        console.log(importedJson[i]);
    }
}
subsetOfWords(importedJson, 7, 18);

function sortWords(importedJson) { // sorts in alphabetical order
    const sortedList = importedJson.sort()
    console.log(sortedList);
}
sortWords(importedJson);

function wordsWithQ(importedJson) {
    const filteredWordsWithQ = importedJson.filter(word => word.includes('q'));
    return filteredWordsWithQ; // filter method creates a new array that contains only the letter 'q'
}
wordsWithQ(importedJson);


function findWordsWithLetter(importedJson, letter) {
    return importedJson.filter(word => word.includes(letter));
} // filter creates a new array that only contains words that include a specific letter, includes checks if word is included in letter

function lettersMatch(importedJson, letters) {
    if (letters.length > 5) { // Checks if the length of letters is greater than 5
        return "letters must contain up to 5 letters"; // return this error message
    }

    let temp = importedJson; // if length is less than 5 then let temp = importedJson
    letters = letters.split(''); // split each string into an array of individual letters

    for (let i = 0; i < letters.length; i++) { // loop thourgh letter array
        if (letters[i] != "." || letters[i] != "_") { // if letter array does not equal to . or _ , "." and "+" are also placeholder that can represent any letter
            temp = findWordsWithLetter(temp, letters[i]); // Call the function passing temp inside and
        } // it returns the updated temp array, which contains words that match the letters
    }

    return temp;
}

function lettersExactMatch(importedJson, letters) {
    if (letters.length > 5) {
        return "letters must contain up to 5 letters";
    }

    let temp = importedJson;
    letters = letters.split('');

    for (let i = 0; i < letters.length; i++) { // the difference bettween the last function and this
        if (letters[i] != "." && letters[i] != "_") { // It needs to be an exactmatch so we use the and operator
            temp = findWordsWithLetter(temp, letters[i]);
        }
    }

    return temp;
}


console.log(wordsWithQ(importedJson));
console.log(findWordsWithLetter(importedJson, "aco"));
console.log(lettersMatch(importedJson, "ayc"));
console.log(lettersExactMatch(importedJson, "acroi"));