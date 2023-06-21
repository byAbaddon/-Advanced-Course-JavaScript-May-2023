function melrahShake (arr) {
  let text = arr.shift()
  let token = arr.shift()
  
  while (token.length > 0) {
    let first = text.indexOf(token)
    let last = text.lastIndexOf(token)
    
    if (first != -1 && last != -1 && first != last) {
      text = text.substring(0, first) + text.substring(first + token.length)
      last = text.lastIndexOf(token)
      text = text.substring(0, last) + text.substring(last + token.length)
      token = token.substring(0, token.length / 2) + token.substring(token.length / 2 + 1)
      console.log('Shaked it.')
    } else  break 
  }
  
  console.log('No shake.', '\n', text)
}

// melrahShake(['astalavista baby', 'sta'])
// melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm'])



//-------------------------------------------(2)---------------------60pts-----------TODO

function melrahShake(arr) {
  let [str, pattern] = [...arr]

  while (pattern.length > 0) {
    let regex = new RegExp(`${pattern}`, 'g')
    str.match(regex)
    console.log('Shaked it.')

    str = str.replace(regex, '')
    pattern = pattern.replace(pattern[Math.floor(pattern.length / 2)], '')

  }

  console.log(`No shake.\n${str}`)
}

melrahShake(['astalavista baby', 'sta'])
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm'])