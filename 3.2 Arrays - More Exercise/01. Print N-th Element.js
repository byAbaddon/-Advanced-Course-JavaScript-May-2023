arr => {
  step = +arr.pop()
  for (i = 0; i < arr.length; i += step) process.stdout.write(`${arr[i]} `)
}

//--------------------------------(2)---------------------------

function printNthElement(arr) {
  let step = +arr.pop()
  let collection = []
  for (let i = 0; i <= arr.length; i += step) {
    collection.push(arr[i])
  }
  console.log(collection.join(' '))
}

// printNthElement(['1', '2', '3', '4', '5', '6'])
// printNthElement(['dsa', 'asd', 'test', 'test', '2'])