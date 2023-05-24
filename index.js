const words = require("./words.json");

function allWords() {
  return words;
}

function firstTenWords() {
  return words.slice(0, 10);
}

function nextTen() {
  return words.slice(10, 20);
}

function firstXWord(x) {
  return words.slice(0, x);
}

function subsetOfWords(x, y) {
  return words.slice(x, y);
}

function sortWordsAlphebetically() {
  return words.sort();
}

function wordsWithQ() {
  return words.filter((word) => word.includes("q"));
}

function findWordsWithLetter(x) {
  return words.filter((word) => word.includes(x));
}
