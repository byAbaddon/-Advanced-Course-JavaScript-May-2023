function postOffice(arr) {
  arr = arr[0]
  let map = new Map();
  let [firstPart, secPart, thirdPart] = arr.match(/[^\|]+/g)
  thirdPart = thirdPart.split(/\s+/g)
  let capitals = firstPart.match(/([#$%*&])[A-Z]+\1/g)
  if (capitals !== null) {
      capitals = capitals[0].match(/[A-Z]/g)
      for (let cap of capitals) {
          map.set(cap, 0)
      }
  }
  let codes = secPart.match(/\d{2}:\d{2}/g)
  if (codes !== null) {
      for (let elem of codes) {
          let asciiCode = Number(elem.split(":")[0])
          let length = Number(elem.split(":")[1]) + 1
          let letter = String.fromCharCode(asciiCode)
          if (map.has(letter)) {
              let num = map.set(letter, length);

          }
      }
  }
  for (let kvp of map) {
      for (let word of thirdPart) {
          if (word[0] === kvp[0] && word.length === kvp[1]) {
              console.log(word);
          }
      }
  }
}


// postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'])