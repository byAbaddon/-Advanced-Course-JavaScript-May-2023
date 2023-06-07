function grades(grade) {
  let result = ''
  if (grade <= 2.99) {
    return 'Fail (2)'
  } else if (grade > 2.99 && grade <= 3.49) {
    result = "Poor"
  } else if (grade >= 3.50 && grade <= 4.49) {
    result = "Good"
  } else if (grade >= 4.50 && grade <= 5.49) {
    result = "Very good"
  } else {
    result = "Excellent"
  }

  return `${result} (${grade.toFixed(2)})`
}

//console.log(grades(2.99))

