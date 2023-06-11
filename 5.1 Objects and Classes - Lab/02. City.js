obj => { for (const k in obj) console.log(k + ' -> ' + obj[k])}

//-------------------------------(2)-------------------------------------

function city(inputObj) {
  for (const key in inputObj) console.log(key + ' -> ' + inputObj[key])
}


//------------------------------------------------------------------------

// city({
//   name: "Sofia",
//   area: 492,
//   population: 1238438,
//   country: "Bulgaria",
//   postCode: "1000"
// })



//===============================  if input == object not work in Judge 
function city(...arr) {
  let objInfo = {name : arr[0], area : arr[1], population : arr[2], country : arr[3], postCode : arr[4]}
  for (const key in objInfo) console.log(key + ' -> ' + objInfo[key]);
}

//city("Sofia"," 492", "1238438", "Bulgaria", "1000")


