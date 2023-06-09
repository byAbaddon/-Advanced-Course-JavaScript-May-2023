function chrystalFabric(array) { 
  let neededTks = array[0]

  for (let i = 1; i < array.length; i++) {
      let currentTks = array[i]

      console.log(`Processing chunk ${currentTks} microns`)

      let cut = n => n / 4
      let lap = n => n - n * 0.2
      let grind = n => n - 20
      let etch = n => n - 2
      let xray = n => n + 1

      let cutCount = lapCount = grindCount = etchCount = 0

      while (currentTks !== neededTks) {
          while (currentTks / 4 >= neededTks) {
              currentTks = cut(currentTks);
              cutCount++
          }
          if (cutCount > 0) {
              console.log(`Cut x${cutCount}`)
              console.log(`Transporting and washing`)
              currentTks = Math.floor(currentTks)
          }

          while (currentTks - currentTks * 0.2 >= neededTks) {
              currentTks = lap(currentTks)
              lapCount++
          }
          if (lapCount > 0) {
              console.log(`Lap x${lapCount}`)
              console.log(`Transporting and washing`)
              currentTks = Math.floor(currentTks)
          }

          while (currentTks - 20 >= neededTks) {
              currentTks = grind(currentTks)
              grindCount++
          }
          if (grindCount > 0) {
              console.log(`Grind x${grindCount}`)
              console.log(`Transporting and washing`)
              currentTks = Math.floor(currentTks);
          }

          while (currentTks - 2 >= neededTks - 1) {
              currentTks = etch(currentTks)
              etchCount++
          }
          if (etchCount > 0) {
              console.log(`Etch x${etchCount}`)
              console.log(`Transporting and washing`);
              currentTks = Math.floor(currentTks)
          }

          if (currentTks < neededTks) {
              currentTks = xray(currentTks)
              console.log(`X-ray x1`)
          }
      }
      console.log(`Finished crystal ${neededTks} microns`)
  }
}


//------------------------------------(2)----------------------todo one Memory error

function radioCrystals(inputArr) {
  let carat = inputArr.shift()
  let crystalList = [...inputArr]
  let crystal = crystalList.shift()
  const operationCounter = {Cut: 0, Lap: 0, Grind: 0, Etch: 0}

  function washingTrunc() {
    crystal = Math.trunc(crystal)
    if (carat === crystal) {
      for (const key in operationCounter) {
        if (operationCounter[key] > 0) {
          console.log(key + ' x' + operationCounter[key])
          console.log('Transporting and washing')
        }

      }
      console.log(`Finished crystal ${carat} microns`)

      for (const el in operationCounter) { //reset values object operationCounter
        operationCounter[el] = 0
      }

      crystal = crystalList.shift()
      if (crystal !== undefined) {
        console.log(`Processing chunk ${crystal} microns`)
      }

    }
  }

  console.log(`Processing chunk ${crystal} microns`)

  while (carat !== crystal) {

    if (crystal === undefined) {
      return
    }

    while (crystal / 4 >= carat) {
      crystal /= 4
      operationCounter.Cut++
      washingTrunc()
    }

    while (crystal * 0.80 >= carat) {
      crystal *= 0.80
      operationCounter.Lap++
      washingTrunc()
    }

    while (crystal - 20 >= carat) {
      crystal -= 20
      operationCounter.Grind++
      washingTrunc()
    }

    while (crystal - 2 >= carat) {
      crystal -= 2
      operationCounter.Etch++
      washingTrunc()
    }

    if (crystal + 1 === carat + 2) {
      crystal += 1
      washingTrunc()
    }
  }

  console.log(`X-ray x1`)
  console.log(`Finished crystal ${carat} microns`)
}

//radioCrystals([1375, 50000])
// radioCrystals([1000, 4000, 8100])
