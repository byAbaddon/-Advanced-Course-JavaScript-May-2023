arr => {
  let herosArr = arr.reduce((a, x) => {
    const [name, level, items] = x.split(' / ')
    a.push(Object.assign({}, {name, level, items}))
    return a
  }, []).sort((a, b) => a.level - b.level)

  for (const hero of herosArr) {
    const sortedItems = hero.items.split(', ').sort((a, b) => b - a).join(', ')
    console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${sortedItems}`);
  }
}

//---------------------------------------------(2)-----------------------------------
function inventory(arr) {
  let objHeros = {}
  let arrHero = []

  for (let i = 0; i < arr.length; i++) {
    let [name, level, items] = arr[i].split(' / ')
    objHeros = {
      name,
      level,
      items: items.split(', ').sort((a, b) => b - a).join(', ') //localeCompare()  the items are sorted alphabetically ??? 
    }
    arrHero.push(objHeros)
  }

  arrHero.sort((a, b) => a.level - b.level).forEach(key => {
    console.log(`Hero: ${key.name}`);
    console.log(`level => ${key.level}`);
    console.log(`items => ${key.items}`);
  })
}

// inventory([
//   "Isacc / 25 / Apple, GravityGun",
//   "Derek / 12 / BarrelVest, DestructionSword",
//   "Hes / 1 / Desolator, Sentinel, Antara"
//   ])