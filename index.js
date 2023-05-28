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

function firstXWords (xWord,xAmount) {
let word = []
for (let i = 0; i < xAmount; i++) {
 xWord.push(word[i]);
}
 return word
}
console.log(firstXWords(words))