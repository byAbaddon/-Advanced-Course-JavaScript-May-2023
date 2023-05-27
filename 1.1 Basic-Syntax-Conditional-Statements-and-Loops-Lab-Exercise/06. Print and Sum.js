(start, finish) => {
  const arr = [...Array.from({length: finish - start + 1}, (x, i) => start + i)]
  console.log(...arr, '\n', 'Sum:', arr.reduce((a, b) => a + b))
}

//------------------------------------(2)-------------------------

function printAndSum(start, end) {
  let strCollection = ''
  let sum = 0

  for (let i = start; i <= end; i++) {
    strCollection += i + ' '
    sum += i
  }

  return `${strCollection}\nSum: ${sum}`
}

//console.log(printAndSum(5, 10))
//console.log(printAndSum(0, 26))
//console.log(printAndSum(50, 60))