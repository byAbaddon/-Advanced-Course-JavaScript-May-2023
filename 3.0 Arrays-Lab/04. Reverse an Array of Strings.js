arr => arr.reverse().join(' ')

//------------------------------------(2)-----------------------------------------

function reverseAnArrayOfStrings(inputArray) {
  return inputArray.reverse().join(' ')
}

//console.log(reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']))
//console.log(reverseAnArrayOfStrings(['33', '123', '0', 'dd']))



//----------------------------------------(3)---------------------------

function reverseAnArrayOfStrings(inputArray) {
  let arr = [...inputArray]
  let str = ' '
  while (arr.length > 0) {
    str += arr.pop() + ' '
  }
  console.log(str);
}

// reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])
// reverseAnArrayOfStrings(['33', '123', '0', 'dd'])