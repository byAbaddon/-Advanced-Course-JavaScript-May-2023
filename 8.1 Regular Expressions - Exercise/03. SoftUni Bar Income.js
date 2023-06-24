function softUniBar(arr) {
  arr.pop()
  let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<item>[\w]+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+[.]?[\d]*)\$/g
  let totalSum = 0

  for (elements of arr) {
    [...elements.matchAll(pattern)].forEach(el => {
      let name = el.groups.name
      let item = el.groups.item
      let count = el.groups.count
      let price = el.groups.price

      totalSum += count * price
      console.log(`${name}: ${item} - ${(count * price).toFixed(2)}`)
    })
  }

  console.log('Total income:', totalSum.toFixed(2))
}


// softUniBar([
//   '%George%<Croissant>|2|10.3$',
//   '%Peter%<Gum>|1|1.3$',
//   '%Maria%<Cola>|1|2.4$',
//   'end of shift',
// ])

// softUniBar([
//   '%InvalidName%<Croissant>|2|10.3$',
//   '%Peter%<Gum>1.3$',
//   '%Maria%<Cola>|1|2.4',
//   '%Valid%<Valid>valid|10|valid20$',
//   'end of shift',
// ])