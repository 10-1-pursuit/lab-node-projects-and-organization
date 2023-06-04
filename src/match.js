const wordsJson = require("../data/words.json");

const {
    wordsWithQ,
    findWordsWithLetter,
} = require("../src/find.js");

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
    let duplicateW = false;
    let countL = {};

    for(let index = 0; index < letters.length; index++){
        if(!countL[letters[index]]){
            countL[letters[index]] = 0;
        }
        countL[letters[index]]++;
        if(countL[letters[index]] > 1){
            duplicateW = true;
        }
    
    }

    if(duplicateW == false){
        for(let index = 0; index < letters.length; index++){
            if(letters[index] != "." || letters[index] != "_"){
                temp = findWordsWithLetter(temp, letters[index]);
            }
        }
    }
    else{
        for(let char in countL){
            if(countL[char] == 1){
                temp = findWordsWithLetter(temp, char);
            }
            else{
                /** .filter() starts here */
                temp = temp.filter(a => {
                    let count = 0;
                    let b = a.split('');
                    for(let i = 0; i < b.length; i++){
                        if (b[i] == char){
                            count++;
                        }
                    }
                    if(count >= countL[char]){
                        return a;
                    }
                });
                /** .filter() end */
            }
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
            temp = temp.filter(a => a[index] == letters[index]);
        }

    }

    return temp;
}

module.exports = {
    lettersMatch,
    lettersExactMatch,
}