(a,b,c)=>(a^b^c)<0?'Negative':'Positive'

//-----------------------------(2)------------------------------------------
(...arg) => arg.reduce((a, x) => a * x) < 0 ? 'Negative' : 'Positive'


//-----------------------------(3)--------------------
(...numbers) => numbers.filter(x => x > 0).length & 1 ? 'Positive' : 'Negative'


//-----------------------------(4)---------------------------------------

function signCheck(n1, n2, n3) {
  return n1 * n2 * n3  < 0 ? 'Negative' : 'Positive'
}

//console.log(signCheck(5, 12, -15))
//console.log(signCheck(-1, 0, 1))


//-------------------------------(5)-------------------------------------------
function signCheck(...numbers) {
  return numbers.filter(x => x > 0).length & 1 ? 'Negative' : 'Positive' 
}

//-------------------------------(6)---------------------
function signCheck(numOne, numTwo, numThree) {
  let negativeCount = 0
  if (numOne < 0)   negativeCount++
  if (numTwo < 0)   negativeCount++ 
  if (numThree < 0) negativeCount++
  
  console.log( negativeCount & 1 ? 'Negative' : 'Positive') 
}








