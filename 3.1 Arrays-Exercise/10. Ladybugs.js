function ladybugs(arr) {
  let arrLength = arr.shift()
  let position = arr.shift().split(' ').map(Number)
  let fieldArr = new Array(arrLength).fill(0)

  for (let i = 0; i < arrLength; i++) {
    let index = position[i]
    if (index < arrLength) fieldArr[index] = 1
  }

  for (const el of arr) {
    let [strPos, direction, endPos] = el.split(' ').map(el => isNaN(el) ? el : Number(el))
    if (fieldArr[strPos] !== 1 || strPos < 0 || strPos >= fieldArr.length) continue
    if (endPos < 0) endPos = Math.abs(endPos)

    let index = 0
    fieldArr[strPos] = 0

    if (direction == 'left') {
      index = strPos - endPos
      if (fieldArr[index] == 1)
        index -= endPos;
    } else { //right
      index = strPos + endPos
      if (fieldArr[index] == 1)
        index += endPos
    }

    if (index >= 0 && index < fieldArr.length)
      fieldArr[index] = 1
  }

  return fieldArr.join(' ')
}


//console.log(ladybugs([3, '0 1', '0 right 1', '2 right 1']))
//console.log(ladybugs([3, '0 1 2','0 right 1','1 right 1','2 right 1']))
//console.log(ladybugs([5, '3',  '3 left 2',  '1 left -2']))