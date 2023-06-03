function dungeonestDark(rooms) {
  let health = 100
  let coins = countRoom = 0

  for (const room of String(rooms).split('|')) {
    let [item, points] = room.split(' ')
    countRoom++

    if (item == 'potion') {
      currentHealth = health
      health += +points
      if (health > 100) {
        health = 100
        points = 100 - currentHealth
      }

      console.log(`You healed for ${points} hp.\nCurrent health: ${health} hp.`)

    } else if (item == 'chest') {
      console.log(`You found ${points} coins.`);
      coins += +points

    } else {
      health -= +points
      if (health > 0) {
        console.log(`You slayed ${item}.`)
      } else {
        return `You died! Killed by ${item}.\nBest room: ${countRoom}`

      }
    }
  }

  return `You've made it!\nCoins: ${coins}\nHealth: ${health}`
}

//console.log(dungeonestDark('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'))
//console.log(dungeonestDark('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'))