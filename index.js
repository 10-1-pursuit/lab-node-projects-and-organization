const importedWordsJsonFile = require("./words.json");

//Below line let me check that the words were properly imported from the file.
//console.log(importedWordsJsonFile);


/*Write the following functions:
1) - `allWords` logs all the words.
2) - `firstTenWords` logs the first ten words.
3) - `nextTenWords` logs the next 10 words.
4) - `firstXWords` logs from 0 to x words.
5) - `subsetOfWords` logs from x to y words.
6) - `sortWords` logs all the words, sorted alphabetically.
*/

// 1) Function that logs all the words (`allWords` logs all the words)
function allWords(words){
    return(words);
}
allWords(importedWordsJsonFile);

// 2) Function that logs the first ten words (`firstTenWords` logs the first ten words)
function firstTenWords(words){
   const wordsTheFirstTen =  words.slice(0 ,10)
   return wordsTheFirstTen;
}
firstTenWords(importedWordsJsonFile);

// 3) Function that logs the the next ten words (`nextTenWords` logs the next 10 words)
function nextTenWords(words){
    const wordsTheNextTen = words.slice(11, 21)
    return wordsTheNextTen;
}
nextTenWords(importedWordsJsonFile);

// 4) Function that logs from 0 to x words (`firstXWords` logs from 0 to x words)
function firstXWords(words, x){
    const wordsFirstX = words.slice(0 , x)
    return wordsFirstX;
}
firstXWords(importedWordsJsonFile, 38);

// 5) Function that logs from x to y words (`subsetOfWords` logs from x to y words)
function subsetOfWords(words, x, y){
    const wordsTheSubset = words.slice(x, y)
    return wordsTheSubset;
}
subsetOfWords(importedWordsJsonFile, 359 , 500);

// 6) Function that logs all words sorted alphabeltically (`sortWords` logs all the words, sorted alphabetically)
function sortWords(words){
    const wordsSorted = words.toSorted()
    return wordsSorted;
}
sortWords(importedWordsJsonFile);