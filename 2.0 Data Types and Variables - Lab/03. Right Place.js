(s1, c, s2) => s1.replace('_', c) == s2 ? 'Matched' : 'Not Matched'

//-------------------------------(2)-----------------------

function rightPlace(str1, char, str2) {
  let newStr1 = str1.replace('_', char)
  return newStr1 === str2 ? "Matched" : "Not Matched"
}

//console.log(rightPlace('Str_ng', 'I', 'Strong'))
//console.log(rightPlace('Str_ng', 'i', 'String'))