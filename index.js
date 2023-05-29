const myImportedModule = require("./words.json")

// console.log(myImportedModule)

const everyWord = require("./words.json");


// allWords` logs all the words.

function allWords() {
    return everyWord;
}

console.log(allWords());




    // `firstTenWords` logs the first ten words.


function firstTenWords() {
  return everyWord.slice(0, 10);
  
}  

console.log(firstTenWords())

  

// nextTenWords` logs the next 10 words



function nextTenWords(words) {
    return everyWord.slice(10, 20);
}

console.log(nextTenWords())



// firstXWords` logs from 0 to x words.



function firstXWords(everyWord,x) {
  for (let i = 0; i < x; i++){
    console.log(everyWord[i])
  }
}

firstXWords(everyWord, 8);



function subsetOfWords(everyWord,x, y) {
   for (let i = x; i < y; i++){
        console.log(everyWord[i]);
          
  }
}
 
subsetOfWords(everyWord,62,70);

 

// `sortWords` logs all the words, sorted alphabetically.


function sortWordsByAlphabetically(){
    return everyWord.sort();
 }

 console.log(sortWordsByAlphabetically());

 

 function wordsWithQ(){
    return everyWord.filter((word) => word.includes("q"));
 }

 console.log(wordsWithQ());