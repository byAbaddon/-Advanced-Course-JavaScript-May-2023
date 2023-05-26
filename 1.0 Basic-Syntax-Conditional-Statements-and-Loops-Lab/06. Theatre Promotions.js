function theatrePromotions(day, age) {
  const table = {Weekday: ['12$', '18$', '12$'], Weekend: ['15$', '20$', '15$'], Holiday: ['5$', '12$', '10$']}
  if (age < 0 || age > 122) return 'Error!'
  return table[day][age <= 18 ? 0 : age <= 64 ? 1 : 2]
}

// console.log(theatrePromotions('Weekday', 42))
// console.log(theatrePromotions('Holiday', -12))