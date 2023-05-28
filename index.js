const words = require('./words.json')

function smallWords(words){
    const wordFun = [];
    for (let i = 0; i < words.length; i++) {
      wordFun.push(words[i])  
    }
    return wordFun
}  
console.log(smallWords(words));

function firstTenWords(word) {
     const firstTen = []
     for (let i = 0;  i<word.length;
        //return word.split(/\s+/).slice(0,10).join(" ");
// }
// let fullTen = "We can get first 10 words form this string using the above function";
// let finalTen = firstTenWords(fullTen);

// console.log(finalTen);