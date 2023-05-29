function triplesOfLatinLetters(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
          const char ='a'.charCodeAt(0)
        console.log( String.fromCharCode(char + i, char + j, char + k))
      }
    }
  }
}

// triplesOfLatinLetters(3)




