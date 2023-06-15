arr => {
  const parking = new Set()
  arr.forEach(entry => entry.split(', ')[0] == 'IN' ? parking.add(entry.split(', ')[1]) : parking.delete(entry.split(', ')[1]))
  if (parking.size) Array.from(parking).sort().forEach(carNumber => console.log(carNumber))
  else console.log('Parking Lot is Empty')
} 

//--------------------------------------(2)---------------------

function piccolo(arr) {
  let parkingLotArr = new Set()

  while (arr.length > 0) {
    let [command, car] = arr.shift().split(', ')
    command == 'IN' ? parkingLotArr.add(car) : parkingLotArr.delete(car)
  }

  parkingLotArr.size == 0 ? console.log('Parking Lot is Empty') : null

  let sortAscByNum = Array.from(parkingLotArr).sort((a, b) => a.localeCompare(b))
  sortAscByNum.forEach(el => console.log(el))
}

//------------------------------------(3)-------------------------------------
function parkingLot(arr) {
  const parking = new Set()

  for (const entry of arr) {
    const [direction, carNumber] = entry.split(', ')

    if (direction == 'IN') {
      parking.add(carNumber)
    } else if (direction == 'OUT') {
      parking.delete(carNumber)
    }
  }

  if (parking.size == 0) {
    console.log('Parking Lot is Empty')
  } else {
    const sortedCarNumbers = Array.from(parking).sort()
    for (const carNumber of sortedCarNumbers) {
      console.log(carNumber)
    }
  }
}

// piccolo(
//   ['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
//   ])

