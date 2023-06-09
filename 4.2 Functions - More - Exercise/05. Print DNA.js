function printDNA(input) {
  let dna = 'ATCGTTAGGG'.repeat(10).split('')
  let loop = 0
  
  while (input--) {
    loop == 4 ? loop = 0 : null

    switch (loop) {
      case 0: console.log(`**${dna.shift()}${dna.shift()}**`); break
      case 1: console.log(`*${dna.shift()}--${dna.shift()}*`); break
      case 2: console.log(`${dna.shift()}----${dna.shift()}`); break
      case 3: console.log(`*${dna.shift()}--${dna.shift()}*`); break
    }
    
    loop++
  }
}

// printDNA(29)
