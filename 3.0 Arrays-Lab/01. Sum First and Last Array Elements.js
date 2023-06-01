arr => +arr.shift() + arr.pop()

//------------------------------------(2)-----------------------------------------

function sumFirstAndLastArrayElements(inputArray) {
  let arr = [...inputArray]              //good practice, don't touch original array
  let firstEl = arr.shift()
  let lastEl = +arr.pop()                //bad cast  [+] , use Number()  
  let result = Number(firstEl) + lastEl  //good cast Number(), but long
  return result                          // function must use return not console.log()!
}

//console.log(sumFirstAndLastArrayElements(['10', '17', '22', '33']))