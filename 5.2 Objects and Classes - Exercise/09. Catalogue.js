function catalogue(arr) {
  let setGroup = new Set()
  let obj = {}

  while (arr.length) {
    let [item, price] = arr.shift().split(' : ')
    setGroup.add(item[0])
    obj[item] = price

  }

  obj = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))

  for (const el of obj) {
    let word = el[0][0]
    if (setGroup.has(word)) {
      setGroup.delete(word)
      console.log((word))
    }
    console.log('  ' + el.join().split(',')[0] + ': ' + el.join().split(',')[1]);
  }

}

// catalogue([
//   'Appricot : 20.4',
//   'Fridge : 1500',
//   'TV : 1499',
//   'Deodorant : 10',
//   'Boiler : 300',
//   'Apple : 1.25',
//   'Anti-Bug Spray : 15',
//   'T-Shirt : 10'
// ])