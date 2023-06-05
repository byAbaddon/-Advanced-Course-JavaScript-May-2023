(arr, [nE, dI, n]) => `Number ${n} occurs ${arr.splice(0, nE).splice(dI,).filter(x => x == n).length} times.`

//----------------------------------------(2)-----------------------------

function searchForNumber(arg1, arg2) {
  let arrOfNumbers = arg1
  let numberToTake = arg2[0]
  let numberDeleteElement = arg2[1]
  let numberToSearchElement = arg2[2]

  let takeNewElement = arrOfNumbers.splice(0, numberToTake)
  takeNewElement.splice(0, numberDeleteElement)
  let count = takeNewElement.filter(el => el === numberToSearchElement).length

  return `Number ${numberToSearchElement} occurs ${count} times.`
}

//console.log(searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]))