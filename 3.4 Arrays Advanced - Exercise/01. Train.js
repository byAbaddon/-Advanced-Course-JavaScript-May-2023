function train(arr) {
  let wagons = arr.shift().split(' ').map(Number)
  let maxCapacity = +arr.shift()
  let [command, passengers] = ['', 0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      [command, passengers] = arr[i].split(' ')
      wagons.push(passengers)
    } else {
      passengers = +arr[i]

      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + passengers <= maxCapacity) {
          wagons[i] += passengers
          break
        }
      }

    }
  }

  return wagons.join(' ')
}

// console.log(train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']))
//console.log(train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']))


