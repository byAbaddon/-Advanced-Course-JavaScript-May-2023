function winningTicket(...arr) {
  arr = arr.shift().split(/\s*,\s*/g)

  for (let line of arr) {
    if (line.length !== 20) {
      console.log('invalid ticket')
      continue
    }

    let pattern = /(\@{6,}|\${6,}|\^{6,}|\#{6,})/g
    let firstHalf = line.substring(0, line.length / 2).match(pattern)
    let secHalf = line.substring(line.length / 2, line.length).match(pattern)

    if (firstHalf !== null && secHalf !== null) {
      let combination
      if (firstHalf[0].length === secHalf[0].length)
        combination = firstHalf[0]
      else if (firstHalf[0].length > secHalf[0].length)
        combination = secHalf[0]
      else
        combination = firstHalf[0]

      if (combination.length >= 6 && combination.length <= 9)
        console.log(`ticket "${line}" - ${combination.length}${combination[0]}`)
      else if (combination.length === 10)
        console.log(`ticket "${line}" - ${combination.length}${combination[0]} Jackpot!`)
      else
        console.log(`ticket "${line}" - no match`)

    } else
      console.log(`ticket "${line}" - no match`)
  }
}

// winningTicket('$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey')