const wordsJson = require("./words.json");

/**
 * allWords()
 * -----------------------
 * Showing all the words in the data.
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 */
function allWords(words = wordsJson){
    for(let word of words){
        console.log(word);
    }
}

/**
 * firstTenWords()
 * -----------------------
 * showing first ten words (from index 0 to 9)
 * if the size of [words] less than 10, return -1 w/ error log.
 * 
 * @param {string[]} words - a data set for words, default value is JSON file, [wordsJson]
 */
function firstTenWords(words = wordsJson){
    /** validation for size of the data */
    if(words.length < 10){
        console.log("Our data set does have less than 10 words");
        return -1;
    }

    for(let index = 0; index < 10; index++){
        console.log(words[index]);
    }
}

/**
 * nextTenWords()
 * ------------------------
 * showing 10 words which begin w/ index [position]
 * 
 * @param {string[]} words - a data set for words, default value is JSON file, [wordsJson]
 * @param {number} position - a start position
 */
function nextTenWords(words = wordsJson, position = 0){
    /** validation for size of the data */
    if(words.length < 10){
        console.log("Our data set does have less than 10 words");
        return -1;
    }
    for(let index = position; index < position + 10; index ++){
        console.log(words[index]);
    }
}

/**
 * firstXWords()
 * ------------------------
 * showing words from index 0 to index [end]
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 * @param {number} end - an end position for words
 */
function firstXWords(words = wordsJson, end = words.length){
    if(end > words.length){
        console.log("Out of range");
        return -1;
    }
    for(let index = 0; index < end; index++){
        console.log(words[index]);
    }
}

/**
 * subsetOfWords()
 * ------------------------
 * showing words from index [start] to index [end]
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 * @param {number} start - the initial position for words 
 * @param {*} end - the end position for words
 */
function subsetOfWords(words = wordsJson, start = 0, end = words.length){
    /** validation */
    if(end > words.length || start >= words.length){
        console.log("Out of range");
        return -1;
    }

    if(start > end){
        console.log("the value of the start position must be less than the value of the end position");
        return -1;
    }

    for(let index = start; index < end; index++){
        console.log(words[index]);
    }
}

/**
 * sortWords()
 * -------------------------
 * showing all the words w/ alphabettical order
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 */
function sortWords(words = wordsJson){
    console.log(words.sort());
}

/**
 * wordsWithQ()
 * --------------------------
 * return words that contains "q"
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 * @returns {string[]} - filtering words that contain "q"
 */
function wordsWithQ(words = wordsJson){
    return words.filter(a => a.includes("q"));
}

/**
 * findWordsWithLetter()
 * ----------------------------
 * return words that contain a character [letter]
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 * @param {string} letter - a character to filter in 
 * @returns {string[]} - a filtered array of strings
 */
function findWordsWithLetter(words = wordsJson, letter){
    return words.filter(a => a.includes(letter));
}

/**
 * lettersMatch()
 * -----------------------------
 * return any words that contain [letters] in any order
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 * @param {string} letters - a string, up to 5 letters, to filter in [words] 
 * @returns {string[]} - a filtered array of strings
 */
function lettersMatch(words = wordsJson, letters){
    if(letters.length > 5){
        console.log("letters must contain up to 5 letters.");
        return -1;
    }

    let temp = words;
    letters = letters.split('');

    for(let index = 0; index < letters.length; index++){
        if(letters[index] != "." || letters[index] != "_"){
            temp = findWordsWithLetter(temp, letters[index]);
        }
    }

    return temp;
}

/**
 * lettersExactMatch()
 * --------------------------
 * filtering in the words that contain [letters] with exact same order.
 * [letters] should be up to 5 characters long, else it will return -1
 * 
 * @param {string[]} words - a dataset for words, deafult value is JSON file, [wordsJson] 
 * @param {string} letters - a string, up to 5 characters long 
 * @returns {string[]} - an array w/ filtered words.
 */
function lettersExactMatch(words = wordsJson, letters){
    /** validation */
    if(letters.length > 5){
        console.log("letters must contain up to 5 letters.");
        return -1;
    }

    let temp = words;
    letters = letters.split('');

    for(let index = 0; index < letters.length; index++){
        if(letters[index] != "." && letters[index] != "_"){
            console.log(`index : ${index} letters : ${letters[index]}`)
            temp = temp.filter(a => a[index] == letters[index]);
        }

    }

    return temp;
}

/**
 * main()
 * -----------------------------
 * main function to handle argv.
 */

function main(words = wordsJson){
    const argc = process.argv.length;

    switch(argc){
        case 3:
            lettersMatch(words, process.argv[2]);
            break;
        case 4:
            if(process.argv[2] == "exactly"){
                lettersExactMatch(words, process.argv[3]);
            }
            else{
                //TODO
                let tempStrArr = lettersMatch(words, process.argv[2]);
                tempStrArr = lettersExactMatch(tempStrArr, process.argv[3]);
            }
            break;
        default:
            console.log("hi")
            console.log(allWords());
    }

}

main(wordsJson);

module.exports = {
    allWords,
    firstTenWords,
    nextTenWords,
    firstXWords,
    subsetOfWords,
    sortWords,
    wordsWithQ,
    findWordsWithLetter,
};