

const importedWords = require("./words.json")

function allWords (wordsArray){
    console.log(wordsArray);
};
allWords(importedWords);

function firstTenWords (wordsArr){
     for (let i = 0; i <= wordsArr.length; i++){
        if (i <= 9){
            console.log(wordsArr[i]);
        };
     };
};
firstTenWords (importedWords);


function nextTenWords (wordsArr){
    for (let i = 0; i <= wordsArr.length; i++){
       if (i >= 10 && i <= 19){
           console.log(wordsArr[i]);
       };
    };
};
nextTenWords (importedWords);

function firstXWords (words, num){
    for (let i = 0; i <= words.length; i++){
        if (i < num){
            console.log(words[i]);
        };
    };
};
firstXWords (importedWords, 5);

function subsetOfWords (words, num1, num2){
    for (let i = 0; i <= words.length; i++){
        if (i > num1 && i <= num2){
            console.log(words[i])
        };
    };
};
subsetOfWords (importedWords, 5, 12);

function sortWords (words){
    console.log(words.toSorted())

}
sortWords(importedWords);



// Write the following functions

// - `wordsWithQ` returns all the words that contain the letter q
// - `findWordsWithLetter` takes an argument `letter` and returns all the words with that matching letter

// **Note:** When creating this functionality, it's okay to use just a sample set of 3-10 words. This step can make troubleshooting a bit easier. Be sure to test for the following scenarios:

// - find a word with the matching letter
// - find a word with more than one of the matching letter
// - find a word with no matching letters

function wordsWithQ(words, letterQ){
    const result = words.filter(word => word.match(letterQ));
    console.log(result)
    return result;
};

// function wordsWithQ (words, letterQ){
//     for (const word of words) {
//         if (word.match(letterQ)){
//             console.log(word)
//             return word
//         };
//     };
// };
wordsWithQ (importedWords, 'q');

function findWordsWithLetter (words, letter){
    const result = words.filter(word => word.match(letter));
    console.log(result)
    return result;
};
findWordsWithLetter(importedWords,'l');