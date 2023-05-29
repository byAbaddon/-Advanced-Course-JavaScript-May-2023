(a, b, c) =>  console.log(`${a + b + c} - ${Number(a + b + c) % 1 != 0 ? 'Float' : 'Integer'}`)

//------------------------------------(2)----------------------------

function integerAndFloat(n1, n2, n3) {
  let sum = n1 + n2 + n3
  console.log(Number.isInteger(sum) === false ? `${sum} - Float` : `${sum} - Integer`)
}

// integerAndFloat(9, 100, 1.1)