const data = require("./words.json");
const words = data;


// console.log(`"${data[1]}"`)


 // Simple functions

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
//  subsetOfWords(4,9);

// sortWords logs all the words, sorted alphabetically.
const sortWords = () => {
    console.log(words.slice().sort())
}
// sortWords();

// end of simple functions

// wordle solver functions

// wordsWithQ returns all the words that contain the letter q

const wordsWithQ = () => {
    console.log(words.slice().filter(word => word.includes("q")))
}

// wordsWithQ();

// findWordsWithLetter takes an argument letter and returns all the words with that matching letter

const findWordsWithLetter = () => {
    const letter = process.argv[2];
    if (!letter) {
        console.log('please provide a letter as an argument');
        return;
    }
const lowercaseLetter = letter.toLowerCase(); 
console.log(words.slice().filter(word => word.toLowerCase().includes(lowercaseLetter)));
//  console.log(words.slice().filter(word => word.includes(letter)))
}
findWordsWithLetter();

// end of wordle solver functions

