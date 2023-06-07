function simpleCalculator(n1, n2, operator) {
  const math = {multiply : '*', divide : '/', add : '+', subtract : '-'}
  return eval(n1 + math[operator] + n2)
}

//console.log(simpleCalculator(40, 8, "divide"))