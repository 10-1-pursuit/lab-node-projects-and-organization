const wordData = require("./words.json")

const allWords = (wordData) => { console.log("All the words: ", wordData) };
// allWords(wordData);

const firstTenWords = (wordData) => {
    for (let i = 0; i < 10; i++) {
        console.log("The first ten words: ", wordData[i])
    };
};
// firstTenWords(wordData);

const nextTenWords = (wordData) => {
    for (let i = 10; i < 20; i++) {
        console.log("The next ten words: ", wordData[i])
    };
};
// nextTenWords(wordData);

const firstXWords = (wordData, xWords) => {
    let x = xWords
    for (let i = 0; i < wordData.length && i < x; i++) {
        console.log(wordData[i])
    };
};
// firstXWords(wordData, 15);

const subsetOfWords = (wordData, xWords, yWords) => {
    let x = xWords;
    let y = yWords;
    for (let i = x; i < wordData.length && i <= y; i++) {
        console.log(wordData[i]);
    };
};
// subsetOfWords(wordData, 5, 10);

const sortWords = (wordData) => {
    const sortedWords = wordData.sort();
    console.log(sortedWords);
}

// sortWords(wordData)

///////////////////////////////////////////////////////









