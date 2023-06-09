arg => {
 let v = 0
 let obj = {v: 0, 'soap': () => v += 10, 'water': ()=> v *= 1.2, 'vacuum cleaner' : ()=> v *= 1.25, 'mud': ()=> v *= 0.9} 
  arg.forEach(x => obj[x](v))
  return `The car is ${v.toFixed(2)}% clean.`
}

//-----------------------------------------------(2)---------------------------
function carWash(arr) {
  let value = 0
  for (const el of arr) el == 'soap' ? value += 10 : el == 'water' ? value *= 1.20 : el == 'vacuum cleaner' ? value *= 1.25 : value *= 0.90
  return `The car is ${value.toFixed(2)}% clean.`
}

//console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])




//---------------------------------------------------(3)-------------------------------------

function carWash(arr) {
  let value = 0

   for (const el of arr) {
     switch (el) {
       case 'soap': value += 10; break;
       case 'water': value *=  1.20;  break;
       case 'vacuum cleaner': value *= 1.25; break;
       case 'mud': value *= 0.90 ;  break;
     }
   }
   
  return `The car is ${value.toFixed(2)}% clean.`
}


// console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']))