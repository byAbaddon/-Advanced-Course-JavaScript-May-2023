([flights, canceledFlights, statusFlights]) => {
  flights.map(x => x.split(' ')).reduce((acc, [flight, ...destination], i) => {
    let status = canceledFlights.filter(x => x.includes(flight)).length ? 'Cancelled' : 'Ready to fly'
    acc.push(Object.assign({}, {'Destination': destination.join(' '),'Status': status}))
    return acc
  }, []).filter(x => x.Status == statusFlights[0]).forEach(flight => console.log(flight))
}

//--------------------------------(2)-----------------------

function flightSchedule(arr) {
  let [getFlight, getCanceledFlight, status] = [...arr]
  let [numFlight, city] = ['', '']
  let [obj, obj2] = [{}, {}]

  for (let i = 0; i < getFlight.length; i++) {
    [numFlight, city] = getFlight[i].split(' ')
    obj[numFlight] = city
  }

  for (let i = 0; i < getCanceledFlight.length; i++) {
    [numFlight, city] = getCanceledFlight[i].split(' ')
    if (obj[numFlight]) {
      if (status[0] == 'Cancelled') obj2[numFlight] = obj[numFlight]
      else delete obj[numFlight]
    }
  }

  if (status[0] == 'Cancelled') {
    obj2 = Object.values(obj2).sort((a, b) => a.localeCompare(b))
    for (const key of obj2) console.log(`{ Destination: '${key}', Status: '${status}' }`)
  } else {
    for (const key in obj) console.log(`{ Destination: '${obj[key]}', Status: '${status}' }`)
  }
}

// flightSchedule([
//     ['WN269 Delaware',
//       'FL2269 Oregon',
//       'WN498 Las Vegas',
//       'WN3145 Ohio',
//       'WN612 Alabama',
//       'WN4010 New York',
//       'WN1173 California',
//       'DL2120 Texas',
//       'KL5744 Illinois',
//       'WN678 Pennsylvania'
//     ],
//     ['DL2120 Cancelled',
//       'WN612 Cancelled',
//       'WN1173 Cancelled',
//       'SK430 Cancelled'
//     ],
//     ['Cancelled']
//   ])

//------------------------------------------(2)-------------------------------------

function flightSchedule(inputArr) {
  let arr = [...inputArr]
  let getFlight = arr[0]
  let getCanceledFlight = arr[1]
  let status = arr[2]
  let [numFlight, city] = ['', '']
  let obj = {}
  let obj2 = {}


  for (let i = 0; i < getFlight.length; i++) {
    [numFlight, city] = getFlight[i].split(' ')
    obj[numFlight] = city
  }

  for (let i = 0; i < getCanceledFlight.length; i++) {
    [numFlight, city] = getCanceledFlight[i].split(' ')

    if (obj.hasOwnProperty(numFlight)) {


      if (status[0] === 'Cancelled') {
        obj2[numFlight] = obj[numFlight]
      } else {
        delete obj[numFlight];
      }
    }
  }


  if (status[0] === 'Cancelled') {
    obj2 = Object.values(obj2).sort((a, b) => a.localeCompare(b))

    for (const key of obj2) {
      console.log(`{ Destination: '${key}', Status: '${status}' }`)
    }
  } else {
    for (const key in obj) {
      console.log(`{ Destination: '${obj[key]}', Status: '${status}' }`)
    }
  }

}
// flightSchedule([
//   ['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'
//   ],
//   ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK430 Cancelled'
//   ],
//   ['Cancelled']
// ])

// flightSchedule([
//   ['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
// 'WN612 Cancelled',
// 'WN1173 Cancelled',
// 'SK330 Cancelled'],
// ['Ready to fly']
// ])