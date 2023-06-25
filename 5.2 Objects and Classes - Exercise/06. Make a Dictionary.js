arr => {
   obj = arr.reduce((acc, x) => {
      let en = Object.entries(JSON.parse(x))[0]
      acc[en[0]] = en[1]
      return acc
   }, {})

   Object.keys(obj).sort()
      .forEach(el => console.log(`Term: ${el} => Definition: ${obj[el]}`))
}

//---------------------------------------------(2)-----------------------------------

function makeADictionary(input) {
   let obj = {}

   for (const row of input) {
      let arrCollection = JSON.parse(row)
      let en = Object.entries(arrCollection)[0]
      obj[en[0]] = en[1]
   }

   Object.keys(obj).sort((a, b) => a.localeCompare(b))
      .forEach(el => console.log(`Term: ${el} => Definition: ${obj[el]}`))
}

// makeADictionary([
//    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ])
