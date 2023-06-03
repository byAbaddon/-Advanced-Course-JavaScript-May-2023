arr => arr.reduce((a, x, i , array) => {
    i == 0 ? a.push(x) : null
    x <= array[i+1] ? a.push(array[i+1]) : null
   return a 
}, []).join(' ')

//--------------------------------(2)------------------------
function nonDecreasingSubsequence(arr) {
   let result = arr[0]
   for (let i = 0; i < arr.length; i++) {
     arr[i] <= arr[i+1] ? result += ' ' + arr[i+1] : null
   }
   console.log(result);
}

//  nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])


//--------------------------------(3)------------------------

function nonDecreasingSubsequence(arr) {
   let current = arr[0]

   let result = arr.filter(x => {
      if (x >= current) {
         current = x
      }
      return x >= current
   })

   console.log(result.join(' '));
}

// nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])
//nonDecreasingSubsequence([ 1, 2, 3, 4])
//nonDecreasingSubsequence([ 20, 3, 2, 15, 6, 1])