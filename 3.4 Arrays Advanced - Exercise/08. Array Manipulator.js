function arrayManipulator(firstArr, secondArr) {
  let arr = firstArr

  secondArr.forEach(el => {
    const command = el.split(' ').shift()
    let number = el.split(' ').filter(n => !isNaN(n)).map(Number)

    if (command == 'print') console.log(`[ ${arr.join(', ')} ]`)
    if (command == 'contains') console.log(arr.indexOf(number[0]))
    if (command == 'remove') arr.splice(number, 1)

    if (command == 'add' || command == 'addMany') {
      const index = number.shift()
      arr.splice(index, 0, ...number)
    }

    if (command == 'shift') {
      while (number--) {
        let movedEl = arr.shift()
        arr.push(movedEl)
      }
    }

    if (command == 'sumPairs') {
      let arrOfSumPairs = []
      while (arr.length != 0) {
        let first = arr.shift() || 0
        let second = arr.shift() || 0
        arrOfSumPairs.push(first + second)
      }

      arr = arrOfSumPairs
    }
  })
}


//arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
// arrayManipulator([2, 2, 4, 2, 4],["add 1 4", "sumPairs", "print"])
// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])
//------------------------------------------------------------(2)-----------------------------------------------------------

function arrayManipulator(arrNum, commandsAndNum) { 
  let arrList = [...arrNum]
  let command = ''
  let numbers = 0
 
  for (let i = 0; i < commandsAndNum.length; i++) {
     command = commandsAndNum[i].split(' ').shift()
     numbers = commandsAndNum[i].split(' ').filter(el => !isNaN(el))

    switch (command) {
      case 'add':
        let startIndex1 = +numbers.shift()
        arrList.splice(+startIndex1, 0, +numbers)
        break;
      case 'addMany':
        let startIndex2 = +numbers.shift()
        arrList.splice(+startIndex2, 0, ...numbers)
        break;
      case 'remove':
        arrList.splice(+numbers, 1)
        break;

      case 'contains':
        console.log(arrList.indexOf(+numbers));
        break;
      case 'shift':
        while (numbers--) {
          let el = +arrList.shift()
          arrList.push(el)
        }

        break;
      case 'sumPairs':
        let arrNewList = []

        while (arrList.length > 0) {
          let first = +arrList.shift() || 0
          let second = +arrList.shift() || 0
          arrNewList.push(first + second)
        }

        arrList = [...arrNewList]
        break;

      case 'print':
        console.log(`[ ${arrList.join(', ')} ]`);
        break;
    }
  }

}

// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
//arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
//arrayManipulator([2, 2, 4, 2, 4],["add 1 4", "sumPairs", "print"])
//arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])
