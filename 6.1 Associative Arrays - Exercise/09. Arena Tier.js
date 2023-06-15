function arenaTier(arg) {
  let obj = {}
  while (arg.length > 1) {
    let token = arg.shift()
    
    if (/->/.test(token)) {
      let [glad, tech, skill] = token.split(' -> ').map(x => isNaN(x) ? x : Number(x))
      obj[glad] = obj[glad] || {}
      obj[glad][tech] = obj[glad][tech] ? Math.max(obj[glad][tech], skill) : skill
    } else {
      const [gladOne, gladTwo] = token.split(' vs ')
      if (obj[gladOne] && obj[gladTwo]) {
        const allTechGladOne = Object.keys(obj[gladOne])
        for (const currentTech of allTechGladOne) {
          if (obj[gladTwo][currentTech]) {
            obj[gladOne][currentTech] < obj[gladTwo][currentTech] ? delete obj[gladOne] : delete obj[gladTwo]
            break
          }
        }
      }
    }
  }

  let gladArr = []
  for (let [glad, skill] of Object.entries(obj)) {
    let name = glad
    let skills = Object.entries(skill)
    let points = skills.map(a => a[1]).reduce((a, b) => a + b)
    gladArr.push([name, skills, points])
  }
  gladArr.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]))
  for (let [name, skills, points] of gladArr) {
    console.log(`${name}: ${points} skill`)
    skills
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(x => console.log(`- ${x[0]} <!> ${x[1]}`))
  }
}

//------------------------------------------------(2)-----------------------------------------------

function arenaTier(arr) {
  let list = {}
  for (let el of arr) {
    if (el == 'Ave Cesar') {
      break
    } else if (el.includes(' -> ')) {
      add(el)
    } else if (el.includes(' vs ')) {
      battle(el)
    }
  }
  let tier = Object.entries(list)
  let array = []
  for (let elem of tier) {
    let name = elem[0]
    let pow = Object.entries(elem[1])
    let sum = pow.map(a => a[1]).reduce((a, b) => a + b)
    array.push([name, pow, sum])
  }
  array.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]))
  for (let part of array) {
    console.log(`${part[0]}: ${part[2]} skill`);
    part[1]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(x => console.log(`- ${x[0]} <!> ${x[1]}`))
  }

  function add(el) {
    let [gladiator, skill, power] = el.split(' -> ')
    power = Number(power)
    if (!list.hasOwnProperty(gladiator)) {
      list[gladiator] = {}
      list[gladiator][skill] = power
    } else {
      if (!list[gladiator].hasOwnProperty(skill)) {
        list[gladiator][skill] = power
      } else {
        let oldPow = list[gladiator][skill]
        if (power > oldPow) {
          list[gladiator][skill] = power
        }
      }
    }
  }

  function battle(el) {
    let [gladiatorA, gladiatorB] = el.split(' vs ')
    if (list.hasOwnProperty(gladiatorA) && list.hasOwnProperty(gladiatorB)) {
      let skillA = list[gladiatorA]
      let skillB = list[gladiatorB]
      for (let elA in skillA) {
        for (let elB in skillB) {
          if (elA === elB) {
            if (skillA[elA] > skillB[elB]) {
              delete list[gladiatorB]
            } else if (skillA[elA] < skillB[elB]) {
              delete list[gladiatorA]
            }
          }
        }
      }
    }
  }
}



// console.log('='.repeat(111))
// arenaTier([
//   'Peter -> BattleCry -> 400',
//   'Alex -> PowerPunch -> 300',
//   'Stefan -> Duck -> 200',
//   'Stefan -> Tiger -> 250',
//   'Ave Cesar'
// ])

// console.log('-'.repeat(122))
// arenaTier([
//   'Pesho -> Duck -> 400',
//   'Julius -> Shield -> 150',
//   'Gladius -> Heal -> 200',
//   'Gladius -> Support -> 250',
//   'Gladius -> Shield -> 250',
//   'Peter vs Gladius',
//   'Gladius vs Julius',
//   'Gladius vs Maximilian',
//   'Ave Cesar'
// ])