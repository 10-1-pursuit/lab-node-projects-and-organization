const data = require("/Users/darynavershinina/Desktop/Module_2/lab-node-projects-and-organization/words.json");

function allWords(data) {
    return data
}
console.log(allWords(data))


function firstTenWords(data) {
    return data.slice(0, 10)
}
console.log(firstTenWords(data))
  

function nextTenWords(data) {
    return data.slice(10, 20)
}
  console.log(nextTenWords(data))

  function sortWords(data) {
  return data.sort()
  }
  console.log(sortWords(data))
  
  function firstXWords(data) {
        let firstXWords = data.filter(function(data) {
          return data >= "o" && data <= "x";
        });
      
        return firstXWords;
      }
console.log(firstXWords(data))

function subsetOfWords(data) {
    let filteredWords = data.filter(function(word) {
      return word === "x" || word === "y";
    });
    return filteredWords;
  }
  console.log(subsetOfWords(data))

  function wordsWithQ(data) {
    var filteredWords = data.filter(function(word) {
      return word.includes("q");
    });
  
    return filteredWords;
  }
  console.log(wordsWithQ(data))

  


  


