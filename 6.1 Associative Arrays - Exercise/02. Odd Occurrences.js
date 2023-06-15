str => {
  let arr = str.toLowerCase().split(' ')
  return [...new Set(arr.filter(x => arr.filter(c => c == x).length & 1))].join(' ')
}

//--------------------------------------(2)---------------------

function oddOccurrences(inputArr) {
  let arr = inputArr.toString().toLowerCase().split(' ')
  let arrCollection = []
  while (arr.length) {
    let extractWord = arr[0]
    let result = arr.filter(el => el == extractWord).length
    if (result & 1) {
      arrCollection.push(extractWord);
    }
    arr = arr.filter(el => el != extractWord)
  }
  console.log(arrCollection.join(' '))
}

// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')