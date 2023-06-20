(w, text) => text.toLowerCase().split(' ').find(x => x == w.toLowerCase()) ? w : `${w} not found!`

//-----------------------------------(2)------------------------

function stringSubstring(word, text) {
  let wordsText = text.toLowerCase().split(' ')
  for (let el of wordsText) {
    if (el == word.toLowerCase()) 
      return el
  }

  return `${word} not found!`
}

// console.log(stringSubstring('javascript', 'JavaScript is the best programming language'))
// console.log(stringSubstring('python', 'JavaScript is the best programming language'))