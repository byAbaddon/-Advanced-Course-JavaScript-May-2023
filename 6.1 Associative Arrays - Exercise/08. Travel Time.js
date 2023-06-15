function travelTime(arr) {
  let objTravel = {}

  while (arr.length) {
    let [country, city, price] = arr.shift().split(' > ')
    if (!objTravel[country]) objTravel[country] = {}
    if (!objTravel[country][city]) objTravel[country][city] = price
    else if (objTravel[country][city] > price) objTravel[country][city] = price
  }

  objTravel = Object.entries(objTravel).sort((a, b) => a[0].localeCompare(b[0]))

  for (let [key, valKey] of objTravel) {
    valKey = Object.entries(valKey).sort((a, b) => a[1] - b[1])
    console.log(key + ' ->', Object.values(valKey).map(city => city.join(' -> ')).join(' '))
  }
}

// travelTime(
//   [
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
//   ])