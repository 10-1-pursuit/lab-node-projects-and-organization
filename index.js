const wordsJson = require("./words.json");

function allWords(words){
    for(let word of words){
        console.log(word);
    }
}

function firstTenWords(words){
    for(let index = 0; index < 10; index++){
        console.log(words[index]);
    }
}

function nextTenWords(words, position = 0){
    for(let index = position; index < position + 10; index ++){
        console.log(words[index]);
    }
}

function firstXWords(words, end = words.length){
    for(let index = 0; index < end; index++){
        console.log(words[index]);
    }
}

function subsetOfWords(words, start = 0, end = words.length){
    for(let index = start; index < end; index++){
        console.log(words[index]);
    }
}

function sortWords(words){
    console.log(words.sort());
}

function wordsWithQ(words){
    return words.filter(a => a.includes("q"));
}

function findWordsWithLetter(words, letter){
    return words.filter(a => a.includes(letter));
}

function lettersMatch(words, letters){
    let temp;
    for(let index = 0; index < letters.length; index++){
        console.log(letters[index]);
        if(letters[index] != "." || letters[index] != "_"){
            console.log("we are here!")
            temp = words.filter(a => a[index] == letters[index]);
            console.log(temp)
        }
    }

    return temp;
}

console.log(lettersMatch(wordsJson, "qophs"));

module.exports = {
    allWords,
    firstTenWords,
    nextTenWords,
    firstXWords,
    subsetOfWords,
    sortWords,
};