arr => {
  obj = arr.map(x => x.split(' -> ')).reduce((acc, [company, id]) => {
    if (!acc[company]) acc[company] = new Set()
    acc[company].add(id)
    return acc
  }, {})
  for (const [k, v] of Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))) {
    console.log(k)
    Array.from(v).forEach(x => console.log('--', x))
  }
}


//---------------------------------(2)----------------------

function companyUsers(arr) {
  let objCompany = {}

  while (arr.length) {
    let [company, id] = arr.shift().split(' -> ')
    if (!objCompany.hasOwnProperty(company))
      objCompany[company] = new Array(id)
    else {
      if (!objCompany[company].includes(id))
        objCompany[company].push(id)
    }
  }

  objCompany = Object.entries(objCompany).sort((a, b) => a[0].localeCompare(b[0]))
  for (const [key, value] of objCompany) {
    console.log(key)
    value.forEach(el => console.log('--', el))
  }
}

// companyUsers(
//   [
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
//     ])