function netherRealms(inputArr) {   //90pts runTime error ?!?
  let arr = String(inputArr).split(/[, ]+/g).sort()
  let health = 0
  let damage = 0
  let symbol = ''

  for (const el of arr) {
    health = el.match(/([^\d\.\/\+\-\*])/g).map(el => el.charCodeAt()).reduce((a, b) => a + b)
    damage = el.match(/-?\d+\.?\d*/gm)
    symbol = el.match(/[*\/]/gm)

    if (damage !== null) {
      damage = damage.reduce((a, b) => +a + +b)
    } else {
      damage = 0
    }

    if (symbol !== null) {
      for (const operator of symbol) {
        damage = eval(`${damage} ${operator} ${2}`)
      }
    }

    console.log(`${el} - ${health} health, ${damage.toFixed(2)} damage`);
  }
}

//netherRealms(['M3ph-0.5s-0.5t0.0**'])
//netherRealms(['M3ph1st0**', 'Azazel'])
//netherRealms(['Gos/ho'])

//=================================================( 100pts copy and fix ) ===================================

function netherRealms(input) {             
  let damage = 0;
  
  let sorted = input[0].split(/[, ]+/g).sort((a, b) => (a.localeCompare(b)));
  let resultObj = {};
  for (let text of sorted) {
      text = text.trim();        
      let digitPattern = /-?\d+\.?\d*/gm; 
      let damagePattern = /[*\/]/gm;
      let healthPattern = /[^\d\.\+\-\*\/\,]+/gm;
      let digitResult = text.match(digitPattern);
      
      if (digitResult !== null) {
          
          damage = digitResult.map(Number).reduce((a, b) => (a + b));
          let damageArr = text.match(damagePattern);
          
          if (damageArr) {
              for (let char of damageArr) {
                  if (char === "*") {
                      damage *= 2;
                  }
                  else if (char === "/") {
                      damage /= 2;
                  }
              }
          }
      }

      let healthArr = text.match(healthPattern);
      
      let health = healthArr
          .reduce((a, b) => a + b)
          .split("")
          .filter(x => x !== " ")
          .map(symbol => symbol.charCodeAt())
          .reduce((a, b) => a + b);
      if (!resultObj[text]) {
          resultObj[text] = [health, damage];
      }
      damage = 0;
  }
  let sortedObj = Object.entries(resultObj).sort((a, b) => a[0].localeCompare(b[0]));
  for (let [name, [health, damage]] of sortedObj) {
      console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
  }    
}