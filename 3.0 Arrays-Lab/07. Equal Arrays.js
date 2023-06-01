(a1, a2, sum = 0) => {
  for (i = 0; i < a1.length; i++) {
    if (a1[i] == a2[i]) sum += +a1[i]
    else return `Arrays are not identical. Found difference at ${i} index`
  }

  return `Arrays are identical. Sum: ${sum}`
}

//---------------------------------------(2)-----------------------

function equalArrays(arr1, arr2) {
  let sumOfIndex = 0
  for (let i = 0; i < arr1.length; i++) {
    if (+arr1[i] == +arr2[i]) {
      sumOfIndex += +arr1[i]
    } else {
      sumOfIndex = i
      return `Arrays are not identical. Found difference at ${sumOfIndex} index`
    }
  }

  return `Arrays are identical. Sum: ${sumOfIndex}`
}

// console.log(equalArrays(['10', '20', '30'], ['10', '20', '30']))
// console.log(equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']))
// console.log(equalArrays(['1'], ['10']))