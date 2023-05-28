const data = require("./words.json");
const words = data;


// console.log(`"${data[1]}"`)


// allWords logs all the words.
const allWords = () => {
    console.log(words)
};

// allWords();

// firstTenWords logs the first ten words.
const firstTenWords = () => {
    console.log(words.slice(0,10))
};
// firstTenWords();

const nextTenWords = () => {
    console.log(words.slice(10, 20));
};
// nextTenWords();

// firstXWords logs from 0 to x words.
const firstXWords = (x) => {
    console.log(words.slice(0, x));
};
// firstXWords(21)

 // subsetOfWords logs from x to y words.
 const subsetOfWords = (x, y) => {
    console.log(words.slice(x, y))
 }
//  subsetOfWords(2, 19);

// sortWords logs all the words, sorted alphabetically.
const sortWords = () => {
    console.log(words.slice().sort())
}
// sortWords();

