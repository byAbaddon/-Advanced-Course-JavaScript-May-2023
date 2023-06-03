arr => { loop = arr.pop();  while (loop--) arr.unshift(arr.pop()); return arr.join( ' ')}

//---------------------------------------(2)--------------------------

function rotateArray(arr) {
  let loop = arr.pop()
  while (loop--) arr.unshift(arr.pop())
  return  arr.join(' ')
}

//console.log(rotateArray(['1', '2', '3', '4', '2']))

//----------------------------------------(3)-----------------------------
function rotateArray(arr) {
  let num = arr.pop()
  for (let i = 0; i < num; i++) {
    let el = arr.pop()
    arr.unshift(el)
  }
  
  console.log(arr[0] !== 'remove' ? arr.join(' ') : 'Empty');
}

// rotateArray(['1', '2', '3', '4', '2'])
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
// rotateArray(['remove', 'remove', 'remove'])