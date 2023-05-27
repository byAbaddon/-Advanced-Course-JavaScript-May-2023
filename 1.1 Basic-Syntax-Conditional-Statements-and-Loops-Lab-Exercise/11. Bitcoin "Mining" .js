function bitcoin(arg) {
  const goldPrice = 67.51
  const bitcoinPrice = 11949.16
  let bitcoinCounter = firstDay = allMoney = 0
  
  for (let i = 1; i <= arg.length; i++) {
    let goldMined = arg[i - 1]
    i % 3 == 0 ? goldMined *= 0.70 : null
    allMoney += goldMined * goldPrice

    if (allMoney >= bitcoinPrice) {
      firstDay == 0 ? firstDay = i : null
      bitcoinCounter += Math.trunc(allMoney / bitcoinPrice)
      allMoney %= bitcoinPrice
    }
  }

  console.log(`Bought bitcoins: ${bitcoinCounter}`)

  if (firstDay > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`)
  }

  console.log(`Left money: ${allMoney.toFixed(2)} lv.`)
}

//bitcoin([100, 200, 300])
//bitcoin([50, 100])
//bitcoin([3124.15, 504.212, 2511.124])