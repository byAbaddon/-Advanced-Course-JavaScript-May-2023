function magicSum(arr, n) {
  for (let row = 0; row < arr.length - 1; row++) {
    for (let col = row + 1; col < arr.length; col++) {
      if (arr[row] + arr[col] == n) {
        console.log(arr[row], arr[col])
      }
    }
  }
}


// magicSum([1, 7, 6, 2, 19, 23], 8)
// magicSum([14, 20, 60, 13, 7, 19, 8], 27)
// magicSum([1, 2, 3, 4, 5, 6], 6)