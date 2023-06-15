function minerTask(arr) {
  let mineObj = {}
  for (let i = 0; i < arr.length; i += 2) {
    let metal = arr[i]
    let quantity = +arr[i + 1]

    if (!mineObj.hasOwnProperty(metal))
      mineObj[metal] = quantity
    else
      mineObj[metal] += quantity
  }

  for (const [key, val] of Object.entries(mineObj)) console.log(key + ' -> ' + val)
}

// minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold'


//---------------------------------------------------(2)-----------------------------------------

function minerTask(arr) {
  let objMine = {}
  let [metal, quantity] = ['', 0]

  while (arr.length) {
    metal = arr.shift()
    quantity = +arr.shift()

    if (!objMine.hasOwnProperty(metal)) {
      objMine[metal] = quantity
    } else {
      objMine[metal] += quantity
    }
  }

  for (const [key, val] of Object.entries(objMine)) {
    console.log(key + ' -> ' + val);
  }
}

//minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])