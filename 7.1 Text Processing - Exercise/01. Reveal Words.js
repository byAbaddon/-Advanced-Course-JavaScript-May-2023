(arg, text) => text.split(' ').reduce((acc, x) => {
  if (x.startsWith('*')) x = arg.split(', ').filter(w => w.length == x.length)[0]
  acc.push(x); return acc
}, []).join(' ')

//--------------------------------------------(2)------------------------------------

function revealWords(...input) {
  const [words, text, finalText] = [input[0].split(', '), input[1].split(' '), []]
  for (let i = 0; i < text.length; i++) {
    if (text[i].includes('*')) words.map(w => w.length == text[i].length ? text[i] = w : null)
    finalText.push(text[i])
  }
  return finalText.join(' ')
}

// console.log(revealWords('great, learning', 'softuni is ***** place for ******** new programming languages'))


//----------------------------------------------(3)-------------------------------------


function revealWords(...input) {
  let arrWords = input[0]
  let text = input[1].split(' ')
  let collection = ''

  for (let i = 0; i < text.length; i++) {
    if (text[i].includes('*')) {
      let getLength = text[i].length
      arrWords.split(', ').forEach(el => el.length === getLength ? text[i] = el : null)
    }

    collection += text[i] + ' '
  }

  return collection
}

// console.log(revealWords('great, learning', 'softuni is ***** place for ******** new programming languages'))