arg => {
  const obj = {
    'Add': (x) => arr.push(x),
    'Remove': x => arr = arr.filter(el => el != x),
    'RemoveAt': x => arr.splice(x, 1),
    'Insert': x => arr.splice(x[1], 0, x[0]),
  }

  let arr = arg.shift().split(' ')
  for (const token of arg) {
    const [command, ...n] = token.split(' ')
    obj[command](n)
  }

  return arr.join(' ')
}


//-----------------------------(2)-----------------------------------

function arrayManipulations(arr) {
  let arrOfNum = arr.shift().split(' ').map(Number)

  for (let i = 0; i < arr.length; i++) {
    let [command, num, index] = arr[i].split(' ')
    if (command == 'Add') arrOfNum.push(num)
    if (command == 'Remove') arrOfNum = arrOfNum.filter(el => el !== +num)
    if (command == 'RemoveAt') arrOfNum.splice(num, 1)
    if (command == 'Insert') arrOfNum.splice(index, 0, num)
  }

  return arrOfNum.join(' ')
}


//console.log(arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']))

//-------------------------------------------------------------------(3)------------------------------------------------------

function arrayManipulations(inputArr) {
  let arr = [...inputArr]
  let listOfNum = arr.shift().split(' ').map(Number)

  for (let i = 0; i < arr.length; i++) {
    let [command, num, index] = arr[i].split(' ')

    switch (command) {
      case 'Add':
        listOfNum.push(num)
        break;
      case 'Remove':
        listOfNum = listOfNum.filter(el => el !== +num)
        break;
      case 'RemoveAt':
        listOfNum.splice(num, 1)
        break;
      case 'Insert':
        listOfNum.splice(index, 0, num)
        break;
    }
  }

  console.log(listOfNum.join(' '));
}

//arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])