function garage(arr) {
  let garagesObj = {}

  for (const el of arr) {
    let [garageNum, carList] = el.split(' - ')
    garagesObj[garageNum] = garagesObj[garageNum] || []
    garagesObj[garageNum].push(carList)
  }

  for (const [key, val] of Object.entries(garagesObj)) {
    console.log('Garage №', key)
    val.forEach(el => console.log('---', el.split(': ').join(' - ')))
  }
}

// garage([
//   '1 - color: blue, fuel type: diesel',
//   '1 - color: red, manufacture: Audi',
//   '2 - fuel type: petrol',
//   '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
// ])


//-----------------------------------------------(2)-------------------------------

function garage(arr) {
  let garage = new Map()

  for (const el of arr) {
    let [garageNum, carList] = el.split(' - ')

    if (!garage.has(garageNum)) {
      garage.set(garageNum, [carList])
    } else {
      let moreCars = garage.get(garageNum);
      moreCars.push(carList)
      garage.set(garageNum, moreCars)
    }
  }

  let sortedGarages = [...garage.entries()].sort((a, b) => a[0] - b[0])
  for (const [key, val] of sortedGarages) {
    console.log('Garage №', key)
    val.forEach(value => console.log('---', value.split(':').join(' -')))
  }
}

// garage([
//   '1 - color: blue, fuel type: diesel',
//   '1 - color: red, manufacture: Audi',
//   '2 - fuel type: petrol',
//   '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])