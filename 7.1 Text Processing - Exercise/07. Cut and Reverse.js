str => (
  [
    [...str.slice(0, str.length / 2)],
    [...str.slice(str.length / 2)]
  ].forEach(x => console.log(x.reverse().join('')))
)

//-----------------------------------(2)------------------------------

function cutAndReverse(str) {
  let halfPartStr = str.length / 2
  console.log(Array.from(str.substring(0, halfPartStr)).reverse().join(''))
  console.log(Array.from(str.substring(halfPartStr, )).reverse().join(''))
}

//cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')