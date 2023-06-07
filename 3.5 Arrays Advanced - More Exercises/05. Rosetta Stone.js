function rosettaStone(arr) {
    let rowsTemplate = +arr.shift()
    let templateMatrix = arr.splice(0, rowsTemplate).map(row => row.split(' ').map(Number))
    let templateCol = templateMatrix[0].length
    let messageMatrix = arr.map(row => row.split(' ').map(Number))
    let messageRows = messageMatrix.length
    let messageCol = messageMatrix[0].length
    
    let matrix = messageMatrix
    let outputMessage = ''
    
    for (let row = 0; row < messageRows; row++) {
      for (let col = 0; col < messageCol; col++) {
        matrix[row][col] += templateMatrix[row % rowsTemplate][col % templateCol]
      }
    }
    
    for (let i = 0; i < messageRows; i++) {
      for (let j = 0; j < messageCol; j++) {
        let num = matrix[i][j] % 27
        matrix[i][j] = num !== 0 ? String.fromCharCode(num + 64) : ' '
      }
    }
    
    outputMessage = matrix.map(row => row.join('')).join('')
    console.log(outputMessage)
  }
  
  //rosettaStone(['2', '59 36', '82 52', '4 18 25 19 8', '4 2 8 2 18', '23 14 22 0 22', '2 17 13 19 20', '0 9 0 22 22']);
  