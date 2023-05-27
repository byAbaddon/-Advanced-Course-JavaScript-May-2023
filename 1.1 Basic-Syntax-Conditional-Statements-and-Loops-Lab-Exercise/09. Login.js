function login(arg) {
  let userName = arg.shift()
  let passIndex = arg.map(x => x.split('').reverse().join('')).indexOf(userName)
  let loop = passIndex < 0 ? 3 : passIndex

  for (i = 0; i < loop; i++) {
    console.log('Incorrect password. Try again.')
  }
  
  console.log(`User ${userName} ${passIndex > 0 ? 'logged in.' : 'blocked!'}`)
}
//--------------------------------------(2)-----------------------

function login(arr) {
  let username = arr.shift()
  let password = username.split('').reverse().join('')
  let attempt = 0
  let testPass = arr.shift()

  while (testPass != password && attempt++ < 3) {
    console.log(`Incorrect password. Try again.`)
    testPass = arr.shift()
  }

  console.log(`User ${username} ${testPass == password ? 'logged in.' : 'blocked!'}`)
}

// login(['Acer', 'login', 'go', 'let me in', 'recA'])
// login(['sunny','rainy','cloudy','sunny','not sunny'])