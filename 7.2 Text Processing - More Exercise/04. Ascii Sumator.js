arr => {
  try {
    let [s, e, a] = arr.map((x, i) => i > 1 ? x.split('').map(c => c.charCodeAt()) : x.charCodeAt())
    return a.filter(x => s < e && x > s && x < e || s > e && x < s && x > e).reduce((a, x) => a + x)
  } catch { return 0}
}
//----------------------------------------------(2)------------------------------------- 

function asciiSumator(arr) {
  let start = arr.shift().charCodeAt()
  let end = arr.shift().charCodeAt()
  let str = Array.from(...arr).map(el => el.charCodeAt())
  let sum = 0

  for (let char of str) {
    if (start < end && char > start && char < end || start > end && char < start && char > end) {
      sum += char
    }
  }

  return sum
}

// console.log(asciiSumator(['.', '@', 'dsg12gr5653feee5', ]))
// console.log(asciiSumator(['?', 'E', '@ABCEF', ]))
// console.log(asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']))


