function numberModification(n) {
  let num = String(n).split('').map(Number)

  while (Infinity) {
    let lengthList = num.length
    let sumNumbers = num.reduce((a, b) => a + b)
    let average = sumNumbers / lengthList
    if (average > 5) {
      return num.join('')
    }

    num.push(9)
  }
}


// console.log(numberModification(101))
// console.log(numberModification(5835))
