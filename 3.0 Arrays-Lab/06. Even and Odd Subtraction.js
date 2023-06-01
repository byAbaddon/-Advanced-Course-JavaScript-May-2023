arr => arr.reduce((acc, x) => {
    let [even, odd] = [acc, 0]
    x & 1 ? odd += x : even += x 
    return even - odd
  }, 0)

//----------------------------------------------(2)-----------------------

function evenAndOddSubtraction(arr) {
  let [oddSum, evenSum] = [0, 0]
  for (const x of arr) {
    if (x & 1) oddSum += x
    else evenSum += x
  }

  return evenSum - oddSum
}

// console.log(evenAndOddSubtraction([1, 2, 3, 4, 5, 6]))
// console.log(evenAndOddSubtraction([3, 5, 7, 9]))
// console.log(evenAndOddSubtraction([2, 4, 6, 8, 10]))


//------------------------------------------------(3)--------------------------

function evenAndOddSubtraction(inputArray) {
  console.log(inputArray.reduce((acc, x) => {
    let [even, odd] = [acc, 0]
    x & 1 ? odd += x : even += x 
    return even - odd
  }, 0));
}

// evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
// evenAndOddSubtraction([3, 5, 7, 9])
// evenAndOddSubtraction([2, 4, 6, 8, 10])