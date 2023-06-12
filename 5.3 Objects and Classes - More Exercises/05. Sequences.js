function sequences(input) {
  let storage = []
  for (let array of input) {
    array = JSON.stringify(JSON.parse(array).sort((a, b) => b - a))
    if (!storage.includes(array))  storage.push(array)
  }

  storage.forEach((arr, i) => storage[i] = JSON.parse(arr))
  storage.sort((a, b) => a.length - b.length).forEach(arr => console.log(`[${arr.join(", ")}]`)) 
}


// sequences(
//   ["[-3, -2, -1, 0, 1, 2, 3, 4]",
//     "[10, 1, -17, 0, 2, 13]",
//     "[4, -3, 3, -2, 2, -1, 1, 0]"
//   ])