function furniture(arr) {
  arr.pop()
  let pattern = />>(?<name>\w+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/
  let sum = 0

  console.log('Bought furniture:')
  for (const el of arr) {
    let result = el.match(pattern)
    if (result) {
      let items = result.groups.name
      let price = result.groups.price
      let count = result.groups.quantity

      sum += price * count
      console.log(items)
    }
  }
  console.log(`Total money spend: ${sum.toFixed(2)}`)
}

// furniture(['>>TV<<300!5', '>Invalid<<!5', 'Purchase', ])
// furniture(['>>TV<<300!5', '>>Sofa<<312.23!3', '>Invalid<<!5', 'Purchase', ])


//------------------------------------------------(2)----------------------------------------

function furniture(arr) {
  let pattern = />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+[\.|\d]\d*)!(?<count>\d+)/
  let sum = 0
  let arrBoughtFurniture = []

  let findIndex = arr.indexOf('Purchase')
  arr = arr.splice(0, findIndex).filter(el => pattern.test(el))

  for (const el of arr) {
    let result = el.match(pattern)
    let items = result.groups.name
    let price = result.groups.price
    let count = result.groups.count

    arrBoughtFurniture.push(items)
    sum += price * count
  }

  console.log('Bought furniture:')
  arrBoughtFurniture.forEach(el => console.log(String(el)))
  console.log(`Total money spend: ${sum.toFixed(2)}`)
}

// furniture(['>>TV<<300!5', '>>Sofa<<312.23!3', '>Invalid<<!5', 'Purchase', ])
// furniture([ '>>TV<<300!5', '>Invalid<<!5', 'Purchase', ])