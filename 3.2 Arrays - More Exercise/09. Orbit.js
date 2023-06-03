function orbit(input) {
  let [width, height, x, y] = [...input]
  let matrix = []

  for (let i = 0; i < height; i++) {
    let toPush = []
    toPush.length = width
    matrix.push(toPush)
  }

  let moves = 0
  let index = 1
  matrix[x][y] = index

  if (y > Math.floor(width / 2)) {
    moves = Math.max(0 + x, 0 + y)
  } else {
    moves = Math.max(height - 1 - x, width - 1 - y)
  }
  for (let orb = 1; orb <= moves; orb++) {
    index++
    if (x + orb <= height - 1) {
      for (let down = Math.max(0, y - orb); down <= Math.min(width - 1, y + orb); down++) {
        matrix[x + orb][down] = index
      }
    }
    if (y + orb <= width - 1) {
      for (let right = Math.min(height - 1, x + orb); right >= Math.max(0, x - orb); right--) {
        matrix[right][y + orb] = index
      }
    }
    if (x - orb >= 0) {
      for (let up = Math.min(width - 1, y + orb); up >= Math.max(0, y - orb); up--) {
        matrix[x - orb][up] = index
      }
    }
    if (y - orb >= 0) {
      for (let left = Math.max(0, x - orb); left <= Math.min(height - 1, x + orb); left++) {
        matrix[left][y - orb] = index
      }
    }
  }

  matrix.forEach(el => console.log(el.join(" ")))     
}

// orbit([3, 3, 2, 2])