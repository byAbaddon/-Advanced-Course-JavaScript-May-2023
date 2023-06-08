function factorialDivision(r1, r2) {
  let fac = n => (n == 1 ? 1 : n * fac(n - 1))
  let recOne = fac(r1)
  let recTwo = fac(r2)

  return (recOne / recTwo).toFixed(2)
}

//--------------------------------------------(2)---------------------------------

function factorialDivision(r1, r2) {

  let factorial = (num) => {
    if (num == 1) {
      return 1
    }
    return num * factorial(num - 1)
  }

  let recOneResult = factorial(r1)
  let recTwoResult = factorial(r2)

  return (recOneResult / recTwoResult).toFixed(2)
}

//console.log(factorialDivision(5, 2))

