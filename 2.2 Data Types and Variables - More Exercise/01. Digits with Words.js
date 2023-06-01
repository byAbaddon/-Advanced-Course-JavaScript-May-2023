arg => ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].indexOf(arg)  



//--------------------------------------(2)-----------------------

function digitsWithWords(arg) {
  const days = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,'six': 6, 'seven': 7, 'eight': 8, 'nine': 9}  
  return days[arg] 
}

// console.log(digitsWithWords('two'))

//--------------------------------------(3)-----------------------

function digitsWithWords(arg) {
  let result = ''
  switch (arg) {
    case 'zero': result = 0 ;break;
    case 'one':  result = 1 ;break;
    case 'two':  result = 2 ;break;
    case 'three':result = 3 ;break;
    case 'four': result = 4 ;break;
    case 'five': result = 5 ;break;
    case 'six':  result = 6 ;break;
    case 'seven':result = 7 ;break;
    case 'eight':result = 8 ;break;
    case 'nine': result = 9 ;break; 
  }

  return result
}

//console.log(digitsWithWords('two'))


