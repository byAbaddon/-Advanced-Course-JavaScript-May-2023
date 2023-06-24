function race(input) {
  input.pop()
  let playersName = input.shift().split(', ')
  let objRanking = {}
  let name = ''
  let points = 0

  for (loop of input) {
    name = loop.match(/[A-Za-z]/gm).join('')
    points = loop.match(/\d/gm).reduce((a, b) => (+a + +b))

    if (!objRanking[name] && playersName.includes(name))
      objRanking[name] = points     
    else if (objRanking[name])
      objRanking[name] += points
     
  }

  objRanking = Object.entries(objRanking).sort((a, b) => b[1] - a[1])

  let finishRank = ['1st place:', '2nd place:', '3rd place:']
  let count = 0

  for (const key of objRanking) {
    if (count < 3) {
      console.log(finishRank[count], key[0])
      count++
    }
  }
}

// race([
//   'George, Peter, Bill, Tom',
//   'G4e@55or%6g6!68e!!@',
//   'R1@!3a$y4456@',
//   'B5@i@#123ll',
//   'G@e54o$r6ge#',
//   '7P%et^#e5346r',
//   'T$o553m&6',
//   'end of race'
// ])

//1st place: George
//2nd place: Peter
//3rd place: Tom