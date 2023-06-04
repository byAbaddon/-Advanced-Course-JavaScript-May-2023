function negativeOrPositiveNumbers(arr) {
  let result = []
  arr.filter(el => el < 0 ? result.unshift(el) : result.push(el))
  return result.join('\n')
}

//console.log(negativeOrPositiveNumbers([7, -2, 8, 9]))
//console.log(negativeOrPositiveNumbers([3, -2, 0, -1]))