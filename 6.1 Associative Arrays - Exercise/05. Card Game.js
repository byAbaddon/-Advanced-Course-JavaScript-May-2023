function cardGame(arr) {
  let objCards = { 2 : 2, 3 :3 ,4 : 4, 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9, 10 : 10, J : 11, Q : 12, K : 13, A : 14 }
  let multi = { S : 4, H : 3, D : 2, C : 1 }
  let players = {}
  
  while (arr.length) {
    let tokens = arr.shift().split(': ')
    let name = tokens[0]
    let cards = tokens[1].split(', ')
   
    if (!players.hasOwnProperty(name) ) {
      players[name] = new Set()
    }
      cards.forEach(el => players[name].add(el));      
    }
     
    for (const [key, value] of Object.entries(players)) {
     let sum = 0
      value.forEach(el => {
          sum += +objCards[el.slice(0, -1)]  *  +multi[el.slice(-1)]
      });

     console.log( key +': '+  sum);
    }   
}

// cardGame([
//   'Peter: 2C, 4H, 9H, AS, QS',
//   'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//   'Andrea: QH, QC, QS, QD',
//   'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//   'Andrea: QH, QC, JS, JD, JC',
//   'Peter: JD, JD, JD, JD, JD, JD'
//   ])

