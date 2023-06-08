(a, b, c) => a + b - c 

//-----------------------------(2)--------------------

function addAndSubtract(n1, n2, n3) {

  function sum(a, b) {
    return a + b
  }

  function subtract(ab, c) {
    return ab - c
  }

  return subtract(sum(n1, n2), n3)
}

//console.log(addAndSubtract(1, 17, 30))