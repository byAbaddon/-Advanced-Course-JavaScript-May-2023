(a,b,s) => `The plate was rotated ${Math.ceil((a.length * b.length) * (s.length / 2) / 2.5)} times.`

//---------------------------(2)------------------------------------

function gramophone(albumName, bandName, songName) {
  let time = (albumName.length * bandName.length) * (songName.length / 2)
  let rotations = time / 2.5
  return `The plate was rotated ${rotations} times.`
}

//console.log(gramophone('Black Sabbath', 'Paranoid', 'War Pigs'))