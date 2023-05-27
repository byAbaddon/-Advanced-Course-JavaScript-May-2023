(n, r) => parseFloat(n.toFixed(r > 15 ? 15 : r))

//-----------------------------(2)---------------------------

function rounding(num, round) {
  return parseFloat(num.toFixed(round > 15 ? 15 : round))
}

// console.log(rounding(3.1415926535897932384626433832795, 2))
// console.log(rounding(10.5 , 3))