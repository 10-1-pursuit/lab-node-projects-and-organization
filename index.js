const words = require('./words.json')

function allWords(array){
    for(let x of array){
        console.log(`- ${x}`)
    }
    return;
}

function firstTenWords(array){
    for(let x = 0; x <10; x++){
        console.log(`- ${array[x]}`)
    }
    return;
}
function nextTenWords(array){
    for(let x = 10; x < 20; x++){
        console.log(`- ${array[x]}`)
    }
    return;
}

function firstXWords(array, lastWord){
    for(let x = 0; x < lastWord; x++){
        console.log(`- ${array[x]}`)
    }
    return;
}

function subsetOfWords(array, firstWord, lastWord){
    for(let x = firstWord - 1; x < lastWord; x++){
        console.log(`- ${array[x]}`)
    }
    return;
}
function sortWords(array){
    const newArr = array.sort()
    for(let x of newArr){
        console.log(`- ${x}`)
    }
    return
}

function findWordsWithLetter(array, letter){
    const newArr = []
    for(let x of array){
        if(x.includes(letter)){
            newArr.push(x)
        }
    }
    return newArr;
}


console.log(words)