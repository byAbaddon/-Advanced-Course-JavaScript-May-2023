function mergeArrays(arr1, arr2, arr3=[]) {
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(`${ i & 1 ? arr1[i] + arr2[i] : +arr1[i] + +arr2[i]}`)
  }

  return arr3.join(' - ')
}

// console.log(mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']))