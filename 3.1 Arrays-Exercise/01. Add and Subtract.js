function addOrSubtract(arr) {
  let sumOriginalArr = arr.reduce((a, b) => a + b)
  for (i = 0; i < arr.length; i++) {
    arr[i] & 1 ? arr[i] -= i : arr[i] += i
  }

  let sumModifiedArr = arr.reduce((a, b) => a + b)
  return `[ ${arr.join(', ')} ]\n${sumOriginalArr}\n${sumModifiedArr}`
}

// console.log(addOrSubtract([-5, 11, 3, 0, 2]))


//[ -5, 10, 1, 3, 6 ]
//11
//15