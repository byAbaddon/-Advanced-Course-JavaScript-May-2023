function houseParty(guests) {
  let partyList = new Set()
  for (const token of guests) {
    const [name, _, status] = token.split(' ')
    if (!partyList.has(name) && status == 'going!') partyList.add(name)
    else if (!partyList.has(name) && status == 'not') console.log(`${name} is not in the list!`)
    else if (partyList.has(name) && status == 'going!') console.log(`${name} is already in the list!`)
    else partyList.delete(name)
  }

  return [...partyList].join('\n')
}

//console.log(houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']));

//-------------------------------------------------(2)------------------------------------

function houseParty(arr) {
  let partyList = []
  let name = isGoing = ''

  for (let i = 0; i < arr.length; i++) {
    name = arr[i].split(' ')[0]
    isGoing = arr[i].split(' ').slice(1, )

    if (isGoing.length < 3) {
      if (!partyList.includes(name)) {
        partyList.push(name)
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (partyList.includes(name)) {
        let findIndexName = partyList.lastIndexOf(name)
        partyList.splice(findIndexName, 1)
      } else {
        console.log(`${name} is not in the list!`);
      }

    }
  }

  for (const el of partyList) {
    console.log(el);
  }
}



// houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
// houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])