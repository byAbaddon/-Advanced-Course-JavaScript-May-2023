n => {
  for (i = 1; i <= n; i++) {
    sum = ~~(i / 10 + i % 10)
    console.log(i, `-> ${(sum == 5 || sum == 7 || sum == 11) ? 'True' : 'False'}`)
  }
}

//----------------------------(2)--------------------------

function specialNumbers(number) {
  let isSpecialNumber = ''

  for (let i = 1; i <= number; i++) {
    const test = Math.trunc((i / 10) + (i % 10))
    if (test == 5 || test == 7 || test == 11) {
      isSpecialNumber = 'True'
    } else {
      isSpecialNumber = 'False'
    }
    console.log(`${i} -> ${isSpecialNumber}`);
  }
}

// specialNumbers(15)