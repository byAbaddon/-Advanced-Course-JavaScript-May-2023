
//---------------------------------------(0)----------------------------------------------
//(str, w) => str.replaceAll(w, '*'.repeat(w.length))    //replaceAll  Not Work in Judge!


//---------------------------------------(1)---------------------------------------------

(str, w) => str.replace(new RegExp(w, 'g'), '*'.repeat(w.length))

//---------------------------------------(2)------------------

function censoredWords(text, word) {
  for (let i = 0; i < 10; i++) {
    text = text.replace(word, '*'.repeat(word.length))
  }
  return text
}

console.log(censoredWords("A small sentence small with some words", "small"))