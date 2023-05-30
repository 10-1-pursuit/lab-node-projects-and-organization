const words = require("./words.json")



//A function `allWords` logs all the words


const allWords = (words) => {            // I origonally wrote these a tradional constructor function. But i wanted to export them so i destructred them.
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
const firstXWords = (words, num) => {          // a destructerd function. Now, As a variable, I can export for later us.
    const subsetOfstrings = []
    for (let i = 0; i < num; i++) {
         
         subsetOfstrings.push(words[i]) 
        
        };
        return subsetOfstrings
};

// `subsetOfWords` logs from x to y words.

const subsetOfWords = (words, lowest, highest) => {
   const subset = []
    for (let i = lowest; i <= highest; i++) {
     
       // console.log(words[i])
        subset.push(words[i])
    };
    return subset
};
//console.log(subsetOfWords(words))
//`sortWords` logs all the words, sorted alphabetically.

const sortWords = (words) => {
   //n console.log(sortedList)
    return words.slice().sort()
};
//console.log(firstXWords(words, process.argv[2]))

//console.log(firstXWords(words, process.argv[2]))  // the value entered must be a number.
//console.log(sortWords(words))
//console.log(words)












module.exports = { sortWords, firstTenWords, allWords, firstXWords };    // module is a keyword and exports a method called on objects (kinda)



