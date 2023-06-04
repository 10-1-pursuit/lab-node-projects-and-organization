const wordsJson = require("./data/words.json");

const {
    wordsWithQ,
    findWordsWithLetter,
} = require("./src/find.js");

const {
    allWords,
    firstTenWords,
    firstXWords,
    subsetOfWords,
    sortWords,
    nextTenWords,
} = require("./src/firstSix.js");

const {
    lettersMatch,
    lettersExactMatch,
} = require("./src/match.js");
/**
 * main()
 * -----------------------------
 * main function to handle argv.
 * 
 * 
 */

function main(){
    const argc = process.argv.length;
    const words = wordsJson;

    switch(argc){
        case 3:
            console.log(lettersMatch(words, process.argv[2]));
            break;
        case 4:
            if(process.argv[2] == "exactly"){
                console.log(lettersExactMatch(words, process.argv[3]));
            }
            else{
                let tempStrArr = lettersMatch(words, process.argv[3]);
                let tempStrArr2 = lettersExactMatch(tempStrArr, process.argv[2]);
                console.log(tempStrArr2);
            }
            break;
        default:
            console.log(`command should be:`);
            console.log(`node index.js [letters]`);
            console.log(`node index.js exactly [letters]`);
            console.log(`node index.js [letters in any position] [letters in the correct position]`);
            console.log(`*letters can be up to 5 characters long`);
    }

}

main();


module.exports = {
    allWords,
    firstTenWords,
    nextTenWords,
    firstXWords,
    subsetOfWords,
    sortWords,
    wordsWithQ,
    findWordsWithLetter,
    lettersMatch,
    lettersExactMatch,
    main,
};