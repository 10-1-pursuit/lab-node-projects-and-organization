const data = require('./words.json');
// console.log(data)

function allWords() {
    let words = data
    console.log("hi", words)
}
allWords()

function firstTenWords() {

    const firstTen = data.slice(0, 10)
    console.log(firstTen)
}
firstTenWords()

function nextTenWords() {
    const nxtTen = data.slice(10, 20)
    console.log(nxtTen)
}

nextTenWords()

// function firstXWords(){
// const g= []
//     // for( x=0; x<data.length-12790;x++)
//     for(let x of data){
//   x = " "
//     }

function firstXWords(x = 300) {
    console.log(data.slice(0, x))
}
firstXWords()

function subsetOfWords(x = 1500, y = 2500) {
    console.log("ME", data.slice(x, y));
}
subsetOfWords()

function sortWords() {
    console.log(data.sort((a, b) => a.localeCompare(b)))
}
sortWords()

const wordsWithQ = () => data.filter(word => word.includes('q'));
const wordsWithQArr = wordsWithQ();
console.log("Words with 'q':", wordsWithQArr);
// console.log(wordsWithQ)
wordsWithQ()


const findWordsWithLetter = (letter) => data.filter((word) => word.includes(letter));
//finds words depending on letter-input change using process.argv
const letter = process.argv[2] || "";
console.log(`Words with '${letter}':`, findWordsWithLetter(letter));


findWordsWithLetter()
/**
//  * 
//  * @param {*} letters 
// //  * @returns 
// //  */
// function lettersMatch(letters) {
//     const lowerCaseLetters = letters.map(letter => letter.toLowerCase());
//     //lc each letter
//     const wordMatch = data.filter((word) => {
//         const lowerCaseWord = word.toLowerCase();
//         console.log(lowerCaseLetters.every((letter) => lowerCaseWord.includes(letter)));
//         //is each lcl in word
//     });
//     return wordMatch;
// };
// lettersMatch()