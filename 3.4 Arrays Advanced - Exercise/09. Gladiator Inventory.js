arg => {
  let inventory = arg.shift().split(' ')
  arg.reduce((a, x) => {
    let [command, item] = x.split(' ')
    if (command == 'Buy') !a.includes(item) ? a.push(item) : null
    if (command == 'Trash') a.includes(item) ? a.splice(a.indexOf(item), 1) : null
    if (command == 'Repair') a.includes(item) ? a.push(a.splice(a.indexOf(item), 1)) : null
    if (command == 'Upgrade') {
      const el = item.split('-')[0]
      a.indexOf(el) != -1 ? a.splice(a.indexOf(el) + 1, 0, item.replace('-', ':')) : null
    }
    return a
  }, inventory)
  return inventory.filter(x => x != '').join(' ')
}

//---------------------------------------(2)-------------------------

function gladiatorInventory(arr) {
  let inventory = arr.shift().split(' ')

  for (let i = 0; i < arr.length; i++) {
    let [command, item] = arr[i].split(' ')

    switch (command) {
      case 'Buy':
        if (!inventory.includes(item)) {
          inventory.push(item)
        }

        break;
      case 'Trash':
        if (inventory.includes(item)) {
          inventory = inventory.filter(el => el !== item)
        }
        break;
      case 'Repair':
        //isExist
        let findIndexRepair = inventory.indexOf(item)
        if (findIndexRepair !== -1) {
          let getElement = inventory.splice(findIndexRepair, 1)
          inventory.push(getElement[0])
        }
        break;
      case 'Upgrade':
        let [itemOne, itemType] = item.split('-')
        let findIndexUpgrade = inventory.indexOf(itemOne)
        if (findIndexUpgrade !== -1) {
          inventory.splice(findIndexUpgrade + 1, 0, itemOne + ':' + itemType)
        }
        break;
    }
  }

  return inventory.join(' ')
}

//console.log(gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']))
//console.log(gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']))