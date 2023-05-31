const words = require("./words.json");
console.log(words);


function allwords(){
    console.log(words);
}

function firstTendWords(){
    console.log(words.slice(0,10))
}


function nextTenWords(){
    console.log(words.slice(10,20))
}
 function firstXWords(x){
    console.log(words.slice(0,x))
 }

 function subsetOfWords(x,y){
    console.log(words.slice(x,y))
 }
   function sortWords(){
    console.log(words.sort())
   }
   function wordsWithQ(){
    const qwords = words.filter((word) =>
    word.includes("q"));
    return qwords;
   }
   function findWordsWithLetter(letter){
    const matchingwords =words.filter((word)=>
    words.includes(letter));
    return matchingwords;
   }
 allwords()
 firstTendWords()
 nextTenWords()
 firstXWords(20)
 subsetOfWords(10,30)
 sortWords()
 wordsWithQ()
 findWordsWithLetter('p')

 