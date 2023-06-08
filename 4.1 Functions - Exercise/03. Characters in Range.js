(...arg) => arg.map(x => x.charCodeAt(0)).sort((a, b) => a - b).reduce((a, x, inx, arr) => {
  for (let i = x + 1; i < arr[inx + 1]; i++) a.push(String.fromCharCode(i));
  return a
}, []).join(' ')

//-----------------------------(2)--------------------

function charactersInRange(char1, char2) {
  let [start, end] = [0, 0]
  let firstChar = char1.charCodeAt(0)
  let secondChar = char2.charCodeAt(0)
  let charCollections = []

  if (firstChar < secondChar) {
    start = firstChar
    end = secondChar
  } else {
    start = secondChar
    end = firstChar
  }

  for (let i = start + 1; i < end; i++) {
    charCollections.push(String.fromCharCode(i))
  }

  return charCollections.join(' ')
}

//console.log(charactersInRange('C', '#'))
//console.log(charactersInRange('#', ':'))