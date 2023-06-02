const {
    lettersMatch,
    lettersExactMatch,
} = require("../src/match.js");

describe('lettersMatch', () => {
    const words = [
        "women",
        "nikau",
        "swack",
        "feens",
        "fyles",
        "poled",
        "clags",
        "starn",
        "bindi",
        "woops",
        "fanos",
        "cabin",
        "souct",
        "trass",
        "shoat",
        "lefty",
        "durra",
        "hypes",
        "junta",
        "baisa",
        "bises",
        "kipps",
        "sable",
        "abacs",
        "thurl",
        "nurrs",
        "saris",
        "wroth",
        "venal",
        "texas",
        "soman",
        "sssss"];
    test("verify the length of guessed letters are less than 6 characters", ()=>{
        const actual = lettersMatch(words, "asdefa");
        const expected = -1;
        expect(actual).toStrictEqual(expected);
    });
    test("case sensitive", ()=>{
        const actual = lettersMatch(words, "AS");
        const expected = [];
        expect(actual).toStrictEqual(expected);
    });
    test("return the correct words", ()=>{
        const actual = lettersMatch(words, "bai");
        const expected = ["cabin", "baisa"];
        expect(actual).toStrictEqual(expected);
    });
    test("count duplicate letter?", ()=>{
        const actual = lettersMatch(words, "ss");
        const expected = ["trass", "bises", "saris", "sssss"];
        expect(actual).toStrictEqual(expected);
    });
});

describe('lettersExactMatch', () => {
    const words = [
        "women",
        "nikau",
        "swack",
        "feens",
        "fyles",
        "poled",
        "clags",
        "starn",
        "bindi",
        "woops",
        "fanos",
        "cabin",
        "souct",
        "trass",
        "shoat",
        "lefty",
        "durra",
        "hypes",
        "junta",
        "baisa",
        "bises",
        "kipps",
        "sable",
        "abacs",
        "thurl",
        "nurrs",
        "saris",
        "wroth",
        "venal",
        "texas",
        "soman",
        "sssss"];
    test("verify the length of guessed letters are less than 6 characters", ()=>{
        const actual = lettersExactMatch(words, "asdefa");
        const expected = -1;
        expect(actual).toStrictEqual(expected);
    });
    test("case sensitive", ()=>{
        const actual = lettersExactMatch(words, "AS");
        const expected = [];
        expect(actual).toStrictEqual(expected);
    });
    test("return the correct words", ()=>{
        const actual = lettersExactMatch(words, "ba_s");
        const expected = ["baisa"];
        expect(actual).toStrictEqual(expected);
    });
    test("does this function show correct answer?", ()=>{
        const actual = lettersExactMatch(words, "ss");
        const expected = ["sssss"];
        expect(actual).toStrictEqual(expected);
    });
});

