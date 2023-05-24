 const words = require("./words.json")



 //A function `allWords` logs all the words.

function allWords(words) {
    console.log(words)
}

//`firstTenWords` logs the first ten words.

function firstTenWords(words) {
    for (let i = 0; i < 10; i++) {
        console.log(words[i])
    };
};

//`nextTenWords` logs the next 10 words.

function nextTenWords(words) {
    for(let i = 10; i < 20; i++) {
        console.log(words[i])
    };
};

// `firstXWords` logs from 0 to x words.

function firstXWords(words, num) {
    for(let i = 0; i < num; i++) {
        console.log(words[i])
    };
};

// `subsetOfWords` logs from x to y words.

function subsetOfWords(words, lowest, highest) {
    for (let i = lowest; i < highest; i++) {
        console.log(words[i])
    };
};

//`sortWords` logs all the words, sorted alphabetically.

function sortWords(words){
    const sortedList = words.slice().sort()
    console.log(sortedList)
}

