function treasureFinder(arr) {
    let key = arr.shift().split(' ').map(Number);
  
    for (let line of arr) {
      if (line == 'find') break;
      let index = 0
      line = line.split('')
  
      for (let i = 0; i < line.length; i++) {
        let code = line[i].charCodeAt() - key[index]
        line.splice(i, 1, String.fromCharCode(code))
        index++
        if (index > key.length - 1) index = 0
      }
  
      let metal = line.join('').match(/(?<=&)(.*)(?=&)/g)
      let location = line.join('').match(/(?<=<)(.*)(?=>)/g)
      console.log(`Found ${metal} at ${location}`)
    }
  }

 //treasureFinder(["1 2 1 3","ikegfp'jpne)bv=41P83X@","ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA","find"])

