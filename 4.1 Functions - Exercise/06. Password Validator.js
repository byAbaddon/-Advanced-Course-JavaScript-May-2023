function passwordValidator(pass) { 
  let check = true

  if (!/.{6,10}/gim.test(pass)) {
    check = false
    console.log('Password must be between 6 and 10 characters')
  }
  
  if (/(\W|_)/gim.test(pass)) { 
    check = false
    console.log('Password must consist only of letters and digits')
  }
  
  if (!/(\d{2})/gim.test(pass)) {
    console.log('Password must have at least 2 digits')
    check = false
  }

  if (check === true) {
    console.log('Password is valid')
  }
}

//passwordValidator('logIn')
//passwordValidator('MyPass123')
//passwordValidator('Pa$s$s')
//passwordValidator(`Pa12123`)

