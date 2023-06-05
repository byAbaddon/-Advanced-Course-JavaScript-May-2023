function buildWall(wall) {
  const [cmB,  pesos, pesosPerDayArr] = [195, 1900, []] 

  while (wall.length) {
    wall = wall.filter(el => el < 30)
    wall.forEach((_, i) => wall[i]++)
    const allCmB = wall.length * cmB
    pesosPerDayArr.push(allCmB)
  }

  const printPesos = pesosPerDayArr.join(', ').slice(0, -3)
  const totalPesos = pesosPerDayArr.reduce((a, b) => a + b) * pesos
  return `${printPesos}\n${totalPesos} pesos`
}


// console.log(buildWall([21, 25, 28]))
//console.log(buildWall([17]))
//console.log(buildWall([17, 22, 17, 19, 17]))



