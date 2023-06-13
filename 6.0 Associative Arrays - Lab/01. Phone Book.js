arr => {
  const phoneObj = arr.reduce((acc, x) => {
    const [k, v] = x.split(' ')
    acc[k] = v
    return acc
  }, {})

  for (const key in phoneObj) console.log(key + ' -> ' + phoneObj[key])
}

//------------------------------------(2)--------------------

function phoneBook(arr) {
  let phoneBook = {}

  for (const el of arr) {
    let [key, value] = el.split(' ')
    phoneBook[key] = value
  }

  for (const key in phoneBook) {
    console.log(key + ' -> ' + phoneBook[key])
  }

}

// phoneBook(
//   ['Tim 0834212554',
//     'Peter 0877547887',
//     'Bill 0896543112',
//     'Tim 0876566344'
//   ])