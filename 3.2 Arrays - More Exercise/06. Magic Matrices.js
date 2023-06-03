matrix => {
  const sum = matrix[0].reduce((acc, num) => acc + num);
  return matrix.every(row => row.reduce((acc, num) => acc + num) == sum) &&
         matrix.every((_, i) => matrix.reduce((acc, row) => acc + row[i], 0) == sum);
}


//-------------------------------------(2)---------------------------

function magicMatrices(arr) {
  let sumRow = checkIsEqualSum = 0

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      sumRow += arr[row][col]
    }
    checkIsEqualSum == 0 ? checkIsEqualSum = sumRow : null
    if (checkIsEqualSum != sumRow) {
      console.log('false');
      return
    }
    sumRow = 0
  }

  console.log('true');
}

// magicMatrices([
//   [4, 5, 6],
//   [6, 5, 4],
//   [5, 5, 5]
// ])


