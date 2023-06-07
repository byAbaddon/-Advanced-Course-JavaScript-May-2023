function bunnyKill(arr) {
  let bombs = arr.pop().split(' ').map(str => str.split(',').map(Number))
  let matrix = arr.map(row => row.split(' ').map(Number))

  let damage = 0
  let death = 0

  for (let i = 0; i < bombs.length; i++) {
    let bombRow = bombs[i][0]
    let bombCol = bombs[i][1]
    let bombValue = matrix[bombRow][bombCol]

    if (bombValue <= 0) continue

    let startRow = Math.max(0, bombRow - 1)
    let endRow = Math.min(bombRow + 1, arr.length - 1)

    for (let row = startRow; row <= endRow; row++) {
      let startCol = Math.max(0, bombCol - 1);
      let endCol = Math.min(bombCol + 1, arr[row].length - 1)

      for (let col = startCol; col <= endCol; col++) {
        matrix[row][col] -= bombValue
      }
    }

    death++
    damage += bombValue
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0) {
        damage += matrix[row][col]
        death++
      }
    }
  }

  return `${damage}\n${death}`
}


// console.log(bunnyKill(
//   [
//     '10 10 10',
//     '10 10 10',
//     '10 10 10',
//     '0,0'
//   ]
// ))