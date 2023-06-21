function valueOfString([str, command]) {
  command == 'LOWERCASE' ?
    str = str.match(/[a-z]/g).map(el => el.toLowerCase().charCodeAt(0)) :
    str = str.match(/[A-Z]/g).map(el => el.toUpperCase().charCodeAt(0))

  return `The total sum is: ${str.reduce((a, b) => a + b)}`
}

// console.log(valueOfString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']))
// console.log(valueOfString(['AC/DC', 'UPPERCASE']))