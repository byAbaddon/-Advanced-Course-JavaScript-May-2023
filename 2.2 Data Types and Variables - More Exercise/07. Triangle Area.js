(...arg) => {
  let aS = arg.reduce((a, x) => a + x) / 2
  return Math.sqrt(aS * (aS - arg[0]) * (aS - arg[1]) * (aS - arg[2]))
}


//------------------------------------(2)----------------------------------

function triangleArea(a, b, c) {
  let allSide = (a + b + c) / 2;
  let area = Math.sqrt(allSide * (allSide - a) * (allSide - b) * (allSide - c));
  return area
}

//console.log(triangleArea(2, 3.5, 4))