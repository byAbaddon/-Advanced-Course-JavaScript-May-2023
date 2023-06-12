arr => arr.forEach(x => {
  const [town, latitude, longitude] = x.split(' | ').map(x => !isNaN(x) ? Number(x).toFixed(2) : x)
    console.log({ town, latitude, longitude })
})

//------------------------------------(2)------------------------------

function towns(arr) {
   for (let i = 0; i < arr.length; i++) {
     let [town, latitude, longitude] = arr[i].split(' | ')
     latitude =  Number(latitude).toFixed(2)
     longitude =  Number(longitude).toFixed(2)
     objTowns = {town, latitude, longitude}
     console.log(objTowns);
   }
}

// towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])