function netherRealms(input) {
  let demons = input.split(/\s*,\s*/g).map((el) => el.trim())
  let object = {}
  for (let demon of demons) {
      let health = damage = 0
      if(demon.match( /[^0-9.\/+*-]/g) != null) {
          demon.match(/[^\d\.\+\-\*\/\,]+/gm).join('').split('').forEach(char => health += char.charCodeAt())   
      }
      let getDamage = demon.match(/-?\d+\.?\d*/gm)
      if (getDamage)  getDamage.forEach(el => damage += +el)
        
      let action = demon.match(/[*\/]/gm)
      if (action) {
        action.forEach(el => {
          if (el == '*')  damage *= 2;
          else damage /= 2;    
        })
      }
    if (!object[demon] && demon.length != 0)
      object[demon] = { health: health, damage: damage } 
  }
 
  for(let [key, value] of  Object.entries(object).sort((a, b) => a[0].localeCompare(b[0])))
      console.log(`${key} - ${value.health} health, ${(value.damage).toFixed(2)} damage`)
}



netherRealms('M3ph-0.5s-0.5t0.0**')
//---------------------------



