(n, arr) => arr.reverse().slice(-n).join(' ')

//------------------------------------(2)-----------------------------------------

function reverseAnArrayOfNumbers(num, inputArr) {
  return inputArr.slice(0, num).reverse().join(' ')
}

//console.log(reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]))
//console.log(reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]))