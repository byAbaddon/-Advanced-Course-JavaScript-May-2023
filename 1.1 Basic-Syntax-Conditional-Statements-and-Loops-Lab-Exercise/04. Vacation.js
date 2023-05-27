function vacation(group, type, day) {
  const obj = {
    Friday: {'Students': 8.45, 'Business': 10.90, 'Regular': 15},
    Saturday: {'Students': 9.80, 'Business': 15.60, 'Regular': 20},
    Sunday: {'Students': 10.46, 'Business': 16, 'Regular': 22.50},
  }

  if (type == 'Business' && group >= 100) group -= 10
  let price = obj[day][type] * group
  
  if(type == 'Students' && group >= 30) price *= 0.85  
  if(type == 'Regular' && group >= 10 && group <= 20) price *= 0.95

  return `Total price: ${price.toFixed(2)}`
}

// console.log(vacation(30, 'Students', 'Sunday'))
// console.log(vacation(40, 'Regular', 'Saturday'))