const myImportedModule = require("./words.json")

// console.log(myImportedModule)

const everyWord = require("./words.json");



function allWords() {
    return everyWord;
}

console.log(allWords());




    


function firstTenWords() {
  return everyWord.slice(0, 10);
  
}  

console.log(firstTenWords())

  





function nextTenWords(words) {
    return everyWord.slice(10, 20);
}

console.log(nextTenWords())





function firstXWords(x) {
  return everyWord.slice(0, x);
}

firstXWords();



function subsetOfWords(x, y) {

}
