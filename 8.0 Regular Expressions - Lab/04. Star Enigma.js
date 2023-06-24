function starEnigma(inputArr) {              //TODO  fucking judge throw runtime error ?!?  80pts only
  let arr = [...inputArr]
  let loop = arr.shift()
  let arrTransformText = []
  let arrAttackedPlanet = [];
  let arrDestroyedPlanet = [];

  while (loop !== 0) {
    let text = arr.shift()
    let decryptionKey = text.match(/[star]/gim).length
    arrTransformText.push([...text].map(el => String.fromCharCode(el.charCodeAt() - decryptionKey)).join(''))
    loop--
  }
  let pattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:[^@\-!:>]*?(?<population>[\d]+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldiers>[\d]+)/gim

  for (const el of arrTransformText) {

    let result = [...el.matchAll(pattern)]

    try {
      let planetName = result[0].groups['planetName']
      let planetPopulation = +result[0].groups['population']
      let attackType = result[0].groups['attackType']
      let soldierCount = +result[0].groups['soldiers']

      if (attackType === 'A') { 
        arrAttackedPlanet.push(planetName.match(/(\w+[^\d])/g))
      } else if (attackType === 'D') {
        arrDestroyedPlanet.push(planetName.match(/(\w+[^\d])/g))
      }

    } catch (undefined) {
      continue
    }
  }

  console.log(`Attacked planets: ${arrAttackedPlanet.length}`);
  arrAttackedPlanet.sort().forEach(el => console.log(`-> ${el}`));
  console.log(`Destroyed planets: ${arrDestroyedPlanet.length}`);
  arrDestroyedPlanet.sort().forEach(el => console.log(`-> ${el}`))
}


// starEnigma([
//   2,
//   'STCDoghudd4=63333$D$0A53333',
//   'EHfsytsnhf?8555&I&2C9555SR',
// ])

starEnigma([
  '3',
  'tt(\'\'DGsvywgerx>6444444444%H%1B9444',
  'GQhrr|A977777(H(TTTT',
  'EHfsytsnhf?8555&I&2C9555SR'
])