const words = require('./words.json')

function smallWords(words){
    const wordFun = [];
    for (let i = 0; i < words.length; i++) {
      wordFun.push(words[i])  
    }
    return wordFun
}  
//console.log(smallWords(words));

function firstTenWords(word) {
     let firstTen = []
     for (let i = 0;  i< 10; i++){
       firstTen.push(word[i])
}
 return firstTen
}
        //return word.split(/\s+/).slice(0,10).join(" ");
// }
// let fullTen = "We can get first 10 words form this string using the above function";
// let finalTen = firstTenWords(fullTen);

function lastTenWords(word) {
    let lastTen = []
     for (let i = 10; i < 20; i++) {
        lastTen.push(word[i])
     }
     return lastTen
}

function firstXWords (words,y) {
let word = []
for (let i = 0; i < y; i++) {
 word.push(words[i]);
   }
 return word
}
 
function subsetOfWords(words, x, y) {
    let subset = [];
    for (let i = x; i < y; i++) {
        subset.push(words[i]);
    }
    return subset;
}
//console.log(subsetOfWords(words,7,18))

 function sortWords(words){
    const sortedList = words.sort()
        console.log(sortedList);
 }
 sortWords(words)

 function wordsWithQ(words){
    const filteredWordsWithQ = words.filter(word => words.include('q'));
    return filteredWordsWithQ;
 }
 wordsWithQ(words)

 function wordsWithLetter(words,letter) {
    return words.filter(word => word.includes(letter));
 }

 function lettersMatch( words,letters) {
    if(letters.length > 5){
        return "letters must contain up to 5 letters";
    }
    let char = words;
    letters = letters.split(");

    for (let i = 0; i < letters.length; i++) {
        if (let
    }
 }