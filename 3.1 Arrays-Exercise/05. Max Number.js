arr => arr.reduceRight((a, x) => (x > (!a.length ? -1 : a[0]) ? [x, ...a] : a), []).join(' ')

//-----------------------------------------------(2)----------------------------------
function maxNumber(arr) { 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      arr.splice(i - 1, 1)
      i = 0;
    }
  }

  return arr.join(' ')
}

//console.log(maxNumber([14, 24, 3, 19, 15, 17]))
// console.log(maxNumber([27, 19, 42, 2, 13, 45, 48]))


