arr => arr.sort().map((x, i) => `${i + 1}.${x}`).join('\n')

//------------------------------(2)-------------------

function listOfProducts(arr) {
  arr.sort().forEach((el, i) => console.log(`${++i}.${el}`))
}

//listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])