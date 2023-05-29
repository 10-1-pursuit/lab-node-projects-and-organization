const words = require('./words.json');

const allWords = (words => words);

const firstTenWords = (words) => words.slice(0, 10);

const nextTenWords = (words) => words.slice(10, 20);

const firstXWords = (words) => {words.slice(0,...words);
const firstTen = words.slice(0, 10);
const remainder = words.slice(10)
return [firstTen, remainder,...words];
}


const subsetOfWords = (words, x, y) => {return words.slice(x, y)};



const sortWords = (words) => words.sort();



// function wordsWithQ(words) {
//     let qWords = [];

//     for (let word of words) {
//         let splitWord = word.split("");

//         for (let i = 0; i <= splitWord.length; i++) {
//             if(splitWord[i] == "q") {
//                 qWords.push(word);
//             }
//         }
//     }
//     return qWords
// }



function findWordsWithLetter(words) {
    const foundWordsByLetter = [];
    for (const word of words) {
        const splitWord = word.split("");
        for (let i = 0; i < splitWord.length; i++) {
            if (splitWord[i] == process.argv[2]) {
               foundWordsByLetter.push(word) 
            }
        }
        }
        return foundWordsByLetter
    }
        
    



// console.log(allWords()); 
// console.log(firstTenWords(words)); 
// console.log(nextTenWords(words));
// console.log(firstXWords(words)); /*returns words from 0 index to user determined ending index.*/
// console.log(subsetOfWords(words, 21, 45)); /*returns user determined indices eg. 21, 45 givers all words from 21st index to the 44th.*/
// console.log(sortWords(words)) /*alphabetically*/
// console.log(wordsWithQ(words)); /* filters out all words that have a q in the body*/
console.log(findWordsWithLetter(words)) /* filters out all words that have a given "letter" in the body*/