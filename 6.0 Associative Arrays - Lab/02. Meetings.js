arr => arr.reduce((acc, token) => {
  const [day, name] = token.split(' ')
  if (acc.filter(x => x.includes(day)).length) {
    console.log(`Conflict on ${day}!`)
  } else {
    console.log(`Scheduled for ${day}`)
    acc.push(`${day} -> ${name}`)
  }
  return acc
}, []).forEach(x => console.log(x))


//-------------------------------------(2)----------------------

function meetings(arr) {
  meetObj = {}

  for (const token of arr) {
    [day, names] = token.split(' ')

    if (meetObj.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`)
    } else {
      meetObj[day] = names
      console.log(`Scheduled for ${day}`)
    }
  }

  for (const [key, val] of Object.entries(meetObj)) {
    console.log(key, '->', val)
  }
}

// meetings(['Monday Peter','Wednesday Bill','Monday Tim','Friday Tim'])