const {
  allWords,
  firstTenWords,
  nextTenWords,
  firstXWords,
  subsetOfWords,
  sortWords,
} = require("./simple-functions");

const wordleList = require("./words")

test("logs all words", () => {
    expect(allWords()).toBe(console.log(wordleList));
});

test("logs the first 10 words", () => {
  expect(firstTenWords()).toBe(console.log(wordleList));
});