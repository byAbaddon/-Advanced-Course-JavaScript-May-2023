 n => {
  const arr = [...Array(n * 2).keys()].filter((x, i)=> i & 1)
  for (const num of arr) console.log(num)
  console.log('Sum:', arr.reduce((a, b) => a + b))
}


//--------------------------------(2)--------------------

function sumOfOddNumbers(count) {
  let sum = 0
  for (let i = 1; i <= 100; i++) {
    if ((i & 1) !== 0 && count > 0) {
      sum += i
      count--
      console.log(i);
    }
  }
  console.log('Sum:', sum);
}
//sumOfOddNumbers(3)