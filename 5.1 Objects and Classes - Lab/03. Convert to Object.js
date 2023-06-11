arg => Object.entries(JSON.parse(arg)).forEach(x => console.log(`${x[0]}: ${x[[1]]}`))

//-------------------------------(2)-------------------------------------

function convertToObject(arg) {
  let obj = JSON.parse(arg)
  for (const key in obj) {
     console.log(key + ': ' + obj[key]);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')