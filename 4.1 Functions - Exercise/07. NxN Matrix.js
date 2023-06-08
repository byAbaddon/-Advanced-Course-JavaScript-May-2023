n => (`${n} `.repeat(n) + '\n').repeat(n)

//--------------------------------------------(2)------------------------

function nxNMatrix(n) {
  for (i = 0; i < n; i++) console.log(new Array(n).fill(n).join(' '))
}

// console.log(nxNMatrix(3))

//--------------------------------------------(3)------------------------

function nxNMatrix(n) {
  let str = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str += n + ' '
    }
    console.log(str)
    str = ''
  }
}

// nxNMatrix(3)