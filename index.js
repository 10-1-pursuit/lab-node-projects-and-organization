
const importedWords = require("./words.json");

console.log(importedWords);

function allWords(){


const allWords = () => {

console.log(importedWords);

  }
  allWords();
}

function firstTenWords() {
const firstTen = importedWords.slice(0, 10);
return firstTen;
}
console.log(firstTenWords());

function nextTenWords(){

const nextTenWords = importedWords.slice(10,20);
return nextTenWords;

}
console.log(nextTenWords());

function firstXWords(x){

const xWords = importedWords.slice(0,x);

return xWords;

}

console.log(firstXWords(8));

function subsetOfWords(x,y){

const subsetWords = importedWords.slice(x,y); 
return subsetWords;
}

console.log(subsetOfWords(3, 6));

function sortWords(){
const sortedWords = importedWords.sort();
return sortedWords;
}
console.log(sortWords());

function wordsWithQ() {
const arr = [];
  for(let i = 0; i < importedWords.length; i++){
    
  if(importedWords[i].includes('q')){
        // console.log(words[i]);
    arr.push(importedWords[i])
    }
  } 
//   console.log(arr);
  return arr;
};
console.log(wordsWithQ());


function findWordsWithLetter() {
 const arr = [];
 for(let i = 0; i < importedWords.length; i++){
 if(importedWords[i].includes('x')){
            arr.push(importedWords[i])
        }
    }
    return arr;
}
console.log(findWordsWithLetter());
const letterToFind = process.argv[2];

console.log(findWordsWithLetter(letterToFind));

// function firstTenWords(){
// const first = words.slice(0,10);
// return first;

// };
// console.log(firstTenWords());// function firstTenWords(){

// for(let i = 0; i <= 10; i++){
//         console.log(i);
// 
    


   
  


// const importedWords = require('./words.json');

// console.log(importedWords);

// function allWords(){

// // const newWord = importedWords
// console.log("1", allWords);

// }

// allWords();

// function firstTenWords(){

//     for(let i = 0; i <= 10; i++ ){
//         console.log(i);
//     };
//     function firstTenWords(){
//     const firstTen = words.slice(0,10);
//     return firstTen;

//     }
//     console.log(firstTenWords());
    
// }

// function nextTenWords(){

//     const nextTen = words.slice(10,20);
//     return nextTen;
// }
// function firstXWords = (x) => {
//     return words.slice(0,x)
// }
// console.log(firstXWords(12));

// const subsetOfWords = (x,y) => words.slice(x,y);

// console.log(subsetOfWords(2,5));

// const sortWords = () => {
//     console.log(words.sort())
// }

// console.log(sortWords());

// const wordsWithQ = () => {
// const result = [];
//   for(let i = 0; i < words.length; i++){
    
//     if(words[i].includes('q')){
//         // console.log(words[i]);
//         result.push(words[i])
//     }
//   }  
//   console.log(result);
//   return result;
// };

// console.log(wordsWithQ());

// // const wordsWithQ = () => words.filter((w) => w.includes('q'));
// // console.log(wordsWithQ())

// const findWordsLetter = (x) => {
//     const result = [];
//     for(let i = 0; i < words.length; i++){
//         if(words[i].includes(x)){
//             result.push(words[i])
//         }
//     }
//     return result;
// }

// const letterToFind = process.argv[2];

// console.log(findWordsWithLetter(letterToFind));

// const lettersMatch = (LettersToMatch) => {
// // go through the full list of words

// for(let i = 0; i < words.length; i++){


// // check whether ANY of the letters in lettersToMatch exists 
// //in each word

// //
// //
// const individualLetters = LettersToMatch.split('');
// console.log(individualLetters);


// // now I have an array, with each letter that I need to lood at.
// for(let j =0; j < LettersToMatch; j++){
//     const currentLetter = LettersToMatch[j];
//     if(currentWord.includes(currentLetter)){
//         result.push(currentWord)
//         // i need to stop this inner loop as soon as One letter matches
//         // so i don't accidentally add the word twice.
//         break;
//     }
// }

// // if so, add that word to my results
// // else, ignore it;
// }
// };
// console.log(findWordsWithLetter(letterToFind))


// const lettersExactMatch = () => {
// let result = [];

// for(let i = 0; i < words.length; i++){

//     const currentWord = words[i];
// // i need to look at the position of each letter in letters
// // to match
// // and check if  the letter at that same position in the current 
// // word
// // is the same

// // aeiou
// // beady
// // does a match b? no
// // does e match e? yes. include it.
// // aeiou
// // gamma
// // does a match g? no.
// // does e match a?no.
// // 

// let string = '';
// for(let j = 0; j < currentWord.length; j++){
//     let letterOfCurrentWord = currentWord[j];
//     let letterToTest = LettersToMatch[j];
//     if(letterToTest === letterOfCurrentWord){

//         string += letterOfCurrentWord;
//     } else {
//         string += '.';
//     }
// }
// result.push(string);

// }
// return result;
// }

// console.log(lettersMatch(letterToFind));