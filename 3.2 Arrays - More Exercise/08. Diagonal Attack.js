function diagonalAttack(matrix) {
  let leftDiagonalSum = rightDiagonalSum = 0

  for (let row = 0; row < matrix.length; row++) {
    matrix[row] = matrix[row].split(' ').map(Number)
    leftDiagonalSum += matrix[row][row]
    rightDiagonalSum += matrix[row][matrix.length - 1 - row]
    matrix[row][row] = matrix[row][row].toString()
    matrix[row][matrix.length - 1 - row] = matrix[row][matrix.length - 1 - row].toString()
  }

  if (leftDiagonalSum == rightDiagonalSum) {
    for (let row in matrix) {
      matrix[row].forEach((element, i) => {
        if (typeof (element) == 'number') {
          matrix[row][i] = leftDiagonalSum
        }
      })
    }
  }

  matrix.forEach(el => console.log(el.join(' ')))
}



// diagonalAttack([
//   '5 3 12 3 1',
//   '11 4 23 2 5',
//   '101 12 3 21 10',
//   '1 4 5 2 2',
//   '5 22 33 11 1'
// ])

// diagonalAttack([
//   '1 1 1',
//   '1 1 1',
//   '1 1 0'
// ])