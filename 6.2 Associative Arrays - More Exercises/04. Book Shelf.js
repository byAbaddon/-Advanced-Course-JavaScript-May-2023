function bookShelf(arr) {
  let obj = {}
  while (arr.length) {
    const token = arr.shift()
    if (/->/.test(token)) {
      const [id, genre] = token.split(' -> ')
      if (!obj[id]) obj[id] = {
        [genre]: new Array
      }
    } else {
      const [book, author, genre] = token.split(/:\s|,\s/)
      for (const k in obj) {
        obj[k][genre] ? obj[k][genre].push({ [book]: author  }) : null
      }
    }
  }


  Object.entries(obj).sort((a, b) => {
    const aLen = Object.keys(a[1][Object.keys(a[1])[0]]).length
    const bLen = Object.keys(b[1][Object.keys(b[1])[0]]).length
    return bLen - aLen || Object.keys(a[1])[0].localeCompare(Object.keys(b[1])[0])
  }).forEach((kv) => {
    for (const [k, v] of Object.entries(kv[1])) {
      console.log(kv[0], k + ':', v.length)
      for (let i = 0; i < v.length; i++) {
        for (const [movie, author] of Object.entries(v[i])) {
          console.log(`--> ${movie}: ${author}`)
        }
      }
    }
  })
}


// console.log(bookShelf([
//   '1 -> history',
//   '1 -> action',
//   'Death in Time: Criss Bell, mystery',
//   '2 -> mystery',
//   '3 -> sci-fi',
//   'Child of Silver: Bruce Rich, mystery',
//   'Hurting Secrets: Dustin Bolt, action',
//   'Future of Dawn: Aiden Rose, sci-fi',
//   'Lions and Rats: Gabe Roads, history',
//   '2 -> romance',
//   'Effect of the Void: Shay B, romance',
//   'Losing Dreams: Gail Starr, sci-fi',
//   'Name of Earth: Jo Bell, sci-fi',
//   'Pilots of Stone: Brook Jay, history'
// ]))