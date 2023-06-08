n => {
  let sum = 0;
  for (i = 0; i < n; i++) n % i == 0 ? sum += i : null
  return sum == n ? 'We have a perfect number!' : 'It\'s not so perfect.'
}

//-----------------------------(2)----------------------------

function perfectNumber(num) {
  let sumDivisor = 0

  for (let i = 0; i < num; i++)
    num % i == 0 ? sumDivisor += i : null

  return num == sumDivisor ? 'We have a perfect number!' : 'It\'s not so perfect.'
}

// console.log(perfectNumber(28))