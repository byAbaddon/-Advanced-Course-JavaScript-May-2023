function sorting(arr) {
  arr = arr.sort((a, b) => a - b)
  let sortedArr = []

  while (arr.length) {
    big = arr.pop() 
    small = arr.shift()
    sortedArr.push(big, small)
  }

  console.log(sortedArr.join(' '));
}

// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])