function addToZero(array) {
    let value = false;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i !== j) {
          if (array[i] + array[j] === 0) {
            value = true;
          } 
        }
      }
    }
  }
  
  //The runtime of addToZero funciton would be O(n^2)
  

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
  
  //The runtime for the hasUniqueChars function would be O(n)