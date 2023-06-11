(name, lastName, hairColor) => JSON.stringify({name, lastName, hairColor})

//-------------------------------(2)-------------------------------------

function convertToJSON(...arr) {
  let [name, lastName, hairColor] = arr
  let obj = { name, lastName, hairColor}
  let objToStr = JSON.stringify(obj)
  console.log(objToStr); 
}

// convertToJSON('George', 'Jones', 'Brown')