str => str[0].match(/\d{2}([\./-])[A-Z]\w{2}\1\d{4}/gm)
  .forEach(el => console.log(`Day: ${el.slice(0, 2)}, Month: ${el.slice(3, 6)}, Year: ${el.slice(-4)}`))

//----------------------------------------(2)---------------------------------------------

function matchDates(input) {
  let pattern = input[0].match(/\d{2}([\./-])[A-Z]\w{2}\1\d{4}/gm)
  for (const el of pattern) 
    console.log(`Day: ${el.slice(0, 2)}, Month: ${el.slice(3, 6)}, Year: ${el.slice(-4)}`)
}

    
// matchDates(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"])

//----------------------------------------(3)----------------------------
function matchDates(input) {
  let result = input[0].match(/\d{2}([\./-])[A-Z]\w{2}\1\d{4}/gm)

  for (const el of result) {
    let day = el.slice(0, 2)
    let month = el.slice(3, 6)
    let year = el.slice(-4)
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}

// matchDates(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"])