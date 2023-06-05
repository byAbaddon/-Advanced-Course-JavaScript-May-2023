arr => [...new Set(arr)].join(' ')

//-----------------------------------(2)----------------------------

function distinctArray(arr) {
  return Array.from(new Set(arr)).join(' ')
}

// console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]))