function thePyramidOfKingDjoser(...arg) {
  let [baseSide, blockHeight] = arg.map(Number)
  let floor = stone = marble = lapis = gold = 0

  while (baseSide > 1) {
    let totalBlocks = baseSide * baseSide * blockHeight
    let innerBlocks = ((baseSide - 2) * (baseSide - 2)) * blockHeight
    let outerBlocks = totalBlocks - innerBlocks

    if (baseSide - 2 == 0) break

    floor++
    baseSide -= 2

    if (floor % 5 == 0) {
      lapis += outerBlocks
      stone += innerBlocks
    } else {
      marble += outerBlocks
      stone += innerBlocks
    }
  }

  floor++
  height = Math.floor(floor * blockHeight)
  gold += Math.ceil(baseSide * baseSide * blockHeight)

  return `Stone required: ${Math.ceil(stone)}
Marble required: ${Math.ceil(marble)}
Lapis Lazuli required: ${Math.ceil(lapis)}
Gold required: ${gold}
Final pyramid height: ${height}`
  
}

//console.log(thePyramidOfKingDjoser(11, 1))
