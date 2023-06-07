function airPollution(mapInfo, forces) {
  let map = mapInfo.map(x => x.split(' ').map(Number))

  while (forces.length > 0) {
    let currArr = forces.shift()
    let force = currArr.split(' ')[0]
    let currVal = Number(currArr.split(' ')[1])

    if (force == 'breeze') map = breeze(map, currVal)
    if (force == 'gale') map = gale(map, currVal)
    if (force == 'smog') map = smog(map, currVal)
  }

  function breeze(arr, index) {
    for (let col = 0; col < arr.length; col++) {
      let currPart = arr[index][col];
      if (currPart - 15 >= 0) arr[index][col] -= 15
      else arr[index][col] = 0
    }
    return arr
  }

  function gale(arr, index) {
    for (let row = 0; row < arr.length; row++) {
      let currPart = arr[row][index]
      if (currPart - 20 >= 0) arr[row][index] -= 20
      else arr[row][index] = 0
    }
    return arr
  }

  function smog(arr, value) {
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr.length; col++) {
        arr[row][col] += value;
      }
    }
    return arr
  }

  let result = 'Polluted areas: '

  for (let rows = 0; rows < map.length; rows++) {
    for (let cols = 0; cols < map.length; cols++) {
      let currValue = map[rows][cols];
      if (currValue >= 50) {
        result += `[${rows}-${cols}], `
      }
    }
  }

  return result == 'Polluted areas: ' ? result = 'No polluted areas' : result.slice(0, -2)
}


// console.log(
//  airPollution(
//   ['5 7 3 28 32',
//     '41 12 49 30 33',
//     '3 16 20 42 12',
//     '2 20 10 39 14',
//     '7 34 4 27 24'
//   ],
//   ['smog 11', 'gale 3', 'breeze 1', 'smog 2']
//  )
// )