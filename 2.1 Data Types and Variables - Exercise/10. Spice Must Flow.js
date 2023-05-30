function spiceMustFlow(yields) {
  let totalAmount = operatedDays = 0
  
  while (yields >= 100) {
    operatedDays++
    totalAmount += yields - 26
    yields -= 10

    yields < 100 ? totalAmount -= 26 : null
  }

  return `${operatedDays}\n${totalAmount}`
}

// console.log(spiceMustFlow(111))