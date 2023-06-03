function tseamAccount(arr) {
  arr.pop()
  let gameArr = arr.shift().split(' ')

  while (arr.length > 0) {
    const [command, game] = arr.shift().split(' ')

    if (command == 'Install' && !gameArr.includes(game)) {
      gameArr.push(game)
    }

    if (command == 'Uninstall' && gameArr.includes(game)) {
      gameArr = gameArr.filter(el => el !== game)
    }

    if (command == 'Update' && gameArr.includes(game)) {
      let index = gameArr.indexOf(game)
      gameArr.splice(index, 1)
      gameArr.push(game)

    }

    if (command == 'Expansion') {
      let firstPart = game.split('-')[0]
      let secondPart = game.split('-')[1]
      if (gameArr.includes(firstPart)) {
        let index = gameArr.indexOf(firstPart)
        gameArr.splice(index + 1, 0, firstPart + ':' + secondPart)
      }
    }
  }

  return gameArr.join(' ')
}


// console.log(tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']))
// console.log(tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']))