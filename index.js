const myImportedModule = require("./lab-node-projects-and-organization/words.json")

function allWords(words) {

    return words;
}

function firstTenWords(words) {

    return newArr = words.slice(0, 10)

}

function nextTenWords(words) {

    return newArr = words.slice(10, 20)
}

function firstXWords(words, x) {


    return newArr = words.slice(0, x);

}

function subsetOfWords(words, x, y) {

    return newArr = words.slice(x, y)
}

function sortWords(words) {

    return words.sort()
}
/*-----------------------------------------------------------------------------------------------------------------------------*/

function wordsWithQ(words) {

    //return arrOfQ = words.forEach(element => element === 'q');


    //return words.includes("q")


    // const result = words.filter(checkAdult);

    // function checkAdult(wordsWithQ) {
    //   return wordsWithQ === "q";
    //}

    return result = words.filter("q");


}


function findWordsWithLetter(letter) { }



//console.log(allWords(myImportedModule))
//console.log(firstTenWords(myImportedModule))
//console.log(nextTenWords(myImportedModule))
//console.log(firstXWords(myImportedModule))
//console.log(subsetOfWords(myImportedModule))
//console.log(sortWords(myImportedModule))
//console.log(wordsWithQ(myImportedModule))
