function neighborhoods(arr) {
  let obj = {}
  arr.shift().split(', ').forEach(key => {return obj[key] = []})

  while (arr.length > 0) {
    let [neighborhoods, person] = arr.shift().split(' - ')
    if (obj.hasOwnProperty(neighborhoods)) {
      obj[neighborhoods].push(person)
    }
  }

  let sorted = Object.entries(obj).sort((a, b) => b[1].length - a[1].length)

  for (const el of sorted) {
    console.log(`${el[0]}: ${el[1].length}`)
    el[1].forEach(element => console.log('--' + element))   
  }
}

// neighborhoods(['Abbey Street, Herald Street, Bright Mews',
//   'Bright Mews - Garry',
//   'Bright Mews - Andrea',
//   'Invalid Street - Tommy',
//   'Abbey Street - Billy'
// ])