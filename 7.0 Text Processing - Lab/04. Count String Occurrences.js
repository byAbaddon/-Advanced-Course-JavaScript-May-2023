(str, w) => str.split(' ').filter(x => x == w).length
  

//----------------------------------------(2)-----------------

function countStringOccurrences(str, word) {
  return str.split(' ').reduce((a, x) => x == word ? a + 1 : a, 0)
}

// console.log(countStringOccurrences("This is a word and it also is a sentence", "is"))



//-----------------------------------------(3)---------------------------------

function countStrOcc(str, word) {
  const re = new RegExp(`\\b${word}\\b`, 'gi')
  const result = str.match(re)
  console.log(result ? result.length : 0)
}

// countStrOcc("This is a word and it also is a sentence", "is")