function condenseArrayToNumber(arr) {
  let condense = []

  while (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      condense.push(arr[i] + arr[i + 1])
    }
    arr = condense
    condense = []
  }

  return arr[0]
}

// console.log(condenseArrayToNumber([2, 10, 3]))
//console.log(condenseArrayToNumber([5, 0, 4, 1, 2]))