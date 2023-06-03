function equalSums(input) {
  let sumLeft = sumRight = equalIndex = 0
  let isEqual = false

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
      sumLeft += input[j]
    }

    for (let k = i + 1; k < input.length; k++) {
      sumRight += input[k]
    }
    
    if (sumLeft == sumRight) {
      isEqual = true
      equalIndex = i
      break
    }
    sumLeft = sumRight = 0
  }

  if (isEqual) return equalIndex
  return 'no'
}

// console.log(equalSums([1, 2, 3, 3])) 