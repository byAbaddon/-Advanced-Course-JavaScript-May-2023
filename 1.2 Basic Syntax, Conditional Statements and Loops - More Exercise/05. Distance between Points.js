(x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

//----------------------------(2)----------------------------

function distanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
}

// console.log(distanceBetweenPoints(2, 4, 5, 0))