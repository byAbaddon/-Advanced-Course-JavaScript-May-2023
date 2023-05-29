function fuelMoney(distance, passengers, priceOneLtDiesel) {
  let emptyBusFuel = distance / 100 * 7
  let numberPassenger = passengers * 0.100
  let neededMoney = (emptyBusFuel + numberPassenger) * priceOneLtDiesel

  return `Needed money for that trip is ${neededMoney}lv.`
}

//console.log(fuelMoney(260, 9, 2.49))
//console.log(fuelMoney(90, 14, 2.88))