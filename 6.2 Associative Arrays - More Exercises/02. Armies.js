function armies(input) {
    let obj = {}
  
    for (let line of input) {
      if (line.includes('arrives')) {
        let leader = line.split(' ').slice(0, -1).join(' ')
        obj[leader] = {}
      } else if (line.includes(':')) {
        let [leader, armyInfo] = line.split(': ')
        if (obj.hasOwnProperty(leader)) {
          let [army, count] = armyInfo.split(', ')
          obj[leader][army] = Number(count)
        }
      } else if (line.includes('+')) {
        let [army, count] = line.split(' + ')
        let leader = Object.keys(obj).find((key) => obj[key].hasOwnProperty(army))
        if (leader) {
          obj[leader][army] +=  Number(count)
        }
      } else {
        let leader = line.split(' ').slice(0, -1).join(' ')
        if (obj.hasOwnProperty(leader)) {
          delete obj[leader]
        }
      }
    }
  
    for (let leader in obj) {
      let totalCount = Object.values(obj[leader]).reduce((acc, x) => acc + x, 0)
      obj[leader].totalCount = totalCount
    }
  
  Object.entries(obj).sort((a, b) => b[1].totalCount - a[1].totalCount)
    .forEach((pair) => {
      console.log(`${pair[0]}: ${pair[1].totalCount}`)
      pair[1] = Object.entries(pair[1]).sort((a, b) => b[1] - a[1])
      for (let armyPair of pair[1]) {
        if (armyPair[0] !== 'totalCount') {
          console.log(`>>> ${armyPair[0]} - ${armyPair[1]}`)
        }
      }
    })
  }
  
  
// armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])