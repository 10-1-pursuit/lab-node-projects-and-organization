const {
    wordsWithQ,
    findWordsWithLetter,
} = require("../src/find.js");

describe('wordsWithQ', () => {
    test('searching words that contain q', ()=>{
        const words = [
            "baisa",
            "bises",
            "kipps",
            "sable",
            "quill"
        ];
        const actual = wordsWithQ(words);
        const expected = ["quill"];
        expect(actual).toStrictEqual(expected);
    });
    test('return [] if there is no word that contains q', ()=>{
        const words = [
            "bises",
            "kipps",
            "sable"
        ];
        const actual = wordsWithQ(words);
        const expected = [];
        expect(actual).toStrictEqual(expected);
    });
    test('case sensitive?', ()=>{
        const words = [
            "sable",
            "quill",
            "QUILL"
        ];
        const actual = wordsWithQ(words);
        const expected = ["quill"];
        expect(actual).toStrictEqual(expected);
    });
});

describe('findWordsWithLetter', () => {
    test('searching words that contain b', ()=>{
        const words = [
            "baisa",
            "bises",
            "kipps",
            "sable",
            "quill"
        ];
        const actual = findWordsWithLetter(words, "b");
        const expected = ["baisa","bises","sable"];
        expect(actual).toStrictEqual(expected);
    });
    test('return [] if there is no word that contains q', ()=>{
        const words = [
            "bises",
            "kipps",
            "sable"
        ];
        const actual = findWordsWithLetter(words, "q");
        const expected = [];
        expect(actual).toStrictEqual(expected);
    });
    test('case sensitive?', ()=>{
        const words = [
            "sable",
            "quill",
            "QUILL"
        ];
        const actual = findWordsWithLetter(words, "q");
        const expected = ["quill"];
        expect(actual).toStrictEqual(expected);
    });
});
