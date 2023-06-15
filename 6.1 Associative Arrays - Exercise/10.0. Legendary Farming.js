function farming(arr) {
  let objMin = {'shards': 0,'fragments': 0,'motes': 0}
  let objTrash = {}

  arr = arr.split(' ')
  for (let i = 0; i < arr.length; i += 2) {
    const [material, quantity] = [arr[i + 1].toLowerCase(), Number(arr[i])]
    if (['shards', 'fragments', 'motes'].includes(material)) {
      objMin[material] ? objMin[material] += quantity : objMin[material] = quantity
      if (objMin[material] >= 250) {
        objMin[material] -= 250
        const typeMineral = material == 'shards' ? 'Shadowmourne' : material == 'fragments' ? 'Valanyr' : material == 'motes' ? 'Dragonwrath' : null
        console.log(typeMineral, 'obtained!')
        break
      }
    } else {
      objTrash[material] ? objTrash[material] += quantity : objTrash[material] = quantity
    }
  }

  const sortedMinerals = Object.entries(objMin).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach(x => console.log(`${x[0]}: ${x[1]}`))
  const sortedTrash = Object.entries(objTrash).sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(x => console.log(`${x[0]}: ${x[1]}`))
}


//----------------------------------------------(2)-----------------------------

function farming(str = '') {
  let input = str.toLowerCase().split(' ')
  let legendary = { fragments: 0, shards: 0, motes: 0}
  let junk = {}
  let hasToBreak = false
  while (!hasToBreak && input.length > 0) {
    let quantity = +input.shift()
    let material = input.shift()
    switch (material) {
      case 'shards':
        legendary[material] += quantity;
        if (legendary[material] >= 250) {
          console.log(`Shadowmourne obtained!`)
          legendary[material] -= 250
          hasToBreak = true
        }
        break
      case 'fragments':
        legendary[material] += quantity
        if (legendary[material] >= 250) {
          console.log(`Valanyr obtained!`)
          legendary[material] -= 250;
          hasToBreak = true;
        }
        break;
      case 'motes':
        legendary[material] += quantity
        if (legendary[material] >= 250) {
          console.log(`Dragonwrath obtained!`)
          legendary[material] -= 250
          hasToBreak = true
        }
        break
      default:
        if (!junk.hasOwnProperty(material)) {
          junk[material] = 0
        }
        junk[material] += quantity
        break
    }
  }
  let legendItems = Object.entries(legendary)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach((item) => {
      console.log(`${item[0]}: ${item[1]}`)
    });

  let junkItems = Object.entries(junk)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((item) => {
      console.log(`${item[0]}: ${item[1]}`)
    })
}

//console.log(farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'))