const words = require('./words.json');
// console.log(words)

function allWords(){
const wordList = words.join(', ');
    return wordList;
}
//console.log(allWords())

function firstTenWords(){
    return words.slice(0,10).join(', ');
}
// console.log(firstTenWords())

function nextTenWords(){
    return words.slice(10,20).join(', ');
}
// console.log(nextTenWords())

function firstXWords(x){
   console.log(words.slice(0,x).join(', '));
}
//firstXWords(10)

function subsetOfWords(x,y){
    console.log(words.slice(x,y).join(', '));
}
// subsetOfWords(5,10)

function sortWords(){
    return words.sort().join(', ')
}
//console.log(sortWords())

function wordsWithQ(){
   const letterQWords = words.filter((string) => string.includes('q'));
    return letterQWords;
}
// console.log(wordsWithQ())

function findWordsWithLetter(letter){
    const wordWithLetter = words.filter((word) => word.includes(letter));
    const letter = process.argv[2] || "";
    console.log(`Words with '${letter}':`, findWordsWithLetter(letter));
    findWordsWithLetter


}
console.log(findWordsWithLetter())