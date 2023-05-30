

const wordsJSON = require("./words.json");


// - `allWords` logs all the words.
// - `firstTenWords` logs the first ten words.
// - `nextTenWords` logs the next 10 words.
// - `firstXWords` logs from 0 to x words.
// - `subsetOfWords` logs from x to y words.
// - `sortWords` logs all the words, sorted alphabetically.

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

function firstXWords(xWords, xAmountOf) {

    let xNumOfWords = [];
    for (let i = 0; i < xAmountOf; i++) {
        xNumOfWords.push(xWords[i])
    }
    return xNumOfWords;
}

function subsetOfWords(allWords, xSubset, ySubset) {

    let subset = [];

    for (let i = xSubset; i < ySubset; i++) {
        subset.push(allWords[i])
    }
    return subset;
}

console.log(subsetOfWords(allWords, process.argv[2], process.argv[3]))

function sortWords(allWords) {

    const wordsInABCOrder = allWords.sort((a, b) => {

        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;

        }
        if (a = b) {
            return 0;
        }
    })
    return wordsInABCOrder;
}

console.log(sortWords(allWords))