//--------------------------------------------------------------//reduce

arr => Object.entries(arr.reduce((acc, x) => (!acc[x] ? acc[x] = 1 : acc[x]++, acc), {}))
  .sort((a, b) => b[1] - a[1])
  .forEach(x => console.log(x[0], '->', x[1], 'times'))

//-------------------------------------(2)-----------------------//obj short
function wordOccurrences(arg, obj={}) {
  for (word of arg) obj[word] = (obj[word] || 0) + 1
  Object.entries(obj).sort((a, b) => b[1] - a[1])
    .forEach(x => console.log(x[0] + ' -> ' + x[1] + ' times'))
}

//-------------------------------------(3)----------------------//obj
function wordOccurrences(arg, obj={}) {
  for (word of arg) {
    if(!obj[word]) obj[word] = 0
    obj[word] += 1
  }
  
  Object.entries(obj).sort((a, b) => b[1] - a[1])
    .forEach(x => console.log(x[0] + ' -> ' + x[1] + ' times'))
}

//-------------------------------------(4)----------------------//map

function wordOccurrences(arg) {
  let map = new Map()

  while (arg.length) {
    let word = arg.shift()
    if (!map.has(word)) map.set(word, 1)
    else map.set(word, map.get(word) + 1)
  }

  [...map.entries()].sort((a, b) => b[1] - a[1])
    .forEach(x => console.log(x[0] + ' -> ' + x[1] + ' times'))
}

//wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
