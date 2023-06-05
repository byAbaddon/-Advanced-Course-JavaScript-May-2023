function bombNumbers(targetArr, bomb) { 
  let [bombTarget, bombSpread] = bomb
  let targetIndex = targetArr.indexOf(bombTarget)

  while (targetIndex ^ -1) {
    targetArr.splice(targetIndex, bombSpread) 

    if (targetIndex - bombSpread < 0) {
      targetArr.splice(0, bombSpread + 1) 
    } else {
      targetArr.splice(targetIndex - bombSpread, bombSpread + 1)
    }

    targetIndex = targetArr.indexOf(bombTarget)
  }

  return targetArr.reduce((a, b) => a + b, 0)
}

// console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]) )//12
// console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])) //5
// console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])) //4




// function bombNumbers(arr1, arr2) {
//   let [targetArr, bombTarget, bombSpread] = [arr1, ...arr2]


//   try {
//     let targetIndex = targetArr.indexOf(bombTarget)
//     targetArr.splice(targetIndex, bombSpread)

//     if (targetIndex - bombSpread < 0) {
//       targetArr.splice(0, bombSpread + 1)
//     } else {
//       targetArr.splice(targetIndex - bombSpread, bombSpread + 1)
//     }

//   return targetArr.reduce((a, b) => a + b, 0)

//   } catch {}
// }
// console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]) )//12
// console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])) //5
// console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])) //4



