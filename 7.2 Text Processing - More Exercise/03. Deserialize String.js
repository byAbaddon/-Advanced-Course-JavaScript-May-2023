arr => arr.slice(0, -1).reduce((acc, x) => {
  [chr, inx] = x.split(':')
  inx.split('/').map(Number).forEach(i => acc[i] = chr)
  return acc
},[]).join('')


//-----------------------------(2)-----------------

function deserializeString(arr) {
  arr.pop()
  let resultArr = []

  for (const token of arr) {
    let [char, index] = token.split(':')
    index = index.split('/')
    for (const i of index) {
      resultArr[+i] = char
    }
  }

  return resultArr.join('')
}

// console.log(deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end']))
//console.log(deserializeString(['a:0/3/5/11', 'v:1/4', 'j:2', 'm:6/9/15', 's:7/13', 'd:8/14', 'c:10', 'l:12', 'end']))
