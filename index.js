const words = require("./words.json")



//A function `allWords` logs all the words


const allWords = (words) => {
     console.log(words)
     return words
};
//console.log(allWords(words))
//`firstTenWords` logs the first ten words.

const firstTenWords = (words) => {
    let tenWords = []
    for (let i = 0; i < 10; i++) {
      tenWords.push(words[i])
    };
    return tenWords
};

//console.log(firstTenWords(words))

//`nextTenWords` logs the next 10 words.

const nextTenWords = (words) => {
    for (let i = 10; i < 20; i++) {

    //    console.log(nextTenWords)
        return words[i]

    };
};

// `firstXWords` logs from 0 to x words.

const firstXWords = (words, num) => {
    for (let i = 0; i < num; i++) {

    //    console.log(firstXWords)
        return console.log(words[i])
    };
};

// `subsetOfWords` logs from x to y words.

const subsetOfWords = (words, lowest, highest) => {
    for (let i = lowest; i < highest; i++) {
     
     //   console.log(words[i])
        return words[i]
    };
};
//console.log(subsetOfWords(words))
//`sortWords` logs all the words, sorted alphabetically.

const sortWords = (words) => {
   //n console.log(sortedList)
    return words.slice().sort()
};
console.log(firstTenWords(words))













module.exports = { sortWords, firstTenWords, allWords };



