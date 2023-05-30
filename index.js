const data = require('./words.json')

/**
 * Returns an array of all the words.
 * @param {String} data- A string.
 * @returns {string[]} logs all the words.*/

function allWords(data){
    data.forEach((word) => { 
        console.log(word)
    });
}
    allWords(data);

/**
 * Returns an array of the first ten words. 
 * @param {String} data- A string.
 * @returns {string[]} logs the first ten words.*/



function firstTenWords(data){
    const firstTen = data.slice(0,10);
    firstTen.forEach((word) => {
        console.log(word);
    });
}
firstTenWords(data); 

/**
* Returns an array of the next 10 words.. 
* @param {String} data- A string.
* @returns {string[]}  logs the next 10 words.*/

function nextTenWords(data){
const nextTen = data.slice(10,20);
nextTen.forEach((wordNext) => {
    console.log(wordNext); 
});
}
nextTenWords(data); 


/**
* Returns an array of logs from 0 to x words
* @param {String} data - A string.
* @param {String} xWords - A string. 
* @returns {string[]}  logs from 0 to x words.*/


function firstXWords(data,xWords){
    const  firstX = data.slice(0, xWords);
    firstX.forEach((xWord)=> {
        console.log(xWord);
     });
}
firstXWords(data,2);


/**
* Returns an array of logs from x to y words.
* @param {String} data - A string.
* @param {String} x - A string.
 * @param {String} y - A string.
* @returns {string[]}  logs from x to y words.*/


function subsetOfWords(data, x, y){}

  





/**
* Returns an array from logs all the words, sorted alphabetically.
* @param {String} data - A string.
* @returns {string[]}  logs all the words, sorted alphabetically.*/


function sortWords(data){  
const subsetList = data.sort()
    console.log(subsetList);
}
sortWords(data);






/**
* Returns an array from the words that contain the letter q.
* @param {String} data - A string.
* @returns {string[]} returns all the words that contain the letter q*/
 

function wordsWithQ(data){
 return data.filter(word => word.includes('q'));
}
console.log(wordsWithQ(data));


/**
* Returns an array from the words that takes an argument `letter` and returns all the words with that matching letter
* @param {String} data - A string.
* @returns {string[]} returns all the words with that matching letter */



function findWordsWithLetter(data){}


module.exports = {
allWords,
firstTenWords,
nextTenWords,
firstXWords,
sortWords };
   