(arr, n) => { for (i = 0; i < n; i++) arr.push(arr.shift()); return arr.join(' ')}
  
//----------------------------------(2)-----------------------------

function arrayRotation(arr, num) {
  for (let i = 0; i < num; i++) {
   let rotNum = arr.shift()
    arr.push(rotNum)
  }

  return arr.join(' ')
}

// console.log(arrayRotation([51, 47, 32, 61, 21], 2))
//console.log(arrayRotation([2, 4, 15, 31], 5))