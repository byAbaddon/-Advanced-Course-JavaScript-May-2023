str => str.split('').reduce((acc, x, i) => {
  x != str[i + 1] ? acc += x : null; return acc
}, '')

//-----------------------------------(2)------------------------

function replaceRepeatingChars(str) {
  let word = ''

  for (let i = 0; i < str.length; i++) {
    current = str[i]
    if (current !== str[i + 1]) {
      word += str[i]
    }
  }

  return word
}

// console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'))
// console.log(replaceRepeatingChars('qqqwerqwecccwd'))