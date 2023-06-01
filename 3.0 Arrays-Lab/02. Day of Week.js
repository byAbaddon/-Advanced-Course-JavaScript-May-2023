d => d < 1 || d > 7 ? 'Invalid day!' :  new Date(null, null, d).toLocaleDateString('en-us', { weekday: 'long' })

//------------------------------------(2)-----------------------------------------

function dayOfWeek(day) {
  const dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return day > 0 && day <= 7 ? dayList[day - 1] : 'Invalid day!'
}

//console.log(dayOfWeek(0))