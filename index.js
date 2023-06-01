const whatEver = require("./words.json");

// console.log(whatEver)

// sort words alphaOrderly...

function allWords() {
  let words = whatEver;
  console.log("hi", words);
}
allWords();

function firstTenWords() {
  const firstTen = whatEver.slice(0, 10);
  console.log(firstTen);
}
firstTenWords();

function nextTenWords() {
  const nextTen = whatEver.slice(10, 20);
  console.log(nextTen);
}
nextTenWords();

function firstXWord(x) {
  return words.slice(0, x);
}

function subsetOfWords(x = 1500, y = 2500) {
  console.log("Hello Universe", whatEver.slice(x, y));
}
subsetOfWords();

function sortWords() {
  let sortWords = whatEver.sort((a, b) => a.localeCompare(b));
  console.log(sortWords);
}
sortWords();

const wordsWithQ = () => whatEver.filter((word) => word.includes("q"));
const wordsWithQArr = wordsWithQ();
console.log("Words with 'q':", wordsWithQArr);

const findWordsWithLetter = (letter) =>
  whatEver.filter((word) => word.includes(letter));

//finds words depending on letter-input change using process.argv
const letter = process.argv[2] || "";
console.log(`Words with '${letter}':`, findWordsWithLetter(letter));

findWordsWithLetter;
