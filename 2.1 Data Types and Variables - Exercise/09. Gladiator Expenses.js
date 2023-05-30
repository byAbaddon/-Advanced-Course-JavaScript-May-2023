function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  const trashedHelmets = ~~(lostFights / 2) * helmetPrice
  const trashedSwords = ~~(lostFights / 3) * swordPrice
  const trashedShields = ~~(lostFights / 6) * shieldPrice
  const trashedArmors = ~~(lostFights / 12) * armorPrice
  const expenses = trashedHelmets + trashedSwords + trashedShields + trashedArmors

  return `Gladiator expenses: ${expenses.toFixed(2)} aureus`
}

//---------------------------------------------------------------(2)--------------------------------------------------

function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, amorPrice) {
  let brokenHelmet = brokenSword = brokenShield = brokenAmor = 0

  for (let i = 1; i <= lostFight; i++) {
    i % 2 == 0 ?  brokenHelmet++ : null
    i % 3 == 0 ?  brokenSword++ : null
    i % 6 == 0 ?  brokenShield++ : null
    i % 12 == 0 ? brokenAmor++ : null
  }

  let expenses = (brokenHelmet * helmetPrice) +
                 (brokenSword * swordPrice)   + 
                 (brokenShield * shieldPrice) +
                 (brokenAmor * amorPrice)

  return `Gladiator expenses: ${expenses.toFixed(2)} aureus`
}

// console.log(gladiatorExpenses(7, 2, 3, 4, 5))
//console.log(gladiatorExpenses(23, 12.50, 21.50, 40, 200))



